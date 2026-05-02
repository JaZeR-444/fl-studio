# Fruity Formula Controller - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Formula Controller - Math-Powered Automation

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝   

███████╗ ██████╗ ██████╗ ███╗   ███╗██╗   ██╗██╗      █████╗ 
██╔════╝██╔═══██╗██╔══██╗████╗ ████║██║   ██║██║     ██╔══██╗
█████╗  ██║   ██║██████╔╝██╔████╔██║██║   ██║██║     ███████║
██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║██║   ██║██║     ██╔══██║
██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║╚██████╔╝███████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝

 ██████╗  ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     ██╗     ███████╗██████╗ 
██╔════╝ ██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     ██║     ██╔════╝██╔══██╗
██║      ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     ██║     █████╗  ██████╔╝
██║      ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     ██║     ██╔══╝  ██╔══██╗
╚██████╗ ╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║
 ╚═════╝  ╚═════╝  ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Internal Controller / Logic
**Category:** Controller / Automation
**Official Manual:** [Image-Line Fruity Formula Controller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Formula%20Controller.htm)

---

## 🎯 What is Fruity Formula Controller?

Fruity Formula Controller is the "brain" of FL Studio automation. It allows you to generate automation data using mathematical formulas. Instead of drawing curves by hand, you write expressions (like `Sin(SongTime*Pi)`) to create LFOs, complex envelopes, randomization, or logic gates. It has 3 inputs (Knobs A, B, C) that can be processed and output to any parameter in FL Studio.

**Key Capabilities:**
- **Math Engine:** Supports Sin, Cos, Tan, Log, Abs, Round, Random, and more.
- **Dynamic Inputs:** Knobs A, B, and C can be linked to other controllers.
- **Time Functions:** `SongTime`, `Time` (System time), `Tempo`.
- **Complex Logic:** If/Else statements (`IfG`, `IfL`) for conditional automation.
- **Custom LFOs:** Create shapes impossible with standard LFO tools.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **syntax-basics.md** (Required syntax for formulas)
3. Create **parameter-cheat-sheet.md**
4. Paste `Sin(SongTime*Pi)` into the formula box and hit compile.

### For Power Users:
1. Study **logic-gates-automation.md**
2. Review **custom-lfo-shapes.md**
3. Learn **chaotic-modulation.md** (Using Random functions)

### For Patcher Users:
1. Study **patcher-logic-circuits.md**
2. Review **mapping-conversions.md** (Linear to Logarithmic scaling)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Inputs a, b, c:** Variables 0.0 to 1.0.
  - **Formula Bar:** Where code goes.
  - **Compile:** Must click to activate.
  - **Meter:** Shows output 0.0 to 1.0.

- [ ] **syntax-guide.md**
  - **Operators:** +, -, *, /, ^ (Power).
  - **Functions:** Sin(), Cos(), Abs(), Min(), Max().
  - **Constants:** Pi, E.
  - **Variables:** a, b, c, SongTime, Time.

#### 02-Data/presets/
- [ ] **useful-formulas.json**
  - Basic Sine LFO: `Sin(SongTime*Pi)`
  - Bounce: `Abs(Sin(SongTime))`
  - Random Step: `Rand(Round(SongTime))`
  - Inverter: `1-a`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **custom-lfo-shapes.md**
  - Creating a Sine wave.
  - Changing speed with Knob A.
  - Changing depth with Knob B.
  - Formula: `a * Sin(SongTime * b)`

- [ ] **sidechain-emulator.md**
  - Using formulas to mimic a ducking curve synced to beats.
  - `Min(1, Abs(Sin(SongTime*Pi)))` (Simplistic example).

- [ ] **chaos-generator.md**
  - Using `SeededRand` or varying inputs to create non-repeating modulation.

#### 03-Workflows/by-context/
- [ ] **vocal-chopping-logic.md**
- [ ] **performance-mode-macro.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **math-function-library.md**
  - Comprehensive list of all supported functions with visual descriptions of their output curves.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Hello World

**Tasks:**
1. Link Knob A to a Filter Cutoff
2. In Formula Controller, write `1-a`
3. Turn Knob A up -> Filter goes down (Inversion)
4. Create syntax-guide.md

**Key Questions to Answer:**
- What happens if the formula outputs > 1.0? (Clips to 1.0 or wraps? Usually clips).
- How do I sync to BPM? (Use `SongTime`).

### Phase 2: Advanced Math (Week 2)
**Goal:** Generative Music

**Tasks:**
1. Create a "Sample & Hold" random LFO
2. Create a conditional: "If Knob A > 0.5, Output = 1, Else 0"
3. Create logic-gates-automation.md

**Key Questions to Answer:**
- How complex can the formula be? (Character limit?)
- Can I nest functions? (Yes, `Sin(Cos(a))`).

---

## 📊 Plugin Specifications to Document

### Syntax Engine
- Supported Operators
- Time Resolution (PPQ dependent?)
- Variables List

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why isn't it working? (Did you press Compile? Is FL playing? SongTime needs play).
2. How do I slow down the LFO? (Divide SongTime: `Sin(SongTime/4)`).

### Advanced Usage
1. How to create a "Euclidean Rhythm" generator? (Modulus operator usage).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Formula:** Exact code block
- **Explanation:** What the math does
- **Knob Assignments:** What A, B, and C control

---

## 🔗 Cross-Reference with Other Plugins

Fruity Formula Controller is often used with:
- **Fruity Peak Controller** (Signal input)
- **Fruity X-Y Controller** (Vector control)
- **Patcher** (Modular environment)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Formula Controller/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── syntax-guide.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── formula-params.json
│   └── presets/
│       └── useful-formulas.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── custom-lfo-shapes.md
│   │   ├── sidechain-emulator.md
│   │   └── chaos-generator.md
│
└── 04-Reference/
    └── math-function-library.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Formula Controller Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Formula%20Controller.htm)
- [Fruity Formula Controller Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Formula_Controller_tutorials.htm)
- [Fruity Formula Controller Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+formula+controller+tutorial)

