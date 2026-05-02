# Fruity HTML NoteBook - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity HTML NoteBook - Project Documentation

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██╗  ██╗████████╗███╗   ███╗██╗       ███╗   ██╗ ██████╗ ████████╗███████╗██████╗  ██████╗  ██████╗ ██╗  ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██║  ██║╚══██╔══╝████╗ ████║██║       ████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝██╔══██╗██╔═══██╗██╔═══██╗██║ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ███████║   ██║   ██╔████╔██║██║       ██╔██╗ ██║██║   ██║   ██║   █████╗  ██████╔╝██║   ██║██║   ██║█████╔
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔══██║   ██║   ██║╚██╔╝██║██║       ██║╚██╗██║██║   ██║   ██║   ██╔══╝  ██╔══██╗██║   ██║██║   ██║██╔═██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║  ██║   ██║   ██║ ╚═╝ ██║███████╗  ██║ ╚████║╚██████╔╝   ██║   ███████╗██████╔╝╚██████╔╝╚██████╔╝██║  ██╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝  ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
`\`\`

**Plugin Type:** Utility / Notebook
**Category:** Utility / Misc
**Official Manual:** [Image-Line Fruity HTML NoteBook Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20HTML%20NoteBook.htm)

---

## 🎯 What is Fruity HTML NoteBook?

Fruity HTML NoteBook is an advanced notepad for FL Studio projects. Unlike the basic "Fruity NoteBook," this plugin renders **HTML code**, allowing for rich formatting, images, links, and structured layouts. It is essentially a mini web browser inside your DAW, perfect for creating interactive manuals, detailed mixing notes, or tracklists with artwork.

**Key Capabilities:**
- **HTML Rendering:** Supports basic HTML tags (bold, italic, headers, tables).
- **Image Support:** Can display images (great for track artwork or signal flow diagrams).
- **Multi-Page:** Organize notes into tabs/pages.
- **Embedded Content:** Keeps documentation stored inside the .flp file.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **html-basics-for-notebook.md**
3. Create **parameter-cheat-sheet.md**
4. Paste a simple `<h1>Hello World</h1>` code to test rendering.

### For Collaboration:
1. Study **project-handover-templates.md**
2. Review **embedding-images.md**
3. Learn **interactive-checklists.md**

### For Educators:
1. Study **creating-tutorials.md**
2. Review **linking-external-resources.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Edit Mode:** Switching between Code and Preview.
  - **Import:** Loading HTML files.
  - **Sync:** Auto-scrolling (if supported).

- [ ] **html-basics-for-notebook.md**
  - Supported tags: `<b>`, `<i>`, `<u>`, `<font>`, `<img>`.
  - Limitations: No Javascript, no CSS (usually basic inline styles only).

#### 02-Data/templates/
- [ ] **mix-notes-template.html**
  - A pre-coded HTML structure for tracking mix revisions.
- [ ] **tracklist-template.html**
  - Simple table layout for album tracklists.

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **project-handover-notes.md**
  - Using HTML NoteBook to leave instructions for a mixing engineer.
  - "Vocals are in Group 1", "Don't touch the Master Bus", etc.
  - Using colors (Red for warnings).

- [ ] **embedding-images.md**
  - How to reference local images vs embedded images.
  - Best practices for file size (don't bloat the .flp!).

#### 03-Workflows/by-context/
- [ ] **template-creation.md**
- [ ] **educational-course-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **supported-html-tags.md**
  - A definitive list of what renders and what doesn't.
  - Test: `<table`, `<ul>`, `<iframe>` (Likely not supported).

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Rich Text

**Tasks:**
1. Open HTML NoteBook
2. Switch to Edit Mode
3. Write a list of instruments using `<li>` tags
4. Create html-basics-for-notebook.md

**Key Questions to Answer:**
- Does it support CSS `<style>` blocks?
- Can I copy/paste from Word/Browser? (Yes, but formatting might break).

### Phase 2: Advanced Layout (Week 2)
**Goal:** Professional Documentation

**Tasks:**
1. Create a "mixing checklist" with checkboxes (using unicode or images)
2. Embed a diagram of the routing
3. Create mix-notes-template.html

**Key Questions to Answer:**
- Does it increase the project save time? (Only if embedding massive images).

---

## 📊 Plugin Specifications to Document

### Engine
- HTML Version Support (HTML 3.2? 4?)
- Image Formats (JPG, BMP, GIF?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does my code look broken? (Check for unclosed tags).
2. How do I switch pages? (Use the page selector at the bottom).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Code Snippet:** The exact HTML used.
- **Preview:** Screenshot of the result.

---

## 🔗 Cross-Reference with Other Plugins

Fruity HTML NoteBook is often used with:
- **Fruity NoteBook** (The simpler text-only version)
- **Wave Candy** (Visuals to accompany notes)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity HTML NoteBook/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── html-basics-for-notebook.md
│
├── 02-Data/
│   ├── templates/
│   │   ├── mix-notes-template.html
│   │   └── tracklist-template.html
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── project-handover-notes.md
│   │   └── embedding-images.md
│
└── 04-Reference/
    └── supported-html-tags.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity HTML NoteBook Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20HTML%20NoteBook.htm)
- [Fruity HTML NoteBook Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_HTML_NoteBook_tutorials.htm)
- [Fruity HTML NoteBook Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+html+notebook+tutorial)

### Community Resources
- [Fruity HTML NoteBook Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+html+notebook&restrict_sr=1)
- [Fruity HTML NoteBook User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity HTML NoteBook Templates](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "HTML for Music Production" - Basic HTML in DAW environments
- "Project Documentation Techniques" - Effective project notes
- "Rich Text Formatting" - Advanced formatting options

### Advanced Techniques
- **HTML Tag Mastery:** Understanding supported HTML tags
- **Image Integration:** Embedding and referencing images
- **Template Creation:** Building reusable templates

---

## 📚 In-Depth Technical Analysis

### HTML Rendering Engine
Fruity HTML NoteBook implements a specialized HTML rendering engine:
- **Supported Tags:** Limited subset of HTML tags for security and stability
- **CSS Support:** Basic inline CSS support (no external stylesheets)
- **Image Handling:** Support for common image formats
- **Link Functionality:** Internal and external link support
- **Table Support:** Basic table rendering capabilities

### Supported HTML Tags
The plugin supports a specific subset of HTML tags:

**Text Formatting Tags:**
- `<b>` - Bold text
- `<i>` - Italic text
- `<u>` - Underlined text
- `<strong>` - Strong emphasis (typically bold)
- `<em>` - Emphasis (typically italic)
- `<small>` - Smaller text
- `<big>` - Larger text
- `<font>` - Font styling with attributes (size, color)

**Structure Tags:**
- `<p>` - Paragraphs
- `<br>` - Line breaks
- `<hr>` - Horizontal rules
- `<div>` - Division containers
- `<span>` - Inline containers
- `<h1> to <h6>` - Header tags

**List Tags:**
- `<ul>` - Unordered lists
- `<ol>` - Ordered lists
- `<li>` - List items
- `<dl>` - Definition lists
- `<dt>` - Definition terms
- `<dd>` - Definition descriptions

**Table Tags:**
- `<table>` - Table containers
- `<tr>` - Table rows
- `<td>` - Table data cells
- `<th>` - Table header cells
- `<thead>` - Table header section
- `<tbody>` - Table body section
- `<tfoot>` - Table footer section

**Media Tags:**
- `<img>` - Image embedding with src attribute
- `<a>` - Anchor links (internal and external)

### Image Support
The plugin supports various image formats:
- **JPG:** Compressed photographic images
- **PNG:** Compressed images with transparency support
- **GIF:** Animated and static images
- **BMP:** Uncompressed bitmap images
- **File Location:** Images can be embedded or referenced externally

### CSS Support
Limited CSS support for styling:
- **Inline Styles:** Basic style attributes
- **Color Properties:** Text and background colors
- **Font Properties:** Size, family, and style
- **Layout Properties:** Margins, padding, alignment
- **No External CSS:** Cannot reference external stylesheets

### Multi-Page Architecture
The plugin supports multiple pages/tabs:
- **Page Management:** Create, delete, and rename pages
- **Navigation:** Easy switching between pages
- **Content Organization:** Separate content by topic
- **Template Pages:** Different templates for different purposes
- **Linking:** Potential for internal page linking

## 🎛️ Parameter Deep Dive

### Editor Controls
- **Edit Mode Toggle:** Switch between code and preview modes
  - Function: Toggles between HTML code view and rendered view
  - Use for: Writing HTML code vs seeing rendered output
  - Pro tip: Use code view for precise editing, preview for visual feedback
- **Behavior:**
  - Code mode: Shows raw HTML code
  - Preview mode: Shows rendered HTML output
  - Pro tip: Always check preview after editing code
- **Applications:**
  - Code editing: Use for precise HTML editing
  - Visual checking: Use for previewing results
  - Debugging: Use to identify HTML errors
  - Pro tip: Switch modes frequently to verify results

### Page Management
- **Page Selector:** Navigate between multiple pages
  - Range: Multiple pages (typically 8+)
  - Effect: Switches content between different HTML documents
  - Use for: Organizing content by topic or function
  - Pro tip: Use for different sections of project documentation
- **Behavior:**
  - Each page stores independent HTML content
  - Pages can be named for organization
  - Content persists between sessions
  - Pro tip: Use for different project sections
- **Applications:**
  - Project notes: Different pages for different aspects
  - Track lists: Separate pages for different instruments
  - Mixing notes: Organize by section or element
  - Documentation: Separate by topic or function
  - Pro tip: Create template pages for reuse

### Import/Export Controls
- **Import Function:** Load external HTML files
  - Format: HTML files
  - Effect: Loads external content into notebook
  - Use for: Bringing in pre-written documentation
  - Pro tip: Use for importing templates or external docs
- **Behavior:**
  - Imports complete HTML documents
  - May require cleaning for compatibility
  - Preserves formatting where supported
  - Pro tip: Verify imported content in preview mode
- **Applications:**
  - Template loading: Import pre-made templates
  - External docs: Bring in external documentation
  - Content migration: Move content between projects
  - Pro tip: Clean HTML before importing for best results

### Synchronization Options
- **Auto-Scroll:** Synchronize scrolling between edit and preview
  - Options: On/Off
  - Effect: Links scroll position between views
  - Use for: Following along during editing
  - Pro tip: Use when editing long documents
- **Behavior:**
  - On: Views scroll together
  - Off: Views scroll independently
  - Pro tip: Use for large documents
- **Applications:**
  - Large documents: Keep views synchronized
  - Editing: Follow along in preview
  - Verification: Check formatting in real-time
  - Pro tip: Toggle based on editing needs

## 🎼 Documentation Applications

### Project Documentation
Using HTML NoteBook for project organization:

**Project Notes:**
- Track project history and changes
- Document creative decisions
- Note technical specifications
- Record mixing approaches
- Essential for project continuity

**Track Lists:**
- Create detailed track inventories
- Document instrument assignments
- Note plugin settings and configurations
- Record sample sources and credits
- Critical for project management

**Mix Notes:**
- Document EQ and processing decisions
- Note automation points and changes
- Record level settings and balances
- Track effect parameters and settings
- Essential for mix recall

### Educational Applications
Using HTML NoteBook for teaching and learning:

**Tutorial Creation:**
- Create step-by-step guides
- Include images and diagrams
- Document workflows and procedures
- Share techniques and methods
- Perfect for educational content

**Course Materials:**
- Develop course outlines
- Create lesson plans
- Document techniques and approaches
- Share resources and references
- Essential for structured learning

**Reference Materials:**
- Build comprehensive reference guides
- Document plugin parameters and functions
- Create comparison charts and tables
- Store important information and formulas
- Critical for quick reference

### Creative Applications
Using HTML NoteBook for creative purposes:

**Lyrics and Poetry:**
- Format lyrics with proper spacing
- Add annotations and notes
- Include chord charts and notation
- Create visual poetry layouts
- Perfect for songwriting

**Conceptual Documentation:**
- Document musical concepts and ideas
- Create visual representations of concepts
- Include theoretical explanations
- Store creative inspirations
- Essential for conceptual work

## 🧪 Experimental Techniques

### Advanced HTML Applications
Creative uses of HTML NoteBook's capabilities:

**Interactive Elements:**
- Create clickable navigation systems
- Use anchor links for internal navigation
- Build table of contents with page links
- Create project maps and flowcharts
- Perfect for complex documentation

**Visual Design:**
- Use tables for structured layouts
- Apply color coding for organization
- Create visual hierarchies with formatting
- Design custom templates for projects
- Essential for professional documentation

**Multimedia Integration:**
- Embed images for visual reference
- Include diagrams and charts
- Add screenshots of workflows
- Create visual documentation
- Perfect for visual learners

### Creative Formatting Approaches
Advanced formatting techniques:

**Styling Techniques:**
- Use font tags for custom styling
- Apply color schemes for organization
- Create visual hierarchies with headers
- Use tables for data organization
- Perfect for structured documentation

**Layout Strategies:**
- Use div and span tags for layout
- Create column layouts with tables
- Organize content with lists
- Build navigation systems
- Essential for complex documents

**Template Creation:**
- Develop reusable project templates
- Create standardized documentation formats
- Build workflow templates
- Design reference templates
- Perfect for consistent documentation

## 🎚️ Workflow Optimization

### Documentation Workflows
Efficient approaches to using HTML NoteBook:

**Project Setup:**
- Create template pages for new projects
- Set up standard documentation sections
- Establish naming conventions
- Plan content organization
- Essential for consistent documentation

**Content Creation:**
- Use code view for precise HTML editing
- Switch to preview for visual verification
- Organize content by page and topic
- Apply consistent formatting
- Pro tip: Use templates for efficiency

**Integration Workflows:**
- Link to external resources
- Embed project-specific images
- Create internal navigation systems
- Organize by project phase
- Pro tip: Plan structure before creating content

### Template Management
Working with templates and reusable content:

**Template Creation:**
- Develop project templates
- Create workflow templates
- Build reference templates
- Design documentation standards
- Pro tip: Use for consistent formatting

**Template Sharing:**
- Export templates for reuse
- Share templates with collaborators
- Import templates from others
- Maintain template libraries
- Pro tip: Version control for templates

**Template Optimization:**
- Optimize for project needs
- Customize for specific workflows
- Adapt for different genres
- Modify for collaboration
- Pro tip: Keep templates simple and flexible

## 🎧 Genre-Specific Applications

### Electronic Music
- **Sound Design Notes:** Documenting patch creation
- **Workflow Documentation:** Recording production techniques
- **Equipment Lists:** Tracking plugin and sample sources
- **Mix Templates:** Standardized mixing documentation
- **Collaboration:** Sharing project information

### Hip-Hop and R&B
- **Sample Documentation:** Tracking sample sources and usage
- **Vocal Processing:** Recording vocal chain settings
- **Beat Notes:** Documenting beat creation techniques
- **Mix Notes:** Recording mixing approaches
- **Collaboration:** Sharing project details

### Rock and Metal
- **Guitar Tone Notes:** Documenting amp and effect settings
- **Drum Programming:** Recording drum programming techniques
- **Mix Documentation:** Tracking mixing approaches
- **Equipment Tracking:** Recording gear and settings
- **Collaboration:** Sharing project information

### Ambient and Experimental
- **Sound Design Documentation:** Recording experimental techniques
- **Atmospheric Notes:** Documenting ambient creation methods
- **Equipment Experiments:** Tracking experimental setups
- **Mix Approaches:** Recording unconventional mixing techniques
- **Collaboration:** Sharing creative processes

## 🔄 Integration with Other Plugins

### Documentation Integration
HTML NoteBook works well with documentation workflows:
- **Project Templates:** Creating template documentation
- **Workflow Guides:** Documenting plugin integration
- **Mix Templates:** Recording mixing approaches
- **Reference Materials:** Creating plugin reference guides
- **Collaboration Tools:** Sharing project information

### Content Creation
Integration with content creation tools:
- **Image Editors:** Creating visual documentation
- **Text Editors:** Preparing content for import
- **Web Browsers:** Testing HTML compatibility
- **Screen Capture:** Adding visual references
- **Audio Analysis:** Including technical data

### Project Management
Working with project management approaches:
- **Version Control:** Documenting project versions
- **Collaboration:** Sharing project information
- **Handoff Procedures:** Creating project handoff documents
- **Backup Systems:** Documenting backup procedures
- **Archive Systems:** Creating archival documentation

## 📖 Historical Context

### Development Background
Fruity HTML NoteBook was developed as an advanced documentation tool:
- Created to provide rich text formatting in FL Studio
- Designed for comprehensive project documentation
- Developed with collaboration in mind
- Intended to complement the basic NoteBook plugin

### Evolution Through FL Studio Versions
- Initially introduced with basic HTML support
- Enhanced with additional formatting options
- Improved with better rendering capabilities
- Expanded with more tag support

### Impact on Music Production
HTML NoteBook has influenced music production by:
- Providing rich text documentation capabilities
- Enabling comprehensive project notes
- Facilitating collaboration through documentation
- Supporting educational content creation

## 🧠 Advanced Documentation Techniques

### HTML Mastery
Advanced techniques for HTML formatting:
- **Semantic Markup:** Using appropriate HTML tags
- **Structural Organization:** Creating logical document structure
- **Visual Hierarchy:** Establishing clear information hierarchy
- **Accessibility:** Creating accessible documentation
- **Cross-Platform Compatibility:** Ensuring compatibility

### Documentation Strategy
Advanced documentation approaches:
- **Modular Documentation:** Breaking content into modules
- **Template Systems:** Creating reusable documentation templates
- **Navigation Systems:** Building effective navigation
- **Visual Documentation:** Combining text with visual elements
- **Collaborative Documentation:** Supporting team workflows

### Creative Applications
Advanced creative techniques:
- **Visual Storytelling:** Using formatting for narrative
- **Information Design:** Creating clear information presentation
- **Template Design:** Building effective templates
- **Content Organization:** Structuring complex information
- **Presentation Design:** Creating professional documents

## 📊 Performance Considerations

### CPU Usage
Managing HTML NoteBook's impact on system performance:
- **Minimal CPU Load:** Very low processing overhead
- **Real-Time Rendering:** Optimized for live editing
- **Image Impact:** Large images may affect performance
- **Document Complexity:** Complex HTML may slow rendering
- **Optimization Strategies:** Techniques for performance

### Memory Usage
Managing memory usage during documentation:
- **Document Size:** Large documents consume more memory
- **Image Storage:** Embedded images increase file size
- **Page Count:** Multiple pages increase memory usage
- **Formatting Complexity:** Complex formatting uses more memory
- **Efficiency Techniques:** Methods for optimization

### System Integration
Optimizing HTML NoteBook within the system:
- **Buffer Management:** Working with system resources
- **Threading:** Understanding interface responsiveness
- **Driver Compatibility:** Ensuring interface compatibility
- **Latency Management:** Minimizing interface lag

## 🛠️ Troubleshooting Common Issues

### HTML Problems
- **Malformed Tags:** Verify all tags are properly closed
- **Unsupported Tags:** Check for compatibility with supported tags
- **Rendering Issues:** Switch between edit and preview modes
- **Formatting Errors:** Validate HTML syntax
- **Link Problems:** Verify link formats and targets

### Technical Issues
- **High Memory Usage:** Reduce image sizes or document complexity
- **Slow Rendering:** Simplify HTML or reduce image count
- **Interface Lag:** Close other plugins temporarily
- **Loading Problems:** Check file paths for external resources
- **Compatibility:** Verify with current FL Studio version

### Creative Issues
- **Unreadable Documents:** Improve formatting and structure
- **Poor Organization:** Reorganize content by topic
- **Missing Information:** Add missing documentation elements
- **Inconsistent Formatting:** Apply consistent styling
- **Lack of Navigation:** Add internal links and navigation

## 🎚️ Advanced Configuration

### Custom Templates
Creating and managing custom documentation configurations:
- **Project Templates:** Optimized for project documentation
- **Workflow Templates:** Configured for workflow documentation
- **Reference Templates:** Set up for reference materials
- **Genre-Specific:** Configured for specific music styles

### Multi-Page Setup
Using multiple HTML NoteBook pages effectively:
- **Content Organization:** Different pages for different topics
- **Navigation Systems:** Internal linking between pages
- **Template Pages:** Standard templates for reuse
- **Collaboration Pages:** Shared documentation pages

### Integration Configurations
Optimizing for different integration scenarios:
- **Project Documentation:** Comprehensive project notes
- **Collaboration Setup:** Shared documentation workflows
- **Educational Use:** Teaching and learning applications
- **Template Integration:** Reusable template systems

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about HTML NoteBook techniques
- **Reddit Groups:** Sharing documentation techniques and templates
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced HTML formatting
- **Written Guides:** In-depth articles on documentation best practices
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Template Libraries:** Websites hosting HTML NoteBook configurations
- **Technique Sharing:** Platforms for sharing documentation methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a professionally styled "Read Me" page for a project template
- [ ] Embed a logo image that persists with the project file
- [ ] Write a table of contents with links to other pages (if supported)
- [ ] Create a multi-page documentation system for a complex project
- [ ] Use HTML formatting to create clear visual hierarchies
- [ ] Build a template system for consistent documentation
- [ ] Integrate external resources and links effectively
- [ ] Troubleshoot HTML formatting and rendering issues
- [ ] Create collaborative documentation workflows
- [ ] Optimize document size and performance for large projects

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity HTML NoteBook

## Purpose and Identity
**Fruity HTML NoteBook** is a rich-text documentation utility for FL Studio projects. Unlike the standard NoteBook, it renders **HTML code**, allowing you to create structured layouts with headers, tables, colored text, and even embedded images. It serves as the project's "Owner's Manual." [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a **mini-website** stored inside your project file. It doesn't make any sound, but it keeps your brain organized. You write code in "Edit" mode, and FL Studio shows you a beautiful, formatted page in "Preview" mode.

## Typical Roles In A Session
- **Project Wiki**: Storing the history of the track, who played what, and what samples were used.
- **Mix Recall Hub**: Detailed notes on why specific EQ cuts were made, or what needs to be fixed in the next session.
- **Handover Manual**: Giving a project to a collaborator with clear, colored instructions and images of the hardware used.

## Hip-Hop/R&B Context
- **Vibe Recipes**: Storing the exact chain of plugins used to get that "Moody" vocal sound so you can replicate it in other tracks.
- **Loop Credits**: Tracking the source of a sample (Splice, YouTube, or Live player) to ensure legal clearing later.
- **Checklists**: Ensuring the 808 is mono and the vocals are de-essed before exporting the final "Vibey" master.

## When to Use vs When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You need tables, images, or specific colors. | You just need a quick 1-sentence reminder (use standard NoteBook). |
| You are creating a template for others. | You aren't comfortable with basic HTML tags. |
| you want to embed artwork or routing diagrams. | You are trying to use Javascript or complex CSS (Not supported). |

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity HTML NoteBook

## UI Tour
The interface is a simple editor window with a few critical navigation icons. [SRC: IL-MAN]

### 1. View / Edit Toggle
- **Pencil Icon**: Switch to **Edit Mode**. This is where you write your HTML tags and text.
- **Eye Icon**: Switch to **Preview Mode**. This renders the code into its final visual form.

### 2. Page Navigation
- **Page Numbers (1-8+)**: The plugin supports multiple pages. Each page can store a different part of your documentation (e.g., Page 1: Credits, Page 2: Mix Notes).

### 3. File Operations
- **Import Button**: Load a `.html` file from your hard drive directly into the notebook.
- **Export Button**: Save your notes as a standard HTML file to share with people who don't have FL Studio.

## Signal Flow
*Note: This is a data-utility, so it does not process audio signals.*
1. **Input (User)**: Code or text is typed into the Edit buffer.
2. **Parsing**: The internal HTML 3.2 engine scans the text for tags like `<b>` or `<table>`.
3. **Rendering**: The engine draws the fonts, colors, and images to the GUI.
4. **Storage**: All text and small embedded images are saved directly into the FL Studio `.flp` file.

## Things Beginners Misunderstand
- **"It's not rendering"**: You must switch out of **Edit Mode** (Pencil) to see the result.
- **Image Paths**: If you use `<img src="C:\MyFolder\Logo.png">`, the image will **disappear** if you move the project to a different computer. You must embed or bundle images correctly.
- **CSS Styles**: You cannot use `<style>` blocks in the header. Use inline styles: `<font color="red">Warning!</font>`.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity HTML NoteBook

## 1. The "Color Code" Warning
Use colors to quickly identify the status of tracks for a collaborator.
- **Technique**: Use `<font color="#FF0000"><b>FIX THIS</b></font>` for issues and `<font color="#00FF00">READY</font>` for completed tracks.
- **Benefit**: Immediate visual recognition when opening the project.

## 2. Table-Based Tracklists
Create a structured list of everything in the project.
- **Technique**: Use the `<table>` tag to create columns for "Instrument," "Source," and "Note."
- **Benefit**: Keeps messy sample notes organized and easy to read.

## 3. Embedding Low-Res Diagrams
Use a screenshot tool to capture your Mixer routing and embed it.
- **Technique**: Save images as small, compressed JPGs to avoid project bloat.
- **Reference**: `<img src="routing_diagram.jpg" width="100%">`.

## 4. Emoji Icons
Since modern HTML NoteBook supports many Unicode characters, you can use Emojis.
- **Technique**: 🔥 for "Heat/Fire" sounds, 🌊 for "Vibey" pads, 🛑 for "Don't touch."
- **Benefit**: Makes documentation fun and readable.

## 5. Mono-Compatibility Checklist
- **Protocol**: Always include a "Mono-Check" step in your HTML NoteBook mixing checklist.
- **Code**: `<li>[ ] Check 808 in Mono</li>`.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Broken Layout** | Check for unclosed tags like `</b>` or `</table>`. |
| **Missing Images** | Move images into the same folder as the project file or use relative paths. |
| **Slow Project Loading** | You have embedded a massive image. Reduce image file size to <100kb. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Recipe_Storage_Guide.md

```markdown
# Vibe Recipe Storage Guide: Fruity HTML NoteBook

