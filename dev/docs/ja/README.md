# Xcratchとは

Xcratch (エクスクラッチ)とは、[MITのスクラッチ3](https://scratch.mit.edu/)をユーザーがつくった拡張機能で簡単に遊べるように変更したモッド・アプリケーションです。

## 特徴
### 必要に応じた拡張機能の読み込み

ユーザーがつくった拡張機能をウェブからインストールして使う事ができます。拡張されたブロックを使ったプロジェクトを Xcratch で開くと、使っている拡張機能を自動的にインストールして開きます。

### Web Bluetooth API 対応

'Web Bluetooth API' に対応したブラウザ (Chrome や Edge 、 iPad では [Scrub](https://apps.apple.com/jp/app/scrub-web-browser/id1569777095) など) で開くと、micro:bit や他の BLE 接続のデバイスを [Scratch Link](https://scratch.mit.edu/microbit) 無しで遊ぶことができます。

### オフラインで利用可能

Xcratch エディターは PWA (Progressive Web Apps) になっているので、一度アクセスすればそれ以降はインターネット通信ができない状態で利用できます。必要に応じてローカルマシンにインストールすることもできます。

### URLからプロジェクトを開く

Xcratchは、インターネット上で公開されているプロジェクトを直接開くことができます。
プロジェクトを直接開くには2つの方法があります。

エディタで `#` を指定して開く

https://xcratch.github.io/editor/#<プロジェクトURL>`。

または、クエリパラメータに `project` というラベルを追加します。

https://xcratch.github.io/editor/?project=<プロジェクトURL>`。

## 拡張機能の例

### ✨ Microbit More 

[Microbit More](https://microbit-more.github.io/index-ja.html) は Xcratch をベースにしたアプリケーションです。あらかじめ "Microbit More" 拡張機能を入れてある Xcratch エディターです。

- [Microbit More 接続テスト](https://microbit-more.github.io/editor/#https://microbit-more.github.io/examples/basic/connection.sb3) 
