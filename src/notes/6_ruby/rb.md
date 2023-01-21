# Ruby基礎<!-- omit in toc -->

## 目次<!-- omit in toc -->
- [1. 基本知識](#1-基本知識)
- [2. コメントアウト](#2-コメントアウト)
- [3. 変数と宣言](#3-変数と宣言)
  - [3.1. ローカル変数](#31-ローカル変数)
  - [3.2. 定数](#32-定数)
  - [3.3. インスタンス変数](#33-インスタンス変数)
  - [3.4. クラス変数](#34-クラス変数)
  - [3.5. グローバル変数](#35-グローバル変数)
- [4. データの型](#4-データの型)
  - [4.1. オブジェクト](#41-オブジェクト)
  - [4.2. シングルクォートとダブルクォート](#42-シングルクォートとダブルクォート)
  - [4.3. 変数の文字列中における出力と特殊文字の出力](#43-変数の文字列中における出力と特殊文字の出力)
  - [4.4. 配列](#44-配列)
    - [4.4.1. 配列メソッド](#441-配列メソッド)
      - [4.4.1.1. splitメソッド](#4411-splitメソッド)
      - [4.4.1.2. joinメソッド](#4412-joinメソッド)
      - [4.4.1.3. first/lastメソッド](#4413-firstlastメソッド)
      - [4.4.1.4. unshift/pushメソッド](#4414-unshiftpushメソッド)
      - [4.4.1.5. shift/popメソッド](#4415-shiftpopメソッド)
      - [4.4.1.6. sumメソッド](#4416-sumメソッド)
      - [4.4.1.7. sampleメソッド](#4417-sampleメソッド)
      - [4.4.1.8. shuffleメソッド](#4418-shuffleメソッド)
      - [4.4.1.9. sordメソッド](#4419-sordメソッド)
      - [4.4.1.10. uniqメソッド](#44110-uniqメソッド)
      - [4.4.1.11. injectメソッド](#44111-injectメソッド)
      - [4.4.1.12. includeメソッド](#44112-includeメソッド)
      - [4.4.1.13. mapメソッド](#44113-mapメソッド)
      - [4.4.1.14. selectメソッド/rejectメソッド](#44114-selectメソッドrejectメソッド)
      - [4.4.1.15. group\_byメソッド](#44115-group_byメソッド)
  - [4.5. ハッシュ](#45-ハッシュ)
      - [4.5.1. シンボルを用いたハッシュ表現](#451-シンボルを用いたハッシュ表現)
      - [4.5.2. lengthメソッド](#452-lengthメソッド)
      - [4.5.3. emptyメソッド](#453-emptyメソッド)
  - [4.6. 正規表現](#46-正規表現)
    - [6.6.1. sub](#661-sub)
    - [4.5.2. gsub](#452-gsub)
    - [4.5.3. match](#453-match)
- [5. 演算子](#5-演算子)
  - [5.1. 二項演算子](#51-二項演算子)
  - [5.2. 単項演算子](#52-単項演算子)
  - [5.3. 比較演算子](#53-比較演算子)
  - [5.4. ビット演算子](#54-ビット演算子)
  - [5.5. 論理演算子](#55-論理演算子)
  - [5.6. 条件(三項)演算子(?と:)](#56-条件三項演算子と)
- [6. 型変換](#6-型変換)
  - [6.1. 暗黙的な型変換](#61-暗黙的な型変換)
  - [6.2. 明示的な型変換](#62-明示的な型変換)
    - [6.2.1. 文字列 =\> 数値](#621-文字列--数値)
    - [6.2.2. 数値 =\> 文字列](#622-数値--文字列)
    - [6.2.3. 数値(整数) =\> 数値(小数)](#623-数値整数--数値小数)
    - [6.2.4. ハッシュ/範囲オブジェクト =\> 配列](#624-ハッシュ範囲オブジェクト--配列)
    - [6.2.5. 配列 =\> ハッシュ](#625-配列--ハッシュ)
  - [6.3. 真偽判定メソッド](#63-真偽判定メソッド)
    - [6.3.1. nilかの判定](#631-nilかの判定)
    - [6.3.2. 空文字列・空配列かの判定](#632-空文字列空配列かの判定)
- [7. 関数(メソッド)と宣言](#7-関数メソッドと宣言)
- [8. 条件分岐](#8-条件分岐)
  - [8.1. if文](#81-if文)
  - [8.2. case文](#82-case文)
- [9. ループと反復処理](#9-ループと反復処理)
  - [9.1. while文](#91-while文)
  - [9.2. until文](#92-until文)
  - [9.3. for文](#93-for文)
  - [9.4. 範囲オブジェクト](#94-範囲オブジェクト)
  - [9.5. eachメソッド](#95-eachメソッド)
    - [9.5.1. その他eachを拡張したメソッド](#951-その他eachを拡張したメソッド)
  - [9.6. loopメソッドとbreak](#96-loopメソッドとbreak)
  - [9.7. nextとredo](#97-nextとredo)
- [10. クラス](#10-クラス)
  - [10.1. クラスの定義](#101-クラスの定義)
  - [10.2. ファイル分割(require)](#102-ファイル分割require)
  - [10.3. 入力値の受け取り(gets.chomp)](#103-入力値の受け取りgetschomp)
  - [10.4. 継承](#104-継承)
  - [10.5. オーバライド](#105-オーバライド)
  - [10.6. 親クラスで重複するメソッドの呼び出し（super）](#106-親クラスで重複するメソッドの呼び出しsuper)
  - [10.7. Dateクラス](#107-dateクラス)
  - [10.8. クラスメソッド](#108-クラスメソッド)
- [11. モジュール](#11-モジュール)
- [12. Rubyの性質/構造など](#12-rubyの性質構造など)
  - [12.1. Rubyの予約語](#121-rubyの予約語)
- [13. その他Rubyメモ](#13-その他rubyメモ)
  - [13.1. 簡潔に書くための方法](#131-簡潔に書くための方法)
    - [13.1.1 ブロックを簡潔に書くための工夫(\&:メソッド名に関して)](#1311-ブロックを簡潔に書くための工夫メソッド名に関して)
  - [13.2. 変数の型チェックの方法](#132-変数の型チェックの方法)
    - [13.2.1. is\_a?(kind\_of?)を用いた方法](#1321-is_akind_ofを用いた方法)
    - [13.2.2. instance\_of?を用いた方法](#1322-instance_ofを用いた方法)
    - [13.2.3. 変数名.classを用いた方法](#1323-変数名classを用いた方法)
    - [13.2.4. ===を用いた方法](#1324-を用いた方法)

## 参考記事<!-- omit in toc -->
| 名称 | URL |
| ---- | ---- |
| Ruby 2.7.0系 リファレンスマニュアル　| https://docs.ruby-lang.org/ja/2.7.0/doc/index.html |
| Ruby 2.7.0系 組み込みライブラリ | https://docs.ruby-lang.org/ja/2.7.0/library/_builtin.html |


# 1. 基本知識
RubyはWebアプリケーションを作るためのプログラミング言語の1つであり、
まつもとゆきひろ氏により1995年に開発されたオブジェクト指向スクリプト言語です。
オブジェクト指向言語なので、すべてのデータがオブジェクトとして表現されています。
つまり継承などといったオブジェクト指向ならではの機能を使うことができます。
Rubyを使うメリットとして一番大きいのは、Ruby on RailsというWebアプリケーションフレームワークを使うことができるということです。


# 2. コメントアウト
Rubyのコメントアウトは以下のように記述します。
```ruby
# 1行コメント
=begin
  複数行コメント 
=end
```


# 3. 変数と宣言
|  変数宣言  |  特徴  |
| ---- | ---- |
|  変数名  |  ローカル変数:**宣言と初期化を同時に行う**必要があります  |
|  変数名{大文字}  |  定数:慣習として定数(値を変えない変数)は**すべて大文字**で宣言します  |
|  @変数名  |  インスタンス変数:**インスタンスメソッド内でのみ使用できる**変数です  |
|  @@変数名  |  クラス変数:定義されたクラス内で共有する値を扱うことのできる変数です  |
|  $変数名  |  グローバル変数:**メソッドやクラスを超えて参照できる**変数です  |


## 3.1. ローカル変数
ローカル変数は変数の中で一番よく使われます。宣言と初期化を同時に行う必要があります。慣習として、全て小文字を使います。
```ruby
test = "ruby"
```
### スコープ<!-- omit in toc -->
メソッド、クラスなどの定義された場所の範囲内でのみ使用可能です。
クラスやメソッドを超えての参照はできないので定義された場所以外から参照をするとエラーになります。


## 3.2. 定数
慣習として、定数は全て大文字で宣言をします。
```ruby
TEST = "ruby"
```
### スコープ<!-- omit in toc -->
定義されたクラスやモジュール内やクラスを継承しているクラスなどで参照できます。
クラスの中で定義可能なので同じ定数名でもクラスごとに違う値を持つことができます。定数はメソッドの中では定義できません。


## 3.3. インスタンス変数
変数の初めに「@」をつけることで宣言を行うことができます。
```ruby
@test = "ruby"
```
### スコープ<!-- omit in toc -->
**インスタンスメソッド内でのみ使用できる**変数です。
インスタンスごとに異なる値を持つことができ、メソッドを超えて参照することができます。
```ruby
class User
  def initialize(name)
    @name = name
  end
 
  def put_name
    p @name
  end
end
 
user1 = User.new("taroo")
user2 = User.new("hanako")
user1.put_name　
user2.put_name
```
実行結果
```bash
"taroo"
"hanako"
```


## 3.4. クラス変数
変数目の初めに「@@」をつけることで宣言できます。
```ruby
@@test = "ruby"
```
### スコープ<!-- omit in toc -->
定義されたクラス内で共有する値を扱うことのできる変数です。
他のインスタンスで使用しても同じクラス内であれば共通の値として扱われるのでクラス内では一つの値しか扱うことができません。
クラスを継承したクラスからも参照可能です。
```ruby
class Samurai
  @@samurai = 1
  def foo
    puts @@samurai
  end
end
 
person1 = Samurai.new
person1.foo
```
実行結果
```bash
1
```

## 3.5. グローバル変数
変数名の一番初めに「$」をつけることでグローバル変数は宣言できます。
```ruby
$test = "ruby"
```
### スコープ<!-- omit in toc -->
ローカル変数の逆で、メソッドやクラスを超えて参照できる変数です。
定義した場所にとらわれず、プログラムのどこからでも参照や変更ができます。
そのため、名前を付ける際には重複しないように注意が必要です。
```ruby
$global = "global"
 
def greet
  p $global
end
 
greet
```
実行結果
```bash
"global"
```


# 4. データの型
Ruby にはいわゆる基本データ型（プリミティブ型）がありません。
整数・浮動小数点数・文字列・配列・連想配列・true・false・nil など、
すべてがオブジェクト（特定クラスのインスタンス）になります。


## 4.1. オブジェクト
|  オブジェクト名  |  データの型  |
| ---- | ---- |
|  数値  |  Numeric(Integer,Floatなど)数値を表す  |
| 真偽値 | Boolean(true または false) |
| 文字列 | String 文字列を表す |
| 配列 | Array 配列を表す |
| 時間 | Time 時間を表す |
| ハッシュ | Hash ハッシュを表す |
| ファイル | File ファイルのRead/Writeを実行するために使う |
| 正規表現 | Regexp 文字列マッチングのためのパターンを表す |


## 4.2. シングルクォートとダブルクォート
Rubyにおいて""は''は違う意味となります。javascriptにおいては同じです。
"や'を出力中に含めるのは\を直前につけます。
```ruby
puts "\"を出力します\n"
```
実行結果
```bash
"を出力します
```


## 4.3. 変数の文字列中における出力と特殊文字の出力
出力文字列中に変数を含ませたい場合(式展開)やインデントである(\t)などの特殊文字を使いたい場合は""で囲う必要があります
```ruby
text = "Ruby"
puts "私は#{text}を勉強しています"
```
実行結果
```bash
私はRubyを勉強しています
```


## 4.4. 配列
配列オブジェクトは[と]で値をカンマ区切りで囲みます。複数の要素を格納するために使用します。
```ruby
data = [1,2,3]
puts data

puts data[0]

puts data[-1]

puts data.size #data.lengthでも良い
```
実行結果
```bash
1
2
3

1

3

3
```

### 4.4.1. 配列メソッド
よく使いそうな配列メソッドを記載(これ以外もあります)。

#### 4.4.1.1. splitメソッド
要素を区切った配列を返す

```rb
#デフォルト(引数無し)挙動
color = "blue yellow red"
puts color.split   
# ["blue", "yellow", "red"]
#引数(,)付き挙動
color = "blue,yellow,red"
puts color.split(",") 
#["blue", "yellow", "red"]
```

#### 4.4.1.2. joinメソッド
配列を一つの文字列として連結して返す

```rb
color = ["blue", "yellow", "red"]
puts color.join
# "blueyellowred"
```

#### 4.4.1.3. first/lastメソッド
配列の先頭/末尾の要素を返す

```rb
languages = ["Ruby", "PHP", "Java"]

puts languages.first  # Ruby
puts languages.last  # Java
```

#### 4.4.1.4. unshift/pushメソッド
引数であるオブジェクトを配列の先頭/末尾に挿入して返す
```rb
color = ["blue", "red", "yellow"]
color = color.unshift("white")
color = color.push("black")
puts color
# ["white", "blue", "red", "yellow", "black"]
```

#### 4.4.1.5. shift/popメソッド
引数であるオブジェクトを配列の先頭/末尾を削除して返す

```rb
color = ["blue", "red", "yellow"]
color = color.shift
color = color.pop
puts color
# ["red"]
```

#### 4.4.1.6. sumメソッド
配列の全要素を足した値を返す

```rb
puts [1, 2, 3].sum
# 6

a = [1, 2, 3]
puts a.sum / a.size
# 2
```

#### 4.4.1.7. sampleメソッド
配列の要素を1個ランダムに選んで返す

```rb
puts [1, 2, 3].sample
# 1, 2, 3のどれかをランダムに返す
```

#### 4.4.1.8. shuffleメソッド
配列の要素をランダムに並び変えて返す
```rb
puts [1, 2, 3].shuffle
# [3, 2, 1], [3, 1, 2], [2, 1, 3], [2, 3, 1], [1, 2, 3], [1, 3, 2]のどれかを返す
```

#### 4.4.1.9. sordメソッド
配列の要素を順番に返す(デフォルトはASC(昇順) .reverseをつけるとDESC(降順)で返す) / 文字列(英語)の場合はabc順、大文字優先
```rb
puts [3, 1, 2].sort  #=> [1, 2, 3]
puts [2, 3, 1].sort  #=> [1, 2, 3]
puts [2, 1, 3].sort  #=> [1, 2, 3]

puts ["aya", "jun", "ichiro"].sort  #=> ["aya", "ichiro", "jun"]
puts ["jun", "aya", "ichiro"].sort  #=> ["aya", "ichiro", "jun"]
puts ["ichiro", "aya", "jun"].sort  #=> ["aya", "ichiro", "jun"]
```

#### 4.4.1.10. uniqメソッド
配列の中の重複要素を削除して返す
```rb
num = [1, 2, 2, 3, 4, 5, 5]
puts num.uniq
# [1, 2, 3, 4, 5]
```

#### 4.4.1.11. injectメソッド
配列要素を用いて繰り返し計算を行うためのメソッド
```rb
num = [1, 2, 3, 4, 5]
puts num.inject() { |sum, n| sum += n } #足すものの初期値はinject()内に書く
# 15
```

#### 4.4.1.12. includeメソッド
配列に渡された引数が含めていたらtrue、そうでないばあいfalseを返す
```rb
name = ["taro", "hanako", "saki"]

puts name.include?("taro")
puts name.include?("yoshiki")
# true
# false
```

#### 4.4.1.13. mapメソッド
配列の各要素に対して処理をして新しい配列を返す
```rb
colors = ["blue", "red", "yellow"]
puts colors.map{ |color| color.upcase }
# ["BULUE", "RED", "YELLOW"]

numbers = [2 ,3 , 4, 5]
puts numbers.map{ |num| num * 2 }
# [4, 6, 8, 10]
```

#### 4.4.1.14. selectメソッド/rejectメソッド
ブロックの戻り値が真/偽のものだけを配列として返す
```rb
color = ["blue", "red", "yellow", 1, 3]
puts color.select { |i| i.class == String }
puts color.reject { |i| i.class == String }
# ["blue", "red", "yellow"]
# [ 1, 3 ]
```

#### 4.4.1.15. group_byメソッド
各要素ごとにブロックを評価したグループ分けしたものを返します(返り値はハッシュ)
```rb
score = [70, 100, 90, 95, 80]
puts score.group_by {|s| s >= 80}
# {false=>[70], true=>[100, 90, 95, 80]}

array = [1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6]
puts array.group_by(&:itself)
# {1=>[1], 2=>[2, 2], 3=>[3, 3, 3], 4=>[4, 4, 4], 5=>[5, 5], 6=>[6]}

```

## 4.5. ハッシュ
Hashも配列と同じように複数の要素を格納するために使用します。
Hashはインデックスに「キー」と呼ばれる任意の文字列を指定して「バリュー」と呼ばれる要素を指定します
次のように作成します。
```ruby
menu = {"うどん" => "300円", "ラーメン" => "500円", "パスタ" => "800円"}
#要素の出力
puts menu["うどん"]
#要素の追加
menu["そば"] = "600円"
puts menu["そば"]
#要素の更新
menu["うどん"] = "400円"
puts menu["うどん"]
#要素の削除
menu.delete("うどん")
```
実行結果
```bash
300円
600円
400円
```
#### 4.5.1. シンボルを用いたハッシュ表現
またkeyとvalueはシンボルを用いて以下のようにも記述可能。
シンボルを使うとruby的には**メモリ消費が少なく、パフォーマンスが高い**というメリットがあります。

```ruby
menu = {value: 300, name: "tesla"}
menu2 = {:value => 300, :name => "tesla"}
puts menu[:value]
puts menu2[:value]
```

#### 4.5.2. lengthメソッド
Hashの要素数を調べるにはlengthメソッドを使います。lengthメソッドはHashの要素数を整数で返します。
```ruby
menu = {"うどん" => "300円", "ラーメン" => "500円", "パスタ" => "800円"}
puts menu.length
```
実行結果
```bash
3
```
#### 4.5.3. emptyメソッド
Hashが空(要素数0)かどうかはempty?メソッドを使って調べることができます。
empty?メソッドはHashが空であればtrue、1つ以上の要素があればfalseを返します。
```ruby
menu = {"うどん" => "300円", "ラーメン" => "500円", "パスタ" => "800円"}
puts menu.empty?
```
実行結果
```bash
false
```

## 4.6. 正規表現
Rubyで正規表現を扱うためのクラスはRegexpクラスです。
正規表現を用いる理由は以下です。
* ある文字列が特定のパターンを持っているか調べる
* ある文字列から特定のパターンを持つ部分を抜き出す
* ある文字列の特定のパターンを他の文字列で置き換える

Rubyでは正規表現をリテラルで書くことができます。 正規表現リテラルは/（スラッシュ）と/（スラッシュ）で正規表現のパターン文字列を囲みます。
### 6.6.1. sub
正規表現のパターン(pattern)にマッチした**最初**の部分を文字列(replacement)に置換します。
```ruby
文字列.sub(正規表現パターン, 置換文字)
```
使用例
```ruby
str = "田中さん、こんにちは"
str.sub(/さん/, "君")
puts str # => 田中君、こんにちは
```
### 4.5.2. gsub
正規表現のパターン(pattern)にマッチした全ての部分を文字列(replacement)に置換します。
subとの違いはパターンにマッチしたも全てを置換することです。subは最初だけです。
```ruby
文字列.gsub(正規表現パターン, 置換文字)
```
使用例
```ruby
str = "咲いた、咲いた、チューリップが咲いた"
str.gsub(/咲いた/, "咲かない")
puts str # => 咲かない、咲かない、チューリップが咲かない
```

### 4.5.3. match
matchメソッドは正規表現にマッチした部分文字列を取得するときに使用します。
```ruby
文字列.match(正規表現パターン)
```
使用例
```ruby
string = "Rubyの勉強, Railsの勉強"
md = string.match(/.*の勉強/)
puts md[0] # => "Rubyの勉強, Railsの勉強"
```

# 5. 演算子
演算子はよく利用する演算処理を記号などで表現したものです。 たとえば、足し算をする + も演算子の一種です。これ以外にも演算子には多くの種類があります。
演算子は演算する対象を持ちます。この演算子の対象のことを**被演算子(オペランド)**と呼びます。


## 5.1. 二項演算子
|  演算子  |  演算した値の結果  |
| ---- | ---- |
| + | 2つの数字の和もしくは文字列の結合 |
| - | 2つの数字の差 |
| * | 2つの数字の積 |
| / | 2つの数字の商 |
| % | 2つの数字の商をとった余り |
| ** | べき乗の結果 |

## 5.2. 単項演算子
|  演算子  |  演算した値の結果  |
| ---- | ---- |
| +(単項プラス演算子) | 文字列の数字も数値に変換し演算、数字でない場合も特殊値に変換 |
| -(単項マイナス演算子) | 単項プラス演算子のマイナス版 |
| ++(インクリメント演算子) | オペランドの値を+1する演算子、前置か後置で評価の順番は変わるが最終的な演算結果は同じ |
| --(デクリメント演算子) | インクリメント演算子のマイナス版 |

## 5.3. 比較演算子
|  演算子  |  演算した値の結果  |
| ---- | ---- |
| == | 2つのオペランドを比較し同じ型で同じ値の場合にTrue、そうでない場合Falseを返す |
| != | つのオペランドを比較し異なる型または異なる値の場合にTrue、そうでない場合Falseを返す |
| > | 左オペランドが右オペランドより大きいならば、trueを返します|
| >= | 左オペランドが右オペランドより大きいまたは等しいならば、trueを返します |
| < | 右オペランドが左オペランドより大きいならば、trueを返します|
| <= | 右オペランドが左オペランドより大きいまたは等しいならば、trueを返します |

## 5.4. ビット演算子
表記割愛、必要が生じれば追記

## 5.5. 論理演算子
基本的に真偽値を扱う演算子でAND（かつ）、OR（または）、NOT（否定）を表現できます。
|  演算子  |  演算した値の結果  |
| ---- | ---- |
| && | AND |
| ｜｜ | OR |
| ! | NOT|

## 5.6. 条件(三項)演算子(?と:)
条件演算子は条件式を評価した結果がtrueならば、Trueのとき処理する式の評価結果を返します。 
条件式がfalseである場合は、Falseのとき処理する式の評価結果を返します。
```bash
条件式 ? Trueのとき処理する式 : Falseのとき処理する式;
```
使用例
```ruby
result = 80
flag = result > 60 ? "合格" : "不合格"
puts flag # => 合格
```

# 6. 型変換

## 6.1. 暗黙的な型変換
  処理において、その処理過程で行われる明示的ではない型変換のこと、使用不推奨。
 意図しない型変換によるプログラムの予期しない動作やバグの原因となりえる。
 

## 6.2. 明示的な型変換
### 6.2.1. 文字列 => 数値
**.to_i**を使用します。
```ruby
#文字列 → 数値
puts str.to_i
```
### 6.2.2. 数値 => 文字列
**.to_s**を使用します。
```ruby
#数値 → 文字列
puts int.to_s
```
### 6.2.3. 数値(整数) => 数値(小数)
整数から浮動小数への変換には **.to_f** を使用します。
```ruby
num = 10.to_f
# 10 => 10.0
```
小数から整数への変換には **.to_i** を使用します。
```ruby
num = 12.67.to_f
# 12.67 => 12
```

### 6.2.4. ハッシュ/範囲オブジェクト => 配列
ハッシュ/範囲オブジェクトから配列への変換は**to_a**を使用します。
```rb
human = {name: "pikawaka", age: e25}
human.to_a
# => [[:name, "pikawaka"], [:age, 25]]
```

### 6.2.5. 配列 => ハッシュ
配列からハッシュへの変換は**to_h**を使用します。
```rb
human = [["name", "pikawaka"], ["age", 25]]
human.to_h
# => {"name"=>"pikawaka", "age"=>25}
```


## 6.3. 真偽判定メソッド
### 6.3.1. nilかの判定
変数の値がnilかどうかを判定する場合 **.nil?** を用います。
```ruby
value = nil
if value.nil?
  puts "valueはnilです" # => 実行
else
  puts "valueはnilではない"
end
```
### 6.3.2. 空文字列・空配列かの判定
**.empty?** は空の文字列や空の配列の場合にtrueを返します。
nilやbooleanやintegerに対して呼び出すとNoMethodErrorが発生します。
```ruby
test = ""
test.empty? # => true
```


# 7. 関数(メソッド)と宣言
## メソッドの宣言<!-- omit in toc -->
Rubyでは、メソッドを定義するためにdefキーワードを使います。次のように関数を定義できます。
```ruby
def メソッドの名前
  やりたい処理
end
```
## デフォルトの引数<!-- omit in toc -->
メソッドに対して、何らかの値を渡したい場合は、引数を付けます。
引数付きのメソッド定義は、以下の書式を使います。
```ruby
def hello(name, age)
  puts "Hello World! #{name}! You are #{age} years old!"
end
```
## キーワード引数<!-- omit in toc -->
メソッド定義のところで、変数でなくてキーワードを指定する方法があります。
Ruby2.0以降でしか使えませんが、非常に扱いやすいので、Ruby2.0以降では、基本的に以下の手法を用いる方がよいでしょう。
```ruby
def hello(name:, age:)
  puts "Hello World! #{name}, #{age} years old."
end
hello(name: "tomochan", age: 43)
```
## 返り値のあるメソッド<!-- omit in toc -->
```ruby
def multiple(num)
    return num * 2
end
 
#変数numberを定義
number = 3
 
#変数numberをmultipleメソッドで2倍にして戻す
number = multiple(number)
puts number #=>6
```


# 8. 条件分岐
## 8.1. if文
```ruby
if 条件式1
  実行する文1
elsif 条件式2
  実行する文2
else
  実行する文3
end
```
## 8.2. case文
```ruby
case 対象オブジェクト
when 値1 then
  値1と一致する場合に行う処理
when 値2 then
  値2と一致する場合に行う処理
when 値3 then
  値3と一致する場合に行う処理
else
  どの値にも一致しない場合に行う処理
end
```

# 9. ループと反復処理
## 9.1. while文
「while」文は指定した条件式が真(true)の間、繰り返し処理を行います。
```ruby
while 条件式
  実行する処理1
  実行する処理2
end
```


## 9.2. until文
「until」文は指定した条件式が偽(false)の間、繰り返し処理を行います。
```ruby
until 条件式
  実行する処理1
  実行する処理2
end
```


## 9.3. for文
```ruby
for 変数 in オブジェクト
  実行する処理1
  実行する処理2
end
```


## 9.4. 範囲オブジェクト
範囲オブジェクトは指定した最初の値と最後の値の範囲を表すオブジェクトです。
範囲オブジェクトを作成するには「..」演算子を使用します。
```ruby
range1 = 5..10
range2 = "d".."g"
```
変数「range1」には「5」から「10」の範囲を持つ範囲オブジェクトが代入されます。また変数「range2」には"d"から"g"の範囲を持つ範囲オブジェクトが代入されます。

### Rangeクラス<!-- omit in toc -->
範囲オブジェクトは実際にはRangeクラスのオブジェクトです。「..」演算子や「...」演算子によって範囲オブジェクトを作成できますが、Rangeクラスのクラスメソッドである「new」メソッドでも作成できます。
「first」には最初の値を、「last」には最後の値を指定します。また「exclude_end」は最後の値を要素として含めるかどうかを指定します。真の値を指定した場合は最後の値を含めません。省略された場合は最後の値を含めます。
```ruby
Range.new(first,last[, exclude_end])

range1 = Range.new(5, 10)
range2 = Range.new(5, 10, true)
```

## 9.5. eachメソッド
「each」メソッドは配列や範囲オブジェクトなどで用意されているメソッドであり、オブジェクトに含まれている要素を順に取り出します。
```ruby
オブジェクト.each do |変数|
  実行する処理1
  実行する処理2
end
```

### 9.5.1. その他eachを拡張したメソッド
each_with_indexメソッドは各要素とindex番号を扱うことができます。
```rb
sports=[“サッカー”, “テニス”, “野球”]

sports.each_with_index do |item, i|
  puts “#{i}番目の要素は#{item}です”
end

# 0番目の要素はサッカーです
# 1番目の要素はテニスです
# 2番目の要素は野球です
```

each.with_indexメソッドは始めるインデックス番号を指定可能です。
```rb
fruits = ["apple", "banana", "kiwi"]

fruits.each.with_index(2) do | fruit, index |
  puts "#{index}番目のフルーツは#{fruit}です"
end

# 2番目のフルーツはappleです。
# 3番目のフルーツはbananaです。
# 4番目のフルーツはkiwiです。
```

each_with_objectメソッドは要素を使って何らかのオブジェクト(配列やハッシュなど)を操作するのに使える。

詳細: https://techracho.bpsinc.jp/hachi8833/2021_04_01/58807


## 9.6. loopメソッドとbreak
「loop」メソッドはKernelクラスで用意されているメソッドです。無限ループを行います。
Kernelクラスのメソッドですので組み込み関数のように使用することが出来ます。
「loop」メソッド自身に繰り返しを終了する条件は指定できませんので、
実行される処理の中で繰り返しを終了するための何らかの処理が必要です。

```ruby
num = 1
loop{
  print("num = ", num, "¥n")
  num += 1
  if num > 10 then
    break
  end
}
```


## 9.7. nextとredo
### next<!-- omit in toc -->
繰り返し処理の中で「next」が実行されるとブロック内の「next」以降の処理が行われずに次の繰り返しへ進みます。

### redo<!-- omit in toc -->
繰り返し処理の中で「redo」が実行されると今実行している繰り返しを改めて初めから行います。
「next」との違いは「next」は次の繰り返しへ進みますが「redo」は同じ繰り返しを最初から行います。


# 10. クラス
クラス（class）とは、メソッドなどの処理を入れる入れ物のようなものです。
Rubyなどのオブジェクト指向型の言語では、この入れ物であるクラスの中に処理を書くことが基本となってきます。
## 10.1. クラスの定義
initialize関数はインスタンス生成時に**自動で実行される関数**です。
インスタンス生成時に引数を渡し、インスタンス変数をセットします。
またインスタンス変数の定義には**attr_accessor:** を用いて宣言します。
インスタンス毎に固有となる値を格納する変数です。
```ruby
class クラス名
  attr_accessor :name
  attr_accessor :price
  
  def initialize(引数名)
    処理
  end
end
```
### クラスのインスタンス化<!-- omit in toc -->
クラスはnew演算子でインスタンスであるオブジェクトを作成できます。
class構文で定義したクラスからインスタンスを作成することをインスタンス化と呼びます。
```ruby
class Product
  attr_accessor :name
  attr_accessor :price
end

#インスタンス生成
product1 = Product.new
```
### クラス名は大文字ではじめる<!-- omit in toc -->
rubyでは慣習としてクラス名には大文字ではじまる名前をつけます。
```ruby
class Test
  attr_accessor :name
  attr_accessor :price
end
```
### インスタンスメソッド(class内自作関数)でインスタンス変数を用いる<!-- omit in toc -->
```ruby
class Product
  attr_accessor :name
  attr_accessor :price

  def create
    puts "製品名は#{self.name}です"
    puts "価格は#{self.price}です"
  end
end

#インスタンス生成
product1 = Product.new

#インスタンス変数に値をセット
product1.name = "iphone"
product1.price = 100000

#インスタンスメソッド実行
product1.create
```
実行結果
```bash
製品名はiphoneです
価格は100000です
```
### キーワード引数を用いたインスタンス化<!-- omit in toc -->
```ruby
class Product
  attr_accessor :name
  attr_accessor :price

 def initialize(name:,price:)
    self.name = name
    self.price = price
 end

 def info
   return "製品名：#{self.name}、価格：#{self.price}"
 end
end

#インスタンス生成
product1 = Product.new(name:"iphone", price:100000)

puts product1.info # => 製品名：iphone、価格：100000
```
## 10.2. ファイル分割(require)
require "./ファイル名"
　└ 拡張子「.rb」は不要
 ```ruby
 class Product
  attr_accessor :name
  attr_accessor :price

 def initialize(name:,price:)
    self.name = name
    self.price = price
 end

 def info
   return "製品名：#{self.name}、価格：#{self.price}"
 end
end
 ```
 ```ruby
 #ファイル読み込み
require "./product"

#読み込んだファイルのクラスでインスタンス生成
product1 = Product.new(name:"iphone", price:100000)
puts product1.info

#出力
製品名：iphone、価格：100000
 ```
## 10.3. 入力値の受け取り(gets.chomp)
コンソールからの入力値は**変数名 = gets.chomp**で受け取ります。
変数値は文字列型であるため。数値に等にするには.to_iや.to_fを末尾につけます。

## 10.4. 継承
親クラスのインスタンス変数とインスタンスメソッドを引き継ぎます。
クラスの継承には以下のようなメリットがあります。
* 機能の流用
* 親クラスの機能をそのまま子クラスで流用すること。
* 機能の変更
* ポリモルフィズム（多様性）と言い、同じメソッドを使い子クラスでメソッド動作内容を変更することで、親クラスとは違う機能を提供すること。
* 機能の追加
* 差分プログラミングといい、親クラスにない機能を子クラスのメソッドで追加こと。

class 子クラス名 < 親クラス名
　└ 冒頭は大文字
　└ 最後にend必須
　└ 親クラスが上にある（or 別ファイルで読み込み済み）
```ruby
class 子クラス名 < 親クラス名

end
```
## 10.5. オーバライド
インスタンス変数・メソッドの上書きのこと。
（親クラスで既に定義されているものならオーバーライドになる）

## 10.6. 親クラスで重複するメソッドの呼び出し（super）
initializeで既に定義済みのメソッドを呼び出す。
super(引数:親クラスの変数)
親クラス
```ruby
class Product
  attr_accessor :name
  attr_accessor :price

#オーバーライドで呼び出す箇所
 def initialize(name:,price:)
    self.name = name
    self.price = price
 end

 def info
   return "製品名：#{self.name}、価格：#{self.price}"
 end
end
```
子クラス
```ruby
require "./product"

class Phone < Product
   attr_accessor :weight

   #initializeのオーバーライド（既存部呼び出し）
   def initialize(name:, price:, weight:)
      super(name: name, price: price)      
      self.weight = weight
   end

   #オーバーライド
   def info
      return "製品名：#{self.name}、価格：#{self.price}円、重さ：#{self.weight}"
   end     
end
```
## 10.7. Dateクラス
日付を扱うにはDateクラスを用います。
requireを用いて使用可能です。
```ruby
require "date"
```
使用方法
```ruby
require "date"

date1 = Date.new(2022, 2, 22)
puts date1 #=> 2022-02-22
```
#### 今日の日付のDateインスタンスの取得<!-- omit in toc -->
**Date.today**とすることで今日の日付のインスタンスが作成可能です。

## 10.8. クラスメソッド
クラス名に対して呼び出すメソッドはクラスメソッドと呼ばれます。
クラスメソッドの定義方法は以下の通りです。
```ruby
class クラス名
  def クラス名.メソッド名
  　# 処理
  end
end
```

# 11. モジュール
モジュールは**インスタンス化能力はないが、メソッドを格納できるもの**である。
モジュールは 「module」から「end」 を一つの塊として定義できます。moduleの後にはモジュール名を与えます。
Rubyは単一継承と呼ばれる言語設計になっています。要はクラスを一つしか継承できないという設計です。
クラスと合わせて、モジュールを使用するすることで、**擬似的に多重継承を行っているように**コードを書くことができます。
```ruby
module Number
  def plus(num1, num2)
    num1 + num2
  end
end
```
## モジュールの使用<!-- omit in toc -->
```ruby
module TestModule
  def Min(x, y)
    if x < y
      return x
    else
      return y
    end
  end
 
  def Max(x, y)
    if x > y
      return x
    else
      return y
    end
  end
 
  module_function :Min
  module_function :Max
end
 
puts TestModule.Min(1, 5)
puts TestModule.Max(1, 5)
```
実行結果
```bash
1
5
```

# 12. Rubyの性質/構造など


## 12.1. Rubyの予約語
Rubyの予約語は以下の通り(変数名として使用できません)
```
BEGIN    class    ensure   nil      self     when
END      def      false    not      super    while
alias    defined? for      or       then     yield
and      do       if       redo     true     __LINE__
begin    else     in       rescue   undef    __FILE__
break    elsif    module   retry    unless   __ENCODING__
case     end      next     return   until
```



# 13. その他Rubyメモ
12までの目次で書く枠のない、もしくは実装時で使えそうなメモなど


## 13.1. 簡潔に書くための方法
### 13.1.1 ブロックを簡潔に書くための工夫(&:メソッド名に関して)
mapメソッドやselectメソッドなどにブロックを渡す代わりに、map(&:メソッド名) といった引数を渡せばブロックを簡潔に書くことが可能。

ただし、使用可能条件は以下の通り
- ブロック引数が1個のみ
- ブロック中で呼び出すメソッドには引数がない
- ブロック中でブロック引数に対してメソッドを1回呼び出す以外の処理がない

```rb
[1, 2, 3, 4, 5, 6].select { |n| n.odd? }
#=> [1, 3, 5]

# 書き換えたもの
[1, 2, 3, 4, 5, 6].select(&:odd?)
#=> [1, 3, 5]
```


## 13.2. 変数の型チェックの方法
方法はいくつかある。

確認&参考までに型/クラス一覧
| 型/クラス | 説明 |
| ---- | ---- |
| Numeric | 数値(integer, floatなどを含む) |
| Integer | 整数(4, 0, -78, 239など) |
| Float | 浮動小数点数(1.354, 1.5e4(=>1.5 × 10^4)など) |
| Boolean | 真偽値(true/false) |
| String | 文字列("", ''で囲まれたもの) |
| Array | 配列 |
| Hash | ハッシュ |
| Range | 範囲オブジェクト |


### 13.2.1. is_a?(kind_of?)を用いた方法
この手法では自分のクラス、親のクラス、インクルードしているモジュールについてチェックできます。

返り値は真偽値型(true/false)
```rb
"文字列です。".kind_of?(String)
# true
```

### 13.2.2. instance_of?を用いた方法
この手法では自分のクラスについてのみのチェックできます。
自分のクラス内で厳密なチェックをしたい場合に使用を推奨。
```rb
n = 3
puts n.instance_of?(Integer)
# true
```

### 13.2.3. 変数名.classを用いた方法
instance_of?と同様な使用方法が可能。
```rb
n = 4
puts n.class == Integer
# true
```

### 13.2.4. ===を用いた方法
is_a?(kind_of?)と同様な使用方法が可能。
``クラス === チェック対象変数名``で記述する。
```rb
n = 3.4
puts Numeric === n
# true
```