How to document and recall "Vibes" using structured HTML.

---

## 1. Storing "Moody" Recipes
*Focus: Darkness and Weight.*
- **HTML Structure**: Use a `<blockquote>` for the core concept and a list for the chain.
- **Example**:
`\`\`html
<h3>VIBE: Dark R&B Piano</h3>
<blockquote>"The underwater sound of the 6ix"</blockquote>
<ul>
  <li><b>Step 1:</b> Parametric EQ 2 (Cut at 800Hz)</li>
  <li><b>Step 2:</b> Fruity Flanger (INV FB on)</li>
  <li><b>Step 3:</b> LuxeVerb (Cathedral Mode)</li>
</ul>
`\`\`

## 2. Storing "Psychedelic" Recipes
*Focus: Disorientation.*
- **HTML Structure**: Use bold colors and large fonts.
- **Example**:
`\`\`html
<h2 align="center"><font color="purple">TRIPPY TRANSITIONS</font></h2>
<p>Reverse the vocal tail -> Send to Delay Bank -> <b>Automate Morph</b></p>
`\`\`

## 3. Storing "Upbeat" Recipes
*Focus: Energy and Snap.*
- **HTML Structure**: Use a table to track transient settings.
- **Example**:
`\`\`html
<table border="1">
  <tr><th>Element</th><th>Snap Setting</th></tr>
  <tr><td>Kick</td><td>Hard Clip @ -3dB</td></tr>
  <tr><td>Snare</td><td>Transient Processor +50%</td></tr>
</table>
`\`\`

## 4. Storing "Jazzy" Recipes
*Focus: Organic Warmth.*
- **HTML Structure**: Use Italicized text for descriptive feelings.
- **Example**:
`\`\`html
<p><i>Warm Neo-Soul Keys:</i> Use Rhodes patch #4. Add vintage saturation. Keep it smooth.</p>
`\`\`

## 5. Storing "Vibey" Recipes
*Focus: Silk and Motion.*
- **HTML Structure**: Use a horizontal rule (`<hr>`) to separate different layers of the "Vibe."
- **Example**:
`\`\`html
<p>Silky Vocal Air (Fresh Air @ 12kHz)</p>
<hr>
<p>Wide Reverb Halo (Lush Mode @ 4s Decay)</p>
`\`\`

```

