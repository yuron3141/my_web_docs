# HTML/CSS/生javascript(DOM操作)補足メモ<!-- omit in toc -->
HTMLやCSS、JavaScript(Dom操作)に関してのメモ。

## 目次<!-- omit in toc -->
- [1. HTML+JavaScript](#1-htmljavascript)
  - [1.1. form要素(input含む)](#11-form要素input含む)
    - [1.1.1. form](#111-form)
    - [1.1.2. input](#112-input)
      - [type属性の指定可能値](#type属性の指定可能値)
      - [formやinputで使用可能なjavaScriptイベント](#formやinputで使用可能なjavascriptイベント)
  - [1.2. button要素](#12-button要素)
- [2. HTML+DOM操作(JavaScript)](#2-htmldom操作javascript)
- [3. CSS](#3-css)
  - [3.1. 単位系(px, remなど)](#31-単位系px-remなど)
    - [3.1.1. 絶対長(Absolute)単位系](#311-絶対長absolute単位系)
    - [3.1.2. 相対長(Relative)単位系](#312-相対長relative単位系)
- [4. フロントエンド制御向きJavaScriptライブラリ](#4-フロントエンド制御向きjavascriptライブラリ)
  - [4.1. GSAP](#41-gsap)
  - [4.2. Swiper](#42-swiper)
---
# 1. HTML+JavaScript
## 1.1. form要素(input含む)
### 1.1.1. form
``e``はイベントを指す。
``e.target.value``で入力値を取得可能(入力値などがある場合)。

フォームの内容の送信(ページ遷移)を防ぐ場合は``e.targetDefault()``をformのonSubmit内の関数に記述する。

```html
<form onSubmit={(e) => handleSubmit(e)} >
  <input type="text" onChange={(e)=> handleChange(e)} />
  <input type="submit" value="作成" />
</form>
```
### 1.1.2. input
form内に書く。

**例**
```html
<input type="submit" value="作成" />
```
| 属性 | 詳細 |
| ----| ---- |
| name |  |
| **type** | 入力フィールドの種類を決める |
| minlength・maxlength | 最小・最大入力文字数の制限 |
| placeholder | 入力サンプルの表示 |
| list | datalistタグと組み合わせて使用 |
| pattern | 入力内容を正規表現に基づいて制限することが可能 |
| step, min, max | type="range"における最大最小値,増減幅を指定可能 |
| multiple | typeがemail,fileの場合に複数の項目(複数のファイル)を選択可能 |
| accept | typeがfileの場合にアップロードできるファイルの種類を指定可能 |
| readonly | ユーザーに内容を変更されたくない時に使用 |
| **disabled** | inputを操作を完全に無効化したい場合に使用 |

#### type属性の指定可能値
| 名称 | 詳細 |
| ---- | ---- |
| **text** | 入力値(あらゆる入力値) |
| number | 半角数字のみの入力値 |
| tel | 電話番号(入力制限はないためpattern属性で入力形式を設定する) |
| email | email(メールの形か判定する) |
| url | url(urlの形式か判定する) |
| **password** | パスワード(入力内容を隠せる)/maxlength属性で文字数を指定することでパスワードの文字数を制限可能 |
| search | 検索フォーム |
| reset | 入力内容のリセットが可能なボタンを作れる |
| **submit** | 送信ボタン(form内の送信)を作れる |
| image | 送信ボタンに画像を使用したい場合はimageを指定(画像のファイルパスのsrc属性とalt属性は必須) |
| date | dateでは年月日をカレンダーから簡単に選択できるようなフィールドを表示 |
| month | 「年と月」を選択させたい場合に使用 |
| time | timeを指定することで時間と分だけの入力フォームを表示 |
| radio | ラジオボタンを表示できます。選択肢を同じグループのラジオボタンとして扱うには各項目で同じname属性を設定 |
| **checkbox** | checkboxで複数選択可能なチェックボックスを表示 |
| hidden | 表示ないデータを格納可能(ユーザに見せる必要のないデータをページ間(HTML)でやり取りする場合に使用) |
| **button** | 機能なしのボタンを表示することが可能。value属性も使うとボタン表示内容を指定可能 |
| file | ファイルのアップロードフィールドを表示することが可能。accept属性も使うとアップロード可能なファイルの種類をあらかじめ制限可能 |
| color | カラーコードの直接指定が可能 |
| range | rangeは範囲を選択できるバーを表示することが可能。min属性で最小値、max属性で最大値をそれぞれ設定 |

#### formやinputで使用可能なjavaScriptイベント
| 名称 | 詳細 |
| ---- | ---- |
| onChange | イベントの発生(ボタンを押された、内容が変わったなど)の際に実行する関数を指定可能 |
| onSumit | submit(送信処理)が押された際に実行する関数を指定可能 |

## 1.2. button要素

# 2. HTML+DOM操作(JavaScript)
# 3. CSS
## 3.1. 単位系(px, remなど)
### 3.1.1. 絶対長(Absolute)単位系
絶対長は親の要素に関係ない一意の単位(unit)。

| unit | 詳細 |
| ---- | ---- |
| cm |  |  |
| mm |  |  |
| Q | 1/4 mm |  |
| in | 1inch(2.54cm) = 96px |  |
| pc | 1/6 in |  |
| pt | 1/72 in |  |
| px | 1/96 in |  |

### 3.1.2. 相対長(Relative)単位系
親要素や元の要素系によりサイズが決まるフレキシブルな単位(unit)。

| unit | 基準 |
| --- | --- |
| em | 親要素のフォントサイズ. |
| ex | その要素のフォントの文字 "x" の高さ |
| ch | その要素のフォントの文字 "0" の幅 |
| rem | ルート要素のフォントサイズ |
| lh | その要素の line-hight プロパティと同じ |
| vw | ビューポート幅の 1% |
| vh | ビューポート高さの 1% |
| vmin | ビューポート幅と高さの小さい方の 1% |
| vmax | ビューポート幅と高さの大きい方の 1% |

# 4. フロントエンド制御向きJavaScriptライブラリ
フロントエンドの生javascriptで使えそうなjavascriptライブラリ。

Web制作向け?

## 4.1. GSAP
ウェブサイトのモーション制作のためのライブラリ。

公式サイト: https://greensock.com/docs/

## 4.2. Swiper
スライダー実装のためのライブラリ。

一応 Reactでも使える！！

公式サイト: https://swiperjs.com/
