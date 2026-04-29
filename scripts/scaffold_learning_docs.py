import os
import shutil

# Base directory for plugins
PLUGINS_DIR = os.path.join('src', 'data', 'plugins')

# Templates
CONCEPTS_TEMPLATE = """# Concepts & Best Uses: {name}

## What It Is
{name} is a native FL Studio plugin.

## Best Uses
- **Use Case 1:** [TODO]
- **Use Case 2:** [TODO]

## Core Concepts
- **Concept A:** [TODO]
- **Concept B:** [TODO]
"""

SIGNAL_FLOW_TEMPLATE = """# Signal Flow: {name}

## Audio Path
`Input` -> **[Stage 1]** -> **[Stage 2]** -> `Output`

## Modulation Architecture
- **Source:** [TODO]
- **Destination:** [TODO]
"""

TOP_CONTROLS_TEMPLATE = """# Top Controls: {name}

## Primary Controls
| Control | Function | Use Case |
| :--- | :--- | :--- |
| **Knob A** | Controls X | [TODO] |
| **Slider B** | Controls Y | [TODO] |

## Hidden Gems
- **Feature:** [TODO]
"""

QUICK_START_TEMPLATE = """# Quick Start Checklist: {name}

## Getting Started
1.  **Load:** Drag {name} to the Channel Rack/Mixer.
2.  **Preset:** Browse presets using the arrows in the top right.
3.  **Tweak:** Adjust [Main Control].

## Essential Settings
- [ ] Check setting A
- [ ] Verify setting B
"""

# File mapping
# Filename -> Subdirectory
FILES_TO_CREATE = {
    'concepts-and-best-uses.md': 'Concepts',
    'signal-flow.md': 'Concepts',
    'top-controls.md': 'Quick-Reference',
    'quick-start-checklist.md': 'Quick-Reference'
}

def get_plugin_name(folder_name):
    # Convert '3x-osc' to '3x Osc'
    return folder_name.replace('-', ' ').title()

def scaffold_docs():
    if not os.path.exists(PLUGINS_DIR):
        print(f"Error: Directory {PLUGINS_DIR} not found.")
        return

    # Iterate over all items in the plugins directory
    for item in os.listdir(PLUGINS_DIR):
        plugin_path = os.path.join(PLUGINS_DIR, item)
        
        # Skip 'enriched' folder and files
        if item == 'enriched' or not os.path.isdir(plugin_path):
            continue

        plugin_name = get_plugin_name(item)
        learning_dir = os.path.join(plugin_path, 'learning')

        print(f"Processing {plugin_name}...")

        # Create files
        for filename, subdir in FILES_TO_CREATE.items():
            target_dir = os.path.join(learning_dir, subdir)
            target_file = os.path.join(target_dir, filename)

            # Ensure directory exists
            os.makedirs(target_dir, exist_ok=True)

            # Select template
            content = ""
            if filename == 'concepts-and-best-uses.md':
                content = CONCEPTS_TEMPLATE.format(name=plugin_name)
            elif filename == 'signal-flow.md':
                content = SIGNAL_FLOW_TEMPLATE.format(name=plugin_name)
            elif filename == 'top-controls.md':
                content = TOP_CONTROLS_TEMPLATE.format(name=plugin_name)
            elif filename == 'quick-start-checklist.md':
                content = QUICK_START_TEMPLATE.format(name=plugin_name)

            # Write file if it doesn't exist (optional: overwrite?)
            # Prompt implied "Create ... for all", usually implies scaffolding missing ones.
            # I'll write it.
            try:
                with open(target_file, 'w', encoding='utf-8') as f:
                    f.write(content)
            except Exception as e:
                print(f"Failed to write {target_file}: {e}")

if __name__ == '__main__':
    scaffold_docs()
