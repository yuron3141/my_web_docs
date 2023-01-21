# TypeScript基礎<!-- omit in toc -->
TypeScriptはMicrosoftによって開発されたAltJSの言語(JavaScriptの拡張版)です。 型チェックなどの機能があるためコンパイルに時間がかかる特徴があります。
JavaScriptとは異なる言語ではなく、型に関すること以外のコードについては通常のJavaScriptと同様の構文を使って記述することができます。

## 目次<!-- omit in toc -->
- [1. TypeScriptの環境構築](#1-typescriptの環境構築)
  - [1.1. TypeScriptの基本的な使用方法](#11-typescriptの基本的な使用方法)
  - [1.2. tsconfig.json](#12-tsconfigjson)
  - [1.3. 様々な使い方](#13-様々な使い方)
    - [1.3.1. ts-nodeも合わせた使い方](#131-ts-nodeも合わせた使い方)
    - [1.3.2. webpackを含めた使い方](#132-webpackを含めた使い方)
    - [1.3.3. webpack+reactの使い方](#133-webpackreactの使い方)
- [2. TypeScriptの基本文法](#2-typescriptの基本文法)
  - [2.1. 値・型・変数](#21-値型変数)
    - [2.1.1. 型一覧](#211-型一覧)
    - [2.1.2. unknownとany](#212-unknownとany)
    - [2.1.3. nullとundefined](#213-nullとundefined)
    - [2.1.4. neverの使用例](#214-neverの使用例)
    - [2.1.5. 型定義(type)](#215-型定義type)
- [3. TypeScript向けのパッケージ](#3-typescript向けのパッケージ)
  - [3.1. zod](#31-zod)
  - [3.2. Prisma](#32-prisma)


| 名称 | URL |
| ---- | ---- |
| サバイバルTypeScript | https://typescriptbook.jp/ |

# 1. TypeScriptの環境構築
## 1.1. TypeScriptの基本的な使用方法
インストールと確認(**使用にはNode.js必須**)
```
npm install -D typescript //開発モードでのinstall

npx tsc -v

npx tsc --init //tsconfig.jsonの作成
```

tsファイルのコンパイル
```
tsc ファイル名
```

## 1.2. tsconfig.json
### 各設定パラメータ<!-- omit in toc -->
| 名称 | 詳細 |
| ---- | ---- |
| compilerOptions | コンパイルする際のオプションを記述するブロック |
| target | どのバージョンのJavScriptに出力するか指定可能(ES2021, ES2020, ES2019, ES2018, ES2017...) |
| lib | 使いたいtargetには使いたい機能がないが使用したい場合にlibオプション指定で使用可能, セットでtargetも明記する必要あり |
|  |  |

### 設定例<!-- omit in toc -->
```
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */

    /* Language and Environment */
    "target": "ES2022",
    /* "lib": ["DOM", "ES2021"], */

    /* Modules */
    "module": "CommonJS",
    "moduleResolution": "Node",
    "resolveJsonModule": true,

    /* Emit */
    "sourceMap": true,
    "outDir": "./dist",
    "noEmitOnError": true,

    /* Interop Constraints */
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    /* Type Checking */
    "strict": true,

    /* Completeness */
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts", "scripts/**/*.ts"],
  "exclude": ["src/**/*.test.ts", "**/node_modules/**", "dist"]
}
```

## 1.3. 様々な使い方
### 1.3.1. ts-nodeも合わせた使い方
TypeScriptとts-nodeのインストール
```
npm install --save typescript ts-node
```

### 1.3.2. webpackを含めた使い方
この場合、TypeScriptをwebpackで処理するために「ts-loader」も一緒にインストールします。

> ts-loader: JSをTSにトランスコンパイルするパッケージ

```
npm install -D webpack webpack-cli typescript ts-loader
```

webpackを使いやすいようにpackage.jsonのscriptsに自前のビルドコマンドを記述すると便利です。
```json
{
  "scripts": {
    "build": "webpack",
    "watch": "webpack -w"
  },
  "devDependencies": {
    "ts-loader": "^9.2.8",
    "typescript": "^4.6.3",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2"
  },
  "private": true
}
```
typescriptsの設定ファイルtsconfig.json

### 1.3.3. webpack+reactの使い方
初めに webpack関連のパッケージとtypeScript, ts-loaderをインポート
```
npm install -D webpack webpack-cli typescript ts-loader
```
次に「react」「react-dom」モジュールもインストールします。
型定義ファイルも欲しいので「@types/react」「@types/react-dom」も指定します。
```
npm i -S react react-dom @types/react @types/react-dom
```
tsconfig.jsonのjsxオプションにはreactを指定します。
```
{
  "compilerOptions": {
    // 厳密モードとして設定
    "strict": true,
    // ソースマップを有効化
    "sourceMap": true,
    // TSはECMAScript 5に変換
    "target": "ES5",
    // TSのモジュールはES Modulesとして出力
    "module": "ES2015",
    // JSXの書式を有効に設定
    "jsx": "react",
    "moduleResolution": "node",
    "lib": [
      "ES2021",
      "DOM"
    ]
  }
}
```
webpack.config.jsのrulesやresolveの部分で拡張子.tsxを指定します。
```
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/main.tsx",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js"
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};
```
このように設定すると``npm run build``コマンドを入力すると、srcフォルダーに配置したTSXファイルがコンパイルされ、distフォルダーにmain.jsファイルが出力されます。


# 2. TypeScriptの基本文法
## 2.1. 値・型・変数
``let``, ``const``, ``var``の使用は通常通り。

### 宣言例<!-- omit in toc -->
```ts
let Smaple :boolean = false;
```
### 2.1.1. 型一覧
| 型 | 説明 | 使用例 |
| ---- | ---- | ---- |
| boolean | True/false(真偽値)の型 |  |
| number | 全ての数値型(浮動小数点やBinaryなどBigintも含む) |  |
| string | 文字列型 |  |
| array | 値の配列 | ``let list: Array<number> = [1, 2, 3];`` |
| tuple | 値の中身は同じである必要のない配列(数字,文字など) | ``let x: [string, number];`` |
| enum | 列挙型 |  |
| unknown | プロパティ、メソッドへのアクセスができない型(何も入る) |  |
| any | TypeScriptが型のチェックを放棄した型(何でも入る) |  |
| void | 型を全く持たない型(**値を返さない関数の戻り値としてよく使用**) |  |
| null | 下記説明より |  |
| undefined | 下記説明より |  |
| never | 決して発生しない値の型(**関数式やアロー関数式で常に例外を投げるものや、絶対に返さないものに使う**) |  |
| object | Jsのオブジェクト |  |

### 2.1.2. unknownとany
違いは以下リンク
https://typescriptbook.jp/reference/statements/any-vs-unknown

### 2.1.3. nullとundefined
デフォルトではnull と undefined は**number のようなものに null と undefined を代入**します。

-strictNullChecks フラグを使用すると、null と undefined は unknown、any、およびそれぞれの型にのみ代入可能です 
(ただし、undefined は void にも代入可能です)。
これにより、多くの一般的なエラーを回避することができます。

### 2.1.4. neverの使用例
```ts
// 関数の戻り値は到達可能な終点を持っていてはいけない
function error(message: string): never {
  throw new Error(message);
}

// 推定された戻り値の型は決してありません。
function fail() {
  return error("Something failed");
}

// 関数の戻り値は到達可能な終点を持っていてはいけない
function infiniteLoop(): never {
  while (true) {}
}
```

### 2.1.5. 型定義(type)
typeは型エイリアスと呼ばれ文字通り型定義を扱うものです。
オブジェクトや配列の型を強制できます。

下記例ではtypeで定義した型をuseStateで使用しています。
```ts
const [todos, setTodos] = useState<SampleType[]>([]);
  
type SampleType = {
  name: string;
  age: number;
  isAdult: boolean;
};
```

他に型定義が可能な記法には「interface」があるが割愛

# 3. TypeScript向けのパッケージ
## 3.1. zod
zodはTypeScript First な**バリデーションライブラリ**です。

> installの際はtsのバージョンを要確認(4.5以上)

```
npm install zod
```

公式ドキュメント: https://zod.dev/

## 3.2. Prisma
Prisma は、Node.jsでORMを実装するためのパッケージ。

```
npx prisma
```

公式ドキュメント: https://www.prisma.io/docs