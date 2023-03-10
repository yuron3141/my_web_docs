# 命名/コーディング規則に関するメモ<!-- omit in toc -->

## 目次<!-- omit in toc -->
- [1. 命名規則](#1-命名規則)
  - [1.1. キャメルケース](#11-キャメルケース)
  - [1.2. パスカルケース](#12-パスカルケース)
  - [1.3. スネークケース](#13-スネークケース)
  - [1.4. ケバブケース](#14-ケバブケース)
- [2. 変数名に関して](#2-変数名に関して)
  - [2.1. 広い意味の言葉をつけない](#21-広い意味の言葉をつけない)
  - [2.2. 必要情報を変数名含める](#22-必要情報を変数名含める)
  - [2.3. 誤解されない名前にする](#23-誤解されない名前にする)
- [3.変数に関して](#3変数に関して)
  - [3.1. 定数にはコメントをつける](#31-定数にはコメントをつける)
  - [3.2. 配列やコレクションは複数形にする](#32-配列やコレクションは複数形にする)
  - [3.3. Boolean(真偽地)型は「is」「has」「can」「shoud」などをつける](#33-boolean真偽地型はishascanshoudなどをつける)
- [4. コメントに関して](#4-コメントに関して)
  - [4.1. コメントに書くべきこと](#41-コメントに書くべきこと)
  - [4.2. コメントに書くべきではないこと](#42-コメントに書くべきではないこと)

## 参考資料<!-- omit in toc -->
| 参考URL | URL |
| ---- | ---- |
| リーダーブルコード要約 | https://qiita.com/AKB428/items/20e81ccc8d9998b5535d |

# 1. 命名規則
## 1.1. キャメルケース
例: ``currentUserItem``
## 1.2. パスカルケース
例: ``CurrentUserItem``

## 1.3. スネークケース
例: ``current_user_item``

## 1.4. ケバブケース
例: ``current-user-item``

# 2. 変数名に関して
基本英語

## 2.1. 広い意味の言葉をつけない
基本的にはname, tmp, valueなど端的な名前は避けるが、
スコープが小さければ短い名前でも良い。

基本的にはuser_name, input_valueなど意味が分かるように組み合わせる。


## 2.2. 必要情報を変数名含める
必要な情報を変数名に入れる。

* tmpやretvalなどの汎用的すぎる名前は避ける
* i,j,k などはループの変数として理解できるため使ってもよい
* 長い名前を入力するのは問題じゃない(今はIDEやエディタが補完するため）
* stringをstr、documentをdocと省略するのは問題ないが、チーム独自の省略規則はやめるべし
  
## 2.3. 誤解されない名前にする

* 限界値を示すときは min_ max_を使う
* 範囲を示すときは first_ last_を使う
* 包括的範囲には begin_ end_　を使う

# 3.変数に関して
## 3.1. 定数にはコメントをつける
## 3.2. 配列やコレクションは複数形にする
## 3.3. Boolean(真偽地)型は「is」「has」「can」「shoud」などをつける

# 4. コメントに関して
## 4.1. コメントに書くべきこと

* 監督コメンタリーを入れる（「ここのコードは◯◯という背景でこうなったのだ」という説明を入れる。なんらかのロジックと比較した結果こちらのほうがよいと判断してこうなったと書くのもいい.要は他の人が見た時に「別の方法があるのになんでこうしたんだろうか？」という疑問をもたせないようにする）

* コードに欠陥あることを認める（パフォーマンスやアルゴリズムの選定、ロジックがスマートでない）があることを認めており、いつか直さないといけないことをコメントしておく
  
## 4.2. コメントに書くべきではないこと

* コードからすぐに分かることをコメントに書かない
* 関数名が変だとか変数名が変だとか修正可能なものを補うコメント