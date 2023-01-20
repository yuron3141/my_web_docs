# 機能一覧表

## 1. クライアントサイド
Reactで実装するフロントエンドの機能。

### 1.1. ディレクトリマップ
以下の通り。

| id | 画面名 | ディレクトリ | 機能 |
| --- | --- | --- | --- |
| 1 | ホーム画面 | / | クライアントへの診断テスト機能の提供 |
| 2 | 結果表示画面 | /result | テストの結果に沿った診断結果の表示 |
| 3 | エンジニア性格10パターンの表示 | /type | 画面名の通り |
| 4 | 統計データの表示 | /static | 統計データの表示 |
| 5 | サイト情報の表示 | /info | 私(サイト運営者)の情報表示 |


### 1.2. 実装機能一覧
#### 1.2.1. ホーム画面
* 質問/回答 構成資料 の 質問構成 を元に解答するロジックの実装	
* 最後の回答(タイプ4の10個の質問)に答えて送信する前に「年代」「性別」「誕生月」入力をクライアントに要求	
    * 年代は10代から70代(選択肢 7つ)
    * 性別は近年のLGBTQに配慮して「未入力」「男性」「女性」(選択肢3つ)
    * 誕生月は1月から12月(選択肢12つ)
* 最後の回答送信ボタンでPostメソッドでAPIサーバに テスト情報/入力情報 を送る	

#### 1.2.2. 結果表示画面
* クエリパラメータでテストの結果を表示するロジックの実装

#### 1.2.3. エンジニア性格10パターンの表示
* json読み込みで表示する(管理しやすいようにするため)

#### 1.2.4. 統計データの表示

#### 1.2.5. サイト情報の表示

## 2. 管理者サイド
Rails側で実装する管理画面の機能。

### 2.1. ディレクトリマップ
以下の通り。

### 1.2. 実装機能一覧
