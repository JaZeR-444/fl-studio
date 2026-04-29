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