### Community Resources
- [Fruity Formula Controller Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+formula+controller&restrict_sr=1)
- [Fruity Formula Controller User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Formula Controller Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for analyzing automation curves
- **Fruity Spectroman** for visualizing automated parameter changes
- **Fruity Peak Controller** for signal-based automation
- **Patcher** for complex mathematical routing

### Recommended Learning Materials
- "Mathematical Functions in Audio" - Understanding trigonometric and logarithmic functions
- "Automation Programming" - Advanced automation techniques
- "Formula Controller Cookbook" - Practical examples and recipes

### Advanced Techniques
- **Conditional Logic:** Using If/Then statements for complex automation
- **Time-Based Modulation:** Syncing formulas to tempo and song position
- **Randomization:** Creating evolving and chaotic modulation patterns

---

## 📚 In-Depth Technical Analysis

### Mathematical Engine Architecture
Fruity Formula Controller implements a sophisticated mathematical processing engine:
- **Real-time Evaluation:** Executes mathematical expressions in real-time
- **Variable Inputs:** Supports A, B, C input variables (0.0-1.0 range)
- **Time Functions:** SongTime, Time, and Tempo variables for timing-based expressions
- **Function Library:** Comprehensive library of mathematical functions
- **Compilation System:** Validates and compiles expressions before execution

### Supported Mathematical Functions
The plugin includes a comprehensive function library:

**Trigonometric Functions:**
- `Sin(x)`: Sine wave generation
  - Output range: -1.0 to +1.0
  - Use for: LFO generation, wave shaping
  - Essential for: Periodic modulation
  - Perfect for: Sine wave LFOs
  - Pro tip: Use with SongTime for tempo-synced effects

- `Cos(x)`: Cosine wave generation
  - Output range: -1.0 to +1.0
  - Use for: LFO generation with phase offset
  - Essential for: Phase-shifted modulation
  - Perfect for: Cosine wave LFOs
  - Pro tip: Cos is 90° phase-shifted from Sin

- `Tan(x)`: Tangent function
  - Output range: -∞ to +∞ (clipped to -1.0 to +1.0)
  - Use for: Sharp, discontinuous modulation
  - Essential for: Distorted wave shapes
  - Perfect for: Experimental modulation
  - Pro tip: Use with caution due to discontinuities

**Exponential and Logarithmic Functions:**
- `Log(x)`: Natural logarithm
  - Input range: x > 0
  - Output range: -∞ to +∞ (clipped)
  - Use for: Logarithmic scaling and compression
  - Essential for: Non-linear parameter mapping
  - Perfect for: dB scaling applications
  - Pro tip: Use for compressive scaling

- `Exp(x)`: Exponential function (e^x)
  - Output range: 0 to +∞ (clipped)
  - Use for: Exponential growth and expansion
  - Essential for: Expansive scaling
  - Perfect for: Inverse logarithmic mapping
  - Pro tip: Use for expansive parameter mapping

- `Pow(x, y)`: Power function (x^y)
  - Use for: Polynomial scaling and shaping
  - Essential for: Custom curve generation
  - Perfect for: Non-linear transformations
  - Pro tip: Use for creating custom response curves

**Absolute and Rounding Functions:**
- `Abs(x)`: Absolute value
  - Output range: 0.0 to +∞ (clipped)
  - Use for: Converting negative values to positive
  - Essential for: Creating full-wave rectification
  - Perfect for: Making bipolar signals unipolar
  - Pro tip: Use with Sin for triangle wave approximation

- `Round(x)`: Rounds to nearest integer
  - Use for: Quantizing continuous values
  - Essential for: Creating stepped automation
  - Perfect for: Sample and hold effects
  - Pro tip: Use with time functions for quantized effects

- `Floor(x)`: Rounds down to nearest integer
  - Use for: Creating stepped, quantized effects
  - Essential for: Quantized parameter changes
  - Perfect for: Staircase automation
  - Pro tip: Use for creating stepped LFOs

- `Ceil(x)`: Rounds up to nearest integer
  - Use for: Creating stepped effects with ceiling
  - Essential for: Quantized parameter changes
  - Perfect for: Staircase automation
  - Pro tip: Use for creating stepped LFOs

**Random Functions:**
- `Rand()`: Random value between 0 and 1
  - Use for: Creating random modulation
  - Essential for: Chaotic and evolving effects
  - Perfect for: Random LFOs
  - Pro tip: Use for unpredictable automation

- `SeededRand(seed)`: Seeded random value
  - Use for: Reproducible random patterns
  - Essential for: Consistent random effects
  - Perfect for: Repeatable random automation
  - Pro tip: Use SongTime as seed for evolving patterns

**Conditional Functions:**
- `IfG(x, y, a, b)`: If Greater - If x>y then a else b
  - Use for: Conditional automation
  - Essential for: Logic gates
  - Perfect for: Threshold-based switching
  - Pro tip: Use for creating hard gates and switches

- `IfL(x, y, a, b)`: If Less - If x<y then a else b
  - Use for: Inverse conditional automation
  - Essential for: Inverse logic gates
  - Perfect for: Inverse threshold switching
  - Pro tip: Use for inverse gates and switches

- `IfE(x, y, a, b)`: If Equal - If x==y then a else b
  - Use for: Equality-based switching
  - Essential for: Precise conditional automation
  - Perfect for: Exact threshold switching
  - Pro tip: Use with caution due to floating-point precision

### Time Variables
The plugin provides several time-based variables:
- `SongTime`: Time in the song (in beats, increments during playback)
  - Use for: Tempo-synced modulation
  - Essential for: Rhythmic automation
  - Perfect for: Beat-synchronized effects
  - Pro tip: Multiply by constants for different speeds

- `Time`: System time (real-time clock)
  - Use for: Real-time modulation
  - Essential for: Non-synced effects
  - Perfect for: Independent timing
  - Pro tip: Use for independent LFOs

- `Tempo`: Current project tempo
  - Use for: Tempo-responsive expressions
  - Essential for: Adaptive timing
  - Perfect for: Tempo-following effects
  - Pro tip: Use for tempo-adaptive expressions

### Constants
The plugin includes mathematical constants:
- `Pi`: π (approximately 3.14159)
  - Use for: Trigonometric calculations
  - Essential for: Wave generation
  - Perfect for: Sine/cosine wave creation
  - Pro tip: Use for full-period wave generation

- `E`: e (approximately 2.71828)
  - Use for: Exponential calculations
  - Essential for: Natural logarithm/exponential functions
  - Perfect for: Natural growth/decay curves
  - Pro tip: Use for natural response curves

## 🎛️ Parameter Deep Dive

### Input Controls (A, B, C)
- **Function:** Variable inputs for mathematical expressions
  - Range: 0.0 to 1.0 (normalized)
  - Effect: Provides controllable input values to formulas
  - Use for: Parameter modulation and control
  - Pro tip: Link to other controllers for dynamic input
- **Behavior:**
  - A: First input variable
  - B: Second input variable
  - C: Third input variable
  - Pro tip: Use for creating macro controls
- **Applications:**
  - Speed control: Use A to control LFO speed
  - Depth control: Use B to control modulation depth
  - Intensity control: Use C to control effect intensity
  - Macro control: Combine all for complex control
  - Pro tip: Link to external controllers for real-time input

### Formula Editor
- **Function:** Text input for mathematical expressions
  - Range: Variable character limit
  - Effect: Defines the mathematical transformation
  - Use for: Creating custom automation curves
  - Pro tip: Use syntax highlighting for complex formulas
- **Behavior:**
  - Requires compilation to activate
  - Validates syntax before execution
  - Real-time evaluation during playback
  - Pro tip: Test with simple formulas first
- **Applications:**
  - LFO generation: Create custom LFO shapes
  - Envelope shaping: Create custom envelope curves
  - Logic processing: Create conditional automation
  - Mathematical transformations: Create scaling functions
  - Pro tip: Use for complex automation patterns

### Compilation System
- **Function:** Validates and compiles mathematical expressions
  - Range: Binary (compile/success or error)
  - Effect: Activates the formula for processing
  - Use for: Applying mathematical expressions
  - Pro tip: Always compile after formula changes
- **Behavior:**
  - Validates syntax before compilation
  - Reports errors if syntax is incorrect
  - Activates formula after successful compilation
  - Pro tip: Check syntax carefully before compiling
- **Applications:**
  - Formula activation: Compile to apply changes
  - Error checking: Verify formula syntax
  - Performance: Compiled formulas execute efficiently
  - Safety: Prevents execution of invalid formulas
  - Pro tip: Verify compilation success before use

### Output Meter
- **Function:** Visual feedback of current output value
  - Range: 0.0 to 1.0 (normalized)
  - Effect: Shows real-time formula output
  - Use for: Monitoring formula behavior
  - Pro tip: Essential for understanding formula results
- **Behavior:**
  - Updates in real-time during playback
  - Shows current output value
  - Pro tip: Use for formula debugging
- **Applications:**
  - Formula debugging: Monitor output behavior
  - Parameter matching: Verify output range
  - Real-time monitoring: Track formula changes
  - Performance: Monitor during live use
  - Pro tip: Use for confirming formula operation

## 🎼 Sound Design Applications

### LFO Generation
Using Formula Controller for custom LFO shapes:

**Sine Wave LFO:**
- `Sin(SongTime * 2 * Pi)` - Basic sine wave at 1 Hz
  - Creates smooth, periodic modulation
  - Essential for vibrato and tremolo
  - Perfect for natural-sounding modulation
  - Pro tip: Multiply by A variable to control speed

- `Sin(SongTime * Pi)` - Sine wave at 0.5 Hz
  - Creates slower, more pronounced modulation
  - Essential for evolving effects
  - Perfect for ambient modulation
  - Pro tip: Use for subtle, evolving changes

- `Sin(SongTime * 4 * Pi)` - Sine wave at 2 Hz
  - Creates faster, more rhythmic modulation
  - Essential for tremolo and vibrato
  - Perfect for rhythmic effects
  - Pro tip: Sync to musical timing for precision

**Triangle Wave LFO:**
- `Abs(Sin(SongTime * 2 * Pi)) * 2 - 1` - Triangle approximation
  - Creates linear rise and fall modulation
  - Essential for mechanical-sounding effects
  - Perfect for rhythmic modulation
  - Pro tip: Use for consistent rate changes

**Square Wave LFO:**
- `IfG(Sin(SongTime * 2 * Pi), 0, 1, -1)` - Square wave from sine
  - Creates on/off switching modulation
  - Essential for rhythmic gating
  - Perfect for chopper effects
  - Pro tip: Use for rhythmic on/off effects

### Conditional Processing
Using Formula Controller for logic-based automation:

**Threshold Gates:**
- `IfG(a, 0.5, 1, 0)` - Gate at 50% threshold
  - Creates hard switching at threshold
  - Essential for logic gates
  - Perfect for on/off automation
  - Pro tip: Use for precise threshold switching

- `IfG(a, b, 1, 0)` - Variable threshold gate
  - Creates threshold based on input B
  - Essential for adaptive gating
  - Perfect for dynamic threshold control
  - Pro tip: Use B as threshold control

**Logic Operations:**
- `Min(a, b)` - Minimum of two inputs
  - Creates AND-like logic operation
  - Essential for constraint applications
  - Perfect for limiting operations
  - Pro tip: Use for minimum value selection

- `Max(a, b)` - Maximum of two inputs
  - Creates OR-like logic operation
  - Essential for selection applications
  - Perfect for maximum value selection
  - Pro tip: Use for maximum value selection

### Creative Applications
Using Formula Controller for experimental effects:

**Chaotic Modulation:**
- `Sin(Pow(SongTime, 1.618))` - Golden ratio modulation
  - Creates evolving, non-repeating patterns
  - Essential for evolving textures
  - Perfect for ambient and experimental music
  - Pro tip: Use for evolving, non-rhythmic patterns

- `Sin(SongTime * Rand())` - Random speed modulation
  - Creates constantly changing speed
  - Essential for unpredictable effects
  - Perfect for evolving textures
  - Pro tip: Use for evolving, chaotic effects

**Sample and Hold:**
- `SeededRand(Round(SongTime * 4))` - Quantized random
  - Creates stepped random values
  - Essential for sample and hold effects
  - Perfect for retro and experimental sounds
  - Pro tip: Use for vintage-style random modulation

## 🧪 Experimental Techniques

### Advanced Mathematical Applications
Creative uses of Formula Controller's capabilities:

**Complex Wave Generation:**
- **Additive Synthesis:** `Sin(SongTime*Pi) + 0.5*Sin(SongTime*2*Pi) + 0.25*Sin(SongTime*4*Pi)`
  - Creates complex harmonic structures
  - Essential for additive synthesis
  - Perfect for complex wave shapes
  - Pro tip: Use for creating complex harmonic content

**Modulation Indexing:**
- **FM-Style:** `Sin(SongTime*Pi + a*Sin(SongTime*b*Pi))`
  - Creates frequency modulation effects
  - Essential for FM-style synthesis
  - Perfect for complex harmonic generation
  - Pro tip: Use A and B for modulation depth and frequency

**Non-Linear Scaling:**
- **Logarithmic:** `Log(a*9 + 1) / Log(10)`
  - Creates logarithmic parameter mapping
  - Essential for dB-style scaling
  - Perfect for volume and frequency mapping
  - Pro tip: Use for natural-sounding parameter scaling

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Nested Functions:**
- **Complex Nesting:** `Sin(Cos(Tan(a * SongTime)))`
  - Creates complex, evolving modulation
  - Essential for experimental modulation
  - Perfect for chaotic effects
  - Pro tip: Use with caution for stability

**Time-Based Complexity:**
- **Evolution:** `Sin(SongTime * (1 + a*0.5)) * Cos(SongTime * b)`
  - Creates evolving, complex patterns
  - Essential for evolving textures
  - Perfect for ambient automation
  - Pro tip: Use for evolving, non-static effects

**Conditional Complexity:**
- **Logic Trees:** `IfG(a, 0.5, Sin(SongTime), IfG(b, 0.3, Cos(SongTime), a))`
  - Creates complex conditional behavior
  - Essential for sophisticated logic
  - Perfect for adaptive automation
  - Pro tip: Use for complex decision trees

## 🎚️ Workflow Optimization

### Formula Development Workflows
Efficient approaches to creating mathematical expressions:

**Basic Formula Creation:**
- **Start Simple:** Begin with basic functions like `Sin(SongTime)`
  - Test basic functionality first
  - Verify compilation and execution
  - Essential for understanding basics
  - Pro tip: Master simple formulas before complex ones

- **Incremental Complexity:** Add complexity gradually
  - Build formulas step by step
  - Test at each stage
  - Essential for stable development
  - Pro tip: Verify each addition before proceeding

**Advanced Formula Development:**
- **Template Creation:** Create templates for common formulas
  - Sine LFO template: `a * Sin(SongTime * b)`
  - Square LFO template: `IfG(Sin(SongTime * a), 0, b, -b)`
  - Conditional template: `IfG(input, threshold, high, low)`
  - Essential for efficient development
  - Pro tip: Save templates for reuse

**Testing Workflows:**
- **A/B Comparison:** Compare processed vs unprocessed
  - Use mixer routing for comparison
  - Essential for quality assessment
  - Pro tip: Always compare with original

- **Parameter Verification:** Verify output ranges
  - Check output meter behavior
  - Ensure parameter compatibility
  - Essential for proper operation
  - Pro tip: Verify before linking to parameters

### Integration Workflows
Working with other plugins and tools:

**Controller Integration:**
- **Linking:** Connect to any parameter in FL Studio
  - Right-click target parameter -> Link to controller
  - Select Formula Controller as source
  - Essential for parameter control
  - Pro tip: Use for any automatable parameter

**Automation Integration:**
- **MIDI Control:** Map to external controllers
  - Use A, B, C inputs for external control
  - Essential for live performance
  - Pro tip: Map to macro controllers

**Analysis Integration:**
- **Visual Feedback:** Use with spectrum analyzers
  - Monitor parameter changes in real-time
  - Essential for informed control
  - Pro tip: Use for visual confirmation

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Filter Automation:** Creating rhythmic filter sweeps with formulas
- **Wobble Effects:** Generating complex wobble patterns
- **Sidechain Simulation:** Creating ducking effects with conditional formulas
- **Energy Management:** Using formulas for track energy
- **Build-up Effects:** Creating tension with mathematical automation

### Hip-Hop and R&B
- **Vocal Processing:** Adding mathematical modulation to vocals
- **Sample Enhancement:** Using formulas for sample manipulation
- **Mix Enhancement:** Using mathematical automation for mix clarity
- **Creative Effects:** Adding unique character to elements
- **Rhythmic Effects:** Creating rhythmic mathematical patterns

### Rock and Metal
- **Guitar Effects:** Adding mathematical modulation to guitar effects
- **Bass Enhancement:** Using formulas for bass processing
- **Drum Processing:** Creating rhythmic automation with formulas
- **Mix Enhancement:** Using mathematical automation for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Automation:** Creating evolving mathematical textures
- **Spatial Effects:** Using formulas for spatial parameter control
- **Experimental Automation:** Pushing boundaries of mathematical control
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Formula Controller works well with various effects:
- **Reverb:** Automating reverb parameters with mathematical expressions
- **Delay:** Creating rhythmic patterns with mathematical automation
- **Chorus:** Adding mathematical modulation to chorus parameters
- **Filtering:** Automating filter parameters with mathematical expressions
- **Compression:** Controlling dynamics with mathematical automation

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Using mathematical automation for parallel compression
- **Upward Compression:** Using with upward compression
- **Limiting:** Using mathematical automation for limiting parameters
- **Gate/Expander:** Using mathematical automation for gate parameters
- **De-esser:** Using mathematical automation for de-essing parameters

### Equalization
Working with other EQ plugins:
- **Parametric EQ:** Automating parametric EQ parameters with formulas
- **Graphic EQ:** Using mathematical automation for graphic EQ
- **Multi-Band:** Combining with multi-band processing
- **Dynamic EQ:** Using mathematical automation for dynamic EQ
- **Spectral Processing:** Using mathematical automation for spectral tools

## 📖 Historical Context

### Development Background
Fruity Formula Controller was developed as a mathematical automation tool:
- Created to provide flexible mathematical expression evaluation
- Designed for complex automation without manual drawing
- Developed with sound design and automation in mind
- Intended to complement traditional automation methods

### Evolution Through FL Studio Versions
- Initially introduced with basic mathematical functions
- Enhanced with additional functions and controls
- Improved with better compilation and validation
- Expanded with more sophisticated mathematical capabilities

### Impact on Music Production
Fruity Formula Controller has influenced music production by:
- Providing accessible mathematical automation
- Enabling complex automation patterns
- Facilitating creative mathematical expression
- Supporting various musical genres with flexible automation

## 🧠 Advanced Processing Techniques

### Mathematical Expression Mastery
Advanced techniques for mathematical expressions:
- **Function Composition:** Combining multiple functions for complex results
- **Conditional Logic:** Using If/Then statements for complex automation
- **Time-Based Expressions:** Creating tempo-synced mathematical effects
- **Parameter Scaling:** Using formulas for non-linear parameter mapping
- **Logic Gates:** Creating sophisticated conditional automation

### Formula Optimization
Advanced formula optimization techniques:
- **Performance Optimization:** Creating efficient mathematical expressions
- **Stability Management:** Ensuring stable formula evaluation
- **Range Control:** Managing output ranges for parameter compatibility
- **Smooth Transitions:** Creating artifact-free parameter changes
- **Precision Control:** Achieving precise mathematical results

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique mathematical textures
- **Atmospheric Processing:** Building ambient mathematical effects
- **Rhythmic Effects:** Creating rhythmic mathematical patterns
- **Spatial Manipulation:** Creating immersive mathematical environments
- **Experimental Processing:** Pushing boundaries of mathematical processing

## 📊 Performance Considerations

### CPU Usage
Managing Formula Controller's impact on system performance:
- **Expression Complexity:** More complex formulas may increase CPU usage
- **Real-Time Evaluation:** Optimized for live performance
- **Instance Count:** Multiple instances have minimal impact
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Artifact Prevention:** Ensuring smooth parameter transitions
- **Precision Calculation:** Maintaining mathematical accuracy
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Formula Controller within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Formula Problems
- **Compilation Errors:** Check syntax and function spelling
- **Invalid Output:** Verify output range and parameter compatibility
- **Phase Issues:** Check stereo field and parameter behavior
- **Excessive Values:** Use Min/Max functions to constrain output
- **Unpredictable Behavior:** Verify time variable usage

### Technical Issues
- **High CPU Usage:** Simplify complex formulas
- **Latency Issues:** Check for other plugins in the chain
- **Clipping:** Verify output ranges and parameter limits
- **Artifacts:** Check for discontinuous functions
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust formula for better musical response
- **Lack of Character:** Use more complex mathematical expressions
- **Poor Integration:** Use appropriate output ranges for parameters
- **Overpowering:** Reduce formula intensity or use EQ to balance
- **Lack of Control:** Use conditional functions for dynamic changes

## 🎚️ Advanced Configuration

### Custom Formula Libraries
Creating and managing custom mathematical configurations:
- **LFO Formulas:** Optimized for modulation applications
- **Conditional Formulas:** Configured for logic applications
- **Creative Formulas:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Formula Controller instances effectively:
- **Parameter-Specific:** Different instances for different parameters
- **Formula-Specific:** Different instances for different expressions
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Combining different mathematical expressions

### Integration Configurations
Optimizing for different integration scenarios:
- **Controller Integration:** Working with external controllers
- **DAW Integration:** Optimizing for FL Studio workflow
- **Hardware Integration:** External hardware integration
- **Automation Integration:** Optimizing for complex automation

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Formula Controller techniques
- **Reddit Groups:** Sharing mathematical automation techniques and formulas
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced mathematical techniques
- **Written Guides:** In-depth articles on mathematical expressions in audio
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Formula Libraries:** Websites hosting Formula Controller configurations
- **Technique Sharing:** Platforms for sharing mathematical methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Write a formula that outputs a Sine wave at exactly 1/4 note speed
- [ ] Create an "Inverter" utility using mathematical expressions
- [ ] Use `IfG` to create a hard-clipper logic gate
- [ ] Modulate a parameter based on the Song Position
- [ ] Create complex mathematical expressions with nested functions
- [ ] Build conditional automation systems with multiple thresholds
- [ ] Design tempo-synced mathematical effects
- [ ] Troubleshoot formula syntax and mathematical errors effectively
- [ ] Integrate Formula Controller into efficient automation workflows
- [ ] Create evolving mathematical patterns using time-based expressions

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Formula Controller

## Purpose & Identity
Fruity Formula Controller is the **mathematical brain** of FL Studio. Its primary identity is a logic-based automation generator. Instead of drawing curves by hand, you write expressions (like `Sin(SongTime*Pi)`) to create LFOs, complex envelopes, randomization, or logic gates that drive other plugins. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Custom LFO Designer." You have three input knobs (a, b, c) and a text box. You write a math equation, and the plugin outputs a value between 0 and 1. You can then link that output to *anything* in FL Studio—filter cutoffs, volume faders, or even the parameters of other controllers.

## Hip-Hop / R&B Context
- **Perfect Chopped Gates:** Writing a formula that creates a perfectly synced 1/16th note gate for "Upbeat" textures.
- **Human Drifting:** Adding a tiny, unpredictable "drift" to a melody’s pitch or volume to give it a "Vibey" lo-fi feel.
- **Complex Panning:** Using `Sin` and `Cos` formulas together to make a sound "orbit" the listener's head in a "Spacey" way.

## When To Use
- When you need a **mathematically perfect curve** (e.g., a perfect Sine wave).
- When you want to **invert** a controller (if Knob A goes up, the parameter goes down).
- When you need **conditional logic** (e.g., "Only turn on the reverb when the snare hits").

## When NOT To Use
- **Simple Automation:** If you can draw it easily in the Playlist, drawing it is faster.
- **CPU Constraints:** While light, hundreds of complex math evaluations per second can add up in massive Patcher projects. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Formula Controller

## UI Tour
The interface is intentionally minimal, designed for code entry rather than visual tweaking. [SRC: IL-MAN]

### 1. The Inputs (The Variables)
- **Knobs a, b, c**: Normalized input faders (0.0 to 1.0). These are the variables you use in your formula.
- **Tip**: You can link these knobs to MIDI controllers, automation clips, or other internal controllers like Peak Controller.

### 2. The Formula Bar (The Logic)
- **Expression Box**: Where the math happens.
- **Compile Button**: **CRITICAL**. The formula will not update until you click this.
- **Presets**: A drop-down menu with classic formulas (Invert, Sine, etc.).

### 3. The Output (The Result)
- **Meter**: A vertical bar showing the real-time output value (0.0 to 1.0).
- **Tip**: Right-click this meter to see the output value as a decimal.

## Signal Flow
1. **Inputs (a, b, c)**: Real-time values are read from the knobs or their internal links.
2. **Environment Variables**: The engine reads project data like `SongTime` (current beat position) and `Tempo`.
3. **The Expression Engine**: The text in the formula bar is evaluated mathematically.
4. **Clamping**: The result is restricted to the 0.0 – 1.0 range (though some internal calculations can exceed this before the final output).
5. **Output**: The result is broadcast to any parameter linked to the Fruity Formula Controller.

## Things Beginners Misunderstand
- **"Why is the output stuck at 0?"**: You likely haven't pressed **Compile**. Even if the code is correct, it doesn't "live" until compiled.
- **"SongTime doesn't move"**: `SongTime` only increments while the FL Studio transport is **playing**. If the DAW is stopped, formulas based on `SongTime` will stay static.
- **Case Sensitivity**: Variables like `a, b, c` and functions like `Sin()` are usually case-sensitive in the underlying engine. Stick to the standard syntax.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Formula Controller

## 1. The "Macro Scaling" Trick
Link three different VST parameters to the same Formula Controller.
- **Technique**: Use the formula `a * b`. Use Knob A as your master MIDI knob, and Knob B as a "depth" control for each instance.
- **Benefit**: You can control how much influence your MIDI knob has on each parameter individually.

## 2. Rhythmic Quantization
Turning a smooth LFO into a "stepped" 8-bit style modulation.
- **Technique**: Formula: `Round(a * 8) / 8`.
- **Benefit**: This quantizes the input into 8 discrete steps. Perfect for "robotic" pitch shifts or lo-fi filter sweeps.

## 3. The "Probability" Gate
Allowing an effect to turn on only sometimes.
- **Technique**: Formula: `IfG(a, Rand(), 1, 0)`.
- **Benefit**: If Knob A is at 0.1, the effect has a 10% chance of triggering. If A is at 0.9, it has a 90% chance. Great for "glitchy" psychedelic R&B.

## 4. Tension-Based Bouncing
Creating a "heartbeat" rhythm.
- **Technique**: Formula: `Abs(Sin(SongTime * Pi))^a`.
- **Benefit**: Knob A now controls the "tension" of the curve. At low values, it's a smooth bounce; at high values, it's a sharp "thump."

## 5. Mono-Check Logic
- **Protocol**: If using Formula Controller to drive Stereo Pan, use a formula that never hits Hard Left or Hard Right to avoid ear fatigue.
- **Fix**: `0.25 + (a * 0.5)`—this keeps the output between 0.25 and 0.75, ensuring the sound stays somewhat centered.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Output stays at 1.0"** | Your math result is > 1. Use `Min(1, result)` or divide your values. |
| **"LFO is too fast"** | `Sin(SongTime / 4 * Pi)`. Dividing `SongTime` slows the period. |
| **"Equation error"** | Check for missing parentheses `()` or division by zero `/0`. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Formula Controller

Formula Controller translates vibes through **Math-Driven Motion**.

## 1. Upbeat (Precision, Rhythmic, Kinetic)
- **Concept:** "The Perfect Clock."
- **Levers:**
  - **Formula:** `IfG(Sin(SongTime*Pi*4), 0, 1, 0)` (1/4 note gate).
  - **Knob A:** Speed multiplier.
- **Listen For:** A perfectly timed energy pulse that locks the track to the grid.
- **Don't Do This:** Don't let the formula drift; use `SongTime` for absolute sync.

## 2. Psychedelic (Chaotic, Evolving, Liquid)
- **Concept:** "Non-Repeating Evolution."
- **Levers:**
  - **Formula:** `Sin(SongTime*a) * Rand()`
  - **Variable:** `SeededRand(SongTime)` for repeatable chaos.
- **Listen For:** Modulation that feels alive and unpredictable, never hitting the same spot twice.

## 3. Spacey (Galactic, Rotating, Immersive)
- **Concept:** "The Orbital Path."
- **Levers:**
  - **Sine/Cosine Duo:** Use one Formula Controller with `Sin(SongTime)` for Pan, and another with `Cos(SongTime)` for Volume.
- **Listen For:** The sound circling the listener, creating a sense of 3D planetary motion.

## 4. Vibey (Relaxed, Drifting, Human)
- **Concept:** "The Lo-Fi Drift."
- **Levers:**
  - **Formula:** `a + (Rand()*0.05)`
  - **Action:** Add a tiny bit of random noise to a static value (Knob A).
- **Listen For:** Micro-imperfections that make digital synths feel like old, unstable hardware.

## 5. Moody (Stagnant, Compressed, Intense)
- **Concept:** "The Pressure Valve."
- **Levers:**
  - **Logarithmic Scaling:** `Log(a*9 + 1) / Log(10)`
- **Listen For:** A control curve that feels heavy at the start and light at the end, mimicking the feel of a physical pressure-sensitive pad. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\04_Ready_To_Use_Patterns.md

```markdown
# Concepts: Ready-To-Use Patterns

Mathematical recipes for instant musical movement.

---

## 1. The "Variable Tension" Bounce
- **Formula**: `Abs(Sin(SongTime * Pi))^a`
- **What it does**: Creates a "bouncing ball" effect.
- **Control**: Use Knob A to change the "sharpness" of the bounce. 0.1 = Rounded; 10 = Sharp Thump.
- **Verification**: Link to Volume. You should hear a rhythmic pulse that gets snappier as you turn A up.

## 2. Probabilistic Ear-Candy
- **Formula**: `IfG(a, Rand(), 1, 0)`
- **What it does**: A "dice roll" gate.
- **Control**: Knob A is the "Probability." At 0.1, the output is almost always 0. At 0.9, it's almost always 1.
- **Verification**: Link to a high-feedback Delay. Only specific notes will "trigger" the delay.

## 3. The "Lofi Clock" (Time Quantizer)
- **Formula**: `Round(SongTime * a) / a`
- **What it does**: Quantizes time itself.
- **Control**: Knob A controls the "Bit-rate." High values = smooth; Low values = chunky steps.
- **Verification**: Link to a Filter. The filter will jump between positions rather than sliding.

## 4. The "Inverter with Offset"
- **Formula**: `b + (1 - b) * (1 - a)`
- **What it does**: Inverts Input A, but uses Input B as a "floor" or minimum value.
- **Control**: Knob A = Movement; Knob B = Minimum limit.
- **Verification**: Useful for mapping a mod-wheel so it never fully closes a filter.

## 5. Sine-Saw Hybrid
- **Formula**: `(Sin(SongTime*Pi) + (SongTime % 1)) / 2`
- **What it does**: Blends a smooth curve with a sharp ramp.
- **Verification**: Link to a Panning knob for a "swirl-and-jump" stereo effect.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Formula Controller (5 Minutes)

1.  **Insert:** Load **Fruity Formula Controller** into any slot.
2.  **Paste:** Click the text box and paste this: `Sin(SongTime*Pi)` (Basic Sine LFO).
3.  **Compile:** Press the **Compile** button (Checkmark icon).
4.  **Link:** Right-click a knob on another plugin -> **Link to controller**.
5.  **Source:** Select **Formula Controller - Out** from the list.
6.  **Play:** Press Play in FL Studio. The target knob will now move automatically in a smooth wave.
7.  **Tip:** Change the formula to `1-a` to make an **Inverter**. Link Knob A to your mod wheel. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Formula Controller: The Math Engine

> **Scope:** Logic Gates, Complex LFOs, and Automation Processing.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High (Programming).

## 🧠 The "Algebra" Concept
This plugin does not generate sound. It generates **Data**.
*   **Inputs:** `a`, `b`, `c`. (Knobs you can link to other things).
*   **Engine:** Processes these inputs using a math formula.
*   **Output:** A single value (0.0 to 1.0) that you link to a target parameter.

**Signal Flow:**
`Input Knobs (a,b,c)` -> **[FORMULA EVALUATOR]** -> **[CLAMP 0-1]** -> **[OUTPUT]**

---

## 🎛️ Section 1: Core Syntax

The syntax is based on Delphi/Pascal math.
*   `+` (Add), `-` (Sub), `*` (Mult), `/` (Div).
*   `^` (Power). Example: `a^2` (Exponential curve).
*   `Sin(x)`, `Cos(x)`: Oscillators.
*   `Abs(x)`: Absolute value (Rectifier).
*   `Max(a,b)`: Output the larger value.
*   `Min(a,b)`: Output the smaller value.
*   `Int(x)`: Integer part.
*   `Frac(x)`: Decimal part.

---

## 🔁 Section 2: Logic (If/Then)

Essential for Sidechaining and Gates.
*   **Function:** `Iff(condition, true_value, false_value)`.
    *   *Note:* It might be case-sensitive depending on version. Usually `If(c, t, f)` or `Iff(c, t, f)`.
*   **Example:** `Iff(a > 0.5, 1, 0)` produces a **Square Wave** output from a linear input.

---

## ⚡ Technical Specs: The 0-1 Clamp

*   **Rule:** The output is *always* clipped between 0.0 and 1.0.
*   **Consequence:**
    *   If your formula outputs `1.5`, the controller sends `1.0`.
    *   If your formula outputs `-0.5`, the controller sends `0.0`.
*   **Workaround:** You must scale your formula to fit this range.
    *   *Sine Wave:* `Sin(SongTime)` goes -1 to +1.
    *   *Fix:* `Sum(SongTime)*0.5 + 0.5` shifts it to 0 to 1.

---

## 🧪 "Secret Sauce" Workflows

### 1. The Crossfader (Inverter)
1.  **Formula:** `1 - a`
2.  **Use:** Link Input `a` to Volume A. Link Formula Output to Volume B.
3.  **Result:** When you turn knob `a` up, Volume A goes up, and Volume B goes down.

### 2. Audio Follower (Peak Controller Helper)
1.  **Formula:** `a * b`
2.  **Input a:** Peak Controller output (Audio level).
3.  **Input b:** A manual knob (Sensitivity).
4.  **Result:** A scalable sidechain signal where Knob `b` adjusts the depth of the ducking without changing the compressor threshold.

### 3. Quantizer (Stepped LFO)
1.  **Formula:** `Int(a * 8) / 8`
2.  **Input a:** Triangle LFO.
3.  **Result:** The smooth LFO is chopped into 8 discrete steps. Perfect for Chiptune pitch modulation.

```

---

## FILE: 01-Learning\Quick-Reference\syntax-guide.md

```markdown
# Syntax Guide: Fruity Formula Controller

A dictionary of mathematical operators and functions. [SRC: IL-MAN]

## 1. Constants & Variables
- `a, b, c`: The three input knobs (0 to 1.0).
- `SongTime`: Number of beats passed since start of song.
- `Time`: System time in seconds.
- `Tempo`: Current BPM.
- `Pi`: 3.14159...
- `E`: 2.71828...

## 2. Basic Operators
- `+`, `-`, `*`, `/`: Add, Subtract, Multiply, Divide.
- `^`: Power (e.g., `a^2` is A squared).
- `%`: Modulo (Remainder after division).

## 3. Trigonometry
- `Sin(x)`, `Cos(x)`, `Tan(x)`: Basic waves.
- `ArcSin(x)`, `ArcCos(x)`, `ArcTan(x)`: Inverse waves.

## 4. Logic & Conditionals
- `IfG(x, y, a, b)`: If **x > y**, output **a**, else **b**.
- `IfL(x, y, a, b)`: If **x < y**, output **a**, else **b**.
- `IfE(x, y, a, b)`: If **x = y**, output **a**, else **b**. [UNVERIFIED: Floating point precision issues].
- `Min(x, y)`: Output the smaller of the two.
- `Max(x, y)`: Output the larger of the two.

## 5. Rounding & Conversion
- `Abs(x)`: Converts negative to positive (Rectification).
- `Round(x)`: Rounds to the nearest integer.
- `Floor(x)`: Rounds down.
- `Ceil(x)`: Rounds up.
- `Log(x)`, `Exp(x)`: Logarithmic and Exponential curves.

## 6. Randomness
- `Rand()`: Outputs a random value between 0 and 1 every sample.
- `SeededRand(seed)`: Random but repeatable if the seed is constant.

```

---

## FILE: 02-Data\parameters\formula-params.json

```json
{
  "plugin_name": "Fruity Formula Controller",
  "category": "Controller",
  "parameters": [
    {
      "name": "a",
      "type": "knob",
      "description": "User variable input A",
      "vibe_impact": "Primary control, intensity, speed"
    },
    {
      "name": "b",
      "type": "knob",
      "description": "User variable input B",
      "vibe_impact": "Secondary control, range, tension"
    },
    {
      "name": "c",
      "type": "knob",
      "description": "User variable input C",
      "vibe_impact": "Tertiary control, offset, logic threshold"
    },
    {
      "name": "Formula",
      "type": "text",
      "description": "The mathematical expression",
      "vibe_impact": "The logic engine, rhythmic identity"
    }
  ],
  "mix_impact_tags": ["motion", "rhythm", "scaling", "conversion"]
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Formula Controller",
  "category": "Controller / Logic",
  "parameters": [
    {
      "section": "Inputs",
      "id": "a",
      "name": "Knob A",
      "range": { "min": 0, "max": 1, "unit": "float" },
      "description": "Variable 'a' in formula."
    },
    {
      "section": "Inputs",
      "id": "b",
      "name": "Knob B",
      "range": { "min": 0, "max": 1, "unit": "float" },
      "description": "Variable 'b' in formula."
    },
    {
      "section": "Inputs",
      "id": "c",
      "name": "Knob C",
      "range": { "min": 0, "max": 1, "unit": "float" },
      "description": "Variable 'c' in formula."
    },
    {
      "section": "Editor",
      "id": "formula",
      "name": "Formula Text",
      "options": ["Text String"],
      "description": "The mathematical expression."
    },
    {
      "section": "Monitor",
      "id": "compile",
      "name": "Compile",
      "options": ["Action"],
      "description": "Validates and applies the formula."
    }
  ]
}

```

---

## FILE: 02-Data\presets\envelope-follower-basic.json

```json
{
  "presetName": "Envelope Follower Basic",
  "plugin": "Fruity Formula Controller",
  "description": "Scales the output based on the input 'a' value (often mapped to Peak Controller).",
  "settings": {
    "formula": "a*b",
    "a": 0.5,
    "b": 1.0,
    "c": 1.0
  },
  "usage": "Use to scale an existing automation signal with a multiplier (b knob)."
}

```

---

## FILE: 02-Data\presets\lfo-sine.json

```json
{
  "presetName": "LFO Sine",
  "plugin": "Fruity Formula Controller",
  "description": "A standard sine wave LFO using a basic formula.",
  "settings": {
    "formula": "Sin(SongPos*Pi*2)*0.5+0.5",
    "a": 1.0,
    "b": 1.0,
    "c": 1.0
  },
  "usage": "Use to modulate volume, cutoff, or any parameter that needs a smooth back-and-forth movement."
}

```

---

## FILE: 02-Data\presets\random-stepped.json

```json
{
  "presetName": "Random Stepped",
  "plugin": "Fruity Formula Controller",
  "description": "Generates random values that stay constant for a set duration.",
  "settings": {
    "formula": "Rand(Int(SongPos*4))",
    "a": 1.0,
    "b": 1.0,
    "c": 1.0
  },
  "usage": "Great for glitchy filter effects or randomized sample selection."
}

```

---

## FILE: 02-Data\presets\useful-formulas.json

```json
{
  "basic_math": {
    "Inverter": "1 - a",
    "Scaling": "a * b",
    "Offset": "a + b"
  },
  "lfo_shapes": {
    "Standard Sine": "Sin(SongTime * Pi)",
    "Absolute Bounce": "Abs(Sin(SongTime * Pi))",
    "Quantized Ramp": "Floor(a * 8) / 8"
  },
  "logic": {
    "Binary Gate": "IfG(a, 0.5, 1, 0)",
    "Crossfader": "a * b + (1 - a) * c",
    "Range Limiter": "Max(b, Min(c, a))"
  },
  "psychedelic": {
    "Chaos": "Rand() * a",
    "Frequency Modulation": "Sin(SongTime * Pi * (1 + b * Sin(SongTime * c)))"
  }
}

```

---

## FILE: 02-Data\presets\useful-formulas.md

```markdown
# Useful Formula Presets: Copy-Paste Library

Paster these into the Formula box and hit **Compile**.

## 1. The Basic Inverter
- **Formula:** `1-a`
- **Use:** When Knob A is at 100%, output is 0%. Perfect for crossfading.

## 2. Tempo-Synced Square Gate (1/4 Note)
- **Formula:** `IfG(Sin(SongTime*Pi*2), 0, 1, 0)`
- **Use:** Rhythmic volume chopping.

## 3. Slow "Vibe" Drift
- **Formula:** `a + (Sin(SongTime*0.1)*0.02)`
- **Use:** Adds a tiny 2% "drift" to whatever Knob A is set to.

## 4. Random "Sample & Hold"
- **Formula:** `Rand(Round(SongTime*a))`
- **Use:** Generates a new random value every beat (Speed controlled by Knob A).

## 5. The "Perfect Bounce"
- **Formula:** `Abs(Sin(SongTime*Pi))`
- **Use:** Creating a bouncing ball effect for volume or filters. [SRC: REPUTABLE]

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Formula Controller)

## 1. The "Off-Grid" Rule
- **Rule:** Don't always use `SongTime`. 
- **Application:** For "Spacey" and "Vibey" tracks, use the `Time` (System Time) variable. It doesn't reset when the song stops, creating a more organic, non-linear movement. [SRC: REPUTABLE]

## 2. Inversion for Clarity
- **Rule:** Sidechain shouldn't just be volume.
- **Application:** Use formula `1-a` linked to a High-Shelf EQ. When the Kick hits (Input A from Peak Controller), the high frequencies are *boosted* while the volume is ducked.

## 3. The "Prime Number" LFO
- **Rule:** Avoid repeating patterns in Psychedelic tracks.
- **Application:** Multiply your speeds by prime numbers (e.g., `Sin(SongTime*1.37)`) to ensure the modulation cycle doesn't align too perfectly with the 4/4 grid.

## 4. Safety Clipping
- **Rule:** Math can exceed 1.0.
- **Application:** FL Studio usually clips values at 1.0, but for safety, wrap your formula in `Min(1, Max(0, [formula]))` to ensure you never send "Illegal" values to other plugins.

## 5. Compile Discipline
- **Rule:** Formulas don't update until you compile.
- **Application:** Always hit Compile after a change. If you are performing live, use the A, B, C knobs to change the *variables* of a pre-compiled formula instead of editing the code. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Formula Controller

## 1. Tempo-Synced Sine LFO

1.  **Variable:** `SongTime`.
2.  **Formula:** `Sin(SongTime * Pi * 2) * 0.5 + 0.5`
3.  **Explanation:**
    *   `SongTime`: Current play position in beats (or seconds? Manual says beats usually).
    *   `* Pi * 2`: 1 Beat = 1 Cycle (2 Pi Radians).
    *   `* 0.5 + 0.5`: Scales the -1/+1 output to 0/1 range.
4.  **Use:** A perfectly synced LFO that never drifts.

## 2. Dynamic Ring Modulation

1.  **Formula:** `a * Sin(SongTime * b * 50)`
2.  **Input a:** Volume envelope.
3.  **Input b:** Pitch/Rate knob.
4.  **Result:** An Amplitude Modulation (LFO) where the *rate* is controlled by knob `b` and the *depth* follows the envelope of input `a`.

## 3. Probability Gate (Randomizer)

1.  **Formula:** `SeededRand(SongTime)`
2.  **Result:** Generates a new random value every time the internal seed/time updates.
3.  **Enhancement:** `Iff(Rand(SongTime) > a, 1, 0)`
    *   **Input a:** Probability Threshold (e.g., 0.8).
    *   **Effect:** Only outputs "1" (Trigger) 20% of the time. Link to "Play" button of a sample.

## 4. Pythagorean Stereo Panner

1.  **Goal:** Constant Power Panning (Sine/Cosine law).
2.  **Output 1 (Left):** `Cos(a * Pi / 2)`
3.  **Output 2 (Right):** `Sin(a * Pi / 2)`
4.  **Result:** As knob `a` moves 0-1, the volume preserves energy relative to the center, unlike linear panning which dips in volume at the center. Requires 2 Formula Controllers (or Patcher).

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The "Orbital" Panner (Fruity Formula Controller)

## Routing Context
- **Target:** A Spacey Synth Lead or Pad.
- **Position:** Needs **two** Formula Controllers.

## Step-by-Step Setup
1.  **X-Axis (Pan):** 
    - Load Formula Controller 1. 
    - Formula: `0.5 + (Sin(SongTime*Pi)*0.5)`
    - Compile.
2.  **Y-Axis (Volume/Distance):** 
    - Load Formula Controller 2.
    - Formula: `0.5 + (Cos(SongTime*Pi)*0.5)`
    - Compile.
3.  **The Link:** 
    - Link your instrument's **PAN** to Controller 1.
    - Link your instrument's **VOLUME** to Controller 2.

## Result
- The sound will now "circle" the listener. When it's at the far left, it's at medium volume. As it moves to the center, it gets louder (closer), then moves to the right and gets quieter (further away).

## Vibe Check
- **Spacey/Psychedelic:** Creates a true 3D orbital sensation that feels much more natural than standard auto-panning.

## Pitfalls + Fixes
- **Pitfall:** "It circles too fast."
  - **Fix:** Change `SongTime*Pi` to `SongTime*Pi*0.5` to cut the speed in half. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\dynamic-reverb.md

```markdown
# Instrument: Dynamic Reverb

Controlling reverb size and mix with formulas.

## The "Ducking" Reverb
1. Link a **Fruity Peak Controller** from your dry vocal to **Knob A** of Formula Controller.
2. **Formula**: `1 - a`
3. Link your **Reverb Mix** to the Formula Controller output.
4. **Result**: The reverb is quiet when the vocal is singing and gets louder during the pauses.

## Randomized Room Size
- **Formula**: `b + Rand(Int(SongPos/4))*0.1`
- **Result**: Every 4 bars, the reverb room size changes slightly, adding a subtle sense of space and variety to the mix.

## Space Expansion
- **Formula**: `a * b`
- **Usage**: Map `a` to your song's energy level (e.g., from a master automation clip) and link it to reverb decay.
- **Result**: The space gets larger and more wash-out during the big chorus sections.

```

---

## FILE: 03-Workflows\by-instrument\performance-mode-macro.md

```markdown
# Workflow: Performance Mode Macro (Multi-Control Hub)

*Goal: Link one MIDI knob to multiple effects, but scale them differently for a more "expensive" performance feel.*

## 🎛️ Routing Context
- **Setup**: One instance of Fruity Formula Controller.
- **Inputs**: Knob A linked to your physical MIDI controller knob.

## 🚶 Step-by-Step Setup
1. **The Formula**: Write `a` into the formula box and click **Compile**. (This is a 1:1 direct pass-through for now).
2. **The First Link (Filter)**: Right-click your synth's Filter Cutoff -> **Link to controller**. Select "Formula Controller - Output". Use the mapping formula: `Input` (1:1).
3. **The Second Link (Reverb)**: Right-click your Reverb Mix -> **Link to controller**. Select "Formula Controller - Output". Use the mapping formula: `Log(1+9*Input)/2.3`.
   - *Result*: As you turn Knob A, the filter opens linearly, but the reverb swells in naturally (logarithmically).
4. **The Third Link (Inverted Dry)**: Right-click your Dry volume -> **Link to controller**. Use mapping formula: `1-Input`.
   - *Result*: As the effect and filter go up, the dry signal automatically fades out.
5. **Recording**: Press **Record** in FL Studio. Move your MIDI knob. FL Studio will record all three parameter movements perfectly synchronized into one clip.

## 🔄 Variations
- **The "High-Energy" Macro**: Use `Input^2` for the filter so it stays dark for most of the knob turn, then "bursts" open at the very end.
- **The "Glitch" Macro**: Add `+ 0.05 * Rand() * Input` to the mapping formula to add subtle "jitter" only when the knob is turned up.

## ⚠️ Pitfalls & Fixes
- **Problem**: Parameters jump suddenly.
- **Fix**: Check the "Smoothing" settings in the **Link to controller** window.

```

---

## FILE: 03-Workflows\by-instrument\synth-cutoff.md

```markdown
# Instrument: Synth Cutoff

Automating filter movement with math.

## The Periodic Sweep
- **Formula**: `Sin(SongPos*Pi*2)*0.5+0.5`
- **Action**: Link your synth's Filter Cutoff to the Formula Controller output.
- **Result**: A perfectly synced filter sweep that matches the project tempo.

## The "Rhythmic Jump"
- **Formula**: `If(Frac(SongPos*2)>0.5, 1, 0.2)`
- **Result**: The filter jumps between open (1) and closed (0.2) on every half-beat.

## Scaled Modulation
- **Formula**: `a + (Sin(SongPos*Pi)*b)`
- **Usage**: Use `a` for the base cutoff level and `b` for the intensity of the wobble.
- **Goal**: Gives you a single "Macro" knob (b) to control the intensity of the filter movement.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Formula Controller

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Formula Controller.
- **Key Info:** Syntax list (Sin, Cos, IfG, etc.), Variable definitions (a, b, c, SongTime), and compilation logic.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The FL Studio Math Bible" (Community Guide).
- **Key Info:** Practical applications for `SongTime` vs `Time`, building custom LFO shapes using `Abs` and `Pow`, and using formulas for precise parameter mapping in Patcher.

## Genre Style Board: Fruity Formula Controller

| Vibe | Key Formula | Use Case |
| :--- | :--- | :--- |
| **Upbeat** | `IfG(Sin(t), 0, 1, 0)` | Rhythmic Gating |
| **Psychedelic**| `Sin(t) * Rand()` | Chaotic Modulation |
| **Spacey** | `Sin(t) + Cos(t)` | 3D Orbital Panning |
| **Vibey** | `a + (Rand()*0.02)` | Lo-fi Pitch Drift |
| **Moody** | `Log(a)` scaling | Pressure-sensitive FX |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Math Automation)

