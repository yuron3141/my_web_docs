# Node.js入門<!-- omit in toc -->
Node.jsはJavaScriptを**サーバサイドで動かすための実行環境**である。

また他の環境としてはDenoやBunがあります。

静的サイトで用いるフロントエンドの生JavaScript(HTML/CSSとセットで使うJQueryのような)と異なり、自由なファイルの読み書きやネットワーク通信など扱えること多いです。

またWEBアプリケーションだけではなく、スマホアプリやデスクトップアプリも作ることができます。

## 目次<!-- omit in toc -->
- [1. パッケージ/バージョン管理ツール](#1-パッケージバージョン管理ツール)
  - [1.1. パッケージマネージャ](#11-パッケージマネージャ)
    - [1.1.1. npm/npx](#111-npmnpx)
    - [1.1.2. yarn](#112-yarn)
    - [1.1.3. pnpm](#113-pnpm)
  - [1.2. バージョンマネージャ](#12-バージョンマネージャ)
    - [1.2.1. nvm](#121-nvm)
    - [1.2.2. nvs/fnm](#122-nvsfnm)
    - [1.2.3. nodebrew](#123-nodebrew)
    - [1.2.4. volta](#124-volta)
- [2. 開発によく使う＆便利なパッケージ(モジュール)](#2-開発によく使う便利なパッケージモジュール)
  - [2.1. フレームワーク](#21-フレームワーク)
    - [2.1.1. Express](#211-express)
    - [2.1.2. React](#212-react)
    - [2.1.3. Vue.js](#213-vuejs)
    - [2.1.4. Next.js](#214-nextjs)
    - [2.1.5. Nuxt.js](#215-nuxtjs)
    - [2.1.6. Angular.js](#216-angularjs)
    - [2.1.7. Electron](#217-electron)
    - [2.1.8. React Native](#218-react-native)
    - [2.1.9. Nest.js](#219-nestjs)
    - [2.1.10. Astro](#2110-astro)
    - [2.1.11. Fastify](#2111-fastify)
    - [2.1.12. Vite](#2112-vite)
    - [2.1.13. Svelte](#2113-svelte)
  - [2.2. モジュール(ライブラリ)系パッケージ](#22-モジュールライブラリ系パッケージ)
    - [2.2.1. request](#221-request)
    - [2.2.2. socket.io](#222-socketio)
    - [2.2.3. axios](#223-axios)
    - [2.2.4. async](#224-async)
    - [2.2.5. moment](#225-moment)
    - [2.2.6. helmet](#226-helmet)
    - [2.2.7. bluebird](#227-bluebird)
  - [2.3. ツール系パッケージ](#23-ツール系パッケージ)
    - [2.3.1. eslint / prettier](#231-eslint--prettier)
    - [2.3.2. nodemon](#232-nodemon)
    - [2.3.3. ejs](#233-ejs)
    - [2.3.4. webpack](#234-webpack)
    - [2.3.5. turbopack](#235-turbopack)
    - [2.3.6. babel](#236-babel)
    - [2.3.7. gulp](#237-gulp)
    - [2.3.8. pug](#238-pug)
    - [2.3.9. mocha](#239-mocha)
    - [2.3.10. prisma](#2310-prisma)
    - [2.3.11. zod](#2311-zod)
    - [2.3.12. jest](#2312-jest)
    - [2.3.13. Sequelize](#2313-sequelize)
  - [2.4. JavaScript拡張(AltJS)](#24-javascript拡張altjs)
    - [2.4.1. TypeScript](#241-typescript)
    - [2.4.2. JSX(TSX)](#242-jsxtsx)
    - [2.4.3. CoffeeScript](#243-coffeescript)
    - [2.4.4. Dart](#244-dart)
  - [2.5. データベース系パッケージ](#25-データベース系パッケージ)
    - [2.5.1. mongod](#251-mongod)
    - [2.5.2. sqlite3](#252-sqlite3)
    - [2.5.3. mysql](#253-mysql)
    - [2.5.4. pg](#254-pg)
    - [2.5.5. redis](#255-redis)
  - [2.6. その他のパッケージ(非分類)](#26-その他のパッケージ非分類)
- [3. Node.jsの基本](#3-nodejsの基本)
  - [3.1. 基本操作](#31-基本操作)
  - [3.2. Node.jsで作成されるファイル/ディレクトリ構成](#32-nodejsで作成されるファイルディレクトリ構成)
    - [3.2.1. ファイル/ディレクトリ構成](#321-ファイルディレクトリ構成)
    - [3.2.2. package.json](#322-packagejson)
  - [3.3. Node.jsの標準モジュール一覧](#33-nodejsの標準モジュール一覧)

## 参考URL<!-- omit in toc -->
| 名称 | URL |
| ---- | ---- |
| Node.js公式ドキュメント | https://nodejs.org/ja/docs/ |
| npm公式サイト | https://www.npmjs.com/ |
| npm trends | https://npmtrends.com/ |
| MDN web docs | https://developer.mozilla.org/ja/docs/Web/JavaScript |
| TypeScriptで始めるNode.js入門 | https://ics.media/entry/4682/ |


## 情報提供アドバイザ
| 名前 | GitHub URL |
| ---- | ---- |
| MainOx | https://github.com/MainOx480854119 |

# 1. パッケージ/バージョン管理ツール
Node.jsのバージョンやパッケージを管理するシステムはいくつかあります。
パッケージ管理の有名どころとしては**npm/yarn**などです。
バージョン管理の有名どころとしては**nvm/volta**など。

## 1.1. パッケージマネージャ
### 1.1.1. npm/npx
#### npm(node Package Manager)<!-- omit in toc -->
最もポピュラーで有名どころなNode.jsパッケージマネージャです。

#### 基本npmコマンド<!-- omit in toc -->
| コマンド | 説明 | オプション |
| ---- | ---- | ---- |
| npm install オプション パッケージ名 | パッケージのインストール | -s, -d ,-g, --save, -devなど |
| npm uninstall オプション パッケージ名 | パッケージをアンインストール | -g |
| npm -v | バージョン確認 |  |
| npm init | 初期化(package.jsonの作成) | -y |
| npm list オプション| インストールリストを表示 | -g:グローバルインストールのリスト表示 |
| npm help | ヘルプ機能 |  |

### 1.1.2. yarn
Facebookが開発したJavaScriptのパッケージマネージャーです。
一時期npmよりもyarnの方がインストール速度が速いと言われていましたが現在(2022年)ではほとんど違いがありません。

yarnのインストールはnpm経由でインストールします。
```
npm install -g yarn

yarn -h
```

#### 基本npmコマンド<!-- omit in toc -->
| コマンド | 説明 | オプション |
| ---- | ---- | ---- |
| yarn オプション パッケージ名 | パッケージのインストール | -s, -d ,-g:グローバルインストール |
| yarn remove オプション パッケージ名 | パッケージをアンインストール | -g |
| yarn -v | バージョン確認 |  |
| yarn | package.jsonの記述をもとにパッケージインストール |  |
| yarn upgrade | カレントディレクトリの全パッケージを更新 |  |
| yarn init | 初期化(package.jsonの作成) | -y |
| yarn list オプション| インストールリストを表示 | -g:グローバルインストールのリスト表示 |
| yarn help | ヘルプ機能 |  |


### 1.1.3. pnpm
npmの代替として開発されているパッケージマネージャーです。
インストールの速さと効率性に主眼を置いています。
pnpmには同じファイルを複数のプロジェクト間でシンボリックリンクやハードリンクで管理する特徴があります。

## 1.2. バージョンマネージャ
### 1.2.1. nvm
nvm(Node Version Manager)はNode.jsの管理ツールで複数のNode.jsのバージョンをインストールして切り替えなどが可能です。

#### 基本nvmコマンド<!-- omit in toc -->
| コマンド | 説明 | オプション |
| ---- | ---- | ---- |
| nvm current | 現在アクティブにしている Node.js のバージョン確認 |  |
| nvm install バージョン | nvmを経由してNode.jsのインストール | --lts(LTS版), node(最新版インストール) |
| nvm uninstall バージョン | nvmを経由してNode.jsのアンインストール |  |
| nvm use バージョン | Node.js のバージョンを切り替え(バージョンにsystemを指定するとOS内のNode.jsに切り替え) |  |
| nvm ls | Node.jsのバージョンごとのインストールリストを表示 |  |


### 1.2.2. nvs/fnm
nvs(Node Version Switcher)はNode.jsの管理ツールで複数のNode.jsのバージョンをインストールして切り替えなどが可能です。
fnmも同様です。

### 1.2.3. nodebrew
nodebrewは**MacOS向け**のNode.jsのバージョンを管理するためのツール。
クックパッドのエンジニアが中心となって作成されてるバージョン管理ツールのようです。

### 1.2.4. volta
Rust製のNode.jsのバージョン管理ツール。
今後伸びるかも。

# 2. 開発によく使う＆便利なパッケージ(モジュール)
## 2.1. フレームワーク
### 2.1.1. Express
ExpressはWebアプリケーションを構築するためのフレームワークです。
SPA／MPA／混在のWebアプリケーションが作成できるようにデザインされています。

公式ドキュメント:https://expressjs.com/ja/

### 2.1.2. React
ReactはWEBアプリケーションのフロントエンドを構築するためのフレームワークの1つです。
Meta(旧 FaceBook)により開発されました。また**SPA構築可能**です。

公式ドキュメント:https://ja.reactjs.org/

ReactとNext.jsのGist: https://gist.github.com/yuron3141/3ebadf109ae85646e614aa09155b9a91

### 2.1.3. Vue.js
Vue.jsはWEBアプリケーションのフロントエンドを構築するためのフレームワークの1つです。
Googleの元エンジニアであるエヴァン・ヨー氏により開発されました。また**SPA構築可能**です。
学習難易度はReactよりは低いです。

公式ドキュメント:https://ja.vuejs.org/

### 2.1.4. Next.js
Next.jsはReactをベースに開発されたフロントエンドフレームワークです。
React の機能をサーバサイドでレンダリングできる(SSG)ように作成されました。

Next.jsは「URLルーティング」と呼ばれるリクエストされたURLに対して呼び出すアクションを決定する仕組みや、Webアプリ開発を効率よくするための機能が多く含まれているのが特長です。

Reactと違ってNext.jsは**サーバ機能**があります。そのためNext.jsは単体でWebアプリを動作させることが可能です。

画像・レンダリングの最適化、ファイルベースルーティング機能などがあります。

公式ドキュメント:https://nextjs.org/

ReactとNext.jsのGist: **もうしばらくお待ちください**

### 2.1.5. Nuxt.js
Nuxt.jsはVue.jsをベースに開発されたフロントエンドフレームワークです。
Vue.jsの機能をサーバサイドでレンダリングできる(SSG)ように作成されました。
Vue.jsと違ってNuxt.jsは**サーバ機能**があります。そのためNuxt.jsは単体でWebアプリを動作させることが可能です。

公式ドキュメント:https://nuxtjs.org/ja/

### 2.1.6. Angular.js
Angular.jsは、Googleと個人や企業のコミュニティによって開発されたTypeScriptベースのフロントエンドWebアプリケーションフレームワークです。大規模開発に向いています。

公式ドキュメント:https://angularjs.org/

### 2.1.7. Electron
ElectronはGitHubが開発と管理をしているフリーでOSSのソフトウェアフレームワークです。
Web技術を用いたデスクトップGUIアプリケーションの開発が可能が可能です。
JavaScriptでデスクトップアプリを作成する場合に真っ先に使用を検討すべきフレームワークと言えます。

公式ドキュメント:https://www.electronjs.org/ja/docs/latest

### 2.1.8. React Native
React NativeはIOS(Iphone端末)とAndroidどちらでも動かすことができるモバイルアプリ開発用フレームワークです。
クロスプラットフォームなアプリケーションを開発することが可能です。

公式ドキュメント:https://reactnative.dev/

### 2.1.9. Nest.js
Nest.jsはバックエンド開発フレームワークです。
TypeScriptと相性がいいのが特徴です。

公式ドキュメント:https://docs.nestjs.com/

### 2.1.10. Astro
高速でコンテンツにフォーカスしたWebサイトを構築するためのWebフレームワーク。
立ち位置は Alt wordpressと言えそう。

公式ドキュメント:https://docs.astro.build/en/getting-started/

### 2.1.11. Fastify
Web フレームワーク。
高速かつ低オーバーヘッドになるように設計されており、パフォーマンスと柔軟性がある。

hapi と Express.js  の特徴を受け継いでいる。

公式ドキュメント:https://www.fastify.io/docs/latest/

### 2.1.12. Vite
2020年登場の新しいフロントエンドのビルドツール。

公式ドキュメント:https://ja.vitejs.dev/

### 2.1.13. Svelte
フロントエンド（画面）部分を構築するためのJavaScriptフレームワーク。

レンダリングはAngular、React、Vue.jsと異なる方法で行われる。

上記で述べたフレームワークより**高いパフォーマンス、軽量なサイズ**なのが特徴。

公式サイト:https://svelte.jp/


## 2.2. モジュール(ライブラリ)系パッケージ
### 2.2.1. request
requestは標準のhttpモジュールを使うよりも簡単で理解しやすい記述でHTTP通信を行うことができるモジュールです。
2021年現在requestは**使用非推奨**になっているため、代わりのモジュールとしてaxiosを使うことを勧めます。

axiosを選択しない場合はnode-fetchやNode.js 18.0より導入されている標準fetch、undiciなどでもHTTP通信可能です。

```
npm install request
```

### 2.2.2. socket.io
socket.ioはWebSocket通信を可能にするモジュールです。
Socket通信では安定かつ簡潔に双方向通信することが可能です。

> WebSocket: 単一のTCPコネクション上に双方向通信のチャンネルを提供する通信プロコトル

```
npm install socket.io
```

またWebSocket通信のための他のライブラリとしては ws などがあります。

### 2.2.3. axios
axiosはブラウザやNode.js上で動く Promise ベースの HTTP クライアントです。
RESTAPIを実行したいときには欠かせません。またrequestの代わりのモジュールとして使えます。

```
npm install axios --save
```

### 2.2.4. async
asyncは非同期処理を効率よく記述できるパッケージです。

```
npm install async
```

### 2.2.5. moment
momentはDate型を扱いやすくするパッケージです。
momentの代用として day というのもあります。(momentより軽量)

```
npm install moment

npm install day
```

### 2.2.6. helmet
helmetはwebアプリケーションをセキュリティ的に堅牢化するパッケージです。
具体的にはHTTP ヘッダを設定することでセキュリティを強化できます。

それぞれのフレームワーク用にパッケージがあるのでそれに沿ってインストールします。

### 2.2.7. bluebird
bluebirdはPromiseを実装したJavaScriptのライブラリです。
このパッケージによりIEなどの未対応の環境(Promiseがサポートされいないブラウザ)でも、bluebirdを利用するPromiseを使えるようになります。

```
npm install bluebird
```

## 2.3. ツール系パッケージ
### 2.3.1. eslint / prettier
#### eslint<!-- omit in toc -->
ESlintはJavaScript のコードを静的に分析して構文エラーや慣習的な問題を見つけることができるパッケージ。リンカー。

ESLintでは様々なルールを使って、コードを自動的にチェックし問題を検出することが可能(自分で設定も可能)。
ESLintはチーム内での共通のスタイルガイドを確立することができます。

```
npm install eslint
```

#### prettier<!-- omit in toc -->
コードのフォーマッター

### 2.3.2. nodemon
nodemonはアプリケーションを実行しているときに、ソースコードが変更された場合に自動的にアプリケーションを再起動することができるパッケージです。アプリケーションを実行しながら開発するときに、変更をすばやく反映することが可能です。

```
npm install nodemon
```

### 2.3.3. ejs
ejsはNode.js のためのテンプレートエンジンであり、HTML ファイルに JavaScript のコードを埋め込むことができます。
reactやvueのinstallした際にbundleされているため基本これだけをインストールすることはないです。

### 2.3.4. webpack
webpackはJavaScript のモジュールバンドラーです。
Webpackを使うことで複数のJavaScript ファイルをまとめて一つのファイルにバンドルすることができます。
またCSSや画像などのアセットもバンドルすることができます。

> モジュール化:別ファイル(モジュール)に分割すること。コードの管理をしやすくすることで、大規模開発などにも対応可能。

モジュール化のメリットは以下の通り。
* 他のコードとの依存性を少なくし、変更、拡張がしやすくなる
* 変数名の競合をさせないことで、名前空間の汚染を防ぐことができる
* 機能ごとにモジュール化するため、再利用がしやすい

> モジュールバンドラー: 複数のJavascriptファイルの依存関係を解析して、一つのファイルとしてまとめてくれる

webpackコマンドを使うためにwebpack-cliを共にインストールのは一般的。
```
npm install webpack webpack-cli
```

「ルートディレクトリ」で「webpack.config.js」内でwebpackのエントリーポイントや出力設定が可能。
```config
module.exports = {
	entry: "", //エントリーポイントの指定(バンドルする対象のファイル場所)

	//ファイルの出力場所と名称を指定
	output: {
		path : `${__dirname}/dist`, //__dirnameは絶対パスで得られる
		//出力ファイル名
		filename: "bundle.js"
	},
	mode: "develeopment", //本番用か開発用か指定
};
```

### 2.3.5. turbopack
turbopackはwebpackの上位互換のモジュールハンドラーです。
2022年現在登場したばかりであり、そのうちwebpackの代わりになるかもしれません。

### 2.3.6. babel
babelは最新(ES20XX)のJavaScript の構文や新しい機能を使ったコードを、古いブラウザや環境でも実行できるように変換することができます。

### 2.3.7. gulp
gulpはWeb アプリケーションの開発プロセスを自動化することができるパッケージです。
コードのビルドやテスト、画像の圧縮などのタスクを、設定した順序で自動実行することができます。

### 2.3.8. pug
pugはNode.js のためのテンプレートエンジンであり、JavaScript のようなシンタックスでHTMLを生成できます。
近年ほとんど使われることはありません。

### 2.3.9. mocha
mochaはテストフレームであり、JavaScript のコードを自動テストすることができるパッケージです。

```
npm install mocha
```

### 2.3.10. prisma
prismaはNode.js/TypeScript環境で利用できるOSSのORM(Object Relational Mapping)パッケージです。
Prisma を使うことで、データベースを操作するためのクエリを簡単に書くことができます。
API を使ってデータベースを操作することができるためデータベースを操作する処理をより安全かつ効率的に行うことができます。(SQL使う必要なし)

> ORM(Object Relational Mapping)ではSQLの代わりにオブジェクトのメソッド(create, update, delete, etc.)を通してデータベースの操作が可能

```
npm install prisma
```

### 2.3.11. zod
TypeScript First なバリデーションのライブラリ。
一応、プレーン JavaScript でも動作する。

他にはjoiなどがある。

```
npm install zod
```

### 2.3.12. jest
テストツール。
```
npm install jest
```

### 2.3.13. Sequelize
typeScriptでORMを使うためのツール。

対応DB:Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server


```
npm install sequelize sqlite3
```
## 2.4. JavaScript拡張(AltJS)
### 2.4.1. TypeScript
Microsoftによって開発されたAltJSの言語(JavaScriptの拡張版)です。
またTypeScriptには型推論があるため自動で変数の型を決定してくれる機能があります。

```
npm install typescript 
```

詳細な使い方のGist: https://gist.github.com/yuron3141/03d099c78eee25a8d79d6c798344b52e/edit


### 2.4.2. JSX(TSX)
JSXはJavaScript内でHTMLっぽい表現をするJavascriptの拡張構文です。
Reactユーザにはおなじみです。

TSXはTypeScript版です。

### 2.4.3. CoffeeScript

### 2.4.4. Dart

## 2.5. データベース系パッケージ
### 2.5.1. mongod
MongoDBをnode.jsで使うためのパッケージです。

### 2.5.2. sqlite3
sqliteをnode.jsで使うためのパッケージです。

### 2.5.3. mysql
MySQLをnode.jsで使うためのパッケージです。

### 2.5.4. pg
postgreSQLをnode.jsで使うためのパッケージです。

### 2.5.5. redis
redisというNoSQLデータベースをNode.jsで使うためのパッケージです。

## 2.6. その他のパッケージ(非分類)
未分類のパッケージ(ライブラリを含む)をここにまとめます。有名どころも混ざってます。
またNode.jsを介しなく利用できるものも含みます。

| 名称 | 種類 | 説明 |
| --- | --- | --- |
| nw.js | フレームワーク | デスクトップアプリ開発フレームワーク(electronより軽量) |
| pixi.js | フレームワーク | ウェブブラウザのcanvas要素に描画する軽量なJavaScriptライブラリ。JavaScript から GPUを扱うWebGL技術を2Dに特化している。ゲームも作れる。 |
| **chart.js** | ライブラリ | データを視覚化するためのライブラリ、円グラフ棒グラフなど8種類に対応 |
| **three.js** | ライブラリ | ウェブブラウザ上で3次元コンピュータグラフィックスを描画できるライブラリ |
| ffmpeg系 | ライブラリ | 動画,・音声処理系ライブラリ(ffmpeg, ffmpeg-static, fluent-ffmpegなど) |
| puppeteerなど | ライブラリ | WEBスクレイピングができる(puppeteer, playwright, selenium, cypress,  cheerio, webdriverio) |
| 暗号化系 | ライブラリ | sodium-native, sodium, tweetnacl, libsodium-wrappersなど |
| sharp | ライブラリ | 画像処理モジュール |
| i18n | ライブラリ | 多言語対応化系(i18n, i18nextなど) |
| pino, wiston | ライブラリ | ロガーツール |
| p5.js | ライブラリ | ProcessingをJavaScriptに移植したディジタルアートを作るためのグラフィック系ライブラリ。ゲームも作れる。 |
| Kiwi.js | ライブラリ | ゲーム系 |
| Phaser.js | ライブラリ | ゲーム系。2Dゲーム開発向き |
| phina.js | ライブラリ | ゲーム系。日本語情報が多い |
| Babylon.js | ライブラリ | microsoft製のリアルタイム3Dエンジン |
| lodash.js | ライブラリ | 便利な関数を集めたライブラリ |
| BackBone.js | フレームワーク | RESTfulJSONインタフェースを提供する MVPライブラリ、非常に軽量 |
| Underscore.js | ライブラリ | フロント側で大量のデータ処理をする際のロジックを簡素化するのに使える機能群 |

# 3. Node.jsの基本
## 3.1. 基本操作
Node.jsを使って作成するアプリケーションは基本的にnpm / yarnを使ってアプリの起動や停止を行います。

nodeコマンド``node ファイル名``でも実行可能ですが、開発では一般的に使われません。

### npmの例<!-- omit in toc -->
package.jsonのscriptsフィールドに起動コマンドを設定し起動します。
```json

 "scripts": {  
    "start": "node index.js",
    "hoge": "echo 'hogehoge'"
  },

```

実行する際は``npm start``と入力することで起動できます。
停止はいつもどおり「Ctrl + C」。

スクリプトを実行する場合は``npm run スクリプト名``です。
上記の場合だと、``npm run hoge``で実行できます。


## 3.2. Node.jsで作成されるファイル/ディレクトリ構成
### 3.2.1. ファイル/ディレクトリ構成
作成される各フォルダやファイル
|  ディレクトリ  |  用途  |
| ---- | ---- |
| public/ | 公開用(デプロイ用)のフォルダ |
| **src/** | **作業(開発用)のフォルダ** |
| node_modules/ | npmなどでインストールした開発に必要なパッケージやライブラリがインストールされるフォルダ |
| **package.json** | アプリケーションの設定 |
| package-lock.json | インストールしたパッケージ情報が記載されているファイル(**編集不要**) |
| README.md | マニュアルなどアプリケーションのドキュメント |
| .gitignore | 	Gitに取り込みたくないファイルを指定するためのファイル |

### 3.2.2. package.json
package.json はパッケージに関する設定情報が記述されたファイルです。
このファイルにより**環境が変わってもコマンド一発で元々あったパッケージをインストールすることが可能**です。
パッケージ管理の設計書であるため、どんな環境においてもpackage.jsonを読み込むことで同じパッケージをインストールすることができます。

サンプル
```json
{
  "name": "myProject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": { 
    "jquery": "^3.5.1",
    "sass": "^1.22.12"
  }
}
```

よく使うフィールドやパラメータ
|  パラメータ/フィールド  |  用途  |
| ---- | ---- |
| name | パッケージ名(必須) |
| version | パッケージのバージョン |
| private | パッケージの公開設定の有無 |
| description | パッケージの説明 |
| main | パッケージの中で最初に呼ばれるモジュール（ファイル）を指定(パッケージルートディレクトリからの相対パスを指定) |
| homepage | プロジェクトのHP（URL）を指定する |
| **dependencies** | 本番環境でも利用するパッケージやその依存関係が記述される |
| **devDependencies** | 開発環境やテスト環境で利用するパッケージやその依存関係が記述される |
| **scripts** | **スクリプトを実行するエイリアスコマンドを指定する** |
| bin | コマンドとして実行したいファイルを指定する |
| type | commonjs/ESmoduleの切り替えを行う |
| engines | 動かしたいNode.jsのバージョンを指定可能 |

> dependenciesとdevDependenciesを分けるとnpm install時の–productionオプションによってインストールするパッケージを限定できます。


## 3.3. Node.jsの標準モジュール一覧

| モジュール名 | require | 概要 |
| --- | --- | --- |
| Events | events | イベント処理<br>Node.js の API の多くがこれを使った非同期イベント駆動で構築されている。 |
| Stream | - (stream) | ストリームのインターフェース [ベースクラスを使う場合には require]<br>標準出力、 HTTP リクエストなど様々なオブジェクトがこのインターフェースで実装されている。 |
| Console | - | デバッグ用などでのコンソール出力 [console : グローバルオブジェクト]<br>ブラウザーでの console に相当するオブジェクト |
| Process | - | カレントプロセスの情報、操作 [process : グローバルオブジェクト]<br>コマンド引数や環境変数などの情報や exit による終了など プログラムとして動作するために必要な基本的な機能群 |
| Child Processes | child_process | 外部プログラムの実行など子プロセスの実行、管理 |
| Cluster | cluster | サーバーポートの複数プロセスでの共有 |
| Readline | readline | 対話型インターフェースのプログラムでよく使われている readline ライブラリーにあたる機能 |
| Utilities | util | 他のモジュールからも呼ばれるような汎用関数群 |
| URL | url | URL の文字列解析 |
| Query Strings | querystring | クエリー文字列(URL 中の ? 以降) |
| Path | path | ファイルパスの文字列処理 |
| File System | fs | ファイルの I/O、ファイル情報の取得、ファイル・ディレクトリー操作 など |
| Buffer | - | バイナリーデータ用ストリームオブジェクト [Buffer : グローバルなコンストラクター]<br>ES6 では Uint8Array があるが、Node.js 的にはこちらがいいらしい。 |
| String Decoder | string_decoder | Buffer のデコーダー |
| DNS | dns | DNS による ドメイン名、 IP アドレス の解決<br>DNS サーバーに直接問い合わせ、OS の機能 の 2 通りの方法が使える。 |
| Punycode | punycode | Punycode (ドメイン名で使われる文字符号化方式) のエンコード、デコード |
| Net | net | ソケット(TCP/IP)通信<br>HTTP などよりも低レベル(下位層)の通信機能 |
| HTTP | http | HTTP サーバー、クライアント |
| HTTPS | https | HTTPS(TLS/SSL を使った HTTP)用 |
| TLS/SSL | tls | TLS/SSL (暗号化した通信) |
| Crypto | crypto | OpenSSL などをラップした暗号化機能 |
| ZLIB | zlib | GZip, Inflate でのデータ圧縮、解凍<br>最近の http サーバーでは gz で圧縮されたまま送って、ブラウザーで解凍することが多い |
| UDP/Datagram | dgram | UDP (データグラムを送受信するプロトコル)通信<br>TCP と違いデータの完全性が保証されないので、途中でデータが抜け落ちても問題が少ない音声や画像のストリーム配信などに使われる。 |
| OS | os | OS 関連情報の取得<br>どの OS かというだけなら process.platform で可能。 |
| V8 | v8 | V8 エンジン関連 |
| VM | vm | JavaScript コードの実行<br>JavaScript 標準の eval() より細かく制御できる。 |

参考(Node.js 19.2.0 Document):https://nodejs.org/dist/latest-v19.x/docs/api/