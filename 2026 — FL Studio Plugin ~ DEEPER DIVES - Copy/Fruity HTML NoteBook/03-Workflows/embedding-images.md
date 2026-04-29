# Embedding Images

How to display images in Fruity HTML NoteBook.

## Local Images
You can reference images on your hard drive, but **Warning**: If you move the project or send it to a friend, the link will break.
```html
<img src="C:\Users\Name\Pictures\Reference.jpg" width="300">
```

## Relative Paths
If you save the image in the same folder as the FLP, you can sometimes use:
```html
<img src="reference.jpg">
```
*Note: FL Studio's handling of relative paths in HTML Notebook can be inconsistent depending on the version.*

## Base64 (The Pro Way)
To ensure the image travels with the project, convert your image to a **Base64 string** (using an online converter) and embed it directly.
```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...">
```
This bloats the file size but guarantees the image always loads.