Sourced applications of logical control in Hip-Hop, Rap, and R&B.

## 1. West Coast G-Funk / Neo-Soul Flutter
- **Source**: Dr. Dre / Terrace Martin style.
- **Application**: `0.5 + (Rand() - 0.5) * 0.02` applied to fine pitch.
- **Goal**: Mimicking the organic instability of analog synth oscillators.

## 2. Experimental / Psychedelic Glitch
- **Source**: Flying Lotus / Kaytranada.
- **Application**: `IfG(Rand(), a, 1, 0)` applied to a Bitcrusher or Distortion Mix.
- **Goal**: Random, rhythmic "bursts" of texture that follow the energy of Input A.

## 3. Dark R&B Sidechain
- **Source**: 40 (Noah Shebib) / PARTYNEXTDOOR.
- **Application**: Using `Min(1, Abs(Sin(SongTime*Pi))^2)` to create a precise "tension" based volume ducking.
- **Goal**: A rhythmic "breathing" that is perfectly locked to the tempo.

## 4. Modern Trap "Euclidean" Hat Jitter
- **Source**: Wondagurl / Southside.
- **Application**: Using `Round` and `Modulo` to shift the volume of specific hat triplets.
- **Goal**: Creating rhythmic complexity that feels mechanical but intricate.