---

## FILE: 01-Learning\Concepts\html-limitations.md

```markdown
# HTML5 in FL Studio

Fruity HTML NoteBook uses a basic HTML engine.

## Supported Features
- Basic text formatting (`<b>`, `<i>`, `<u>`, `<h1>`...)
- Tables (`<table>`, `<tr>`, `<td>`)
- Images (`<img src="...">`) - *Note: Images must be local paths or standard web URLs if online.*
- Lists (`<ul>`, `<ol>`)

## Limitations
- No JavaScript support.
- Limited CSS support (inline styles work best).
- Video embedding is not supported.

## Best Practices
- Use inline CSS for colors and fonts.
- Keep the layout simple; responsive design is not really applicable here.
- Use it to store "Read Me" information for collaboration projects.

```

---

## FILE: 01-Learning\Concepts\vs-notebook2.md

```markdown
# HTML NoteBook vs NoteBook 2

When to use which?

## Fruity HTML NoteBook
- **Pros**: Can display images, tables, and complex layouts. Supports "click" links to external websites.
- **Cons**: Harder to edit (requires code), looks dated, no multi-page support.
- **Best For**: Fixed documentation, tracklists, session logs, "Read Me" files for template projects.

## Fruity NoteBook 2
- **Pros**: WYSIWYG editing, multi-page tabs, RTF support, easier for quick notes.
- **Cons**: No images, no tables.
- **Best For**: Lyrics, mixing notes, temporary ideas, collaboration notes.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes with HTML NoteBook

## 1. Entering Code
1. Click the **Pencil Icon** (Edit Mode).
2. Type: `<h1>My Project</h1>`.
3. Click the **Eye Icon** (Preview Mode).
4. See your header rendered in bold.

## 2. Creating a List
1. In Edit Mode, type:
   `\`\`html
   <ul>
     <li>Track 1: Drums</li>
     <li>Track 2: Bass</li>
   </ul>
   `\`\`
2. Preview to see your bullet points.

## 3. Adding Color
1. Type: `<font color="blue">This is a smooth vibe</font>`.
2. Use Hex codes for specific colors: `<font color="#FF5500">Orange Alert</font>`.

## 4. Multi-Page Setup
1. Click the **Page Numbers** at the bottom to switch tabs.
2. Each tab is saved independently. Use Page 1 for "Lyrics" and Page 2 for "Feedback."

## 5. Mono Reminder
1. Always keep your most important mixing rules visible.
2. Type: `<h2><font color="red">!! CHECK MONO !!</font></h2>`.

```

