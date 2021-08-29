const path = require('path');
const fs = require('fs');
const {execSync} = require('child_process');
const GuiRoot = process.argv[2] ? 
    path.resolve(process.cwd(), process.argv[2]) :
    path.resolve(__dirname, '../../scratch-gui');

let stdout;

// Replace logo.
fs.copyFileSync(
    path.resolve(__dirname, './replace-logo/scratch-logo.svg'),
    path.resolve(GuiRoot, './src/components/menu-bar/scratch-logo.svg')
);

// Replace homepage.
const renderGui = fs.readFileSync(path.resolve(GuiRoot, 'src/playground/render-gui.jsx'), 'utf-8');
if (!renderGui.includes('xcratch')) {
    try {
        stdout = execSync(
            `cd ${GuiRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.resolve(__dirname, './replace-logo/logo-link.patch')}`
        );
        console.log(`stdout: ${stdout.toString()}`);
    } catch (err) {
        console.error(err);
    }
}