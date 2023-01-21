# Ruby on Rails開発実践基礎<!-- omit in toc -->
Ruby on Railsを用いてプロダクトを作る実践で用いるツールや機能の解説

主にコーディング規則の設定とテストツールの使い方に関して解説。

## 目次<!-- omit in toc -->
- [1. 静的コード解析ツール](#1-静的コード解析ツール)
  - [1.1 RuboCop](#11-rubocop)
    - [1.1.1. RuboCopのインストール](#111-rubocopのインストール)
    - [1.1.2. 設定ファイルの作成](#112-設定ファイルの作成)
- [2. テストツール](#2-テストツール)
  - [2.1. Rspec](#21-rspec)
    - [2.1.1. Rspecのインストール](#211-rspecのインストール)
    - [2.1.2. テストファイル作成の準備と実施方法](#212-テストファイル作成の準備と実施方法)
    - [2.1.3. Rspecでのテストコードを用いた開発の進め方](#213-rspecでのテストコードを用いた開発の進め方)
    - [2.1.4. Rspecでのテストコードの実行方法](#214-rspecでのテストコードの実行方法)
    - [2.1.5. Rspecでのテストコードの記述作法](#215-rspecでのテストコードの記述作法)



# 1. 静的コード解析ツール
コーディング規則を設定することができるツール。

## Ruby開発のコーディング規則設定の参考<!-- omit in toc -->
| 参考ページ | URL |
| ---- | ---- |
| Ruby-Style-Guide　/ JP | https://github.com/fortissimo1997/ruby-style-guide/blob/japanese/README.ja.md |

## 1.1 RuboCop
### 1.1.1. RuboCopのインストール
gemfile
```rb
group :development do
  gem 'rubocop', require: false
  gem "rubocop-performance", require: false
  gem "rubocop-rails", require: false
  gem "rubocop-rspec", require: false
end
```

### 1.1.2. 設定ファイルの作成
railsプロジェクトのルートディレクトリに``.rubocop.yml``を作成。

下記コマンドをターミナルで実行
```
rubocop --auto-gen-config
```

上記コマンドの意味
* rubocop_todo.ymlの作成
* .rubocop.ymlがない場合に.rubocop.ymlの作成
* .rubocop.ymlに『inherit_from: .rubocop_todo.yml』を追加
* 現時点でのCopによる指摘箇所を.rubocop_todo.ymlに追加


# 2. テストツール
テストコードを書き、テストを実行するためのツール。

## 2.1. Rspec
### 2.1.1. Rspecのインストール
gemfileに``gem 'rspec-rails'``を記述後、bundle install。

### 2.1.2. テストファイル作成の準備と実施方法
rspec-railsをbundle install後に``rails g rspec:install``を行う。

Railsにおいてテストコードは``spec``と呼ばれ``spec/``内はrailsのディレクトリ構成と同じようにテストコードを構築します。

例
```
spec/
   models/
      モデルファイル名_spec.rb
   controllers/  
      コントローラファイル名_spec.rb
```

### 2.1.3. Rspecでのテストコードを用いた開発の進め方
テストを用いた開発は以下のサイクルを繰り返して行います。

1. 期待するプログラムの振る舞いをスペックに記述する
2. プログラムを実装する

``spec/``内のファイルにテストコードを書いて、それが正しく実行されるかどうかを確認しながら開発を進める。

### 2.1.4. Rspecでのテストコードの実行方法
全てのテストを実行
```
bundle exec rspec
```

テストコードを指定して実行(specからのファイルのパスを指定)
```
bundle exec rspec spec/...

//下は行数を指定する場合(3行目)
bundle exec rspec spec/...:3
```

### 2.1.5. Rspecでのテストコードの記述作法
メソッドの種類と目的
| メソッド | 目的 | 例 |
| ---- | ---- | ---- |
| describe | テスト対象を文章で記述 | it "テストの対象"do ... end |
| context | 特定の条件の内容を文章で記述 | it "特定の条件の内容"do ... end |
| it | テストのメソッドの振る舞いを文章で記述 | it "振る舞いを記述"do ... end |
| expect | テスト対象を検証するために記述 | expect(user.full_name).to eq "Tom Cat" |

expectメソッドの補足

例:Userに対するmodel(Userモデル)のテストコードを記述する例
```rb
RSpec.describe User, type: :model do
  it "姓、名を登録すると、姓名が取得できること" do
    user = User.new(
          last_name:  "Tom",
          first_name: "Cat"
    )
    expect(user.full_name).to eq "Tom Cat"
    # ここで使うuser.full_nameメソッドはUserモデルファイルに記述
  end
end
```