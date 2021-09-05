# How to Make Extension
## 足場のコード

`xcratch-create` (https://www.npmjs.com/package/xcratch-create) は、テンプレートコードをダウンロードして、プロパティを引数に置き換えるNodeの実行可能スクリプトです。作成されたファイルは、あなたの拡張機能のベースとして使用することができます。

```sh
npx xcratch-create --repo=xcx-my-extension --account=githubAccount --extensionID=myExtension --extensionName='My Extension'
```

`xcratch-create` は以下のコマンドライン引数を受け付けます。

- --repo : GitHub上のリポジトリの名前
- --account : GitHub上のアカウント
- --extensionID : Xcratchでの拡張機能のID
- --extensionName : Xcratchでの拡張機能の名前


## 環境設定

このコードは[GitHub](https://github.com/)で公開する想定になっています。

```sh
cd xcx-my-extension
git init -b main
```

GitHubで[新規リポジトリの作成](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)を行い、ローカルリポジトリのリモートとしてそのレポジトリーを追加します。

```sh
git remote add origin <REPO_URL>
```

Then commit and push all files like this.

```sh
git add .
git commit -m "First commit"
git push -u origin main
```

[ESLint](https://eslint.org/) で [LLK/eslint-config-scratch](https://github.com/LLK/eslint-config-scratch#readme) を使う必要があるので、依存パッケージをインストールしてください。

```sh
npm install
```

拡張機能を開発するためには、[xcratch/scratch-gui#xcratch](https://github.com/xcratch/scratch-gui/tree/xcratch) を、拡張機能のコードと同じディレクトリにクローンする必要があります。
開発時には以下のようなディレクトリ構成を想定しています。

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


## ローカル Xcratch への登録

拡張機能をテスト、デバッグするには、Xcratchに登録する必要があります。Npm-script `register` は、ローカルのXcratchエディタに拡張機能を追加します。

```sh
cd xcx-my-extension
npm run register
```

このスクリプトは、`npx xcratch-register` (https://www.npmjs.com/package/xcratch-register) を適切な引数で実行します。このコマンドは、ローカルのXcratchリポジトリにソースコードをコピーするか、シンボリックリンクを作成し、Xcratchのコードを変更して、その拡張機能選択画面に拡張機能を表示します。

`xcratch-register` は以下のコマンドライン引数を受け付けます。

- --base : 登録するベースコード (オプション, オプション: "LLK")
- --link : コピーの代わりにシンボリックリンクを使う
- --id : この拡張機能の extensionID
- --dir : Xcratchコード内の拡張機能のディレクトリ名 (オプション、デフォルト: extensionID)
- --gui : scratch-gui の場所 (オプション、デフォルト: "../scratch-gui")
- --vm : scratch-vm の場所 (オプション、デフォルト: "gui/node_modules/scratch-vm")
- --url : このモジュールをXcratchのロード可能な拡張機能として取得するためのURL(オプション)
- -C : 拡張機能をcore-extensionsのメンバーにする

何らかの理由でXcratchを使用できなかった場合は、`--base=LLK` によって通常の "LLK/scratch-gui "に拡張機能を登録することができます。

拡張機能の登録が完了したら、scratch-guiのdev-serverを起動し、ブラウザの開発ツールを使ってデバッグを行います。

```sh
cd ../scratch-gui
npm run start -- --https
```

ウェブブラウザで https://localhost:8601 を開き、Xcratch エディターに拡張機能が登録されていることを確認します。

## モジュールの構築

Npm-script `build` は、エントリーやブロックのコードとリソースを1つのモジュールファイルにまとめます。

```sh
npm run build
```

このスクリプトは、`npx xcratch-build`(https://www.npmjs.com/package/xcratch-build) を適切な引数で実行します。このコマンドは、ファイルをscratch-gui/scratch-vm内の一時的なディレクトリにコピーし、[rollup.js](https://rollupjs.org/guide/en/)を使ってそれらを束ねます。

`xcratch-build` は以下のコマンドライン引数を受け付けます。

- --module : モジュールファイルの名前 (ただし、「.mjs」は除く)
- --block : ブロックファイルの場所(オプション、デフォルト: "./src/block")
- --entry : エントリーファイルの場所(オプション、デフォルト: "./src/entry")
- --gui : scratch-gui の場所（オプション、デフォルト："../scratch-gui"）。
- --vm : scratch-vm の場所（オプション、デフォルト：「gui/node_modules/scratch-vm」）。
- --url : Xcratchのロード可能な拡張機能としてそのモジュールを取得するためのURL（オプション)
- --output : モジュールを保存する場所 (オプション、デフォルト: "./dist")


ビルドされたモジュールがXcratchにロード可能かどうかを確認するためには、Web経由でモジュールを取得する必要があります。例えば、ローカルリポジトリに[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)をセットアップし、公開されているXcratchエディタに以下のようにモジュールをロードします。

1. [Xcratch Editor](https://xcratch.github.io/editor) を開きます。
2. 「拡張機能を追加」ボタンをクリックします。
3. 「拡張機能を読み込む」エクステンションを選択します。
4. 入力フィールドに以下のモジュールのURLを入力し、「OK」ボタンを押します。

```
https://localhost:5500/dist/extensionID.mjs
```

## モジュールの配置

拡張モジュールファイルのデプロイには、[GitHub Pages](https://pages.github.com/) を利用することができます。

GitHub Pageでモジュールを公開するには、[GitHub Docs](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) にしたがって、リポジトリの設定でPagesの「Source」を設定します。

"`main`" ブランチでPagesの "Source"を"`/(root)`"に設定した場合、拡張モジュールは `https://<account>.github.io/<repository>/dist/<extensionID>.mjs` で公開されます。

拡張モジュールを別のサーバで公開したい場合は、そのサーバが `https://xcratch.github.io/` から [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) を受け入れているかどうかを確認してください。サーバーでCORSが有効になっていない場合、Xcratchはモジュールをインポートできません。


## 例を示す

Xcratchは、URLからプロジェクトを開き、extension-URLを入力することなく、プロジェクトで使用されているすべての拡張機能を自動的にロードすることができます。

あなたの拡張機能の少なくとも1つのブロックを使用してサンプルプロジェクトを作成し、`projects/example.sb3` として保存すれば、このプロジェクトは、Xcratchで以下のようなURLで開くことができます。

```
https://xcratch.github.io/editor/#https://<account>.github.io/<repository>/projects/example.sb3
``` 

次のようなHTMLで、動くプロジェクトをWebページに埋め込むこともできます。

```html
<iframe src="https://xcratch.github.io/editor/player#https://<account>.github.io/<repository>/projects/example.sb3" width="600px" height="500px"></iframe>
```
