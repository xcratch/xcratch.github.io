# How to Make Extension

## Setting Up the Development Environment
### Setting Up the Xcratch Development Server

To develop an extension, you need to clone [xcratch/scratch-vm#xcratch](https://github.com/xcratch/scratch-vm/tree/xcratch) and [xcratch/scratch-gui#xcratch](https://github.com/xcratch/scratch-gui/tree/xcratch) into the same directory as your extension code. The directory structure is expected to be as follows during development:

```
.
├── scratch-vm
├── scratch-gui
└── xcx-my-extension
```

Use the following commands to clone scratch-vm and scratch-gui, and install the necessary packages for development. The last command sets up the development environment for xcratch/scratch-gui itself.

```sh
git clone -b xcratch https://github.com/xcratch/scratch-vm.git
cd ./scratch-vm
npm install
cd ../
git clone -b xcratch https://github.com/xcratch/scratch-gui.git
cd ./scratch-gui
npm install
npm run setup-dev
```

### Generating Scaffold Code

To create a new extension for Xcratch, use [xcratch-create](https://www.npmjs.com/package/xcratch-create) to generate the scaffold code. xcratch-create is a Node executable script that downloads template code and replaces properties with arguments. The files created locally can be used as the base for the new extension.

```sh
npx xcratch-create --repo=xcx-my-extension --account=githubAccount --extensionID=myExtension --extensionName='My Extension'
```

`xcratch-create` accepts the following command-line arguments:

- --repo : Name of the repository on GitHub
- --account : Account on GitHub
- --extensionID : ID of the extension in Xcratch
- --extensionName : Name of the extension in Xcratch


### Setting Up the Local Repository

This code is intended to be published on [GitHub](https://github.com/).

```sh
cd xcx-my-extension
git init -b main
```

Create a [new repository on GitHub](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository), and add that repository as a remote for your local repository.

```sh
git remote add origin <REPO_URL>
```

Then commit and push all files like this.

```sh
git add .
git commit -m "Scaffold code"
git push -u origin main
```

Next, install the Node.js dependency packages.

```sh
npm install
```

Use the following command to create a reference link to the scratch-vm folder needed for development.

```sh
npm run setup-dev
```

### Building Module Files

To build the extension into a module file that can be used, use [rollup.js](https://rollupjs.org/guide/en/). The following command creates a module file that combines the necessary source code into one using rollup.js.

```sh
npm run build
```

The built module is saved in `dist/extensionID.mjs`.

To automatically build according to changes in the source code, execute `npm run watch`.

```sh
npm run watch
```

### Retrieving Module Files via a Web Server

To debug the built module, you need to retrieve the module via a web server.

For example, set up [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in your local repository and load the module in the Xcratch editor as follows. (The port number and path of the URL will vary depending on the settings of Live Server)

1. Open the Xcratch Editor.
2. Click the "Add Extension" button.
3. Select the "Load Extension" extension.
4. Enter the URL of the module in the input field and press the "OK" button.

```
https://localhost:5500/dist/extensionID.mjs
```

### Debugging with the Xcratch Development Server

When you set up the development environment for xcratch/scratch-gui, you can start the development server with `npm run start`. If you need an https server, start with the `--https` option. For this, you need to prepare a certificate locally with [mkcert](https://github.com/FiloSottile/mkcert) or similar.

```sh
npm run start -- --https
```

If you use [Visual Studio Code](https://code.visualstudio.com/), you can debug the development server using "debug on dev-server" in `scratch-gui/.vscode/launch.json`. If you load the extension module on this development server, you can set breakpoints in the extension source code and debug it with the debugging function of Visual Studio Code.

----

## Distributing the Extension

### Deployment to GitHub Pages

You can use [GitHub Pages](https://pages.github.com/) to deploy the extension module file.

To publish the module on GitHub Page, follow [GitHub Docs](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) to set the "Source" of Pages in the repository settings.

If you set the "Source" of Pages to "`/(root)`" in the "`main`" branch, the extension module will be published at `https://<account>.github.io/<repository>/dist/<extensionID>.mjs`.

If you want to publish the extension module on another server, check whether that server accepts [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) from `https://xcratch.github.io/`. If CORS is not enabled on the server, Xcratch cannot import the module.


### Showing Examples

Xcratch can open a project from a URL and automatically load all extensions used in the project without entering the extension-URL.

Create a sample project using at least one block of the newly created extension, save it as `projects/example.sb3`, and you can open this project in Xcratch with the following URL.

```
https://xcratch.github.io/editor/#https://<account>.github.io/<repository>/projects/example.sb3
``` 

You can also embed a moving project in a web page with the following HTML.

```html
<iframe src="https://xcratch.github.io/editor/player#https://<account>.github.io/<repository>/projects/example.sb3" width="600px" height="500px"></iframe>
```