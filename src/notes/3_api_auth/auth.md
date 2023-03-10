# Web 認証技術の基礎<!-- omit in toc -->
この項目ではWeb(HTTP)上で認証する様々な仕組みやその主な利用方法などを確認することができます。

## 目次<!-- omit in toc -->
- [1. 認証とは](#1-認証とは)
  - [1.1. 認証と認可](#11-認証と認可)
  - [1.2. 様々な認証の方法](#12-様々な認証の方法)
- [2. セッションベースの認証](#2-セッションベースの認証)
    - [セッションIDの流出を防ぐチェックポイント](#セッションidの流出を防ぐチェックポイント)
- [3. トークンベースの認証](#3-トークンベースの認証)
  - [3.1. JWT認証](#31-jwt認証)
  - [3.2. OAuth／OAuth2またはOpenIDによる認証](#32-oauthoauth2またはopenidによる認証)
    - [3.2.1. OAuth／OAuth2](#321-oauthoauth2)
    - [3.2.2. Open ID Connect](#322-open-id-connect)
    - [3.2.3. OpenID](#323-openid)
- [4. Authorizationヘッダを用いた認証](#4-authorizationヘッダを用いた認証)
  - [4.1. Basic認証](#41-basic認証)
  - [4.2. Digest認証](#42-digest認証)
  - [4.3. Bearer認証](#43-bearer認証)
- [5. アプリやサービスのセキュリティ認証](#5-アプリやサービスのセキュリティ認証)
  - [5.1. パスワード認証](#51-パスワード認証)
  - [5.2. CAPTURE認証](#52-capture認証)
  - [5.3. SNS認証](#53-sns認証)
  - [8.4. 生体認証](#84-生体認証)


# 1. 認証とは
## 1.1. 認証と認可
認証と認可は下記のように定義される。

* **認証** ... ある個人を特定すること
* **認可** ... 行動やリソースの許可をすること

Web系サービスの場合は認証を行った時点でそのユーザが使用できる機能が決まるため認証されたと同時に認可もされていると言える。

## 1.2. 様々な認証の方法
HTTP上で認証を行う場合。

* セッションベースの認証
* トークンベースの認証
* Authorizationヘッダを用いた認証

など様々な方法がある。

# 2. セッションベースの認証
セッションベースの認証は「セッション管理」をクッキー（cookie）の仕組みを使ってログイン者の認証状態をサーバー側に保持しておくやり方である。

セッション管理で保持した状態にアクセスするキーとして、セッションIDを使います。
セッションベースの認証ではログインの成功したら新たにセッションIDを発行してブラウザ側に送り、あとはそのセッションIDをやり取りすることで、認証状態を維持していくやり方をとります。
実装も比較的簡単でありユーザにとっても使いやすく優れた方法です。

ただしセッションIDが流出した場合、セッションベースの認証は意味を失います。

### セッションIDの流出を防ぐチェックポイント
* クッキー発行の際の属性に不備がないか（特にDomain、Source、HttpOnlyなど）
* セッションIDをURLに保持などしてRefererヘッダから漏洩するリスクがないか
* TLS等で暗号化されていないためネットワークの盗聴で漏洩するリスクがないか
* セッションIDが推測可能になっていないか（セッション管理機構の自作はNG）

また、セッションベースの認証はCSRF（クロスサイト・リクエストフォージェリ）攻撃に対して弱いことが知られているため、CSRF対策とあわせて使う必要があります。

> もう少し詳細は下記URLの**2.8 Cookieとセッション管理**を参照
> https://gist.github.com/yuron3141/07aa4606f4375639d122e04c6a9d92a9

# 3. トークンベースの認証
##  3.1. JWT認証
JWT(JSON Web Token)認証はJavaScriptのオブジェクトの形をした認証情報を用いた認証です。

### JWTの構成<!-- omit in toc -->
JWTは以下の3要素で構成される。

* **ヘッダー**
署名に使われている暗号化アルゴリズムや、トークンタイプなどのメタ情報が入ります。

* **クレーム情報**
任意の情報を含ませることができ、ここにユーザー認証情報を記述します。
* **署名**
ヘッダーに記述した暗号化アルゴリズムにより、ヘッダーとクレーム情報をBase64urlに変換したものから生成されます。

### JWT認証のメリット<!-- omit in toc -->
* 安全
   * JWTに署名が含まれているため、改ざんがあってもチェックできるようになっている。
* 実装のしやすさ
   * セキュアなToken発行が楽に実装できる。
* 管理のしやすさ
   * URLに含むことができる文字で構成されているから、HTTPリクエストでの取り扱いが楽。
   * 認証に必要となる情報はすべてJWTの中に入っているため、ユーザー認証情報をサーバーで管理する必要がない。DB問い合わせを行う必要がない。
   
### JWT認証の脆弱性<!-- omit in toc -->
基本的にJWT認証を実現するライブラリの使い方や秘密鍵の長さに気を付けていれば問題ないが、以下のような脆弱性がある。

* アルゴリズムでnoneを許容すると署名作成の際にハッシュ化されないため、改ざんができてしまう = **none attack**
    * **ライブラリの設定で防げるし秘密鍵を指定したらデフォルトで受け付けない場合がほとんど**である
* 秘密鍵が短いとbrute force attackで突破できてしまう
    * 256bitなどの長さならほぼ問題ない
    * 256bit以上が推奨されている

##  3.2. OAuth／OAuth2またはOpenIDによる認証
### 3.2.1. OAuth／OAuth2
OAuthは基本的に広く第三者に公開されるAPIでデータや機能へのアクセス権限の許可を行う仕組みです。 OAuthにより権限の許可を付与することで本来であれば利用することができない他サービスのリソースを連携してもらうことができます。
OAuthには 1.0 と 2.0 があり、2.0 は2012年10月にRFC6749として標準化されている。 OAuth 1.0を利用する理由は特にないため、実装する場合は2.0を利用するのが良い。

> もう少し詳細は下記URLの**2.4. ログインとOAuth2.0**を参照
> https://gist.github.com/yuron3141/f6e34e691e5e19289dd412e5293be4c3

### 3.2.2. Open ID Connect
Open ID Connect は、シンプルなIDプロトコルであり、OAuth 2.0 プロトコルを使用して構築されたオープン・スタンダードです。( OAuth2.0の拡張版 )

<img src="https://www.macnica.co.jp/business/security/okta_blog01_draw09.png" width="90%">

### 3.2.3. OpenID
Open IDはユーザーのIDや認証、アクセス先に関する情報を、 特定のサービスに依存しない形で連携するためのプロトコルである。
仕組みとしては、利用者からログイン要求のあった「クライアントアプリ」が「OpenID Provider」と呼ばれる認証サーバへ利用者を誘導し、利用者は「ログインID」と「パスワード」を入力して認証を行います。

# 4. Authorizationヘッダを用いた認証
##  4.1. Basic認証
Basic認証は特定のディレクトリに設定をすることでIDとパスワードがなければそのディレクトリ以下のコンテンツを閲覧できなくすることができる機能です。 この仕組みはWebサーバの設定でも実現できる場合が多いが、各種フレームワークや言語の機能で実装できる場合もあります。

##  4.2. Digest認証
Digest認証(ダイジェスト認証)はBasic認証の平文で「ユーザーID」と「パスワード」を送信してしまう欠点を改善した認証方式である。
具体的には「ユーザーID」と「パスワード」を**ハッシュ化**して送信します。

<img src="https://medium-company.com/wp-content/uploads/2019/03/auth02.png" width="50%">

SSL/TLS（HTTPS)を使用すればBasic認証の平文でパスワードを送信する欠点を改善できるため、Digest認証は、**HTTPS通信ができない環境で使われるHTTP認証方式**と言える。

##  4.3. Bearer認証
Bearer(アクセストークン認証)はログインID・パスワードなどでユーザー認証を行なった後に、サービスから発行されるアクセストークンを受け取って、APIのリクエスト時に送信する認証方式です。

具体的には、HTTPリクエストヘッダーにアクセストークンを記述して送ります。設定するヘッダー項目は「Authorizationヘッダー」です。
```
Authorization: Bearer {アクセストークン}
```

この認証はトークンを利用した認証・認可に使用されることを想定しており, OAuth 2.0の仕様の一部として定義されているが, その仕様内でHTTPでも使用しても良い。
トークンの形式はtoken68の形式で指定することが定められている。

> token68は１文字以上の半角英数字, - (ハイフン), . (ドット), _ (アンダーバー), ~ (チルダ), + (プラス), / (スラッシュ)から構成された文字列を指す.
> 文字列の末尾に任意個の = (イコール)が挿入されていても良い。


# 5. アプリやサービスのセキュリティ認証
##  5.1. パスワード認証
ユーザーを「ID」と「パスワード」により認証するもので、インターネットの初期から使われている認証方式です。
ほかの認証方式に比べて突破しやすいため、パスワード認証方式を対象とするサイバー攻撃は数多くあります。

パスワードの設定時に、「英字（大文字／小文字）、数字、記号を混在させること」、「6文字以上にすること」などの規定を設けて、複雑なパスワードの設定を促します。単純なパスワードを使えなくすることでブルートフォースアタックを防ぎ、認証を強化します。

* パスワード認証に関連する技術

| 名称 | 内容 |
| ---- | ---- |
| PINコード | いわゆる暗証番号で「数桁の数字の組み合わせ」を認証に利用します。突破されやすいため他の認証を組み合されます。 |
| ワンタイムパスワード | 1回しか使えないパスワードです。流出しても再利用はできないため不正アクセスを防ぐことができます。 |
| ニーモニック認証 | 写真の組み合わせを使った認証方式です。 |
| 秘密の質問 | あらかじめ決めておいた質問とその回答による認証方式です。 |
##  5.2. CAPTURE認証
CAPTURE認証はコンピューター(プログラム)と人間を識別するためのテストです。
画面に「判別しにくい歪んだ文字列の画像」を表示しその文字を入力させるのが代表的です。パズルを完成させるケースもあります。
近年ではAIが歪んだ文字列を認識できるようになっているためあまり使われなくなってきました。
##  5.3. SNS認証
SNSのアカウントを利用して認証します。Facebook、Twitterなどのアカウントで他のWebサイトにログインできるようになります。
「OpenID」という認証を行うためのプロトコルや、「**OAuth**」と呼ばれる別のサービスに特定の権限のみ与える仕組みを利用して実装されます。

##  8.4. 生体認証
生体そのものが持っている特徴を利用して本人確認を行う認証を指します。
指紋認証、顔認証、虹彩認証など様々な種類があるため、パスワード認証と比べると盗用のリスクが低くユーザーはIDやパスワードを覚えたり、カードを持ち歩いたりする必要が無いので利便性も高くなります。
しかしけがや事故により認証できなくなる可能性があります。