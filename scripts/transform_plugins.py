import json
import os
import re

# Paths
INPUT_FILE = r'c:\Users\JaZeR\OneDrive\Desktop\Resource Websites\_ENTERPRISE_MONOREPO\apps\fl-studio\fl_studio_plugin_blueprint_skeleton_128.json'
OUTPUT_FILE = r'c:\Users\JaZeR\OneDrive\Desktop\Resource Websites\_ENTERPRISE_MONOREPO\apps\fl-studio\src\data\plugins\allPlugins.json'

def slugify(text):
    text = text.lower()
    return re.sub(r'[\s\W-]+', '-', text).strip('-')

def get_category_color(family):
    mapping = {
        'Additive': 'purple',
        'FM': 'orange',
        'Subtractive': 'blue',
        'Physical Modeling': 'pink',
        'Sampler': 'green',
        'Effects': 'cyan',
        'Dynamics': 'orange',
        'Delay': 'blue',
        'Reverb': 'purple',
        'Time & Pitch': 'green',
        'Dynamics/Mastering': 'purple',
        'Spatial/Creative FX': 'cyan',
        'Utilities/Modular': 'blue',
        'Analog Emulation': 'red',
        'FM/Hybrid': 'orange'
    }
    # Simple partial matching
    for key, color in mapping.items():
        if key.lower() in family.lower():
            return color
    return 'purple' # Default

def transform_plugin(raw):
    identity = raw.get("Plugin Identity", {})
    core = raw.get("Core Purpose & Use Case", {})
    sound = raw.get("Sound Character & Behavior", {})
    controls = raw.get("Key Controls & Parameters", {})
    perf = raw.get("Performance & CPU Characteristics", {})
    search = raw.get("Search & Index Metadata (App-Facing)", {})
    
    name = identity.get("Plugin Name", "Unknown")
    plugin_type = identity.get("Plugin Type", "Unknown")
    category = identity.get("Category", "Unknown")
    
    # Try to clean up family from category or type
    family = category
    
    slug = slugify(name)
    
    tags = []
    # Add primary tags
    for tag in search.get("Primary Tags", []):
         tags.append({"label": tag.title(), "color": "blue"}) # Default color
         
    # Generate mock pricing badge based on Availability if possible, else random
    availability = identity.get("Availability", "")
    pricing = "all-plugins"
    if "producer" in availability.lower():
        pricing = "producer"
    elif "signature" in availability.lower():
        pricing = "signature"

    return {
        "id": slug,
        "name": name,
        "description": core.get("Primary Function", ""),
        "category": category,
        "family": family,
        "pluginType": plugin_type,
        "icon": "🎹", # Default icon
        "rating": 4.5, # Default rating
        "tags": tags,
        "pricingBadge": pricing,
        "views": 1000, # Mock
        "saves": 100, # Mock
        "date": "Dec 1", # Mock
        
        # Extended fields
        "nativeStatus": identity.get("Native Status", ""),
        "bestUsedFor": core.get("Best Used For", []),
        "soundCharacter": sound.get("Overall Sound Character", ""),
        "cpuUsage": perf.get("CPU Usage", ""),
        "proTips": raw.get("Common Use Patterns", {}).get("Pro Tips", [])
    }

def main():
    print(f"Reading from {INPUT_FILE}")
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    transformed_plugins = []
    
    print(f"Transforming {len(data)} plugins...")
    for entry in data:
        transformed_plugins.append(transform_plugin(entry))
        
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    
    print(f"Writing to {OUTPUT_FILE}")
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(transformed_plugins, f, indent=2)
        
    print("Done!")

if __name__ == "__main__":
    main()
