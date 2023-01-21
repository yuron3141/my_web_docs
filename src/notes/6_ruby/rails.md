# Ruby on Rails基礎<!-- omit in toc -->
Ruby on Rails(以下Rails)はRuby構成であるWEB開発のためのMVCフレームワークです。環境構築の説明は割愛。

なおRailsでの開発方法の解説は**APIモード基準**です。
MPAでの設計方法は必要になれば追記予定。

## 目次<!-- omit in toc -->
- [1. Railsの基本知識と概念](#1-railsの基本知識と概念)
  - [1.1. 基本知識と特徴](#11-基本知識と特徴)
  - [1.2. Railsの基本操作と構造](#12-railsの基本操作と構造)
    - [1.2.1. 基本操作とコマンド](#121-基本操作とコマンド)
    - [1.2.2. ディレクトリ構成](#122-ディレクトリ構成)
  - [1.3. マイグレーション(migrate)](#13-マイグレーションmigrate)
  - [1.4. Model](#14-model)
    - [1.4.1. モデルに関するファイルや変数などの命名規則](#141-モデルに関するファイルや変数などの命名規則)
    - [1.4.2. モデルの生成](#142-モデルの生成)
    - [1.4.3. その他のモデル(一部)](#143-その他のモデル一部)
    - [1.4.4. モデルの削除(Consoleにて)](#144-モデルの削除consoleにて)
    - [1.4.5. モデルとマイグレーションの違い](#145-モデルとマイグレーションの違い)
  - [1.5. View(erb)](#15-viewerb)
  - [1.6. Controller](#16-controller)
    - [1.6.1. Controllerの命名規則](#161-controllerの命名規則)
    - [1.6.2. ひな形](#162-ひな形)
    - [1.6.3. アップロードされたファイルデータの取得](#163-アップロードされたファイルデータの取得)
  - [1.7. Routing](#17-routing)
    - [1.7.1. リソースのルーティング](#171-リソースのルーティング)
    - [1.7.2. ルートのURLの指定](#172-ルートのurlの指定)
    - [1.7.3. 名前空間(namespaceのグループ化)の付与](#173-名前空間namespaceのグループ化の付与)
  - [1.8. GemFile](#18-gemfile)
  - [1.9. Rakeコマンド](#19-rakeコマンド)
- [2. その他の実装](#2-その他の実装)
  - [2.1. アソシエーション](#21-アソシエーション)
  - [2.2. アクション後の処理実行の実装](#22-アクション後の処理実行の実装)
  - [2.3. クッキー・キャッシュの扱い](#23-クッキーキャッシュの扱い)
  - [2.4. バリテーションの実装](#24-バリテーションの実装)
  - [2.5. アクティブジョブ](#25-アクティブジョブ)
- [3. Railsにおけるテスト](#3-railsにおけるテスト)
- [4. Rails開発に便利なGem一覧](#4-rails開発に便利なgem一覧)
- [5. APIモードにおける実装メモ](#5-apiモードにおける実装メモ)
  - [5.1. Active Record(model)関係](#51-active-recordmodel関係)
    - [5.1.1. whereメソッドにおける比較演算(\<, \>, \<=, \>=)に関して](#511-whereメソッドにおける比較演算---に関して)
  - [5.5. その他rails設定](#55-その他rails設定)
    - [5.5.1. Railsで時間(日時など)を取得する場合に関して](#551-railsで時間日時などを取得する場合に関して)

      

## 参考資料<!-- omit in toc -->
| 名称 | URL |
| ---- | ---- |
| Rails ガイド | https://railsguides.jp/pro |
| Rails ドキュメント(v6.0) | https://railsdoc.com/archive/6_0_2_1/ |
| Rails ガイド API専用アプリケーション | https://railsguides.jp/api_app.html |
| Rails ガイド migrationによるテーブル作成 | https://railsdoc.com/page/create_table |
| Railsで超簡単API | https://qiita.com/k-penguin-sato/items/adba7a1a1ecc3582a9c9 |
| Rails params requireとpermitの違い | https://techblog.kyamanak.com/entry/2017/08/29/012909 |
| ActiveJobの基礎  Rails ガイド | https://railsguides.jp/active_job_basics.html |
| Rails+RSpecで気軽に始めるテスト | https://weseek.co.jp/tech/1409/ |

# 1. Railsの基本知識と概念
## 1.1. 基本知識と特徴
Ruby on Railsは2004年にデンマークのプログラマであるデイヴィッド・ハイネマイヤー・ハンソン（通称DHH）氏によって作られたフレームワークです。
「MVCアーキテクチャ」に基づいて構築されたフレームワークであることが特徴です。
それぞれ、Model（モデル）View（ビュー） Controller（コントローラ）の頭文字をとって名付けられています。

<img src="https://cdn-ak.f.st-hatena.com/images/fotolife/t/terakura-aina/20201214/20201214122052.png" width="80%">

### MVC(R含む)の解説<!-- omit in toc -->
| モデル | 説明 | 実装内容 |
| ---- | ---- | ---- |
| Model | データベースとのやり取りや処理の管理をする仕組み | DBの読み書き, システム処理 |
| View | サイトの見た目(MPA)を提供する仕組み | フロントエンド |
| Controller | Modelからデータを受け取りviewにレンダリングする仕組み | ModelとViewの連携 |
| Routing | URLとアプリケーションのパラメータを結びつける仕組み(ルータ) | ルーティング構築 |

RailsをMPA構成で開発する場合、Routing → Controller → Viewという順で処理が行われます。

## 1.2. Railsの基本操作と構造
### 1.2.1. 基本操作とコマンド
Railsプロジェクトの新規作成(APIモード(MPAの場合は--apiを除外))
```shell
rails new プロジェクト名 --api
```

| オプション | 説明　|
| ---- | ---- |
| --api | APIモード |
| -d | データベースの指定(ない場合はsqlite3となる):指定可能(mysql, postgresqlなど) |


Railsサーバの起動(注意:``rails db:migrate``がないと立ち上がりません=> DBを設定する必要がある)
```shell
rails s オプション
```
立ち上がるポート番号の変更は``config/puma.rb``で設定する、もしくはオプションで。

| オプション | 説明 | 使用例 |
| ---- | ---- | ---- |
| -e | 環境(開発 production/本番 test)の指定 | rails s -e production |
| -p | 立ち上げるポート番号の指定 | rails s -p 3001 |

DB変更は以下のように実装。
* Rails(v 6.0.0系)では以下コマンドでできる(例ではpostgreSQL)
```
rails db:system:change --to=postgresql
```

* もしくは以下の方法。
1. Gemfile内の``sqlite3``をそれぞれのDBに変更(変更後もちろんbundle install)
2. データベース設定(config/database.yml)で設定


### 1.2.2. ディレクトリ構成
| 親ディレクトリ | サブディレクトリ | 説明 |
| --- | --- | --- |
| **app/** |  | アプリケーションを格納する。主要なプログラムはこの配下に格納。 |
| ├ | assets/ | スタイルシートや画像などを格納するディレクトリ |
| ├ | assets/images/ | スタイルシートや画像などを格納する |
| ├ | assets/javascript/ | JavaScriptのスクリプトを格納する |
| ├ | assets/stylesheets/ | スタイルシートを格納する |
| ├ | **controllers/** | コントローラを格納する |
| ├ | controllers/application_controller.rb | アプリケーションで共通のコントローラ |
| ├ | helpers/ | ヘルパーを格納する |
| ├ | helpers/application_controller.rb | アプリケーションで共通のヘルパー |
| ├ | **models/** | モデルを格納 |
| ├ | viewa/ | ビューを格納する |
| ├ | views/layouts/ | ビューのレイアウトとして使用するRHTMLテンプレートを格納するディレクトリ |
| └ | views/layouts/application.html.erb | アプリケーションで共通のレイアウト |
| bin/ |  | バイナリ実行可能ファイルの格納(触る必要ない) |
| **config/** |  | プロジェクトの設定ファイルを格納 |
| ├ | **environments/** | 環境単位の設定ファイルを格納する |
| ├ | initializers/ | 初期化ファイルを格納する |
| └ | locales/ | 辞書ファイルを格納する |
| db/ |  | データベースの設定ファイルの格納 |
| └ | migrate/ | マイグレーションファイルを格納 |
| doc/ |  | ドキュメントを格納 |
| lib/ |  | 複数のアプリケーション間で共有するライブラリを格納する |
| ├ | assets/ | 自分で生成したライブラリを格納する |
| └ | tasks/ | 自分で生成したRakefileを格納する |
| **log/** |  | ログファイルが格納される |
| **public/** |  | Web上に公開するファイルを格納する |
| script/ |  | 開発に役立つプログラムを格納 |
| **test/** |  | アプリケーションのテストに使うファイルを格納 |
| tmp/ |  | キャッシュなど、一時的なファイルを格納 |
| vendor/ |  | ライブラリや他のアプリケーションで共有するような外部ライブラリを格納 |
| ├ | rails/ | rails:freeze:gemsタスクでバージョンを固定したRailsを格納 |
| └ | plugins/ | プラグインを格納 |
| config.ru |  | Rackの設定 |
| **Gemfile** |  | gemの依存関係を指定できる |
| Rakefile |  | ターミナルから実行可能なタスク |
| readme.md |  | Read.me |


## 1.3. マイグレーション(migrate)
> マイグレーション: **直接SQLを使わずにデータベースのテーブルやカラムなどの構造を変更/定義できる**もの

マイグレーションファイルは**db/migrate**フォルダの下に作成される。

以下コマンドを行うと、マイグレーションファイルに書いてある指示通りにテーブルが作られます。
```
rails db:migrate
```

マイグレーションファイルで指示した構造以外に3つのカラム(id, created_at, updated_at)が自動で生成される。

マイグレーションを利用したDB設計/設定の参考URL:https://railsdoc.com/archive/6_0_2_1/migration

Railsで生成するDBに初期データを入れる方法:https://qiita.com/mHadate/items/bc698ce5c126c932487e

### Railsで使用できるデータの型<!-- omit in toc -->
| 型 | 内容 |
| ---- | ---- |
| string | 文字列 |
| text | 長い文字列 |
| integer | 整数 |
| float | 浮動小数 |
| decimal | 精度の高い小数 |
| datetime | 日時 |
| timestamp | タイムスタンプ |
| time | 時間 |
| date | 日付 |
| binary | バイナリデータ |
| boolean | Boolean |

## 1.4. Model
モデル(Active Record)はアプリケーションが扱うデータや処理を表現するもの。
データベースへの読み書きを行う場合、このModelを使います。

```
rails g model モデル名
```
### 1.4.1. モデルに関するファイルや変数などの命名規則
| 種類 | 説明 | 例 |
| --- | --- | --- |
| モデル名 | 先頭は大文字で単数形 | User |
| ファイル名 | 先頭は小文字で単数形 | user.rb |
| テーブル名 | 先頭は小文字で複数形 | users |
| テストスクリプト名 | xxx_test.rb | user_test.rb |

### 1.4.2. モデルの生成
```rb
モデル名.new([属性])
```

実装例1(comment.rb)
```rb
class CommentsController < ApplicationController

  def index
    @comments = Comment.all.order("created_at DESC")
    @comment = Comment.new
  end

  def create
    # このcreateアクションの書き方は非推奨です。
    @comment = Comment.create!(comment_params)
    redirect_to root_path
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end
end
```
### 1.4.3. その他のモデル(一部)
| モデル | 説明 | 使用例 |
| ---- | ---- | ---- |
| **モデル.find_by(条件)** | 条件に一致した最初の1件を取得(存在しない場合の返り値はnil) | Page.find_by(category_id: 1) |
| **モデル.find(件数)** | IDを指定してレコードを取得(複数指定も可能) |  |
| モデル.find_each(オプション) ... | 大きなデータをもつモデルなどを処理する時に使う | 詳細はRailsドキュメントにて |
| モデル.find_in_bacthes(オプション) ... | 分割してレコードを処理する | 詳しくはRailsドキュメントにて |
| モデル.find_or_create_by(条件) | 条件を指定して初めの1件を取得し、1件もなければ作成 |  |
| モデル.find_by_sql(SQL文) | SQLを直接使って取得 |  |
| モデル.all | すべてのレコードを取得 |  |
| モデル.first(件数) | 最初のレコードを取得 |  |
| モデル.last(件数) | 最後のレコードを取得(取得は最後から) |  |
| **モデル.where(条件)** | 条件に当てはまるレコードを全て取得 | 詳細な使い方はRailsドキュメントにて |
| モデル.rewhere(条件) | 条件に当てはまるレコードを上書き |  |
| モデル.group(グループ化キー) | 取得した値をグループ化 |  |
| モデル.order(:キー名 [ :並び順]) | 取得したレコードの並び替え[昇順: ASC, 降順: DESC] |  |

まだまだたくさんあります。
詳しくは:https://railsdoc.com/archive/6_0_2_1/model

### 1.4.4. モデルの削除(Consoleにて)
```
rails destroy model モデル名
```

Rails Consoleと組み合わせ使用することでConsole上でもModelを使用可能。

### 1.4.5. モデルとマイグレーションの違い
* migrationファイル→DBに**変更を加える内容**
* modelファイル→**DBとRailsのアプリケーションを繋ぐ**

基本モデルの生成には``rails g model``を途中で生成したDBに変更を加える場合にマイグレーションファイルを使用する。

migrateファイルの中の設定例(カラム名は小文字英語)
```rb
create_table :titles do |t|
  t.データ型 :カラム名(, オプション)
end
```

なお``id``とデータ生成時刻``created_at(t.timestampsによる)``は自動生成される。

データ構造に条件を付ける例(デフォルト値やNot nullの設定)
```rb
create_table :titles do |t|
    t.string :name, :null => false
    t.integer :old, :default => 10
    t.string :address, :null => false, :default => 'Tokyo'
end
```

データベースの設定(生成するdbの種類や環境下設定)は``intalizers/database.yml``で行う。

## 1.5. View(erb)
ReactのJSXやTSXに似ている。HTMLの中にRubyが埋め込めるもの。

ビューからコントローラのインスタンス変数には``@変数名``でアクセス。

| コード | 説明 |
| ---- | ---- |
| <%  %> | 出力しないコード |
| <%=  %> | 結果の出力 |
| <%==  %> | 結果を**エスケープしないで**出力 |
| <%  -%> | 後ろの改行を取り除く |
| <%-  %> | 行頭の空白削除 |
| <%#  %> | コメント |

## 1.6. Controller
コントローラはモデルからデータを受け取りビューにレンダリングするためのもの。

```
rails g controller コントローラ名
```

特徴
* コントローラには複数のアクションが含まれている
* コントローラの名前の付け方には決まりがある

### 1.6.1. Controllerの命名規則
* 英大文字から始まる
* 英数字のみ
* パスカルケース
* ファイルはapp/controllerディレクトリに格納
* ファイル名はコントローラ名の単語区切りを「_」にし、すべて小文字

### 1.6.2. ひな形
```rb
class コントローラ名Controller < ApplicationController
  def メソッド名
  end
edn
```

URLから送られたパラメータは以下で取得(PostとGet(クエリパラメータ)の取得が可能)
```rb
params[:パラメータ名]
```

### 1.6.3. アップロードされたファイルデータの取得
```rb
=begin
  ファイル名の取得例
=end
params[:パラメータ名].original_filename
```

| 付けるもの | 説明 |
| ---- | ---- |
| .original_filename | ファイル名 |
| .content_type | コンテンツタイプ |
| .size | サイズ |
| .read | ファイル本体の読み込み |

## 1.7. Routing
ルーティングはURLとアプリケーションのパラメータを結びつけるためのもの。
``config/routes.rb``にて設定を行う。優先順位は上に書かれているものから。

詳しくはhttps://railsdoc.com/archive/6_0_2_1/routes

下記rakeコマンドでルーティングの確認が可能
```
rake routes
```

### 1.7.1. リソースのルーティング
```rb
resources(:リソース名 [, オプション])
```

| オプション | 説明 |
| --- | --- |
| :as | ルート名に利用する別名 |
| :controller | コントローラを指定 |
| :path_names | 指定したアクションのみ名前の変更 |
| :path | URLを書き換える |
| :only | 生成されるURLを絞り込む(受け付けるHTTPメソッドも指定可能) |
| :except | 指定したURLは生成しない |
| :shallow | ルーティングを複雑化しない |
| :shallow_path | 指定したパラメータを先頭に追加 |
| :shallow_prefix | 指定したパラメータを名前付きルーティングとして先頭に追加 |
| :format | フォーマット指定 |
| :param | パラメータを上書き |

REST APIの例
```rb
resources :pages
#     pages GET    /pages(.:format)          pages#index
#           POST   /pages(.:format)          pages#create
#  new_page GET    /pages/new(.:format)      pages#new
# edit_page GET    /pages/:id/edit(.:format) pages#edit
#      page GET    /pages/:id(.:format)      pages#show
#           PUT    /pages/:id(.:format)      pages#update
#           DELETE /pages/:id(.:format)      pages#destroy
```

処理するコントローラの指定例
```
resources :pages, controller: :mains
```

### 1.7.2. ルートのURLの指定
```rb
root(パス, [オプション])
```

pagesコントローラとindexアクションをroot指定
```rb
root controller: 'pages', action: 'index'
# root  / pages#index
```

### 1.7.3. 名前空間(namespaceのグループ化)の付与
```rb
namespace モジュール名 [, オプション] do
  ルート定義
end
```

| オプション |	説明 |
| ---- | ---- |
|:path	| ルートのパスを指定 |
|:module | namespaceを指定 |
|:as	| ルート名に使用する別名 |
|:shallow_path	| 指定したパラメータを先頭に追加 |

userにadminの名前空間の付与例
```rb
namespace :admin do
  resources :user
end
# admin_user_index GET    /admin/user(.:format)          admin/user#index
#                  POST   /admin/user(.:format)          admin/user#create
#   new_admin_user GET    /admin/user/new(.:format)      admin/user#new
#  edit_admin_user GET    /admin/user/:id/edit(.:format) admin/user#edit
#       admin_user GET    /admin/user/:id(.:format)      admin/user#show
#                  PUT    /admin/user/:id(.:format)      admin/user#update
#                  DELETE /admin/user/:id(.:format)      admin/user#destroy
```


## 1.8. GemFile
Railsで使用するGemの依存関係を管理するファイル。

詳しくはhttps://railsdoc.com/archive/6_0_2_1/gem

記入例
```gemfile
gem 'rails7', '3.2.1'
```

開発モードとプロダクションモードでのgemのインストールは下記のように設定。
```gemfile
# 上が開発モード、下がプロダクションモードでのgem利用
gem 'sqlite3', '~> 1.4', group: :development
gem 'pg', group: :production
```

基本的ワークフローとしては
Gemfileに必要なgemを追記した場合は``bundle install``、バージョン変更などをした場合は``bundle update``。

| コマンド | 説明 |
| --- | --- |
| bundle install | 依存ライブラリのインストール |
| bundle update | 依存ライブラリのアップデート |
| bundle package | 依存ライブラリを「vender/cache」以下にまとめる |
| bundle check | 依存ライブラリがインストールされているかチェック |
| bundle list | インストールされているライブラリの一覧 |
| bundle show | gemファイルのソースのパスを表示 |
| bundle init | gemを初期化 |


## 1.9. Rakeコマンド
Rubyで記述されたビルドツール。
Rails5以降はrailsコマンドでも呼び出し可能。

# 2. その他の実装
## 2.1. アソシエーション
参照元テーブルから参照先テーブルを参照するための設定

https://railsdoc.com/archive/6_0_2_1/association

## 2.2. アクション後の処理実行の実装
アクションの後に処理を実行

```rb
after_action(アクション名 [, オプション])
```

| オプション | 説明 |
| --- | --- |
| :only | 実行するアクション |
| :except | 実行しないアクション |
| :if | 実行する条件を指定 |
| :unless | 実行されない条件を指定 |

アクション後の処理の実行
```rb
after_action :store_location
def store_location
  if request.fullpath !~ Regexp.new('\\A/users/.*\\z') && !request.xhr?
    session[:previous_url] = request.fullpath
  end
end
```

https://railsdoc.com/archive/6_0_2_1/callback

## 2.3. クッキー・キャッシュの扱い
### キャッシュ<!-- omit in toc -->
キャッシュはユーザがアクセスする際のレスポンス最適化に使える。
キャッシュには以下の種類がある。

* ページキャッシュ
* アクションキャッシュ
* フラグメントキャッシュ
* ロシアンドールキャッシュ
* 低レベルキャッシュ
* SQLキャッシュ

キャッシュの保存場所
* メモリ
* ファイル
* memcached

#### クッキーを保存<!-- omit in toc -->
Cookieの保存

```rb
cookies[:クッキー名] = { key: クッキー情報 }
```

https://railsdoc.com/archive/6_0_2_1/cookie_cache

## 2.4. バリテーションの実装
データベースへのデータ保存前に保存するデータが要件(正しいもの)かどうかをバリテーションを用いて実装する。

属性の値が一意であることをバリデーションできる。
バリテーションはmodelまたはmigrationファイルに記載する。

https://railsdoc.com/archive/6_0_2_1/validation

## 2.5. アクティブジョブ
アクティブジョブはジョブを宣言し、それによりバックエンドでさまざまな方法によるキュー操作を実行するための機能。
バックグラウンドで実行するジョブの作成、キュー登録 (enqueue)、実行が可能です。

参考記事: https://qiita.com/petertakahashi/items/cb9ae73e5ba3020f4a89

アクティブジョブで実装される機能は基本的に**リアルタイム性を伴わない場合や重い処理**に使われることが多い。

- メールの送信
- 画像の処理
- データを集計してCSVに落とす

など

```
rails generate job ジョブ名
```

上記を実行すると``app/jobs``下にジョブが1つ作成される。
--queue urgentをオプションで付けるとジョブが1つ作成される。

生成されたジョブの雛型
```rb
class GuestsCleanupJob < ApplicationJob
  queue_as :default

  def perform(*guests)
    # 後で実行するタスクをここに置く
  end
end
```

### 生成されたジョブを実行(キュー登録)<!-- omit in toc -->
``rails console``で行える。
上記ジョブ名の場合
```
GuestsCleanupJob.perform_later (引数があればここに記述)
```

各場合
```
# 明日正午に実行したいジョブをキューに登録する
GuestsCleanupJob.set(wait_until: Date.tomorrow.noon).perform_later
# 一週間後に実行したいジョブをキューに登録する
GuestsCleanupJob.set(wait: 1.week).perform_later
```

### productionモードにおけるアクティブジョブ<!-- omit in toc -->
Rails自体が提供するのは、ジョブをメモリに保持するインプロセスのキューイングシステムだけです。
そのためproductionモードでは別途キューイングのバックエンドを用意する必要があります。


# 3. Railsにおけるテスト
## テストの予備知識<!-- omit in toc -->
テストを行う理由は以下の確認のため。
* あるURLにアクセスした際に、予期した画面が表示されるか
* ある正しい操作をした際に、アプリケーションの状態が正しく変更されるか
* ある正しくない操作をした際に、適切なエラーメッセージが表示されるか

テストには「**単体テスト(機能テスト)**」、「統合(複合)テスト」、「**総合テスト**」がある。

### 単体テスト(機能テスト)<!-- omit in toc -->
機能のテスト。

* モデルの検索系メソッドが正しい値を取得できるか
* モデルの更新系メソッドが正しくデータベースを更新できるか
* モデルの更新系メソッドが不正な入力に対して、適切なエラーを発生させるか
* 更新系のアクションが正しくデータベースを更新されるか

### 総合テスト<!-- omit in toc -->
* ログインして、新しいメンバーを追加して、ログアウトするといった一連の動きをテスト
など。

テストツールにはgem「Rspec」を使うことを勧める。

# 4. Rails開発に便利なGem一覧
よく使いそうなgemを記載しておきます。

| gem名 | 種類 | 説明 |
| ---- | ---- | ---- |
| **devise** | 認証系 | ユーザ認証の基本機能を提供 |
| devise_token_auth | 認証系 | **トークン認証**を実現するもの |
| dotenv-rails | 未分類 | 環境変数(.env)を扱うことが出来るようになる |
| omniauth | 認証系 | SNS認証の実装に使える |
| rack-cors | 未分類 | CORSの制御機能を追加するもの |
| rspec-rails | ツール | テストツール |
| cancancan | 認証系 | ユーザーの権限管理をしたいときに使える、deviceと混ぜるとよい |
| sidekiq-scheduler | 定期実行系 | cronのようにジョブを定期的に実行(Sidekiqの拡張) |
| whenever | 定期実行系 | crontab管理ライブラリ(cron必須) |

## deviceで実現できる機能<!-- omit in toc -->
* ユーザー登録
* ログイン/ログアウト
* 登録情報の編集
* パスワード変更、再発行

## sidekiq-schedulerに関して<!-- omit in toc -->
> Sidekiq:Rubyとは異なるプロセスをバックグラウンドで実行するためのキューイングジョブ処理の仕組み。

sidekiq-schedulerはSidekiqの拡張gemでcronのようにジョブを定期的に実行できる。

参考URL:https://zenn.dev/yoiyoicho/articles/538af41a66867d

# 5. APIモードにおける実装メモ

## 5.1. Active Record(model)関係
### 5.1.1. whereメソッドにおける比較演算(<, >, <=, >=)に関して
一般的にwhereメソッドにおいて比較によりデータを抽出する場合のパターンをいくつか記載。

whereメソッドの返り値は``ActiveRecord::Relation``なのでチェーン状にメソッドを記述できます。


通常の書き方
```rb
User.where('id >= ?', 100)
# 100以上のidのレコードを取得
```

範囲演算子を使った書き方(より大きい ``>``のみは範囲オブジェクトで記述不能)
```rb
# 10以上(>=)のidのレコードを取得
User.where(id: 10..)
# 10以下(<=)のidのレコードを取得
User.where(id: ..10)
# 10未満(<)のidのレコードを取得
User.where(id: ...10)
```

## 5.5. その他rails設定

### 5.5.1. Railsで時間(日時など)を取得する場合に関して
``Date.today``はRuby自体のものでENV(環境変数)やシステム(OS)のタイムゾーンを参照する。

``Date.current``はapplication.rbのタイムゾーンを用いる => Railsで設定可能

**結論Railsで制御が効くので**``Date.current``を使おう。

application.rbには以下のように設定すればいい(抜粋)
```rb
# JPT(東京時刻)に設定
config.time_zone = 'Tokyo'
# データベースへのデータ保存時刻をconfig.time_zoneに合わせる
config.active_record.default_timezone = :local
```