```

---

## FILE: 04-Reference\math-function-library.md

```markdown
# Technical Reference: Math Function Library

A deep look at the supported functions in the Fruity Formula engine. [SRC: IL-MAN]

## 1. periodic Functions
- **Sin(x)**: Outputs a smooth oscillation between -1 and 1.
- **Cos(x)**: Identical to Sin, but shifted by 90 degrees.
- **Tan(x)**: Creates a periodic "spike" that stretches to infinity.

## 2. Threshold & Selection
- **IfG(test, threshold, if_true, if_false)**: "If Greater".
- **IfL(test, threshold, if_true, if_false)**: "If Less".
- **Min(a, b)**: Keeps the output capped at the value of B.
- **Max(a, b)**: Prevents the output from falling below the value of B.

## 3. Power & Curves
- **Abs(x)**: Removes the negative sign.
- **Pow(base, exp)**: Essential for logarithmic curves. `a^2` stays low; `a^0.5` stays high.
- **Log(x)**: Natural logarithm. Used for scaling volume/human hearing perceptions.

## 4. Probability
- **Rand()**: A new random number every sample. If used for automation, it looks like "White Noise."
- **SeededRand(seed)**: If the seed is `Round(SongTime)`, it creates a new random number every beat, but repeats the same sequence if you restart the song. [SRC: REPUTABLE]