---

## FILE: 01-Learning\Quick-Reference\02_Vibe_Checklists_HipHop.md

```markdown
# Quick Reference: Vibe Checklists (Hip-Hop & R&B)

Use these templates to ensure your tracks hit the right aesthetic before you export.

---

## 🌊 Moody Loop Build Checklist
- [ ] Sub-octave frequency focus (20Hz - 60Hz) is prominent.
- [ ] High-cut filter sweeps are smooth and automated.
- [ ] Reverb tail is long but filtered at 2kHz (dark).
- [ ] All "happy" high-mid frequencies (3kHz) are slightly dipped.

## 🚀 Upbeat Bounce Checklist
- [ ] Kick and 808 are perfectly sidechained.
- [ ] Snare/Clap has a 1/8 note rhythmic "ghost" note.
- [ ] High-hats have at least 15% swing applied.
- [ ] Transients are limited or hard-clipped for maximum "thump."

## 🍄 Psychedelic Ear-Candy Checklist
- [ ] At least one reversed audio element is present.
- [ ] Phaser or Flanger modulation speed is automated.
- [ ] Wide stereo elements are checked for mono-compatibility.
- [ ] "Random" LFOs are driving at least one textural parameter.

## 🎹 Jazzy Chord Color Checklist
- [ ] Chord voicings include 9ths, 11ths, or 13ths.
- [ ] Vintage saturation/hiss is audible at 5%.
- [ ] Attack times are slightly slowed down for a "lazy" feel.
- [ ] Slight pitch drift (wow/flutter) is applied to the keys.

## ✨ Vibey Space/Motion Checklist
- [ ] Vocal "air" (10kHz+) is boosted and smooth.
- [ ] Reverb is in "Lush" or "Hall" mode with high diffusion.
- [ ] Delay has a slight L/R offset for 3D width.
- [ ] All instruments have a consistent "depth" (none are too dry).

```

