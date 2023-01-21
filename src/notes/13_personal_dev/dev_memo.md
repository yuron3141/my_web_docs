# コーディング実装時の小技集<!-- omit in toc -->
コーディングの実装の際に役に立つ小技(ネタ)的なものをまとめます。

## 目次<!-- omit in toc -->
- [1. 配列やオブジェクトに関連する実装](#1-配列やオブジェクトに関連する実装)
  - [1.1. ユニークキー(ユニークなオリジナル値)の設定手法](#11-ユニークキーユニークなオリジナル値の設定手法)
    - [1.1.1. タイムスタンプによる実装](#111-タイムスタンプによる実装)
- [2. サーバサイドにおける情報取得や演算の実装](#2-サーバサイドにおける情報取得や演算の実装)
  - [2.1. サーバ側(バックエンド)におけるグローバルIPアドレスの取得方法](#21-サーバ側バックエンドにおけるグローバルipアドレスの取得方法)
- [3. セキュリティ実装(暗号化など)](#3-セキュリティ実装暗号化など)
- [4. デイコード(値やデータの表示)実装](#4-デイコード値やデータの表示実装)
  - [4.1. 数字の桁表示](#41-数字の桁表示)


---
# 1. 配列やオブジェクトに関連する実装
## 1.1. ユニークキー(ユニークなオリジナル値)の設定手法
### 1.1.1. タイムスタンプによる実装
文字通りタイムスタンプ(日時と時刻)から作成する例

### JavaScriptの場合<!-- omit in toc -->
```js
const id = new Date().getTime()
```

# 2. サーバサイドにおける情報取得や演算の実装
## 2.1. サーバ側(バックエンド)におけるグローバルIPアドレスの取得方法
方法はいくつかありますが、外部サーバ(第3者サーバ)を利用しない場合を記述します。

### Rails(Ruby)における実装例<!-- omit in toc -->
* ``request.remote_ip``を利用する方法
* HTTPリクエストのX-Forwarded-For の値を取得する方法

```ruby
@remote_ip = request.env["HTTP_X_FORWARDED_FOR"]
@remote_ip = request.remote_ip
```

### サーバサイドJavaScript(Node.js)における実装例<!-- omit in toc -->
HTTPリクエストのヘッダから取得すればよい

下記コードが実装参考
```js
const clientIP = function(request){
 
  let ipAddr = '172.17.0.0';
 
  if (request.headers['x-forwarded-for']) {
    ipAddr = request.headers['x-forwarded-for'];
  }else if (request.connection && request.connection.remoteAddress) {
    ipAddr = request.connection.remoteAddress;
  }else if (request.connection.socket && request.connection.socket.remoteAddress) {
    ipAddr = request.connection.socket.remoteAddress;
  }else if (request.socket && request.socket.remoteAddress) {
    ipAddr = request.socket.remoteAddress;
  }
 
  return ipAddr;
};
```


# 3. セキュリティ実装(暗号化など)

# 4. デイコード(値やデータの表示)実装
## 4.1. 数字の桁表示
### javaScriptの例<!-- omit in toc -->
```js
//1桁を2桁に表示する例
let string = ("0" + nowTime.hour).slice(-2);
```