## 5. Global Constants
- **SongTime**: Increments by 1 every beat.
- **Pi**: ~3.14159. Used to sync Sin waves to beats: `Sin(SongTime * Pi)` creates a 2-beat period.

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Formula Controller Mechanics

## 1. Variable List

*   **Parameters:** `a`, `b`, `c`.
*   **Time:**
    *   `SongTime`: Playhead position (Beats?).
    *   `Time`: System time (seconds running).
*   **Math Constants:** `Pi`, `e`.

## 2. Compilation Engine

*   **Type:** Likely a Just-In-Time (JIT) math parser or interpreted expression evaluator.
*   **Validation:** Formula Controller checks syntax on "Enter". If invalid, it shows an error message below the text box.
*   **CPU:** Math operations are incredibly cheap (nanoseconds). You can run hundreds of instances without CPU hits.

## 3. Sample Rate (Resolution)

*   **PPQ:** FL Studio automation usually runs at 96 PPQ (Pulses Per Quarter note).
*   **Smoothness:** The Formula Controller output is updated at this rate.
*   **Audio Rate?** No. Formula Controller is a **Control Rate** plugin. You cannot use it to generate audio oscillators (aliasing will occur above ~50Hz). It is for modulation only.

## 4. Range Clamping

*   **Hard Clip:** Any value `> 1` becomes `1`. Any value `< 0` becomes `0`.
*   **Wraparound:** It does *not* wrap around (modulo) automatically. You must use `Frac()` for sawtooth looping.

```

---