---

## FILE: 01-Learning\Quick-Reference\html-basics-for-notebook.md

```markdown
# Quick Reference: HTML Basics for NoteBook

A guide to what works and what doesn't in the NoteBook engine. [SRC: W3SCHOOLS]

## 1. The Engine
Fruity HTML NoteBook uses an older rendering engine (compatible with HTML 3.2). 
- **DOES NOT** support Javascript.
- **DOES NOT** support CSS Flexbox or Grid.
- **DOES NOT** support external `.css` files.

## 2. Text Styling (The Old Way)
Since you can't use a global stylesheet, all styling must be done "inline" or using the `<font>` tag.
- **Size**: `<font size="5">Big</font>` (Range 1-7).
- **Face**: `<font face="Arial">Modern</font>`.
- **Background Color**: `<body bgcolor="black" text="white">` (Apply to the start of the code).

## 3. Paragraphs vs. Breaks
- Use `<p>` for a large block of text with space after it.
- Use `<br>` for a single carriage return (like a poem).

## 4. Hyperlinks
- You can use `<a href="https://image-line.com">Manual</a>`.
- FL Studio will open your default web browser when the link is clicked in Preview mode.

## 5. Comments
- Write notes to yourself that don't appear in the preview:
  `<!-- This is a hidden comment -->`

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Fruity HTML NoteBook

The essential tags and tools for FL Studio documentation. [SRC: IL-MAN]

---

## 🛠️ Editor Icons
- **Pencil**: Edit mode (Source code).
- **Eye**: Preview mode (Rendered view).
- **Page Numbers**: Navigation between 8+ independent pages.
- **Import/Export**: Load/Save `.html` files.

## 🏷️ Essential HTML Tags
- `<b>...</b>`: **Bold** text.
- `<i>...</i>`: *Italic* text.
- `<h1>...</h1>`: Large Header.
- `<font color="red">...</font>`: Colored text.
- `<br>`: Single line break.
- `<hr>`: Horizontal dividing line.
- `<ul><li>...</li></ul>`: Bulleted list.
- `<img src="...">`: Embed an image.

## 📊 Table Structure
`\`\`html
<table border="1" width="100%">
  <tr>
    <th>Track</th>
    <th>Note</th>
  </tr>
  <tr>
    <td>Vocal</td>
    <td>Needs more air</td>
  </tr>
</table>
`\`\`

## 📐 Layout Controls
- `align="center"`: Center text or images.
- `width="50%"`: Size an element relative to the window.

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Documentation)

## 1. Clear Legal Tracking
- **Rule**: Every project must have a "Legal/Credits" page.
- **Why**: Hip-hop relies heavily on samples. If you don't track the loop source (e.g., Splice #12345), you will face clearing issues during distribution.
- **Move**: Use a table to track "Part," "Source," and "Cleared Status."

## 2. High-End Vocal Recall
- **Rule**: Document the exact hardware or pre-amp settings used for vocals.
- **Why**: Vocals are the centerpiece of R&B. If you need to re-record a line 2 months later, you need the documentation to match the tone.
- **Move**: Use an `<img>` tag to show a photo of the hardware settings.

## 3. The "Drop" Checklist
- **Rule**: Use a bolded checklist for the main transition point (The Drop/Hook).
- **Move**: `<font size="5"><b>[ ] 808 Sidechain Checked?</b></font>`
- **Why**: In modern rap, the transition into the hook is everything. A missing automate or phase issue can ruin the bounce.

## 4. Collaborative Consistency
- **Rule**: If sharing a project, use standard colors for roles.
- **Standard**: Red = Fix immediately; Green = Finished; Blue = Creative Suggestion.
- **Move**: Use `<font color="...">` consistently throughout all 8 pages.

```

