# JavaScript基礎(メモ)<!-- omit in toc -->
JavaScript(ES2015以降)に関して。

基本はこのドキュメントと参照URLを参照し、気になる実装方法やメモがあれば追記します。



| 詳細 | URL |
| ---- | ---- |
| MDN JavaScript ガイド | https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide |
| JavaScript Primer | https://jsprimer.net/basic/ |

## 目次<!-- omit in toc -->
- [1. よく使いがちな配列メソッド](#1-よく使いがちな配列メソッド)
  - [1.1. map](#11-map)
  - [1.2. filter](#12-filter)
  - [1.3. forEach](#13-foreach)
  - [1.4. some](#14-some)
  - [1.5. every](#15-every)
  - [1.6. reduce](#16-reduce)
  - [1.7. includes](#17-includes)
  - [1.8. concat](#18-concat)
  - [1.9. entries](#19-entries)
  - [1.10. fill](#110-fill)
  - [1.11. find](#111-find)
  - [1.12. flat](#112-flat)
  - [1.13. indexof](#113-indexof)
  - [1.14. join](#114-join)
- [2. JSONメソッド](#2-jsonメソッド)
  - [2.1. JSON.parse()](#21-jsonparse)
  - [2.2. JSON.stringify()](#22-jsonstringify)
- [3. 同期・非同期関連](#3-同期非同期関連)
  - [3.1. JavaScriptの同期・非同期の扱い](#31-javascriptの同期非同期の扱い)
  - [3.2. Promise](#32-promise)
    - [3.2.1. Promiseメソッド(all, race, allSettled, any)](#321-promiseメソッドall-race-allsettled-any)
  - [3.3. async/await](#33-asyncawait)
  - [3.4. 例外処理(try, catch)](#34-例外処理try-catch)
- [4. その他実装注意](#4-その他実装注意)
  - [4.1. 小数の整数化にはMath.truncを使用せよ](#41-小数の整数化にはmathtruncを使用せよ)
    - [4.1.1. parseIntの代わりにMath.truncを](#411-parseintの代わりにmathtruncを)
    - [4.1.2. parseFloatの代わりにNumber()を](#412-parsefloatの代わりにnumberを)


## 1. よく使いがちな配列メソッド
### 1.1. map
与えられた関数を**配列のすべての要素に対して呼び出し**、その結果からなる**新しい配列を生成**します。
=> **元の配列の内容から新しい配列を作りたいときに使用**

#### 例<!-- omit in toc -->
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

### 1.2. filter
引数として与えられたテスト関数を各配列要素に対して実行し、それに合格したすべての配列要素からなる新しい配列を生成します。
=> **元の配列に対して、条件を満たした要素のみの配列にしたい場合に使用**

```js
const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]

//filterメソッド
const filterdItems = items.filter((item) => {
  return item.price <= 100
})
console.log(filterdItems)
```

### 1.3. forEach
与えられた関数を、配列の各要素に対して一度ずつ実行します。
配列の1つ1つの要素に対して処理したい(独立処理)ものを中に記述します。(**配列の中身の値変換では使わない(<=これはmapで行う)**)

### 1.4. some
配列の**少なくとも 1 つの要素**が渡された関数によって実施されるテストに通るかどうかをテストします。
返り値は``真偽値(true/false)``。
=> その配列の中身が条件を満たしているかを調べるのに使用

```js
const checkArrayHaveitem = array.some((item) => {
  return item.exist === true;
})
//array中のobjectのexistキーにtrueが1つでもあれば、この場合はtrueを返す
```

### 1.5. every
与えられた関数によって実行されるテストに、配列の**すべての要素**が通るかどうかをテストします。
everyは最低1つだが、everyは全て。

### 1.6. reduce
配列の各要素に対して（引数で与えられた）reducer 関数を実行して、単一の値にします。
=> **配列内のすべての値に対して演算して、新しい値(単一の値)を得たいときに使用**

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 10;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```


### 1.7. includes
特定の要素が配列に含まれているかどうかを true または false で返します。
=> **配列に特定の値が含まれているか調べたいときに使用**

```js
const numbers = [1, 2, 3, 4, 5]

// includesメソッド
const includesNumber = numbers.includes(7)
console.log(includesNumber)
// false
```

### 1.8. concat
2 つ以上の配列を結合するために使用します。
このメソッドは**既存の配列を変更せず、新しい配列を返します**。

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

### 1.9. entries
配列内の各要素に対する**キー/値のペアを含む新しい Array 反復子オブジェクト**を返します。

```js
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

```
### 1.10. fill
開始位置（既定値は 0）から終了位置（既定値は array.length）までのすべての要素を、静的な値に変更した配列を返します。

```js
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

### 1.11. find
与えられたテスト関数を満たす配列内の**最初の要素**を返します。
テスト関数を満たす値がない場合は、 **undefined** を返します。

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

### 1.12. flat
すべてのサブ配列の要素を指定した深さで再帰的に結合した新しい配列を生成します。

```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

### 1.13. indexof
引数に**与えられた内容と同じ内容を持つ最初の配列要素の添字**を返します。存在しない場合は **-1** を返します。

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```

### 1.14. join
配列（または配列風オブジェクト）の全要素を順に連結した文字列を新たに作成して返します。

```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

## 2. JSONメソッド
### 2.1. JSON.parse()
文字列をJSONとして解析し、文字列によって記述されている JavaScript の値やオブジェクトを構築するメソッド。

```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
```

### 2.2. JSON.stringify()
JavaScript のオブジェクトや値を JSON 文字列に変換するメソッド。
置き換え関数を指定して値を置き換えたり、置き換え配列を指定して指定されたプロパティのみを含むようにしたりすることも可能。

```js
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""
```
## 3. 同期・非同期関連
### 3.1. JavaScriptの同期・非同期の扱い
nミリ秒後に実行する関数である``setTimeout(() => (), 1000)``を使ったコード例です。
```
console.log("1番目");

// 1秒後に実行する処理
setTimeout(() => {
  console.log("2番目(1秒後に実行)");
}, 1000);

console.log("3番目");
```
このコードでの実行フローは「1番目」=>「3番目」=>「2番目(1秒後に実行)」となります。

これは**JavaScriptが非同期言語**であるため、一つ前の実行に時間がかかった場合、実行完了をまたずに次の処理が行われるためです。

> Web開発における非同期処理はfetchなどを使って外部サーバからデータを取得する(APIなど)やn秒後に実行するといった処理となることが多いです。

JavaScriptによる非同期処理と同期処理を扱うための書き方や関数には古いもの(ES2015以降)だと「setTimeout」「Promise」、新しいもの(ES2017以降)には「async/await」があります。


### 3.2. Promise
Promiseは非同期処理と同期処理の流れを扱うための**JavaScriptのオブジェクト**です。

Promiseは以下の3状態を持ちます。
* pending ... 非同期処理の実行中の状態
* fulfilled ... 非同期処理の完了状態
* rejected ... 非同期処理が異常終了した状態

**Promiseの記法例1**
```js
const exPromise = new Promise((resolve, reject) => {
  //実行される関数がここに入る(関数1)
);

exPromise.then(funcA, funcB); //funcAには試される関数が入る(fetchなど...),
```
``exPromise.then(funcA, funcB);``はこの場合以下のような挙動をします。

1. funcAが成功(実行されたら)したら、その後に(関数1)が実行される (この処理の流れは同期的 funcA -> 関数1)
2. funcAが失敗したら、funcBが実行される

**Promiseの記述例2**
```js
const myPromise = new Promise(
  //関数1がここに入る
);


myPromise
.then(funcA)
.then(funcB)
.then(funcC)
.catch(failedFunc);
```
上記の場合、funcAが成功(実効できたら)したら関数1が実行され、その後funcBが成功したら再び関数1が実行されます。またその後funcCが成功したら再び関数1が実行されます。なおいずれも途中で失敗した場合はfailedFuncが実行されます。


#### Promiseオブジェクト内の同期非同期の関係<!-- omit in toc -->
```js
new Promise((resolve, reject) => {
  // 同期処理
}).then(() => {
  // resolveの実行を待って非同期処理
}).catch(() => {
  // rejectの実行を待って非同期処理
}).finally({
  // resolveかrejectの実行を待って非同期処理
});
```

#### thenメソッドに関して<!-- omit in toc -->
thenメソッドはPromise オブジェクトに渡されたコールバック関数の処理結果を取得するインスタンスメソッドです。
=> thenメソッドによりPromise に渡されたコールバック関数の**処理結果を受け取ることが可能**

#### 3.2.1. Promiseメソッド(all, race, allSettled, any)
* Promise.all() 

引数に指定した全てのPromiseオブジェクトを実行するメソッド。
全てのPromiseが履行されるか、または1つでも拒否(rejected)になった時点で処理が終了になる。

https://lab.syncer.jp/Web/JavaScript/Reference/Global_Object/Promise/all/

* Promise.race()

反復可能オブジェクトの中のPromiseのうちの 1 つが履行されるか拒否されると、
そのプロミスの値または理由で履行または拒否されるプロミスを返します。

* Promise.allSettled()

与えられたすべてのプロミスが履行されたか拒否された後に、それぞれのプロミスの結果を記述した配列オブジェクトで解決されるプロミスを返します。
=> **複数の非同期タスクがあり、お互いに依存せずに正常に完了する場合や、各プロミスの結果を常に知りたい場合に使用**

* Promise.any()

### 3.3. async/await
async/awaitはPromiseの上位互換的なものと言えます。

#### async<!-- omit in toc -->
asyncを使って宣言された関数は、Promiseオブジェクトを返却する。
=> asyncをつけるとPromiseオブジェクトのreturnの担保となる

* asyncは関数コンテクストにしか使えない

#### await<!-- omit in toc -->
awaitはPromiseを返却する関数の**非同期処理が終わるのを待つ（制御する）記述**。
awaitで受けられるものはPromiseのインスタンスであるため、関数の中でawaitが記載されている場合**必ずasyncを関数の先頭に書く必要**がある。

### 3.4. 例外処理(try, catch)
多言語のtry, catchと基本は同じ。
try内でエラーが起きたらcatchを実行するというもの。

```
try {
  throw new Error();
} catch (e) {
  // エラーハンドリング
} finally {
  // 終了処理
}
```

## 4. その他実装注意
### 4.1. 小数の整数化にはMath.truncを使用せよ
JavaScriptにおいて``parseInt``を用いて整数化してしまいがちですが、これは**文字列を引数にすることを前提にしている**ため、小数値を整数値にするために使用するのは不適切です。

結論から言うと**JavaScriptでparseInt / parseFloat を使わない方が良い**です。

理由: http://nmi.jp/2022-02-03-dont-use-parseInt

#### 4.1.1. parseIntの代わりにMath.truncを

#### 4.1.2. parseFloatの代わりにNumber()を
