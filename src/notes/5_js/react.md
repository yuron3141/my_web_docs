# React基礎<!-- omit in toc -->
ReactはWEBアプリケーションのユーザインターフェイスを構築するための構築するためのフレームワークです。

複雑な UI を、「コンポーネント」と呼ばれる小さく独立した部品から組み立てることが可能です。
Meta(旧 FaceBook)により開発されました。SPA構成のフロントエンドを作成できるのが最大の特徴でもあります。

## 目次<!-- omit in toc -->
- [1. Reactの基本構造と概念](#1-reactの基本構造と概念)
  - [1.1. Reactの基本知識と特徴](#11-reactの基本知識と特徴)
  - [1.2. Reactの基本操作と構造](#12-reactの基本操作と構造)
    - [1.2.1. 基本操作とインストール](#121-基本操作とインストール)
    - [1.2.2. ディレクトリ構成](#122-ディレクトリ構成)
  - [1.3. JSX(TSX)](#13-jsxtsx)
  - [1.4. コンポーネント](#14-コンポーネント)
    - [1.4.1. props](#141-props)
    - [1.4.2. 関数コンポーネント](#142-関数コンポーネント)
    - [1.4.3. クラスコンポーネント](#143-クラスコンポーネント)
  - [1.5. stateとライフサイクル](#15-stateとライフサイクル)
    - [1.5.1. State](#151-state)
    - [1.5.2. ライフサイクル](#152-ライフサイクル)
  - [1.6. リストとkey](#16-リストとkey)
  - [1.7. コンポジション](#17-コンポジション)
  - [1.8. React開発のアドバイス](#18-react開発のアドバイス)
- [2. Hooks](#2-hooks)
  - [2.1. useState](#21-usestate)
  - [2.2. useEffect](#22-useeffect)
  - [2.3. useContext](#23-usecontext)
  - [2.4. useReducer](#24-usereducer)
  - [2.5. useCallback](#25-usecallback)
  - [2.6. useMemo](#26-usememo)
  - [2.7. useRef](#27-useref)
  - [2.8. useImperativeHandle (ほとんど使いません)](#28-useimperativehandle-ほとんど使いません)
  - [2.9. useLayoutEffect (ほとんど使いません)](#29-uselayouteffect-ほとんど使いません)
  - [2.10. useDebugValue (ほとんど使いません)](#210-usedebugvalue-ほとんど使いません)
- [3. React開発のための便利なパッケージ(モジュール)](#3-react開発のための便利なパッケージモジュール)
  - [3.1. 状態管理(state)フレームワーク](#31-状態管理stateフレームワーク)
    - [3.1.1. redux](#311-redux)
    - [3.1.2. recoil](#312-recoil)
    - [3.1.3. mobx](#313-mobx)
  - [3.2. 機能系ライブラリ](#32-機能系ライブラリ)
    - [3.2.1. react-helmet-async](#321-react-helmet-async)
    - [3.2.2. react-router-dom](#322-react-router-dom)
  - [3.3. React向けのCSSフレームワーク](#33-react向けのcssフレームワーク)
    - [3.3.1. Material UI(MUI)](#331-material-uimui)
    - [3.3.2. Semantic UI React](#332-semantic-ui-react)
    - [3.3.3. Charkra UI](#333-charkra-ui)
    - [3.3.4. Ant Design](#334-ant-design)
    - [3.3.5. React-Bootstrap](#335-react-bootstrap)
    - [3.3.6. Headless UI](#336-headless-ui)
  - [3.4. その他のライブラリなど](#34-その他のライブラリなど)
    - [3.4.1. react-chartjs-2](#341-react-chartjs-2)
    - [3.4.2. react-three-fiber](#342-react-three-fiber)



## 参考URL<!-- omit in toc -->
| 名称 | URL |
| ---- | ---- |
| React 公式ドキュメント | https://ja.reactjs.org/ |
| React 公式 APIリファレンス | https://ja.reactjs.org/docs/react-api.html |
| React 公式 Hook API リファレンス | https://ja.reactjs.org/docs/hooks-reference.html |
| useEffectの挙動注意と間違った使い方の回避方法 | https://tyotto-good.com/blog/avoid-useeffect-mistakes |


# 1. Reactの基本構造と概念
## 1.1. Reactの基本知識と特徴
Reactはコンポーネント指向という「小さな機能ごとの部品に分け必要に応じて組み合わせて開発する」というコンセプトの設計となっています。
コンポーネント指向であれば、あとから改良したい対象のコンポーネントを変更するだけで済むため拡張しやすいです。

また仮想DOMを使っているためWebページを描画する際は**変更が加えられた箇所だけ反映させることが可能**です。
そのためページ全体を更新する必要がないので描画処理が高速になります。

仮想DOMは情報(テキストデータ)やメディアデータ(画像や動画など)のみを変更したいときには便利ですが、そうではなくページ構造自体を大きく更新したい場合は不向きと言えます。(∵ 仮想DOMではDOM構造をメモリ上に保持するため)

そのためReactは**ユーザー操作によって頻繁に表示内容がかわるアプリ・Webページに適している**と言えます。

## 1.2. Reactの基本操作と構造
### 1.2.1. 基本操作とインストール
reactプロジェクトの作成例
```shell
npx create-react-app アプリ名 
or
yarn creat-react-app アプリ名 //yarnでやる場合
or
npx create-react-app アプリ名 --template typescript //typescriptによる開発をする場合
```

グローバルインストールベースでのreactプロジェクトの作成例
```shell
npm install -g create-react-app

create-react-app アプリ名
```

reactプロジェクトの起動
```
npm start
or
yarn start //yarnでインストールした場合
```

### 1.2.2. ディレクトリ構成
基本作成される各フォルダやファイル(src/内)
|  ディレクトリ  |  用途  |
| ---- | ---- |
| index.html | 起点となるrootを持つdiv要素のみのindex.html。開発するときにだいたい削除する。 |
| index.js | Reactアプリの起点となるファイル。 |
| App.js | index.jsから呼ばれているコンポーネント。ここをベースに書き換え作成したコンポーネントを大体呼び出す。 |




開発する際のディレクトリ構成のアドバイスとしては以下のようなものを追加で作るといいかもしれません。

参考程度に。

|  ディレクトリ  |  用途  |
| ---- | ---- |
| components/ | コンポーネントを保存するディレクトリ。このディレクトリ内でさらに細分化も可能。 |
| pages/ | 切り替えるページを格納するディレクトリ。 |
| styles/ | 独自のcssを格納するディレクトリ。 |


## 1.3. JSX(TSX)
JSXはコンポーネントのrenderメソッド内に記述する JavaScript の拡張構文です。

以下のように記述します。
```jsx
const value = 'sapmle';

return{
  <div>
      <h1>Hello World</h1>
      <p>this is a {value}.</p>
  </div>
}
```

JavaScriptの拡張であるためreturn内の``{}``内で囲まれた領域で関数を呼び出したり、変数を入れたりすることなどが可能です。(JavaScriptが記述可能)
コメントアウトも``{}``内で記述します。

JSX記法ではhtmlのクラス指定は``class=""``ではなく**className=\"\"**、style指定は``style=""``内ではなく**style=\{\{\}\}**内に記述します。

img, brなどのタグが閉じないHTML要素の場合は``/``を末尾につけます。
```jsx
<br />
<img src="example.gif" />
```

### イベント処理<!-- omit in toc -->
例1
```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
例2
```jsx
return {
  <div>
    <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
  </div>
}
```
## 1.4. コンポーネント
コンポーネントは**見た目と機能を組み合わせたもの**です。
見た目(ヘッダー,フッターなど)や機能などはコンポーネントであると言えます。

### 1.4.1. props
#### props<!-- omit in toc -->
React のコンポーネントにはpropsという任意の値を渡すことができる機能があります。
propsでは親コンポーネント(Parent)から子コンポーネント(Child)にデータを渡せます。(逆は後述)

これにより同じコンポーネントでも渡された props によって UI やロジックに変化をつけることが可能です。

以下は関数コンポーネントの例です。

コンポーネントの呼び出し
```jsx
<Message name="hogehoge" />
```

呼び出されるコンポーネント
```jsx
const Message = (props) => {
  return <h1>Hello, {props.name}</h1>;
}
```
### 1.4.2. 関数コンポーネント
関数コンポーネントはJSXをシンプルに記述したコンポーネントです。
クラスコンポーネントと異なり、状態（state）やライフサイクルを持ちません。
また``render()``の記述が省略できます。

関数コンポーネントとHooksを組み合わせることで状態(State)とライフサイクルが持てるため、現在はこの**関数コンポーネントとHooksを組み合わせた開発が主流**です。

関数宣言による書き方
```jsx
function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default App;
```

アロー関数による書き方(一般的)
```jsx
const App = () => {
  return (
    <h1>Hello World</h1>
  );
}

export default App;
```

また``render``メソッドのみ(HTMLのみを返したい)場合は``return``を省略可能です。

### 1.4.3. クラスコンポーネント
クラスコンポーネントは``React.Component``を継承したクラスで定義されたコンポーネントです。

状態（state）やライフサイクルを元から持つことが可能です。

```jsx
import React from 'react';

class App extends React.Component {  // React.component を継承するクラスの定義
  render() {  // React 要素 を返り値とする render メソッドを定義
    return (
      <h1>Hello World</h1>
    );
  }
}

export default App;
```

React Hooksの登場により、クラスコンポーネント特有機能の大部分が関数コンポーネントでも使用できるようになったので**ほとんど使うことはない**です。

## 1.5. stateとライフサイクル
### 1.5.1. State
stateはコンポーネントに持たせられる「状態」を指します。
デフォルトの使い方ではクラスコンポーネントのみstateを持たせられますがHooksを使うと関数コンポーネントでも使えます。

クラスコンポーネントの利用は2021年現在一般的ではないのでクラスコンポーネントでのState実装例は省略します。

### 1.5.2. ライフサイクル
ライフサイクルは「コンポーネントが生成され、変化し、消される」までの循環のことです。

<img src="https://storage.googleapis.com/zenn-user-upload/t6l9g6zd0qefdn7r749g3482vr0j" width="60%">

ライフサイクルには3つのフローがあります。

### マウント(Mounting)<!-- omit in toc -->
マウントはコンポーネントのインスタンスが生成されてDOMに挿入されるものです。
React内部的には以下のメソッドが順に呼び出されます。

* 1.　constructor()
* 2.　static getDerivedStateFromProps()
* 3.　render()
* 4.　componentDidMount()

### 更新(Updating)<!-- omit in toc -->
更新はprops や state の変更があるときに呼び出されるものです。コンポーネントが再レンダリングされることと言えます。
React内部的には以下のメソッドが順に呼び出されます。

* 1.　static getDerivedStateFromProps()
* 2.　shouldComponentUpdate() ... 新しいpropsやstateを受け取ったときに実行
* 3.　render()
* 4.　getSnapshotBeforeUpdate()
* 5.　componentDidUpdate()　更新が行われた直後に実行

### アンマウント(Unmounting)<!-- omit in toc -->
コンポーネントが DOM から削除されるときに呼び出されるものです。
React内部的には以下のメソッドが呼び出されます。

* 1.　componentWillUnmount()


## 1.6. リストとkey
配列とmapsを利用したリスト項目の実装例です。
Reactではリスト項目それぞれの情報を保持します。
そのためリストに変更、追加、削除などがあった時にどのリスト項目が変更になったかを伝えるためにkeyを使います。

内部的にはReactはリストが再レンダリングされる際それぞれのリスト項目の key について、前回のリスト項目内に同じ key を持つものがないか探します。その結果によってリスト項目を追加したり、削除したりすることが可能です。

keyの設定例
```jsx
const ListItem = (props) => {
  // ここでは key を指定しない
  return <li>{props.value}</li>;
}

const NumberList = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // ここで key を指定
    <ListItem
      key={number.toString()}
      value={number}
    />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

## 1.7. コンポジション
コンポジションとはコンポーネント間のコードを再利用するためのReactの機能です。(継承の代わりに使えます)
コンポジションではchildrenという特別なPropsを利用して子コンポーネントを出力します。

詳細は省きます(各自調べてください)

## 1.8. React開発のアドバイス
Reactでの開発が慣れないうちは以下のステップで作成することを推奨します。

* 1.　モック(サイトの大まかな見た目)をApp.jsに追加します。returnにカッコを追加し、DOM要素を書いていきます。まずは動かなくていいのでサンプルデータを使って全レイアウトを作成します。
* 2.　パーツ毎にコンポーネント分離しファイル分けを行い、returnの中に書くDOM要素はApp.jsからコピーします。App.jsを修正します。
* 3.　それぞれに動的なパラメータclassコンポーネントならstate等を用いて処理の割り当てを行う。
* 4.　2から3の繰り返しで開発する

# 2. Hooks
React HooksはReact 16.8より追加された機能です。
Hooksを使うことでクラスコンポーネントでしか使うことのできなかった state や ライフサイクルなどの機能を、関数コンポーネントへ付与可能です。
**関数コンポーネントでStateとライフサイクルを持たせるためには必須の機能です。**

フックには2つのルールがあります。
* フックは関数のトップレベルのみで呼び出すこと（ループや条件分岐、ネストした関数の中では呼び出さない）
* フックは React の関数コンポーネントの内部もしくはカスタムフックの内部でのみ呼び出すこと

ESLintでこのルールを設定すると楽にルールを守れます。
(Create React App で作った環境の場合、react-scripts の依存関係として導入されます)

フックは9種類あり、**useStateとuseEffectは基本的であるためもっとも使うことが多い**です。
またHookは自分で独自のものを作ることも可能です。


## 2.1. useState
useStateは **state 機能**を提供するフックです。
クラスコンポーネントのthis.stateとthis.setState()の代わりに使えます。
**表示したいデータ**の状態(State)管理に使用します。

### jsx<!-- omit in toc -->
```jsx
import { useState } from 'react';
const [state, setState] = useState(initialState);
```

### tsx<!-- omit in toc -->
```tsx
import { useState } from 'react';
const [state, setState] = useState<Type>(0);

//useStateに複雑な値(要素の多いオブジェクト型など)を使う場合はtypeを使うとよい
type Type = {
  value : number;
};
```
### 詳細な使い方<!-- omit in toc -->
stateはコンポーネントが内部で保持する状態であり「画面上に表示されるデータ等、アプリケーションが保持している状態」を指します。
この**状態の変更に合わせて再レンダリングを行う**ことが得意です。

値の変更はsetState内で行います。
```jsx
setState(state + 1); //この場合の記述は最新の値を参照できるとは限らない

setState((state) => (state + 1)); //コールバック関数で引数を与えると最新の値を参照する

```

関数内でsetStateを更新しても useStateによる値の更新は**非同期**なため更新後のstateをその続きで参照しても同期しません(即座に更新されない)。
```jsx
const increment = () => {
  setState(state + 1);
  console.log(state); //stateの初期値が0の場合これが実行されても1回目はconsole表示が0のまま
};
```

## 2.2. useEffect
useEffectは **ライフサイクル 機能**を提供するフックです。
クラスコンポーネントの　componentDidMount、componentDidUpdate、componentWillUnmount のメソッドサイクルを利用したい際に使えます。

=> **各サイクルの発火タイミング(Mount,Update, Unmount)により値を変化させたいときに使います**

具体的には**fetch関数を利用して外部のリソースからデータを取得したり、DOMの更新、console.logなどのロギング**などに使います。

1つ目の引数として定義した関数の実行が2つ目の引数の値によって変わります。
* 1. 2つ目の引数の配列が指定されてない場合は、何かのステートが変わる度に実行される
* 2. 2つ目の引数の配列が空だったら、componentDidMount と同じ動きになる
* 3. 2つ目の引数の配列に変数を指定すると、その変数に変化があったときに実行される

```
import { useEffect } from 'react';
useEffect(() => {
    // 実行処理
}, []));
```

### 詳細な使い方<!-- omit in toc -->
```jsx
//引数を指定しない場合、「初回レンダリング後(Mount)と再レンダリング(Update)のたびに実行
useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  
//第二引数に空の配列をセットすることで、初回のレンダリング後(Mount)のみ実行
useEffect(() => {
 　initilize();
}, []); 

//第二引数に変数をセットするとその引数に変化があったときのみ実行
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);

//アンマウント時の処理例
useEffect(() => {
 　initilize();
　 return()=>{
       unMount();
     }
}, []); 
```

## 2.3. useContext
useContextはコンテクスト(props を使わず、コンポーネント間でデータを共有できるもの)オブジェクトを受け取り、そのコンテクストの現在値を返すフックです。言い換えると**異なる階層のコンポーネントとデータの共有を行うことができるフック**です。
親コンポーネントから子コンポーネント(孫コンポーネント)にデータを渡すのに便利なフックです。

=> **親コンポーネント基準で子や孫にデータを渡せるフック(親からの集中制御管理が可能)**

> 実際にアプリに使われるuseContextのデータとしては「ログインに関する情報」や「EC(買い物かご)」などに関する情報などが上げられる。

### 詳細な使い方<!-- omit in toc -->
以下の構造のコンポーネントでの受け渡し例を記述します。
```
App.js (親コンポーネント)
└ ComponentA.js (子1)
　└ComponentB.js (孫1)
 　└ComponentC.js (ひ孫1)
```

・親コンポーネント(App.js)の記述
```jsx
import { createContext } from 'react';
import ComponentA from './components/ComponentA'

export const UserCount = createContext()　//createContext()によりContextオブジェクトの作成

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Learn useContext</h1>
      <UserCount.Provider value={100}> //数字を渡したいコンポーネント(子など)はUserCount.Providerで囲みvalueに渡したい値を設定
      　　<ComponentA/>
      </UserCount.Provider>
    </div>
  );
}

export default App;
```

・値を受け取る子コンポーネントでの記述(例ではコンポーネントC(ひ孫例))
```jsx
import { useContext} from 'react'
import { UserCount } from '../App' //App.js(親)でexportしたUserCountはここでimportする必要あり

const ComponentC = () => {
    const count = useContext(UserCount) //useContextとUserCountを使ってvalueで設定した値を取り出し変数countに入れる
    return (
        <div>
            <p>Componet C</p>
            <p>{count}</p>
        </div>
    )
}

export default ComponentC
```



### UseStateの変数とともに利用する例<!-- omit in toc -->
・親コンポーネント
```jsx
import { createContext, useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

export const UserCount = createContext();

function App() {
  const [count, setCount] = useState(100);
  const value = {
    count,
    setCount,
  };
  return (
    <div className="App">
      <h1>Learn useContext</h1>
      <UserCount.Provider value={value}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
}

export default App;
```

・子コンポーネント(例ではひ孫)
```jsx
import {useContext} from 'react'
import { UserCount } from '../App'

const ComponentC = () => {

    const { count, setCount } = useContext(UserCount);

    return (
        <div>
            <p>Componet C</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default ComponentC
```
## 2.4. useReducer
useReducerはuseStateと同じく状態管理のためのフックです。**複雑な state ロジックがある場合**などに使えます。

```jsx
import React, {useReducer} from 'react'

const [state, dispatch] = useReducer(reducer,'初期値')
//stateは変数
//dispatchはreducerを実行するための呼び出し関数
//reducerはstate(変数)を更新するための関数
```

### 使用例<!-- omit in toc -->
```jsx
//useReducerをimport
import React, {useReducer} from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//counterの初期値を0に設定
//2つのcountStateを扱う。それぞれのinitialStateを設定
const initialState ={
  firstCounter: 0,
  secondCounter: 100
}
//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState, action)=> {
//reducer関数にincrement、increment、reset処理を書く
//どの処理を渡すかはactionを渡すことによって判断する
//switch文のactionをaction.typeに変更
//firstCounter、secondCounter用にcaseを設定
//複数のcounterStateを持っている場合は、更新前のcounterStateを展開し、オブジェクトのマージを行う
  switch (action.type){
    case 'increment1':
      return {...countState, firstCounter: countState.firstCounter + action.value}
    case 'decrement1':
      return {...countState, firstCounter: countState.firstCounter - action.value}
    case 'increment2':
      return {...countState, secondCounter: countState.secondCounter + action.value}
    case 'decrement2':
      return {...countState, secondCounter: countState.secondCounter - action.value}
    case 'reset1':
      return {...countState, firstCounter: initialState.firstCounter}
    case 'reset2':
      return {...countState, secondCounter: initialState.secondCounter}
    default:
      return countState
  }
}
const Counter2 = () => {
//作成したreducerFunc関数とcountStateをuseReducerに渡す
//useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
  const [count, dispatch] = useReducer(reducerFunc, initialState)
//カウント数とそれぞれのactionを実行する<Button/>を設置する
//dispatchで渡しているactionをオブジェクトに変更して、typeとvalueを設定
  return (
    <>
      <h2>カウント：{count.firstCounter}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>dispatch({type: 'increment1', value: 1})}>increment1</Button>
        <Button onClick={()=>dispatch({type: 'decrement1', value: 1})}>decrement1</Button>
        <Button onClick={()=>dispatch({type: 'reset1'})}>reset</Button>
      </ButtonGroup>
      <h2>カウント2：{count.secondCounter}</h2>
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        <Button onClick={()=>dispatch({type: 'increment2', value: 100})}>increment2</Button>
        <Button onClick={()=>dispatch({type: 'decrement2', value: 100})}>decrement2</Button>
        <Button onClick={()=>dispatch({type: 'reset2'})}>reset</Button>
      </ButtonGroup>
    </>
  )
}

export default Counter2
```

参考URL: https://qiita.com/seira/items/2fbad56e84bda885c84c

## 2.5. useCallback
useCallbackはメモ化されたコールバック**関数**を返すフックです。
(依存配列にある値が変化した時のみ再生成するようにするため、**パフォーマンス最適化**に活用)

=> 関数をメモ化できます。

下記例ではcounterが変化したときに重い関数を実行するできるような記述例です。
```jsx
const showcount = useCallback(() => {
  //ここに処理の重い関数内容を記述
}, [counter]);
```

## 2.6. useMemo
useMemoはメモ化された**値を返す**フックです。
(計算結果などをメモ化。依存配列にある値が変化した時のみ再計算するようにするため、**パフォーマンス最適化**に使います)

=> 簡単に言うと**演算回数や多くのデータを処理するような重い処理をuseMemoでラップすることで重い処理を最適化ができる**

> メモ化:同じ結果を返す処理について、初回のみ処理を実行記録(ブラウザのメモリに記録)して値が必要となった2回目以降は前回の処理結果を計算することなく呼び出し値のみを得られるようにすること

## 2.7. useRef
useRefはuseStateと似ているフックです。画面上の変化がなくても値の変化を保持することができます。
(特定の DOM 要素へのアクセス(refによる)や、置き換え可能な値を保持に使えます)

=> **inputタグのref属性の参照(入力値など)の情報取得(保持)に使えるフック**

useStateではstateの値が更新されるたびにコンポーネントの再レンダリングが行われましたが、**useRefは値が変わってもコンポーネントの再レンダリングは行われません。**
つまり**内部に保持している値だけを更新したい場合はuseStateよりuseRefの方が向いていると言えます**。

```jsx
import { useRef } from 'react';
const value = useRef(0);
```

## 2.8. useImperativeHandle (ほとんど使いません)
useImperativeHandleは親コンポーネントから渡された ref をカスタマイズするフックです。
(ref を通して、子コンポーネントで定義した関数を親コンポーネントから呼び出すのに使えます)

## 2.9. useLayoutEffect (ほとんど使いません)
useLayoutEffectはuseEffect と類似している呼び出されるタイミングが微妙に異なるフックです。

## 2.10. useDebugValue (ほとんど使いません)
useDebugValueは React DevTools でカスタムフックのラベル表示ができるフックです。

# 3. React開発のための便利なパッケージ(モジュール)
## 3.1. 状態管理(state)フレームワーク
### 3.1.1. redux
reduxはReactが扱うUIのstate(状態)を管理をするためのフレームワークです。

公式ドキュメント:https://redux.js.org/

### 3.1.2. recoil
recoilはReactが扱うUIのstate(状態)を管理をするためのフレームワークです。

公式ドキュメント:https://recoiljs.org/

### 3.1.3. mobx
mobxはReactが扱うUIのstate(状態)を管理をするためのフレームワークです。

個人的には2021年現在mobxよりreduxを使うことを推奨します。

公式ドキュメント:https://mobx.js.org/react-integration.html

## 3.2. 機能系ライブラリ
### 3.2.1. react-helmet-async
HEADER情報(メタ情報)を書き換えるためのライブラリです。
OGPもこのライブラリで設定可能です。

### 3.2.2. react-router-dom
複数のページを持つReactアプリケーションを構築する際に使えるライブラリです。
複数のページが存在するということはブラウザからアクセスするためのURLが複数存在することとなります。

**使い方解説記事**
| 実装内容 | URL |
| ---- | ---- |
| react-rourer-domによるページ遷移1 | https://dev.classmethod.jp/articles/fix-the-wrong-implementation-of-page-transitions-in-react-app/ |
| react-rourer-domによるページ遷移2 | https://m-kenomemo.com/react-router-dom/#toc15 |
| React router v6でクエリパラメータを渡す | https://qiita.com/kuntaro0524/items/1f4bae3f634782ebc030 |
| React Router v6の基本的な使い方 | https://ralacode.com/blog/post/how-to-use-react-router/ |


## 3.3. React向けのCSSフレームワーク
### 3.3.1. Material UI(MUI)
React向けのCSSフレームワーク。

イメージ画像

<img src="https://v4.mui.com/static/images/themes-light.jpg" width="60%">


公式ドキュメント:https://mui.com/

### 3.3.2. Semantic UI React
React向けのCSSフレームワーク。

イメージ画像

<img src="https://themeforest.img.customer.envatousercontent.com/files/223595468/prevImg/02_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e78ceadc9b1998ce647c6802a9547e73" width="60%">

公式ドキュメント:https://react.semantic-ui.com/

### 3.3.3. Charkra UI
React向けのCSSフレームワーク。

イメージ画像

<img src="https://www.ui-themes.com/content/images/2022/02/argon-dashboard-chakra-dashboard.jpg" width="60%">

公式ドキュメント:https://chakra-ui.com/

### 3.3.4. Ant Design
React向けのCSSフレームワーク。

イメージ画像

<img src="https://www.creative-tim.com/blog/content/images/2021/08/Screen-Shot-2021-08-03-at-17.32.16--1-.png" width="60%">

公式ドキュメント:https://ant.design/

### 3.3.5. React-Bootstrap
React向けのCSSフレームワーク。

### 3.3.6. Headless UI
Headless UI はスタイルを排除したコンポーネント集で、Tailwind CSS と相性がいい特徴があります。

公式ドキュメント:https://headlessui.com/



イメージ画像

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qQ2KnlZc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://graygrids.com/wp-content/uploads/edd/adminkit-screenshot-1-badge.png" width="60%">

公式ドキュメント:https://react-bootstrap.github.io/

## 3.4. その他のライブラリなど
### 3.4.1. react-chartjs-2
グラフを描画するライブラリであるchart.jsをReactで使うためのライブラリです。

公式ドキュメント:https://react-chartjs-2.netlify.app/

### 3.4.2. react-three-fiber
three.jsをReactで使うためのライブラリです。

公式ドキュメントhttps://docs.pmnd.rs/react-three-fiber/getting-started/introduction
