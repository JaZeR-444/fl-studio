# UI Map And Signal Flow: Control Surface

## UI Tour
Control Surface starts as a blank canvas. You populate it using the **plus (+)** icon or the right-click menu. [SRC: IL-MAN]

### 1. Control Types (The "Widgets")
- **Slider**: Vertical or horizontal linear control.
- **Knob**: Traditional rotary control (multiple styles available).
- **Button**: Momentary or toggle switches.
- **Label**: Text for organization and naming.
- **Bevel/Panel**: Visual dividers and background shapes.

### 2. Design Mode (The "Wrench")
- Click the **Wrench** icon to enter "Edit Mode."
- **Right-Click Controls**: Change colors, sizes, and styles.
- **Align Tool**: Snap controls to a grid for a professional look.

### 3. The "Surface" Properties
- **Background Color**: Change the overall theme (Dark/Light).
- **Z-Order**: Move components to the front or back (essential for layering labels on panels).

## Signal Flow
*Note: Control Surface does not process audio; it processes **Control Data**.*
1. **User Input**: You move a knob on the Control Surface (or automate it).
2. **Output Value**: The Control Surface generates a value between 0.0 and 1.0.
3. **Internal Mapping**: This value is sent to any "Linked" parameters (via "Link to Controller").
4. **Target Execution**: The target plugin or mixer fader moves in response to the Control Surface.
5. **Automation**: If you record the movement, the automation clip controls the Control Surface, which in turn controls the linked targets.

## Things Beginners Misunderstand
- **"How do I make it do something?"**: A Control Surface is useless until you **Link** it. You must right-click a parameter elsewhere in FL Studio, select "Link to Controller," and then move the knob on your Control Surface to marry them.
- **Patcher Logic**: Inside Patcher, Control Surface nodes appear as "Outputs" that you connect to "Inputs" of other plugins.
- **Non-Standard Controls**: You can change the "Minimum" and "Maximum" range of a link in the "Link to Controller" window, not in the Control Surface itself.
