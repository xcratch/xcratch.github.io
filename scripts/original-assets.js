const path = require('path');
const fs = require('fs');
const {execSync} = require('child_process');
const GuiRoot = process.argv[2] ? 
    path.resolve(process.cwd(), process.argv[2]) :
    path.resolve(__dirname, '../../scratch-gui');

let stdout;

// Replace the default costumes.
fs.copyFileSync(
    path.resolve(__dirname, './original-assets/0fb9be3e8397c983338cb71dc84d0b25.svg'),
    path.resolve(GuiRoot, './src/lib/default-project/0fb9be3e8397c983338cb71dc84d0b25.svg')
);
fs.copyFileSync(
    path.resolve(__dirname, './original-assets/bcf454acf82e4504149f7ffe07081dbc.svg'),
    path.resolve(GuiRoot, './src/lib/default-project/bcf454acf82e4504149f7ffe07081dbc.svg')
);

// Fix project-data.
try {
    stdout = execSync(
        `cd ${GuiRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.resolve(__dirname, './original-assets/default-project.patch')}`
    );
    console.log(`stdout: ${stdout.toString()}`);
} catch (err) {
    // already applyed
    console.error(err);
}
