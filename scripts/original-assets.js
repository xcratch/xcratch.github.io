const path = require('path');
const fs = require('fs');
const {execSync} = require('child_process');
const GuiRoot = process.argv[2] ? 
    path.resolve(process.cwd(), process.argv[2]) :
    path.resolve(__dirname, '../../scratch-gui');

let stdout;

const projectData = fs.readFileSync(path.resolve(GuiRoot, 'src/lib/default-project/project-data.js'), 'utf-8');
if (!projectData.includes('xcratch')) {

    // Replace the default costumes.
    fs.copyFileSync(
        path.resolve(__dirname, './original-assets/881c5994e99006fc05359d738af66337.svg'),
        path.resolve(GuiRoot, './src/lib/default-project/881c5994e99006fc05359d738af66337.svg')
    );
    fs.copyFileSync(
        path.resolve(__dirname, './original-assets/b6e71f1bf154c8a5470665fe87dd507c.svg'),
        path.resolve(GuiRoot, './src/lib/default-project/b6e71f1bf154c8a5470665fe87dd507c.svg')
    );

    // Fix project-data.
    try {
        stdout = execSync(
            `cd ${GuiRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.resolve(__dirname, './original-assets/default-project.patch')}`
        );
        console.log(`stdout: ${stdout.toString()}`);
    } catch (err) {
        console.error(err);
    }
}