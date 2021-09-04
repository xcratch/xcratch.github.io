# How to Make Extension
## Scaffold Code

`xcratch-create` is a Node executable script to download template code and replace properties with the arguments. The created files can be used as base of your own extension.

```sh
npx xcratch-create --repo=xcx-my-extension --account=githubAccount --extensionID=myExtension --extensionName='My Extension'
```

- --repo : Name of repository on GitHub
- --account : Account on GitHub
- --extensionID : ID of the extension in Xcratch
- --extensionName : Name of the extension in Xcratch


## Setup Environment

The code is supposed to be published on [GitHub](https://github.com/).

```sh
cd xcx-my-extension
git init -b main
```

You will [creating a new repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository) on GitHub and add the repo as a remote of the local repository.

```sh
git remote add origin <REPO_URL>
```

Then commit and push all files like this.

```sh
git add .
git commit -m "First commit"
git push -u origin main
```

You should use [ESLint](https://eslint.org/) with [LLK/eslint-config-scratch](https://github.com/LLK/eslint-config-scratch#readme), so you need to install the depending packages.

```sh
npm install
```

To develop your extension, you have to clone [xcratch/scratch-gui#xcratch](https://github.com/xcratch/scratch-gui/tree/xcratch) and [xcratch/scratch-vm#xcratch](https://github.com/xcratch/scratch-vm/tree/xcratch) on the same directory of your extension code.
Following configuration of directories is assumed for development. 

```
.
├── scratch-gui
└── xcx-my-extension
```

```sh
git clone -b xcratch https://github.com/xcratch/scratch-gui.git
cd ./scratch-gui
npm install
```


## Register in a Local Xcratch

To test and debug your extension, you should register it in Xcratch. Npm-script `register` adds an extension in a local Xcratch editor.

```sh
cd xcx-my-extension
npm run register
```

This script execute `npx xcratch-register` with appropriate arguments. The command copies source code or makes symbolic-link to the local Xcratch repository, and modifies the code of Xcratch to appear the extension in its extension selector.

`npx xcratch-register` accepts these command-line arguments.

- --base : base code to register in (optional, options: "LLK")
- --link : use symbolic link instead of copy sources
- --id : extensionID of this extension
- --dir : directory name of the extension will be copied (optional, default: extensionID)
- --gui : location of scratch-gui from current dir (optional, default: "../scratch-gui")
- --vm : location of scratch-vm form current dir (optional, default: "gui/node_modules/scratch-vm")
- --url : URL to get this module as a loadable extension for Xcratch (optional)
- -C : make the extension as a member of core-extensions

When you could not use Xcratch with some reason, you can register your extension to the normal "LLK/scratch-gui" with `--base=LLK`.

After your extension is registered, start dev-server of scratch-gui and debug using browser's dev-tools.

```sh
cd ../scratch-gui
npm run start -- --https
```

Open https://localhost:8601 with a web browser to check the extension is registered in the Xcratch editor.


## Module Building

Npm-script `build` bundles entry/block code and resources into one module file.

```sh
npm run build
```

This script execute `npx xcratch-build` with appropriate arguments. The command copies files to temporal directories in scratch-gui/scratch-vm and bundles them using [rollup.js](https://rollupjs.org/guide/en/).

`npx xcratch-build` accepts these command-line arguments.

- --module: name of the module file (without '.mjs')
- --block : location of block files from current dir (optional, default: "./src/block")
- --entry : location of entry files from current dir (optional, default: "./src/entry")
- --gui : location of scratch-gui from current dir (optional, default: "../scratch-gui")
- --vm : location of scratch-vm form current dir (optional, default: "gui/node_modules/scratch-vm")
- --url : URL to get its module as a loadable extension for Xcratch (optional)
- --output : location to save module form current dir (optional, default: "./dist")


To check the built module can be loadable into Xcratch, it must be fetched via Web. For example, setup [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) on your local repository then load the module on the public Xcratch editor like following.

1. Open [Xcratch Editor](https://xcratch.github.io/editor)
2. Click 'Add Extension' button
3. Select 'Extension Loader' extension
4. Type the module URL in the input field 
```
https://localhost:5500/dist/extensionID.mjs
```

## Module Deployment

You can use [GitHub Pages](https://pages.github.com/) to deploy your extension module file.

To publish module on GitHub Page, set "Source" of Pages on the repository settings according with [GitHub Docs](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source). 

When you set "Source" of Pages on "`/(root)`" in "`main`" branch, your extension module is published under `https://<account>.github.io/<repository>/dist/<extensionID>.mjs`. 

If you would like to publish your extension module on another server, check the server accepts [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) from `https://xcratch.github.io/`. When CORS was not enabled on the server, Xcratch cannot import your module.


## Show Example

Xcratch can open project from URL and loads all extensions which is used in the project automatically without typing extension-URL.

When you make a sample project using at least one block of your extension and save as `projects/example.sb3`. The project can be opened by Xcratch with URL like following.

```
https://xcratch.github.io/editor/#https://<account>.github.io/<repository>/projects/example.sb3
``` 

You can also embed playable project in a web page with following HTML.

```html
<iframe src="https://xcratch.github.io/editor/player#https://<account>.github.io/<repository>/projects/example.sb3" width="600px" height="500px"></iframe>
```
