# 各種開発ツールとホスティングサービス・用語など<!-- omit in toc -->
各種ツールやWEB系の各種用語、クラウドサービスなどをまとめました。

開発やデプロイ、実装する際やツールが必要な場合のリファレンスとしても利用できます。

## 目次<!-- omit in toc -->
- [1. 各種サービス・CMS・フレームワークなど](#1-各種サービスcmsフレームワークなど)
  - [1.1. PaaS(BaaS含む)](#11-paasbaas含む)
    - [1.1.1. Netify](#111-netify)
    - [1.1.2. Vercel](#112-vercel)
    - [1.1.4. Fly.io](#114-flyio)
    - [1.1.5. FireBase](#115-firebase)
    - [1.1.6. GitHub Pages](#116-github-pages)
    - [1.1.7. Subabase](#117-subabase)
    - [1.1.8. Deta Cloud](#118-deta-cloud)
  - [1.2. IaaS](#12-iaas)
    - [1.2.1. AWS](#121-aws)
    - [1.2.2. GCP](#122-gcp)
    - [1.2.3. Azure](#123-azure)
    - [1.2.4. Alibaba Cloud](#124-alibaba-cloud)
  - [1.3. CMS / HeadlessCMS](#13-cms--headlesscms)
    - [1.3.1. CMS(従来型)](#131-cms従来型)
      - [1.3.1.1 Wordpress](#1311-wordpress)
      - [1.3.1.2. Drupal](#1312-drupal)
      - [1.3.1.3. EC-CUBE](#1313-ec-cube)
    - [1.3.2. HeadlessCMS](#132-headlesscms)
      - [1.3.2.1. Strapi](#1321-strapi)
      - [1.3.2.2. microCMS](#1322-microcms)
      - [1.3.2.3. GraphCMS](#1323-graphcms)
      - [1.3.2.2.](#1322)
  - [1.4. フレームワーク](#14-フレームワーク)
    - [1.4.1. JavaScriptベース](#141-javascriptベース)
    - [1.4.2. Rubyベース](#142-rubyベース)
    - [1.4.3. PHPベース](#143-phpベース)
    - [1.4.4. Pythonベース](#144-pythonベース)
    - [1.4.5. Goベース](#145-goベース)
  - [1.5. RDB](#15-rdb)
    - [1.5.1. MySQL](#151-mysql)
    - [1.5.2. PostgreSQL](#152-postgresql)
    - [1.5.3. SQLite](#153-sqlite)
  - [1.6. Gitホスティングサービス](#16-gitホスティングサービス)
    - [1.6.1. GitHub](#161-github)
    - [1.6.2. GitLab](#162-gitlab)
    - [1.6.3. BitBucket](#163-bitbucket)
  - [1.7 CDN提供サービス](#17-cdn提供サービス)
    - [1.7.1. CloudFlare](#171-cloudflare)
    - [1.7.2. Amazon CloudFront](#172-amazon-cloudfront)
    - [1.7.3. Akamai](#173-akamai)
- [2. 各種ツール・ミドルウェアなど](#2-各種ツールミドルウェアなど)
  - [2.1. コードエディタとIDE](#21-コードエディタとide)
    - [2.1.1. Visual Studio Code(VSCode)](#211-visual-studio-codevscode)
    - [2.1.2. Visual Studio](#212-visual-studio)
    - [2.1.3. Vim](#213-vim)
    - [2.1.4. Atom](#214-atom)
  - [2.2. API設計とテスト](#22-api設計とテスト)
    - [2.2.1. Postman](#221-postman)
  - [2.3. ミドルウェア](#23-ミドルウェア)
    - [2.3.1. Nginx](#231-nginx)
    - [2.3.2. Apache](#232-apache)
    - [2.3.3. LiteSpeed](#233-litespeed)
    - [2.3.4. Gunicorn](#234-gunicorn)
  - [2.4. セキュリティ・サイト解析](#24-セキュリティサイト解析)
    - [2.4.1. OWASP ZAP](#241-owasp-zap)
    - [2.4.2. Wapplyzer](#242-wapplyzer)
    - [2.4.3. Acunetix](#243-acunetix)
    - [2.4.4. Nessus](#244-nessus)
  - [2.5. CI/CDツール](#25-cicdツール)
    - [2.5.1. CircleCI](#251-circleci)
    - [2.5.2. GitHub Actions](#252-github-actions)
    - [2.5.3. PipeCD](#253-pipecd)
  - [2.6. IaCツール](#26-iacツール)
    - [2.6.1. Terraform](#261-terraform)
  - [2.7. コンテナ仮想化技術](#27-コンテナ仮想化技術)
    - [2.7.1. Docker](#271-docker)
    - [2.7.2. kubernetes](#272-kubernetes)
- [3. その他各種技術と用語](#3-その他各種技術と用語)
  - [3.1. SPA/MPA](#31-spampa)
  - [3.2. SSR/CSR/SSG](#32-ssrcsrssg)
  - [3.3. NoSQL](#33-nosql)
  - [3.4. AltJS](#34-altjs)
    - [3.4.1. TypeScript](#341-typescript)
    - [3.4.2. JSX](#342-jsx)
    - [3.4.3. Dart](#343-dart)
  - [3.5. アーキテクチャ](#35-アーキテクチャ)
    - [3.5.1. マイクロサービスアーキテクチャ](#351-マイクロサービスアーキテクチャ)
    - [3.5.2. サーバレスアーキテクチャ](#352-サーバレスアーキテクチャ)
    - [3.5.3. Jamstack](#353-jamstack)
  - [3.6. コーディング・実装原則](#36-コーディング実装原則)
    - [3.6.1. YAGNI原則](#361-yagni原則)
    - [3.6.2. DRY原則](#362-dry原則)
    - [3.6.3. KISSの原則](#363-kissの原則)
  - [3.7. WebRTC](#37-webrtc)
  - [3.8. CDN(Contents Delivery Network)](#38-cdncontents-delivery-network)
  - [3.9. サードパーティCookie](#39-サードパーティcookie)
  - [3.10. SSO](#310-sso)
  - [3.11. サーバレスDB](#311-サーバレスdb)
  - [3.12. ORM(Object-Relational Mapping)](#312-ormobject-relational-mapping)
  - [3.13. RPC](#313-rpc)
    - [3.13.1. tRPC](#3131-trpc)
    - [3.13.2. gRPC](#3132-grpc)
  - [3.14. WebAssembly](#314-webassembly)
  - [3.15. Open API](#315-open-api)
- [4. その他通信プロトコル](#4-その他通信プロトコル)
  - [4.1. SDP(Session Description Protocol)](#41-sdpsession-description-protocol)
  - [4.2. ICE(Interactive Connectivity Establishment)](#42-iceinteractive-connectivity-establishment)




**参考URL**
| 名称 | URL |
| ---- | ---- |
| MDN Web docs | https://developer.mozilla.org/ja/ |
| とほほのWWW入門 | https://www.tohoho-web.com/www.htm |


# 1. 各種サービス・CMS・フレームワークなど
## 1.1. PaaS(BaaS含む)
### 1.1.1. Netify
NetlifyはWEBサイトのホスティングが簡単にできるサービスの1つです。
**フロントエンド系のFWを使ったWEBアプリケーションや静的なサイトをデプロイ**できます。CI/CDが既に組み込まれているためGitHubなどと連携可能です。具体的にはReact(Next), Vue.js(Nuxt)のデプロイに強いです。(頑張ればNode.jsベース(Expresなど)の構築も可能)
netlify-plugin-nextjsを使えばNext.jsでSSR対応したアプリを動かせます。

https://www.netlify.com/

#### 特徴(2020時点)<!-- omit in toc -->
* 無料SSL
* 転送量: 100GB/月
* ストレージ: 100GB
* リクエスト制限: 500 requests/分

#### プラン(2022時点)<!-- omit in toc -->
| プラン名 | 料金(月額) |
| ---- | ---- |
| Starter(無料枠) | $0.0 |
| Pro | $19.0 |
| Business | $99.0 |

### 1.1.2. Vercel
VercelはNetlifyはWEBサイトのホスティングが簡単にできるサービスの1つです。
**フロントエンド系のFWを使ったWEBアプリケーションや静的なサイトをデプロイ**できます。CI/CDが既に組み込まれているためGitHubなどと連携可能です。具体的にはReact(Next), Vue.js(Nuxt)のデプロイに強いです。(頑張ればNode.jsベース(Expresなど)の構築も可能)
VercelはNext.jsなら特に設定しなくともSSRができる状態でデプロイできる特徴があります。
builderが用意されていないフレームワーク（Nuxt)でSSRを行うにはデプロイ周りで少々設定をする必要があります。

https://vercel.com/

#### 特徴(2020時点)<!-- omit in toc -->
* 無制限の Webサイト と API
* HTTPS 対応のカスタムドメイン
* Node.js や Go を使用したサーバレス関数

#### プラン(2022時点)<!-- omit in toc -->
| プラン名 | 料金(月額) |
| ---- | ---- |
| Hobby(無料枠) | $0.0 |
| Pro | $20.0 |

### 1.1.3. Heroku<!-- omit in toc -->
HerokuはWEBサイトのホスティングが簡単にできるサービスの1つです。
Heorkuでは**フロントエンドやバックエンドを問わずデプロイ**できます。またデータベース(PostgeSQL)も利用可能です。
具体的にはNode.js、Ruby(Rails), Java, PHP, Python, Goなど様々な言語に対応しています。
CI/CDが既に組み込まれているためGitHubなどと連携可能です。

様々な環境でホスティングできるので人気のPaaSでしたが、2022/11/26に**有料化**しました。

#### プラン(2022時点)<!-- omit in toc -->
| プラン名 | 料金(月額) |
| ---- | ---- |
| Eco dyno | $5.0 |
| Basic Dyno | $7.0 |
| Mini postgres(データベース) | $5.0 |
| Basic postgres(データベース) | $9.0 |

### 1.1.4. Fly.io
Fly.ioは静的サイトからRailsやLaravel、Node.jsなどのWebアプリ、PostgreSQLデータベースまでフルスタックなアプリをデプロイできる**AltHeroku**のプラットフォームです。
ただしデプロイする際は**CLIしか対応していません(CI/CDが使えない)**。

https://fly.io

#### 特徴(2022時点)<!-- omit in toc -->
* Herokuで廃止された無料枠(アプリは3つが目安)がある
* PostgreSQLに対応・データベースがインターネットと繋がっていない(セキュア)
* 無料SSL可能
* 無料プランでもアプリのスリープがない
* 日本リージョンがある

#### プラン(2022時点)<!-- omit in toc -->
料金は使うリソースごとに支払う形態です。
無料枠で使用できるのは以下のようなものです。(クレジットカード登録必要)

| リソース | スペックと個数 |
| ---- | ---- |
| 仮想マシン |	共有CPU1つ・RAM256MBのマシン(最大3つ) |
| データベース | 合計3GBまで |
| IPアドレス | エニーキャストIPv4アドレス1つと無制限のエニーキャストIPv6アドレス |
| SSL証明書 |	最大10個まで |
| データ転送量	| アウトバウンドは合計160GBまで・インバウンドは無制限 |


### 1.1.5. FireBase
FirebaseはGoogleが提供するクラウドサービスMBaaS(Mobile Backend as a Service)です。
MBaaSとはモバイルアプリケーションのサーバーサイドで使われるロジックを提供するサービスです。

Firebaseには**サーバーの開発が不要でフロント側だけでアプリ開発ができる**という特徴があります。

メリットは以下のようなものがあります。

* サーバーサイドの開発コスト・設計・工数などを削減可能
* モバイルアプリ開発に特化している

デメリットとしては **データが複雑だったり大規模なサービスだと扱いづらい(DBはNoSQL)** という点があります。

### 1.1.6. GitHub Pages
Git PagesはGitHubの提供する静的サイト ホスティングサービスです。※商用利用不可
基本静的サイト(HTML/CSS/フロントエンドJs)に対応していますが、**ReactやVue.jsで作ったアプリ(フロントエンド)** もデプロイ可能です。

使用制限としては、ソースリポジトリには1GBの推奨上限があり、月当たり 100GB のソフトな帯域幅制限があります。
そのため簡単でシンプルなWEBアプリ(JavaScriptベース)や静的サイトのデプロイに使用用途は限られます。

### 1.1.7. Subabase
subabaseは認証やデータべースといったバックエンドに必要な機能を提供するBaaSの1つであり、Firebaseの互換になりえるサービスです。
FireBaseとの違いはデータベースが**PostgreベースのRDB**であることです。
とはいってもFirebaseの機能数の方が多いのでデータベースをPosgreSQLのRDBで使用したい場合の検討の1つであると言えます。

### 1.1.8. Deta Cloud
Detaの提供するPaaSです。完全無料で以下サービスを利用できます。
* Deta Base: NoSQLデータベース (保存容量は無制限)
* Deta Micros: PythonまたはNode.jsの実行環境 (AWS API Gateway + Lambdaが利用されている)
* Deta Drive: 保存容量は10GB

公式サイト:https://www.deta.sh/

## 1.2. IaaS
IaaS(Infrastructure as a Service)はクラウドコンピューティングのうちの1つで、仮想化技術を利用してハードウェアリソース（CPU／メモリ／ストレージ）などのデジタルインフラをインターネット経由でオンデマンドで提供するサービスです。
有名どころが提供しているサービスとしてはAmazonの運営するAWSやGoogleの運営するGCPなどがあります。

### 1.2.1. AWS
AWS(Amazon Web Service)はAmazonが運営するIaaSサービスです。
AWSではインフラストラクチャーを構築するための様々なサービスが提供されています。

> VPC, S3, API GateWay, Lambda, EC2, ECS, EKS, Fargate, Route53, IAM, Cloud Watchなど

Webアプリケーション開発には近年Dockerなどのコンテナ型仮想化技術が注目されて一般化され始めています。

EC2などのサーバ仮想化技術はGPUが必要な特殊な処理が必要なサーバ等の構築以外で今後選択されることは減ることが推測されます。


コンテナ型仮想化技術(Dockerの場合)でAWSでインフラを構築する際に必要になるメインのサービス

#### ECS<!-- omit in toc -->
ECSはフルマネージドコンテナオーケストレーションサービスです。
コンテナ化されたアプリケーションを簡単にデプロイ、管理、およびスケーリング可能です。
ECSによりクラスター上のコンテナを実行、停止、管理できます。

#### Faragate<!-- omit in toc -->
FargateはECSやEKSで動作するホストマシンを意識せずにコンテナを実行できる環境を提供するサービスです。
コンテナ向けのサーバーレスコンピューティングと言えます。

Fargateを用いることで、EC2インスタンスやそのスケーリング、インスタンスの集合体であるクラスターを管理する必要がなくなるため管理の効率化を図れます。
FargateはSSHによるコンテナへのアクセスを許可していませんが、ECS Execという機能を用いることで直接コンテナに直接ログイン可能である。

### 1.2.2. GCP
GCP(Google Cloud Platform)はGoogleが運営するIaaSサービスです。
Googleではインフラストラクチャーを構築するための様々なサービスが提供されています。

> VPC, GCS, Cloud Functions, GCE, GKE, Cloud Run, IAM, IPM, Firebaseなど

コンテナ型仮想化技術(Dockerの場合)でGCPでインフラを構築する際に必要になるメインのサービス
#### Cloud Run<!-- omit in toc -->
AWSで言うFargateのような機能を提供するサービス

#### GKE<!-- omit in toc -->
GKEはGoogleが開発したKubernetesを用いたマネージドサービス。
 
AWSでいうECS,EKSに相当する。KubernetesのコンテナだけではなくDockerコンテナにもサポートしている。

### 1.2.3. Azure
Microsoftの管理するクラウドコンピューティングサービスです。
お堅い企業が使っているイメージがあります(偏見)。

### 1.2.4. Alibaba Cloud
Alibaba が提供するクラウドコンピューティングサービスです。
アジア太平洋地域のIaaS市場で占有率1位(2019)。

## 1.3. CMS / HeadlessCMS
### 1.3.1. CMS(従来型)
#### 1.3.1.1 Wordpress
WordPressはサイトの作成やブログの作成などができるOSSのCMS(コンテンツ管理システム)です。
ブログ投稿管理システムとしては最も有名であり、企業のコーポーレートサイトや個人ブログなど様々な形で利用可能です。
全世界の4分の1を超えるサイトがWordPressで作られており、圧倒的なシェアを誇っています。

サイトやページ制作に必須となるHTML/CSSやPHPなどのWeb関連技術が無い人でもサイト管理や記事投稿ができるため、個人のブロガーから企業、官公庁まで幅広く使用されています。
DBはMy SQLを使用しています。

PHPベース。

#### 1.3.1.2. Drupal
DrupalはOSSののモジュラー式フレームワークであるCMS(コンテンツ管理システム)です。
Drupalは非常に柔軟で拡張性の高いプラットフォームのため、単に通常のウェブサイトを公開するだけではなく、**多言語でさまざななデバイスに向けた情報の配信が可能**です。

多言語化の対応のしやすさやカスタマイズの容易さ、堅牢なセキュリティがあることも特徴です。

PHPベース。

#### 1.3.1.3. EC-CUBE
EC-CUBEは日本の企業である株式会社イーシーキューブが開発するOSSのEC向けCMS(コンテンツ管理システム)です。

特徴として、企業や店が商品紹介を行うページや、ユーザーが実際に商品の注文を行うページの制作など、ECサイトに不可欠なWebページを作るための機能が網羅されています。 このほか、EC-CUBEには商品別の売上集計や在庫管理といった、製作したECサイトを管理するための機能があります。

PHPベース。

### 1.3.2. HeadlessCMS
ヘッドレスCMSはコンテンツ管理機能に特化したCMS。

ヘッドレスCMSと従来のCMSは、管理機能であるバックエンドのみか、表示機能であるフロントエンド・バックエンド機能を同時に持つかに違いがある。

ヘッドレスCMSでは管理機能のみになるため、別に表示画面の用意と専門知識が必要。その分ヘッドレスCMSは、表示画面の自由度が高まり、APIの受け取り先が格段に増えることから、さまざまなデバイス・チャネルに対応が可能と言える。

#### 1.3.2.1. Strapi
StrapiとはNode.js環境において動作するOSSヘッドレスCMS。

Strapiは100％Javascriptベースであり、完全にカスタマイズ可能で開発者ファーストなCMSである。

ただし**Self-Hosted型**なのでサーバーやデータベースを自前で用意し、ヘッドレスCMSをインストールやセッティングする必要がある。

対応するフロントエンドフレームワークには``Vue.js, Reactなど``。

公式サイト: https://strapi.io/

#### 1.3.2.2. microCMS
microCMSとはAPIベースの日本製の中でも最も代表的なヘッドレスCMS。
ドキュメントもサポートも完全日本語対応している特徴がある。

Jamstackと相性が良いのも特徴。

公式サイト: https://microcms.io/

#### 1.3.2.3. GraphCMS
Meta社が開発したGraphQLの活用に特化したヘッドレスCMS。

コンテンツフィルタリングの機能の充実度、バッチ処理対応ができる点などが特徴。

#### 1.3.2.2. 
## 1.4. フレームワーク
### 1.4.1. JavaScriptベース

| 名称 | 説明 |
| ---- | ---- |
| Node.js | サーバーサイドでJavaScriptを使うための環境です。フロントエンドもバックエンドも構築可能で、以下の5つのフレームワーク(Node.jsから見ればライブラリ)を使うためのベースとなります |
| React | Meta(旧 FaceBook)により開発されたフロントエンドのフレームワークです。SPAが構築可能です。 |
| Vue.js | Evan Youが中心となって開発されたフロントエンドのフレームワークです。SPAが構築可能です。 |
| Angular | Googleと各コミュニティによって開発されたTypeScriptベースのOSSのフロントエンドフレームワークです。SPAが構築可能です。 |
| Next.js | Reactをベースに開発されたフロントエンドフレームワークでReactと異なり**サーバー機能があります**。またSSGが可能です。 |
| Nuxt.js | Vue.jsをベースに開発されたフロントエンドフレームワークでVue.jsと異なり**サーバー機能があります**。またSSGが可能です。 |
| **Astro** | 高速でコンテンツにフォーカスしたWebサイトを構築するためのオールインワンのWebフレームワーク(Nodeベース) |
| **Vite** | 高速動作するフロントエンドのビルドツール(Nodeベース)、サポート対象はVue.js・React・Svelteなど |

### 1.4.2. Rubyベース

| 名称 | 説明 |
| ---- | ---- |
| Ruby on Rails | RubyベースかつOSSのWebアプリケーション構築フレームワークである。MPAまたはAPIでアプリケーションを構築可能です。 |

### 1.4.3. PHPベース

| 名称 | 説明 |
| ---- | ---- |
| Laravel | PHPベースかつOSSのWebアプリケーション構築フレームワークである。MPAまたはAPIでアプリケーションを構築可能です。 |
| CakePHP | PHPベースかつOSSのWebアプリケーション構築フレームワークである。構築のコンセプトとしてRailsの影響を受けている。 |

### 1.4.4. Pythonベース

| 名称 | 説明 |
| ---- | ---- |
| Django | PythonベースのWEBアプリケーションフレームワーク。APIでもアプリケーションを構築可能。 |
| Flask | Djangoよりも軽量なWEBアプリケーションフレームワーク。APIでもアプリケーションを構築可能。 |

### 1.4.5. Goベース

| 名称 | 説明 |
| ---- | ---- |
| Gin | Goベースのフル機能の最速Webアプリケーションフレームワーク。APIでもアプリケーションを構築可能。 |
| Revel | GoベースのWebアプリケーションフレームワーク。 |

## 1.5. RDB
### 1.5.1. MySQL
MySQLはOSSのRDB(リレーショナルデータベース管理システム)です。

### 1.5.2. PostgreSQL
PostgreSQLとはOSSのORDBMS(オブジェクトリレーショナルデータベース管理システム)です。大規模または複雑なデータ管理が得意で、Excelのような表敬式で保存したデータを一つの箱とし、別の箱と関連付けて大量のデータを扱えるようにします。

PostgreSQLはRDBMSとして基本的な機能を備えており、SQL言語を使ったデータの作成や編集というようなデータ管理機能や、サブクエリ、トリガー、バックアップなどの障害回復機能、同時実行制御などに対応しています。拡張性が高く、インデックスやデータ型など様々な要素のユーザ定義ができます。

PostgreSQLは多機能でPostgreSQLはMySQLに比べてカスタマイズ性が高く膨大なデータのソートが得意という特徴があります。

> ORBMSはオブジェクト単位でデータの管理を行う方式でオブジェクト指向のプログラミング言語で操作・参照できるのが特徴

### 1.5.3. SQLite
SQLiteはパブリックドメインの軽量なRDBS(リレーショナルデータベース管理システム)です。

SQLiteのデータ保存は**ファイル形式**であることが特徴です。またセキュリティ機能がないことがデメリットとしてあげられます。
超小規模なアプリのデータ保存には向いていますが、規模の大きいアプリや企業がサービスを構築する際のデータベースとは不適切と言えます。


## 1.6. Gitホスティングサービス
### 1.6.1. GitHub
GitHubはソフトウェア開発のプラットフォームであり、ソースコードをホスティングできるサービスです。
最もメジャーなGitホスティングサービスであるためGitHub/Gitを使えることはITの開発者としては基礎中の基礎と言えます。

### 1.6.2. GitLab
バージョン管理システムを主体としたRudy on Railas製のソースコードをホスティングできるアプリケーション開発支援ツールです。
GitHubと異なり、OSSであることが特徴です。

GitHubと異なるのはGitHubはクラウド上に展開されるGitホスティングサービスであるのに対し、GitLabは**サーバにインストールして使う**必要があります。

### 1.6.3. BitBucket
BitBucketはソフトウェア開発のプラットフォームであり、ソースコードをホスティングできるサービスです。
日本と言うよりも海外のIT企業や開発者が使用している印象があります。

## 1.7 CDN提供サービス
### 1.7.1. CloudFlare
Cloudflare社が提供しているCDNを提供するサービスです。
値段が安いことと、機能がかなり制限されますがFreeプランもあるのが特徴です。

CloudflareにはプランによってはWAFや負荷分散サービスを利用可能です。
それらを利用することによりある程度のセキュリティ攻撃などには十分に耐えるアプリケーションを構築可能です。

### 1.7.2. Amazon CloudFront
Amazonが提供するCDNサービスです。

### 1.7.3. Akamai
世界最大規模のCDNを提供しているサービスです。


# 2. 各種ツール・ミドルウェアなど
## 2.1. コードエディタとIDE
### 2.1.1. Visual Studio Code(VSCode)
マイクロソフトが開発しているWindows、Linux、macOS、web用のソースコードエディタです。
最もポピュラーで多くの開発者が使用しているコードエディタなので基本的にこれを使ってください。
また開発をサポートする便利な拡張機能もいろいろあります。

### 2.1.2. Visual Studio
Visual Studioはマイクロソフトが開発している統合開発環境(IDE)です。
ソフトウェアやアプリを開発することができます。
またチーム開発やC, C++, C#などのコンパイラ言語により開発に強いです。

### 2.1.3. Vim
VimはUnix系ユーザー(Macユーザ)にはなじみの深い「vi」の操作性と機能を受け継ぐ高機能なテキストエディターです。
MacやUnix系OSで開発を行うエンジニアが使用しています。

### 2.1.4. Atom
AtomはGitHubが開発したオープンソースのテキストエディタです。


## 2.2. API設計とテスト
### 2.2.1. Postman
PostmanはAPIを設計、構築、テスト、反復するためのAPIプラットフォームです。
PostmanではTokenなどを設定しAPIのエンドポイントにリクエストを投げ込めば Response（レスポンス）を確認することができます。
現在HTTP や REST、SOAP、GraphQLなどのリクエストテストや、API design、API documentation、API detection、Mock Server、Monitors、Workspaces などの機能が存在します。

## 2.3. ミドルウェア
### 2.3.1. Nginx
Nginxは無料かつオープンソースなWebサーバソフトウェアであり、SMTP, POP3, IMAPのリバースプロキシの機能や、ロードバランサ、HTTPキャッシュなどの機能も持つ特徴があります。

また以下のような特徴があるため世界中のWEBサーバにおける使用シェアは1位です。

* 処理速度が高い
* メモリ消費量を抑えやすい
* 大量の同時接続処理を素早く処理しやすい

しかし他のWEBサーバソフトに比べて、以下のようなデメリットも存在します。

* 動画を多く扱うコンテンツの処理は不得意
* 機能追加がしずらい

### 2.3.2. Apache
Apacheは無料かつオープンソースなWebサーバソフトウェアであり、高い性能と優れた動作性から人気なWebサーバです。
少し前まで世界中のWEBサーバにおける使用シェアは1位でした。

ApacheのWEBサーバは以下のような特徴があります。

* OSに依存せずに動作する
* 処理速度が速い
* 機能が豊富
* ネット上に情報が多い

しかし他のWEBサーバソフトに比べて、以下のようなデメリットも存在します。

* 複数のデータ処理を実行するとメモリを大量に消費してしまう
* 多人数が同時に使用するWEBサイト構築には不向き

以上の点から、Apacheは小規模なブログやホームページやECサイト(データ量が多くても処理速度が速いため)には向いていますが、大人数が利用するようなWEBアプリケーションの構築には不向きと言えるでしょう。

### 2.3.3. LiteSpeed
LiteSpeedは無料かつオープンソースなWebサーバソフトウェアであり、Apacheの機能と互換性が多いWebサーバです。

LiteSpeedのWEBサーバは以下のような特徴があります。

* Nginxと同じく大量のリクエストを高速に処理することが可能
* HTTP/3がサポートされている

また以下のような特徴があります。

* 商用ライセンスのWEBサーバアプリで有償版と無償版がある
* 日本語情報が少ない

### 2.3.4. Gunicorn
PythonのWeb Server Gateway Interfaceを実装するためのWebサーバソフトウェア

## 2.4. セキュリティ・サイト解析
### 2.4.1. OWASP ZAP
OWASP ZAPはOSSのWebアプリケーションセキュリティスキャンツールです。
様々な種類の攻撃をシミュレートし、Webアプリケーションの脆弱性を検出することができます。
ほとんどのプログラミング言語やフレームワークをサポートしているため使いやすのが特徴です。

OWASP ZAPには以下のような機能があります。
* 脆弱性スキャン ... SQLインジェクション、クロスサイトスクリプティング（XSS）などの脆弱性を検出します
* 脆弱性修復支援 ... 検出された脆弱性の修復方法を提供します
* プロキシサポート ... Webアプリケーションのトラフィックをプロキシしトラフィックを詳細に記録することができます

### 2.4.2. Wapplyzer
WappalyzerはWebサイトの技術的な情報を収集するためのChromeブラウザの拡張機能です。
Webサイトが使用しているプログラミング言語やフレームワーク、CMS、その他の技術的な情報を簡単に見つけることができます。
Wappalyzerには、検出された技術の詳細な情報を表示する機能があります。この機能を使用すると、Webサイトが使用している技術のバージョンや、その他の詳細な情報を確認することができます。

### 2.4.3. Acunetix
AcunetixはWebアプリケーションの脆弱性をスキャンして検出するためのツールです。
Webアプリケーションが、SQLインジェクションやクロスサイトスクリプティング（XSS）などの攻撃から守られているかを簡単に確認することができます。
Acunetixは、世界中で広く使用されているセキュリティスキャンツールの1つです。

* 脆弱性スキャン ... Webアプリケーションをスキャンして脆弱性を検出します
* 脆弱性修復支援 ... 検出された脆弱性を修復するための具体的な手順を提供します
* レポート機能 ... 脆弱性スキャンの結果を簡単にレポートすることができます

### 2.4.4. Nessus
Nessusはコンピュータネットワークやサーバーの脆弱性をスキャンして検出するためのセキュリティツールの1つです。


## 2.5. CI/CDツール
CI/CDツールはCIとCDが同時にできるツールを指します。

> CI(継続的インティグレーション) ・・・ **テストや静的コード解析などの作業を自動化し、継続的に実行する手法**

> CD(継続的デリバリー) ・・・ **各環境へのデプロイ作業を自動化し継続的に実行する手法**

CI/CDで行うことは以下の3つです。
### ビルドの自動化<!-- omit in toc -->
ソースコードから実行可能なアプリケーションを構築します。
具体的には、Dockerイメージのpull、依存パッケージのインストール、コンパイルなどです。

### テストの自動化<!-- omit in toc -->
UTなどのテストコードを実行して動作確認をしたり、Rubocop(Ruby)などのコードスタイルチェックなどを行います。

### デプロイの自動化<!-- omit in toc -->
ビルドしてテストが通ったものを本番環境や検証環境などに自動デプロイします。

### 2.5.1. CircleCI
CircleCIはCI/CDツールの１つでありテスト・ビルド・デプロイなどの自動化を行うことができるツールです。
Saas型のCI/CDサービスでありSaas型であるという点が特徴です。また、Dockerもサポートしています。
CI/CDツールとしては最も一般的です。

### 2.5.2. GitHub Actions
GitHub ActionsはCI / CDですべてのソフトウェアワークフローを簡単に自動化できるCI/CDツールです。
GitHubから直接コードをビルド、テスト、デプロイでき、コードレビュー、ブランチ管理、問題のトリアージを希望どおりに機能させられます。

公式ドキュメント:https://docs.github.com/ja/actions

### 2.5.3. PipeCD
PipeCDはKubernetesやGoogle Cloud Run、Amazon ECS、 AWS Lambdaといったさまざまなプラットフォームに対応するCDツールです。
Terraformにも対応しているのでインフラの構築・運用にも活用可能です。

公式ドキュメント:https://pipecd.dev/docs/

## 2.6. IaCツール
IaC(Infrastructure as Code)はインフラストラクチャーをコードで構成することのできるものです。

Iacのメリットの1つはAWSやGCPなどのIaaSサービスを手動でサイトにアクセスしてひとつひとつ設定する必要がないことです。
またインフラストラクチャーを1つのプロバイダ(AWSやGCPなど)に限定せず、ほとんどすべてのタイプのインフラをTerraformのリソースとして表すことが可能なことは大きなメリットです。
ただし管理できるのはインフラ構成であって、サーバー内のユーザー設定やライブラリのインストールなどはサポートしていません。

### 2.6.1. Terraform
TerraformはHashiCorp社が開発した**インフラストラクチャーをソースコードで管理できるツール**です。
2021年現在モダンなWEB系企業の使う技術としてデファクトスタンダードになりつつあります。

## 2.7. コンテナ仮想化技術
### 2.7.1. Docker
DockerはDocker社が開発している**コンテナ型仮想化技術**を実現するためのプラットフォームの1つです。
DockerではホストOSの上に動作しているDocker Engineからコンテナと呼ばれるミドルウェアの環境構築がされた実行環境を作成し、その中でアプリケーションを動作させます。
そのためホスト型仮想化よりも圧倒的に**軽量に動作**する特徴がコンテナ型仮想化技術にはあります。

<img src="https://camo.qiitausercontent.com/e1829a8f27e2a0656d1d7bdfea06fc98b0b565b8/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3230393930392f39393631326331312d343262302d393438352d376261342d3230336231313862393534352e706e67" width="50%">

Dockerを使う最大のメリットは以下の通りです。
**ソフトウェアの実行環境を複雑なアーキテクチャであっても、Dockerを使って管理することで簡単にどんなマシンにでも共有できる**点。

* コード化されたファイルを共有することでどこでも誰でも同じ環境が作れる
* 作成した環境を配布しやすい。
* スクラップ＆ビルドが容易にできる。

以上の点もDockerを使うことメリットです。

### 2.7.2. kubernetes
Kubernetesはオーケーストレーションツールの一つであり、コンテナの運用管理と自動化を実現するオープンソースソフトウェアです。
Kubernetesは、Google社が社内で利用していたコンテナ管理ツールが汎用化され、オープンソースソフトウェアとなったものであり、複数のコンテナを統合的に管理しつつ、スケールイン・アウトなども自動化することが可能です。
> オーケストレーション:コンピュータシステム、アプリケーション、およびサービスにおける、設定、管理、調整の自動化すること

コンテナ仮想化技術とマイクロサービスアーキテクチャは相性が良いため注目されています。

# 3. その他各種技術と用語
## 3.1. SPA/MPA
### SPA<!-- omit in toc -->
SPA(Single Page Application)は単一のWebページで構成するアプリケーションです。
ページ遷移を行わずにページやコンテンツの切り替えが可能なのが特徴です。
言い換えると、**他のページへ移動せずにコンテンツの切り替えができる技術**です。
具体的にはユーザーがひとつのサービスを通じて得られる体験であるUXの向上に効果があり、ブラウザの挙動に縛られることがないUIの実現が可能です。

<img src="https://engineer-life.dev/wp-content/uploads/2019/07/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2019-07-27-17.31.53.png" width="60%">

SPAの開発はJavaScript(フロントエンド)により実現します。
オープンソースで提供されているSPAを構築可能なフレームワークは以下のようなものがあります.

* **React** ・・・ Facebook主導のフレームワーク、UIデザインの知識がなくても最先端のフロントエンドが作れる、スマホアプリにも拡張可能
* **Vue** ・・・ シンプルなフレームワークで使いやすい、日本語のドキュメントが充実している、学習コストが低い
* **Angular** ・・・ Google主導のフレームワーク、動作端末を考慮する必要がなく汎用性が高い、機能が多いため大規模開発に向いている

### MPA<!-- omit in toc -->
MPA(Multiple Page Application)は複数のページで構成されるアプリケーションです。
HTTP GETが来たら、リクエストに応じたHTMLを1つ1つ組み上げてブラウザに返すオーソドックスで昔ながらの特徴があります。
Railsやlaravelなどのサーバサイドフレームワークを公式ドキュメント通り作るとこの設計になります。
またWordPressなどのCMSもMPA構成となっています。

## 3.2. SSR/CSR/SSG
## SSR<!-- omit in toc -->
SSR(Server Side Rendering)はページ遷移のたびサーバーにリクエストが走り、そのままサーバー側でAPIと連携をしてレンダリングが行われ、生成されたHTMLをブラウザに返すアーキテクチャのことである。
サーバー側でレンダリングが行われることを特徴である。

<img src="https://storage.googleapis.com/zenn-user-upload/f7fef7675d04-20220206.png" width="60%">

サーバーサイドレンダリング(SSR)は、その名の通りサーバー側でアプリケーションの HTML を生成しレスポンスとして返すことを言います。
一般的に利用されている MPA(Multiple Page Application)では言うまでもなく行われていることなので、SSR というワードは自ずと SPA(Single Page Application)を構築する際のオプション機能を指します。

SSRのメリットを整理すると、まず一番に挙がるのはレンダリングをサーバー側で行えるので、通常のSPAと比べて初回読み込みに時間がかからないということである。
厄介なレンダリング処理をサーバー側で行えるので、ブラウザの負担が減り、すなわちブラウザのスペックの高くない機器（スマホなど）でも安定した表示速度を保つことが可能です。

## CSR<!-- omit in toc -->
CSR(Client Side Rendering)は、クライアント側のJavaScriptを使用し直接ブラウザでページをレンダリングすることを言います。

大きいアプリケーションの場合クライアントで処理するJavascriptの量も増えます(クライアントで処理する情報量が増加する)。

SEO的には弱い。

## SSG<!-- omit in toc -->
SSG(Static Site Generation)はビルド時に、サーバー側で、APIからのデータ取得とそれに伴ったHTMLの構築を終わらせておき、ユーザーからリクエストされた際にこの事前につくっておいたHTMLを渡すアーキテクチャです。

Next.jsやNuxt.jsなどを利用することで構築できます。

SEO対策が可能。

## 3.3. NoSQL
NoSQL(Not Only SQL)は非リレーショナルデータベース(RDB)なデータベースの総称のことである。
近年RDBでは対応できないケースが増えてきたことから、昨今ではNoSQLが注目されています。

<img src="https://www.pasonatech.co.jp/workstyle/column/media/9063_tn_1.png" width="60%">

NoSQLでは音声や画像など、Excelのセルに入らないデータも扱えます。
速度を優先する構造であるためビッグデータなど大量データの処理に向くことも注目を集める大きな要因である。

NoSQLは4種類に分類される。
* キーバリュー型
* ワイドカラムストア型
* ドキュメント型
* グラフ型

### NoSQLが適するケース<!-- omit in toc -->
* 非構造化データや半構造化データを扱うとき
* スピードが第一に要求されるシステム
* 拡張する可能性が高いシステム

## 3.4. AltJS
Alt JSは**型定義が可能な（静的型付け）** JavaScriptを拡張して作られた言語です。

### 3.4.1. TypeScript
2014年頃にMicrosoftによって開発されたAltJSの言語(JavaScriptの拡張版)です。
型チェックなどの機能があるためコンパイルに時間がかかる特徴があります。

TypeScriptが注目されているのは、JavaScriptによるシステム開発がある程度規模が大きくなると実装・保守の効率が非常に悪くためです。

* 型の定義がないので、意図しない値が入ることがある。
* null safety でないので、意図しない null や undefined が入ることがある。
* オブジェクト指向言語だが、インターフェースやクラス定義がなく、プロパティ名を間違っていても実行時までエラーにならず、エラーになっても原因の解析に時間がかかることが多い。
* 型やインターフェース、クラス定義がないので、エディタによる入力補完があまり受けられない。

JavaScriptを使ったことがあれば、TypeScriptの学習コストは低いのが特徴です。
近年(2021年時点)ではType Scriptを実務で使う機会は増えていってます。
特にSPA構成のReactやVue、AngularJSとセットで使われることが多い。

### 3.4.2. JSX
DeNAが開発したオブジェクト指向言語です。
文法がJavaScriptと似ているため、JavaSCriptを触った人ならば学習コストが低いです。
大規模な開発に向いています。

### 3.4.3. Dart
Googleによって開発された、大規模なウェブ・アプリーケーションの開発に対応できるオブジェクト指向言語です。
**標準仕様としては動的型付け**ですが、オプションとして静的型付けもできることが特徴です。

## 3.5. アーキテクチャ
### 3.5.1. マイクロサービスアーキテクチャ
マイクロサービスアーキテクチャはアプリケーションを一枚岩の「モノリシック」なプログラムとしてではなく、複数のサービスや機能を疎結合させて構築するアーキテクチャです。
マイクロサービスのアーキテクチャでは、大規模で複雑なアプリケーションを提供する際のスピードと信頼性が向上することがメリットです。

マイクロサービスをWeb系システムで組むための関連技術としては、Go言語やKubernetesなどが注目されています。

### 3.5.2. サーバレスアーキテクチャ
サーバーレスアーキテクチャーは常時稼働するサーバー（仮想マシン）を極力使わずにアプリを構築するアーキテクチャーです。
AWSのECSやEKS基盤で構成されるようなアプリケーションはサーバレスアーキテクチャと言えます。

### 3.5.3. Jamstack
Jamstackとはウェブサーバーを存在させずにサイトを運用する構成のこと。

下記の頭文字からつけられた名称となっています。
* JavaScriptのJ - プログラミング言語
* APIのA - データをやりとりするための仕組み
* MarkupのM - おおまかにはウェブページを表示するためのHTMLの一種

近年(2022頃)から注目されているWebサイトの構成系技術です。

構成図

<img src="https://images.blog.microcms.io/assets/f5d83e38f9374219900ef1b0cc4d85cd/f702788b869043639b2831922cc2b973/figure3.png" width="60%">

コンテンツ配信図

<img src="https://images.blog.microcms.io/assets/f5d83e38f9374219900ef1b0cc4d85cd/d15fa6674ef8481a968963c7b24dc4ba/figure4.png" width="60%">

[詳細な解説1](https://blog.microcms.io/jamstack-introduction/)

[詳しい解説記事(Qiita)](https://qiita.com/ozaki25/items/4075d03278d1fb51cc37)

## 3.6. コーディング・実装原則
### 3.6.1. YAGNI原則
後で使うと設計した機能は後から使わないという原則。

### 3.6.2. DRY原則
重複管理を避けて1か所で管理するというルール。

### 3.6.3. KISSの原則
複雑にせず単純にする。

## 3.7. WebRTC
webRTC(Web Real-Time Communication)は**Webブラウザ間で音声やビデオ、データなどをリアルタイムにやり取りする際に用いられる技術**です。
対応ブラウザは「Google Chrome, Microsoft Edge, Safariなど」。
WebRTCは様々なサーバ基盤となって構築されており代表的なものには「WebRTC SFU」,「WebRTC P2P」があります。

詳細な解説ドキュメント:https://developer.mozilla.org/ja/docs/Web/API/WebRTC_API/Protocols

### WebRTC SFU<!-- omit in toc -->
WebRTC SFUは**サーバー経由**で音声や映像といったデータを共有するWebRTC技術です。
SFUサーバを使うことでメディアの容量の大きさや配信時の視聴者の数による負担を大幅に減らすことが可能という特徴があります。

### WebRTC P2P<!-- omit in toc -->
WebRTC P2Pは**P2P**で音声や映像といったデータを共有するWebRTC技術です。
それをwebブラウザで実現するためにSDPとICEというプロトコルが、情報のやり取りのためにはシグナリングサーバー、STUNサーバ・TURNサーバが用いられます。

### シグナリングサーバ<!-- omit in toc -->
シグナリングサーバはP2P通信を行う場合に仲介役を担うサーバーです。
通信する相手のデータを取得するために使われます。

関係技術:``Socket.io, FireBase``

### STUNサーバ<!-- omit in toc -->
STUNサーバは外部から見た自分のIPアドレスを教えてくれるサーバです。
**NAT越え**のために使います。

<img src="https://camo.qiitausercontent.com/091cb5584c8d89f5d44caa93eeec2d78f8c6c51d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3134303237302f34663861366334362d373265632d653934642d356237352d3464616365666536366361622e706e67" width="60%">

STUNサーバ構築のためのコードなどはネット上に探せばあります(Google codeなどにある)。

### TURNサーバ<!-- omit in toc -->
TURNサーバはP2P通信したいPCの間に立ってデータをリレーするためのサーバです。

図で言うと、TURNサーバにそれぞれ代理人(PC1', PC4')を立てて、代理人同士がデータのやり取りを行うことで、PC1-PC4間の擬似的な直接通信を行います。

<img src="https://camo.qiitausercontent.com/0e8da15494790f728a209d0e4d28020b5c151f2f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3134303237302f33393836373166342d396438382d326361662d643630302d3732643639303938316633392e706e67" width="60%">

関連技術:``coturn``

### MCUサーバ<!-- omit in toc -->
MCU(多地点接続)は3端末以上を同時接続する際に使用されるサーバです。

クライアントから受け取ったデータをそのまま転送するのではなく、合成・変換してから送ります。

## 3.8. CDN(Contents Delivery Network)
CDNはユーザーになるべく近い場所でコンテンツを配信することにより、高速かつ信頼性の高いサービス提供するというものです。
CDNは分散されたキャッシュサーバー群によるネットワークともいえるでしょう。
具体的にはWebアプリケーションで表示する画像や文章を世界中のサーバにキャッシュすることで実現します。

また以下の問題を解決できます。

* 世界中からアクセスのあるWEBアプリケーションやWEBサイトのレスポンスの改善
* Webサーバがダウンした際でもWebアプリケーションの機能の一部が提供できる
* ユーザが直接サーバにアクセスしないのでDDosやWebサイト改竄の被害をほとんど押さえれる

## 3.9. サードパーティCookie
サードパーティクッキーは「訪れたサイト以外のドメインから(第三者)から発行されたクッキー」であり、ドメインを横断したトラッキングができるのでWEB広告で広く活用されています。

Googleにより、2024年に**廃止が決定されました。
個人情報保護の観点からクッキーへの規制を強める動きがあるため**廃止される可能性が高い**です。

### 前提知識<!-- omit in toc -->
> Cookie: サイト訪問者のユーザ情報をブラウザに一時保存(キャッシュ)する仕組み

> ファーストパーティ: 通常のログインに関する情報やショッピングカートの中身などの1つのサイト用のCookie

## 3.10. SSO
シングルサインオン(Single Sign-On)は「シングル 」と「サインオン」を組み合わせたものです。

「1度システム利用開始のユーザー認証 (ログイン) を行うと複数のシステムを利用開始する際に、都度認証を行う必要がない仕組み」や「1度の認証で、以後その認証に紐づけられている複数のシステムやアプリ・サービスにも、追加の認証なしで利用できる製品・システム・ツール」を指します。

## 3.11. サーバレスDB
サーバ管理や検討が不要なDB。
Amazon Lambda(NoSQL), **PlanetScale**, Firestore(NoSQL)など。

## 3.12. ORM(Object-Relational Mapping)
ORM(オブジェクト関係マッピング)はオブジェクトと関係(RDB)とのマッピングを行うもの。

ORMを使うと**SQLを直接書くことなく、オブジェクトのメソッドでDB操作ができる**と言う特徴があります。

### フレームワークごとのORM<!-- omit in toc -->
| 言語 | ORM | 説明 |
|----|----|----|
| Ruby | **ActiveRecord** | RailsのORM |
| Python | Django ORM | DjangoのORM |
| Node.js | **Prisma**, TypeORM |  |

## 3.13. RPC
RPC(遠隔手続き呼出し)はコンピュータで動作するソフトウェアから、通信回線やコンピュータネットワークを通じて別のコンピュータ上で動作するための規格であり、互いに互換性がない場合があることからプロトコルというほどの堅い規約というよりも分類である。

> 有名どころ: XML-RPC, JSON-RPC, **tRPC**, **gRPC**

### 3.13.1. tRPC
簡単に言うと、server側で定義したInterfaceをそのままclient側で取り込んで繋ぎ込みができるもの
**Node.js（Type Script）向きのRPC実装**。

公式ドキュメント:https://trpc.io/

関連するパッケージ``yarn add @trpc/server zod``

### 3.13.2. gRPC
Googleが開発したRPC実装。
**マイクロサービスアーキテクチャと相性が良い**。

公式ドキュメント:https://grpc.io/

## 3.14. WebAssembly
WebAssemblyは仮想マシン上で動作するバイナリ形式の命令です。
WebAssemblyには2つのフォーマットがあり、「Binary Format(WASM)」と「Teaxt Format(WAT)」があります。

公式ドキュメント:https://webassembly.org/getting-started/developers-guide/

WebAssemblyはCやC++、Rust、Goなどの様々な言語から上記のWebAssemblyの命令形式へコンパイルして利用します。

WebAssemblyを用いることにより得られるメリットは以下の3つ。

* JavaScriptではできなかった負荷の大きな処理をブラウザで実行可能
* **C/C++など既存のソースコードをブラウザで実行可能**
* フロントとバックの処理を同じ言語で記述できる

### WebAssemblyが適用できる場面(ユースケース)<!-- omit in toc -->
**負荷の大きな処理をブラウザで実装したいとき**に役に立ちます。

* 動画、画像編集
* 画像認識
* 低遅延のVR・AR
* CAD
* ゲーム開発
* 圧縮や暗号化など

Qiitaの解説記事:https://qiita.com/t_katsumura/items/ff379aaaba6931aad1c4

## 3.15. Open API
言語に依存しない標準の RESTful API へのインターフェイス仕様。
関連するものにswaggerがある。
API設計が巨大化したときに使える。

> swagger: Open API Specific を記述するための、オープンソースのツール
> https://swagger.io/docs/specification/about/



# 4. その他通信プロトコル
## 4.1. SDP(Session Description Protocol)
P2P通信のための基本情報をWebブラウザ間で共有しあうために決められた情報交換用のプロトコル。

SDPで共有される情報は以下の通りです。
| 情報 | 詳細 |
| ---- | ---- |
| 使用できる動画や音声の情報 | それぞれのブラウザが扱うことのできるコーデックの情報 |
| ネットワーク情報 | それぞれのブラウザのIPアドレスやポート番号などの情報 |

## 4.2. ICE(Interactive Connectivity Establishment)
通信可能な経路を確認するためのプロトコル。
SDPによりお互いのネットワーク情報を確認した後、ブラウザ同士が通信するために利用できる通信経路をピックアップするために使われます。
WebRTCではICEにより見つかった接続経路を順に接続を試み、最初につながった通信経路を使って通信を行います。

ICEを使うことでネットワークアドレストランスレーター (NAT) を使用してそれぞれのローカルネットワーク上の他のデバイスとグローバル IP アドレスを共有していても、2 つのピアが相互に接続を見つけて確立することができます。