---

## FILE: 02-Data\templates\copyright-credits.html

```html
<!-- Preset: Copyright & Credits -->
<html>
<body style="font-family: Georgia, serif; color: #eee; background-color: #222; padding: 20px;">
  <div style="border: 1px solid #555; padding: 10px;">
    <h1 style="text-align: center;">Project Title</h1>
    <p style="text-align: center;">&copy; 2026 Artist Name</p>
    <hr>
    <h3>Credits</h3>
    <ul>
      <li><b>Produced by:</b> Name</li>
      <li><b>Vocals:</b> Name</li>
      <li><b>Mixed by:</b> Name</li>
    </ul>
    <p><i>Contact: email@example.com</i></p>
  </div>
</body>
</html>

```

---

## FILE: 02-Data\templates\mix-notes-template.html

```html
<html>
<body bgcolor="#1A1A1A" text="#E0E0E0">
  <h1 align="center"><font color="#00FFFF">SESSION MIX NOTES</font></h1>
  <hr>
  <table border="1" width="100%" cellpadding="5">
    <tr bgcolor="#333333">
      <th>Category</th>
      <th>Task / Revision</th>
      <th>Status</th>
    </tr>
    <tr>
      <td><b>DRUMS</b></td>
      <td>Kick needs more sub (40Hz boost)</td>
      <td><font color="orange">IN PROGRESS</font></td>
    </tr>
    <tr>
      <td><b>VOCALS</b></td>
      <td>De-ess the sibilance on Verse 2</td>
      <td><font color="green">DONE</font></td>
    </tr>
    <tr>
      <td><b>FX</b></td>
      <td>Make transition riser wider</td>
      <td><font color="red">TODO</font></td>
    </tr>
  </table>
  <p><i>Next Steps: Bounce stems for mastering.</i></p>
</body>
</html>

```

