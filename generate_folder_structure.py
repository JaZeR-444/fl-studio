import os
import fnmatch
from pathlib import Path
from typing import Iterable, Optional, Set, List


DEFAULT_IGNORE_DIRS: Set[str] = {
    ".git", "node_modules", ".next", "dist", "build", "__pycache__",
    ".venv", "venv", ".idea", ".vscode"
}

DEFAULT_IGNORE_FILE_PATTERNS: Set[str] = {
    "*.pyc", "*.pyo", "*.log", "*.tmp", "*.DS_Store"
}


def should_ignore(
    path: Path,
    ignore_dirs: Set[str],
    ignore_file_patterns: Set[str],
    ignore_path_patterns: Set[str],
    include_hidden: bool
) -> bool:
    name = path.name

    # Hidden filtering
    if not include_hidden and name.startswith("."):
        return True

    # Directory name ignore
    if path.is_dir() and name in ignore_dirs:
        return True

    # File pattern ignore
    if path.is_file():
        for pat in ignore_file_patterns:
            if fnmatch.fnmatch(name, pat):
                return True

    # Path pattern ignore (matches posix-style path strings)
    posix_str = path.as_posix()
    for pat in ignore_path_patterns:
        if fnmatch.fnmatch(posix_str, pat):
            return True

    return False


def iter_children(
    directory: Path,
    ignore_dirs: Set[str],
    ignore_file_patterns: Set[str],
    ignore_path_patterns: Set[str],
    include_hidden: bool,
    dirs_first: bool
) -> List[Path]:
    try:
        children = list(directory.iterdir())
    except PermissionError:
        return []

    # Filter ignores
    children = [
        p for p in children
        if not should_ignore(p, ignore_dirs, ignore_file_patterns, ignore_path_patterns, include_hidden)
    ]

    # Sort
    if dirs_first:
        children.sort(key=lambda p: (p.is_file(), p.name.lower()))
    else:
        children.sort(key=lambda p: p.name.lower())

    return children


def render_tree(
    startpath: str,
    ignore_dirs: Optional[Iterable[str]] = None,
    ignore_file_patterns: Optional[Iterable[str]] = None,
    ignore_path_patterns: Optional[Iterable[str]] = None,
    include_hidden: bool = False,
    dirs_first: bool = True,
    max_depth: Optional[int] = None,
    follow_symlinks: bool = False
) -> str:
    root = Path(startpath).resolve()

    ignore_dirs_set = set(ignore_dirs) if ignore_dirs is not None else set(DEFAULT_IGNORE_DIRS)
    ignore_files_set = set(ignore_file_patterns) if ignore_file_patterns is not None else set(DEFAULT_IGNORE_FILE_PATTERNS)
    ignore_path_set = set(ignore_path_patterns) if ignore_path_patterns is not None else set()

    lines: List[str] = [f"{root.name}/"]

    def _walk(dir_path: Path, prefix: str, depth: int) -> None:
        if max_depth is not None and depth >= max_depth:
            return

        children = iter_children(
            dir_path,
            ignore_dirs_set,
            ignore_files_set,
            ignore_path_set,
            include_hidden,
            dirs_first
        )

        total = len(children)
        for idx, child in enumerate(children):
            is_last = (idx == total - 1)
            connector = "└── " if is_last else "├── "
            display_name = f"{child.name}/" if child.is_dir() else child.name
            lines.append(prefix + connector + display_name)

            # Decide next prefix (keeps vertical bars where needed)
            next_prefix = prefix + ("    " if is_last else "│   ")

            # Recurse into directories
            if child.is_dir():
                # Prevent surprising recursion into symlink loops unless explicitly enabled
                if child.is_symlink() and not follow_symlinks:
                    continue
                _walk(child, next_prefix, depth + 1)

    _walk(root, prefix="", depth=0)
    return "\n".join(lines)


def write_tree(
    startpath: str,
    out_file: Optional[str] = None,
    **kwargs
) -> None:
    tree_str = render_tree(startpath, **kwargs)
    if out_file:
        Path(out_file).write_text(tree_str + "\n", encoding="utf-8")
    else:
        print(tree_str)


if __name__ == "__main__":
    current_directory = os.getcwd()
    print(f"Generating folder structure for: {current_directory}\n")

    # Example usage:
    # - include_hidden=True to include dotfiles/dirs
    # - max_depth=None for full schema
    # - out_file="folder_tree.txt" to save
    write_tree(
        current_directory,
        out_file=None,
        include_hidden=False,
        max_depth=None,
        dirs_first=True,
        follow_symlinks=False,
        # Optional: add path patterns to ignore whole subtrees by path
        ignore_path_patterns={
            # Example: "**/coverage/**"
        }
    )
