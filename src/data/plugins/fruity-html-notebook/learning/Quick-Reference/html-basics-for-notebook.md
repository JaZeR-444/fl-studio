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