---

## FILE: 02-Data\templates\session-log.html

```html
<!-- Preset: Session Log -->
<!-- Paste this into the HTML Notebook source view -->
<html>
<body style="font-family: sans-serif; background-color: #111; color: #ddd;">
  <h2>Session Log</h2>
  <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
    <tr>
      <th>Date</th>
      <th>Task</th>
      <th>Status</th>
    </tr>
    <tr>
      <td>2026-02-04</td>
      <td>Vocal Comping</td>
      <td style="color: yellow;">In Progress</td>
    </tr>
    <tr>
      <td>2026-02-04</td>
      <td>Drum Mix</td>
      <td style="color: lime;">Done</td>
    </tr>
  </table>
</body>
</html>

```

---

## FILE: 02-Data\templates\tracklist-template.html

```html
<html>
<body bgcolor="#000000" text="#FFFFFF">
  <h2><font color="#FFCC00">PROJECT TRACKLIST</font></h2>
  <ul>
    <li><b>01. Intro:</b> Dark textures, no drums.</li>
    <li><b>02. Main Loop:</b> BPM 140, Key: Am.</li>
    <li><b>03. Bass Bus:</b> 808 from "Legacy" pack.</li>
    <li><b>04. Lead Synth:</b> Sytrus - Patch 'Liquid'.</li>
  </ul>
  <hr>
  <p><small>Created by: Production Architect</small></p>
</body>
</html>

```

