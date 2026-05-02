import os

# Configuration
EXTENSIONS_TO_INCLUDE = {'.md', '.json', '.html', '.css', '.js', '.txt'}
EXCLUDE_DIRS = {'.agent', '_screenshots', 'openspec', '.DONE', '.git'}
MASTER_FILENAME_SUFFIX = "_COMPOSITE.md"

def consolidate_folder(folder_path):
    folder_name = os.path.basename(folder_path)
    master_filename = f"{folder_name}{MASTER_FILENAME_SUFFIX}"
    master_file_path = os.path.join(folder_path, master_filename)
    
    print(f"Processing: {folder_name}...")
    
    with open(master_file_path, 'w', encoding='utf-8') as master_file:
        master_file.write(f"# {folder_name} - Consolidated Documentation\n")
        master_file.write(f"Generated on: {os.popen('date /t').read().strip()}\n\n")
        master_file.write("---\n\n")
        
        for root, dirs, files in os.walk(folder_path):
            # Skip the master file itself if it already exists
            if master_filename in files:
                files.remove(master_filename)
            
            for file in sorted(files):
                file_ext = os.path.splitext(file)[1].lower()
                if file_ext in EXTENSIONS_TO_INCLUDE:
                    full_path = os.path.join(root, file)
                    rel_path = os.path.relpath(full_path, folder_path)
                    
                    master_file.write(f"## FILE: {rel_path}\n\n")
                    
                    # Determine syntax highlighting language
                    lang = file_ext[1:] if file_ext != '.txt' else ''
                    if file_ext == '.md':
                        lang = 'markdown'
                    
                    master_file.write(f"```{lang}\n")
                    try:
                        with open(full_path, 'r', encoding='utf-8', errors='replace') as f:
                            content = f.read()
                            # Ensure content doesn't break out of the code block
                            content = content.replace('```', '`\\`\\`')
                            master_file.write(content)
                    except Exception as e:
                        master_file.write(f"ERROR READING FILE: {str(e)}")
                    
                    master_file.write(f"\n```\n\n---\n\n")

def main():
    root_dir = os.getcwd()
    subdirs = [d for d in os.listdir(root_dir) if os.path.isdir(os.path.join(root_dir, d))]
    
    for subdir in subdirs:
        if subdir in EXCLUDE_DIRS or subdir.startswith('.') or subdir.startswith('_'):
            continue
            
        folder_path = os.path.join(root_dir, subdir)
        consolidate_folder(folder_path)
    
    print("\nConsolidation complete.")

if __name__ == "__main__":
    main()
