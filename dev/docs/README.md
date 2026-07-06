# What is Xcratch

[Xcratch](https://xcratch.github.io/) is a mod application of [Scratch3 by MIT](https://scratch.mit.edu/) to play with user-made extensions easily.

## Features

### On-demand installation and auto-loading

You can install and use user-made extensions from the web. When you open a project that uses extended blocks, Xcratch automatically installs the required extensions. Extensions are organized with tags so you can filter and search for what you need.

### Preloaded extensions

The Xcratch editor ships with several handy extensions preloaded, so you can use them even when you are offline.

### Load extensions via URL

You can preload extensions before starting a project by adding the `extension` query parameter to the editor URL:

https://xcratch.github.io/editor/?extension=<extension-URL>

Multiple extensions can be loaded at once by repeating the parameter.

### TurboWarp extension support

Xcratch supports [TurboWarp](https://turbowarp.org/) extensions. You can load and use extensions built for TurboWarp in Xcratch.

### Open project from URL

Xcratch can open projects that are published on the Internet directly. There are two ways to do it:

- Open the editor with `#`: https://xcratch.github.io/editor/#<project-URL>
- Add a `project` query parameter: https://xcratch.github.io/editor/?project=<project-URL>

### Web Bluetooth API support

You don't need to run [Scratch Link](https://scratch.mit.edu/microbit) to play with micro:bit or other BLE devices when your browser supports the Web Bluetooth API (Chrome, Edge, Chromebook browser, [Scrub](https://apps.apple.com/jp/app/scrub-web-browser/id1569777095) on iPad, and similar).

### Available offline

The Xcratch editor is a PWA (Progressive Web Apps). Once you load it, you can keep using it without further Internet access. Some extensions may still require connectivity. You can also install the editor on your local machine if needed.

## Local Backpack

Xcratch includes a backpack feature so you can store sprites, costumes, sounds, and code blocks for easy reuse across projects. The backpack uses your browser's local storage, so the contents remain available even when you are offline.

## Save Projects in Browser

Xcratch can save your projects locally in the browser, without needing an account or server. This works in the normal editor at https://xcratch.github.io/editor/.

- **Autosave**: your work is saved automatically about once a minute while you edit, and the editor resumes your last project automatically the next time you open it.
- **Project list**: choose "File > Open from project list" to see every project saved in this browser, each shown with a thumbnail, name, and last modified time. From the list you can rename, copy, delete a project, and write a comment for it.
- **Version history**: each save adds a snapshot (with its own thumbnail) to that project's history, so you can look back at earlier versions and restore any of them. Older snapshots are gradually thinned out to save space, while recent ones are kept in detail.
- **Multiple tabs**: if you edit the same project in two browser tabs, Xcratch detects the conflict when you save and lets you choose whether to keep your changes or discard them and load the latest saved version.

Projects are stored in your browser's IndexedDB, so they are tied to this browser and device. To move a project elsewhere or keep a long-term backup, use "File > Save to your computer" to download it as an `.sb3` file.

### Export blocks as images

Right-click in the blocks area to export selected blocks or all blocks as SVG or PNG images. This makes it easy to capture and share screenshots of the blocks you've created.

### Edit variable and list values in an editor

Right-click a variable block or an "item N of list" block and choose "Edit value in editor" to open an in-screen text editor where you can rewrite the value of the variable or list item directly. The editor supports multi-line text, which is handy for putting long text with line breaks into a variable.

### Edit a whole list in a dedicated editor

Right-click a list reporter block (the rounded block that shows the entire list) and choose "Edit list..." to open a list editor modal.

In the list view, you can drag rows by the handle (or use the ↑ / ↓ buttons) to reorder items, add new items with "+ Add item", and remove items with the × button. Every change is committed to the list immediately. A "Revert" button restores the list to the state it had when you opened the editor, without closing the modal, so you can recover from accidental edits at any point during the session.

Clicking a row opens a single-item editor with a large textarea for long or multi-line content. A maximize toggle expands the modal to fill the viewport, which is useful for editing paragraphs. The back arrow, the × button, and clicking outside the modal commit the in-progress edit. The "Cancel" button discards it.

### UI improvements from Scratch Foundation version

- Numbers entered with double-byte characters can be used as numerical values.
- Japanese arithmetic operators use clearer symbols (＋, －, ✕, ／).
- New line (\n) and tab (\t) characters can be used for "say", "think", and "=" decisions.
- Code clean-up improves horizontal alignment and animations.
- Comment position bugs that caused comments to move have been fixed.
- You can see the hidden area on the right edge of the block palette.
- Backpack can be used on your own server.
- When embedded in HTML, the editor can be opened and full-screen mode is supported.