---

## FILE: 02-Data\templates\tracklist.html

```html
<!-- Preset: Tracklist -->
<html>
<body style="font-family: Arial;">
  <h1>Album Tracklist</h1>
  <ol>
    <li>Intro (Need bridge)</li>
    <li>Summer Vibes (<b>Mixed</b>)</li>
    <li>Sad Piano (<i>Needs recording</i>)</li>
    <li>Outro</li>
  </ol>
</body>
</html>

```

---

## FILE: 03-Workflows\embedding-images.md

```markdown
# Embedding Images

How to display images in Fruity HTML NoteBook.

## Local Images
You can reference images on your hard drive, but **Warning**: If you move the project or send it to a friend, the link will break.
`\`\`html
<img src="C:\Users\Name\Pictures\Reference.jpg" width="300">
`\`\`

## Relative Paths
If you save the image in the same folder as the FLP, you can sometimes use:
`\`\`html
<img src="reference.jpg">
`\`\`
*Note: FL Studio's handling of relative paths in HTML Notebook can be inconsistent depending on the version.*

## Base64 (The Pro Way)
To ensure the image travels with the project, convert your image to a **Base64 string** (using an online converter) and embed it directly.
`\`\`html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...">
`\`\`
This bloats the file size but guarantees the image always loads.

```

---

## FILE: 03-Workflows\by-goal\embedding-images.md

```markdown
# Workflow: Embedding Images (Visual Guide)

*Goal: Include track artwork or routing diagrams inside your project documentation.*

## 🚶 Step-by-Step Setup
1. **Prepare Image**: Take your screenshot. Save it as a `.jpg` or `.png`.
2. **Optimize**: Keep the resolution low (e.g., 800px wide). Use a compressor like TinyJPG to get the file size under 100kb.
3. **Storage**: Save the image in the same folder as your FL Studio project file (`.flp`).
4. **The Code**: Switch to **Edit Mode** in the NoteBook. Use the tag:
   `<img src="my_diagram.jpg" width="100%">`
5. **Preview**: Switch to **Preview Mode**. The image should now fill the width of the NoteBook window.

## 🔄 Variations
- **The "Thumbnail"**: Use `width="50px"` to create a small icon.
- **The "External Link"**: Use a full URL if the image is hosted online:
  `<img src="https://mywebsite.com/logo.png">`

## ⚠️ Pitfalls & Fixes
- **Problem**: Image shows as a broken icon.
- **Fix**: Check the spelling of the filename. Ensure it is in the same folder as the project. 
- **Important**: FL Studio does not "pack" the image into the `.flp` unless you use a specific "Zipped Loop Package." [SRC: IL-MAN]

```

---

## FILE: 04-Reference\supported-html-tags.md

```markdown
# Technical Reference: Supported HTML Tags

A definitive list of what renders in the NoteBook engine. [SRC: IL-MAN]

## 1. Text Formatting
- `<b>, <strong>`: Bold.
- `<i>, <em>`: Italic.
- `<u>`: Underline.
- `<s>`: Strikethrough.
- `<font color="hex" face="name" size="1-7">`: The primary styling tool.

## 2. Structural Elements
- `<h1>` through `<h6>`: Section headers.
- `<p>`: Paragraph block.
- `<br>`: Line break.
- `<hr>`: Horizontal rule.
- `<div>, <span>`: Basic container tags.
- `<blockquote`: Indented text for quotes.

## 3. Lists & Tables
- `<ul>, <ol>, <li>`: Bulleted and Numbered lists.
- `<table>`: Table container.
- `<tr>`: Table Row.
- `<td>, <th>`: Table Cell and Header Cell.
- `align="left|center|right"`: Global alignment attribute.

## 4. Media & Linking
- `<img>`: Image embedding (supports src, width, height).
- `<a>`: Hyperlinks (supports href).

## 5. NOT SUPPORTED (Common Mistakes)
- `<iframe>`: Cannot embed YouTube or other sites.
- `<script>`: No Javascript logic.
- `<style>`: No CSS style blocks in the head.
- `<svg>`: Scalable Vector Graphics will not render.

```

---

