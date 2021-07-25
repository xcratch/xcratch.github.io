## How to Make Own Extension

### Development Environment

First of all, download [yokobond/scratch-gui at xcratch](https://github.com/yokobond/scratch-gui/tree/xcratch) and setup it as a base of your extension to be registered. 

```sh
git clone -b xcratch https://github.com/yokobond/scratch-gui.git
cd ./scratch-gui
npm install
```

Then, download [the latest Xcratch Example Code](https://github.com/yokobond/xcratch-example/archive/master.zip) from [yokobond/xcratch-example](https://github.com/yokobond/xcratch-example). This is the base code to be modified as your extension.

Unzip the downloaded file "xcratch-example-master.zip" on the same directory of scratch-gui and rename extracted folder to your extension repo name.

```sh
unzip xcratch-example-master.zip
mv xcratch-example-master xcx-my-extension
```

This code is a [npm](https://www.npmjs.com/) package, so that you need to do `npm install`.

```sh
cd xcx-my-extension
npm install
```

### Extension Development

#### Reset Project

Remove unnecessary files from your project.

```sh
cd xcx-my-extension
rm ./dist/*
rm ./examples/*
```

There are some node scripts in "package.json" to develop original extension. Extension name, ID must be changed for your extension before using the scripts. These scripts assumed the scratch-gui is "../scratch-gui". Download scratch-gui on that location or change the script argument.

There are strings to replace.

- "yokobond" for github account
- "xcratch-example" for repository name
- "xcratchExample" for extension ID
- "Xcratch Example" for extension name
- "XcratchExample" for class name of the extension

This script replace these strings in the all files to specified values.

```shell
node ./scripts/reset-repo.js --username=<github account> --repo=<repository name> --extensionID=<extension ID> --extensionName='<extension name>' --extensionClass=<class name>
```

Initialize local git repository and add all files.

```shell
git init
git add -A
```


#### Register in Local Server

Then register your extension in a Scratch server for debugging. Script `register.js` adds a extension in a local Scratch server. It makes links of source path to local Scratch code, and modifies code of the Scratch to appear the extension in its extension selector. 

Run the register-script by node.js as follows.

```sh
node ./scripts/register.js --link --id=extensionID -C
```

When you could not use Xcratch with some reason, you can register your extension to the normal "LLK/scratch-gui" with `--base=LLK`.

```sh
node ./scripts/register.js --id=extensionID -C --base=LLK
```

register.js accepts these command-line arguments.

- --base : base code to register in (optional, options: "LLK")
- --link : use symbolic link instead of copy sources
- --id : extensionID of this extension
- --dir : directory name of the extension will be copied (optional, default: extensionID)
- --gui : location of scratch-gui from current dir (optional, default: "../scratch-gui")
- --vm : location of scratch-vm form current dir (optional, default: "gui/node_modules/scratch-vm")
- --url : URL to get this module as a loadable extension for Xcratch (optional)
- -C : make the extension as a member of core-extensions


After your extension is registered, start dev-server of scratch-gui and debug using browser's dev-tools.

```sh
cd ../scratch-gui && npm run start -- --https
```



### Module Building

Build-script bundles entry/block code and resources into one module file. It copy files to temporal directories in scratch-gui/scratch-vm and bundles by [rollup.js](https://rollupjs.org/guide/en/).

Run the script by node.js as follows.

```sh
node ./scripts/build.js --name=extensionName --block="./src/block" --entry="./src/entry" --gui="../scratch-gui" --output="./dist"
```

build.js accepts these command-line arguments.

- --name: name of the module file (without '.mjs')
- --block : location of block files from current dir
- --entry : location of entry files from current dir
- --gui : location of scratch-gui from current dir (optional, default: "../scratch-gui")
- --vm : location of scratch-vm form current dir (optional, default: "gui/node_modules/scratch-vm")
- --url : URL to get its module as a loadable extension for Xcratch (optional)
- --output : location to save module form current dir (optional, default: "./build")


### Module Deployment

This repo has github-workflow scripts to deploy your module on its 'gh-pages'. 

First, you make 'gh-pages' branch and set it to publish according with [Configuring a publishing source for your GitHub Pages site - GitHub Docs](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source). 

When you push it to 'master' branch, your code is published under `https://<user>.github.io/<repository>/`. 

So that the URL of your extension module will be `https://<user>.github.io/<repository>/dist/<moduleName>.mjs` . 

Published module can be used in [Xcratch](https://yokobond.github.io/xcratch/). Select 'Extension Loader' extension and input this URL, your extension blocks will appear in the block pallette. 

When you push it to 'develop' branch, `deploy-gh-pages-dev.yml` will be activated. This script publishes all your code under `https://<user>.github.io/<repository>/dev/`. 

When you would like to publish your extension module on another web server, check the server accepts [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) from `https://xcratch.github.io/`. If the server was not enabled CORS, Xcratch cannot import your module. When you get error about CORS, add ```Header set Access-Control-Allow-Origin: "*"``` in ```.htaccess``` of the web-server.


### Extension Auto-loading

Xcratch loads all extensions which is used in the project automatically. 

Example: 
[https://xcratch.github.io/editor/#https://yokobond.github.io/xcratch-example/examples/xcratchExample.sb3](https://xcratch.github.io/editor/#https://yokobond.github.io/xcratch-example/examples/xcratchExample.sb3)

If you make a project using at least one block of your extension and save as `examples/example.sb3`. The project can be opened with Xcratch by URL like following. 

```
https://xcratch.github.io/editor/#https://<user>.github.io/<repo>/examples/example.sb3
``` 

When this URL was opened in a web browser, Xcratch loads your extension module automatically then opens the project. 
