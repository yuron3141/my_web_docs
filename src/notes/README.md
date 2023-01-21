# Web系技術資料

Web開発を行うための個人的なノート。

人間は忘れる生き物、必要になればいつでも参照/追記/情報取集して開発を行う。

基礎や入門としているのはWeb系の技術は**常に更新/改善・改良され続けている**ので永遠に学び/吸収し、手を動かし続ける心持ちの意。

## ドキュメントの目次

- [1. Web開発基礎入門](#)
    - [1.1. コンピュータサイエンス基礎](1_web_dev_knowledges/computer_science.md)
    - [1.2. Git＆GitHub基礎](1_web_dev_knowledges/git.md)
    - [1.3. Github入門](1_web_dev_knowledges/github.md)
    - [1.4. 各種開発ツールとホスティングサービス・用語など](1_web_dev_knowledges/4_toolsandservice.md)
- [2. Web開発手法入門](#)
    - [2.1. アジャイル開発入門](2_web_dev_methods/agile.md)
- [3. API/認証技術入門](#)
    - [3.1. Web API基礎](3_api_auth/webapi.md)
    - [3.2. Web 認証技術の基礎](3_api_auth/auth.md)
- [4. データベース入門](#)
    - [4.1. データベース基礎](4_db/db.md)
    - [4.2. SQL基礎](4_db/sql.md)
    - [4.3. データベース設計基礎](4_db/db_blueprints.md)
    - [4.4. Postgre SQL基礎](4_db/postgresql.md)
- [5. JavaScript / TypeScript入門](#)
    - [5.1. JavaScript基礎](5_js/js.md)
    - [5.2. TypeScript基礎](5_js/ts.md)
    - [5.3. Node.js基礎](5_js/nodejs.md)
    - [5.4. React基礎](5_js/react.md)
    - [5.5. Next.js基礎](5_js/nextjs.md)
    - [5.6. Node.js開発実践基礎](5_js/nodejs_dev.md)
- [6. Ruby＆Rails入門](#)
    - [6.1. Ruby基礎](6_ruby/rb.md)
    - [6.2. Rails基礎](6_ruby/rails.md)
    - [6.3. Rails開発実践基礎](6_ruby/rails_dev.md)
- [7. ](#)
- [8. ](#)
- [9. ](#)
- [10. ](#)
- [11. ネットワーク/セキュリティ入門](#)
    - [11.1. 通信ネットワーク基礎](11_network_security/network.md)
    - [11.2. Webセキュリティ基礎](11_network_security/websecurity.md)
- [12. インフラストラクチャ構築入門](#)
    - [12.1. Linux基礎](12_infrastructure/linux.md)
    - [12.2. Docker基礎](12_infrastructure/docker.md)
    - [12.3. AWS基礎](12_infrastructure/aws.md)
    - [12.4. Terraform基礎](12_infrastructure/terraform.md)
- [13. 個人的開発メモ](#)
    - [13.1. 命名/コーディング規則に関するメモ](13_personal_dev/namerule.md)
    - [13.2. コーディング実装時の小技集](13_personal_dev/dev_memo.md)
    - [13.3. HTML/CSS/生javascript(DOM操作)補足メモ](13_personal_dev/3_frontend_memo.md)
    - [13.4. 言語特性/言語に関するメモ](13_personal_dev/prolang_memo.md)

---

# 個人的な開発ロードマップ
2023年1月時点

**私 個人的な開発**を行う場合のコーディング的な技術選択肢。

なおクラウド(PaaS/IaaS/BaaS)やDBは含めない。

## 1. Web開発
Webサイト/アプリの構築を行う場合。
### 1.1. フロントエンド構築
#### 1.1.1. SPA構築する場合
| ケース | 技術 |
| ---- | ---- |
| SSG不要(≒フロントエンドonly)の場合 | React, Vue.js |
| SSG(≒サーバ機能付き)の場合 | Next.js, Nuxt.js | 

#### 1.1.2. MPA構築する場合
| ケース | 技術 |
| ---- | ---- |
| Webアプリケーション(バックエンド機能有りWebサイト) | Rails, Node系(express, Nest.jsなど) |
| 静的なWebサイト(ブログや簡素なホームページ) | Wordpress | 

## 1.2. バックエンド(APIサーバ)構築
基本的にWeb系はRails、またはNode系(expressなど)。

ゲーム系のAPIサーバならPHP?(要調査)

ブラウザ(Webサイト)ゲームならFireBaseとかもあり？

## 2. アプリ開発
PC / Mobile(Iphone, IOS) で実装する場合
### 2.1. PCアプリ(GUI デスクトップアプリ)
Electron(少し重い), tkinter(簡易的な場合)

### 2.2. Mobileアプリ
React Naitive

## 3. ゲーム開発
### 3.1. ブラウザで遊べるゲーム
迷わず**JavaScript**。

**WebGL**とか、kiwi.jsとか、もしかしたらVue.jsも？

### 3.2. PCやモバイルのアプリケーションとしてのゲーム
迷わず**Unity**。

グラフィックにこだわるならUnreal Engine。

# 個人的なメモ
## 今後 個人的に追加/触りたいものメモ

| Web系の技術 | 目安 | 目標 |
| ---- | ---- | ---- |
| Go言語 | ruby＆rails強化後 | 3年以内 |
| Kubernetes | Docker＆Go言語をある程度触った後 | 3年以内 |
| 暗号化技術入門 |  | 特になし |
| Rust |  |  |
| AI/機械学習入門 |  |  |


## 現状作成予定はない、必要になれば作成

| Web系の技術 | 目安 | 目標 |
| ---- | ---- | ---- |
| PHP/Laravel | - | - |
| Python/Django |  |  |
| SasS/SCSS | - | - |

# mdのhtmlコンバート化に関して<!-- omit in toc -->
暇なときにmd-to-htmlの改良上位互換を作成する。
私が即席で作ったmd-to-htmlのプログラムは出力ファイルの場所を指定できない問題があるためめんどう。

htmlのフォルダは``public/``とする

作成までは以下サイトを使い変換して貼り付ける。

https://codebeautify.org/markdown-to-html