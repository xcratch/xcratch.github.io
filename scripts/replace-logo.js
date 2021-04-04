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
try {
    stdout = execSync(
        `cd ${GuiRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.resolve(__dirname, './replace-logo/logo-link.patch')}`
    );
    console.log(`stdout: ${stdout.toString()}`);
} catch (err) {
    // already applyed
    console.error(err);
}
