# SQL基礎<!-- omit in toc -->
SQLとはデータベースを操作するための言語です。
DBMS上でデータの追加や削除、並べ替えなどを行うようコンピュータに命令することができます。

## 目次<!-- omit in toc -->
- [1. SQL概論](#1-sql概論)
  - [1.4. SQLとは](#14-sqlとは)
  - [1.2. SQLの種類](#12-sqlの種類)
  - [1.3. SQLの4大命令](#13-sqlの4大命令)
- [2. SQL基本操作](#2-sql基本操作)
  - [2.1. INSERT文](#21-insert文)
  - [2.2. SELECT文](#22-select文)
  - [2.3. UPDATE文](#23-update文)
  - [2.4. DELETE文](#24-delete文)
  - [2.5. 絞り込み WHERE](#25-絞り込み-where)
  - [2.6. BETWEEN句](#26-between句)
  - [2.7. LIKE句](#27-like句)
  - [2.8. INとNOT IN](#28-inとnot-in)
  - [2.9. EXISTS](#29-exists)
  - [2.10. ORDER BY文](#210-order-by文)
  - [2.11 表示件数の制限](#211-表示件数の制限)
  - [2.12. テーブル定義の確認](#212-テーブル定義の確認)
  - [2.13. SQLの集合関数](#213-sqlの集合関数)
    - [2.13.1. COUNT](#2131-count)
    - [2.13.3. SUM](#2133-sum)
    - [2.13.4. MAX](#2134-max)
    - [2.13.5. MIN](#2135-min)
    - [2.13.6. AVG](#2136-avg)
  - [2.14. グループ](#214-グループ)
- [3. テーブルの結合](#3-テーブルの結合)
    - [3.1. 内部結合](#31-内部結合)
    - [3.2. 外部結合](#32-外部結合)


# 1. SQL概論
## 1.4. SQLとは
SQL(Structured Query Language)とはデータベースを操作するための言語です。
DBMS上でデータの追加や削除、並べ替えなどを行うようコンピュータに命令することができます。
基本的に１行ずつ入力して確定し、直ちに実行されます。複数のSQLを組み合わせて大きな一つの塊のSQLとして実行することもできますが、通常のプログラミング言語のように一連の操作をまとめてセットすることのできる「ストアドプロシージャ」という機能のあるDBMSもあります。

### ストアドプロシージャ<!-- omit in toc -->
DBMSにSQL文を1つのプログラムにまとめ保存しておくことは**ストアドプロシージャ**と呼ばれます。
一連の処理が実行される。
また、メリットは以下の通りです。

* ネットワークの負荷削減
* 処理速度の向上

## 1.2. SQLの種類
標準SQL規格では大きく以下の3つが定義されています。
* データ定義言語(DDL).....例：CREATE,DROP,ALTER等
* データ操作言語(DML).....例:INSERT,UPDATE,DELETE,SELECT
* データ制御言語(DCL).....例:GRANT,REVOKE,SET TRANSACTION,BEGIN,COMMIT,ROLLBACK,SAVEPOINT,LOCK

## 1.3. SQLの4大命令
| 命令  | 説明 | 文法 |
| ---- | ---- | ---- |
| INSERT | データを追加する | INSERT INTO テーブル名 (カラム名1, カラム名2, ...) VALUES (値1, 値2, ...); |
| SELECT | データを参照する | SELECT カラム名1, カラム名2, ... FROM テーブル名 [WHERE 絞込条件]; |
| UPDATE | データを更新する | UPDATE テーブル名 SET カラム名1=値1 [, カラム名2=値2 ...] [WHERE 絞込条件]; |
| DELETE | データを削除する | DELETE FROM テーブル名 [WHERE 絞込条件]; |

# 2. SQL基本操作
操作例を用いて解説。

操作例のテーブル
**membersテーブル**
| id  | name | sex | birthday |
| ---- | ---- | ---- | ---- |
| 1 | tarou | male | 1999-11-30 |
| 2 | hanako | female | 1993-01-14 |

## 2.1. INSERT文
INSERT はテーブルにレコードを追加するSQL文です。
```sql
INSERT INTO members (name,sex,birth_day)
VALUES ('tarou', 'male', '1992-11-30');

INSERT INTO members (name,sex,birth_day)
VALUES ('hanako', 'femal','1993-01-14');
```

## 2.2. SELECT文
### 全件全列を参照する<!-- omit in toc -->
```sql
SELECT * FROM members; -- 全件検索
```

### 特定の列だけを参照する<!-- omit in toc -->
全ての列は要らない時はカラム名で絞込をしましょう。
```sql
SELECT name FROM members; -- 全件検索(名前だけ見たい)
```

#### 特定の条件に一致するデータだけを参照する<!-- omit in toc -->
```sql
SELECT * FROM members WHERE name = 'tarou'; -- 名前が"tarou"のレコードを検索
```

## 2.3. UPDATE文
### 全件特定のカラムを更新<!-- omit in toc -->
```sql
--membersのレコードのnameをすべて'jirou'に更新する
UPDATE members SET name = 'jirou';
```
実行後のテーブル
| id  | name | sex | birthday |
| ---- | ---- | ---- | ---- |
| 1 | jirou | male | 1999-11-30 |
| 2 | jirou | female | 1993-01-14 |

### 絞込条件に該当するデータの特定のカラムを更新<!-- omit in toc -->
```sql
--membersのレコードでidが1のレコードのname,birth_dayを更新
UPDATE members SET name = 'saburo', birth_day = '2015-03-11' WHERE id = 1;
```
実行後のテーブル
| id  | name | sex | birthday |
| ---- | ---- | ---- | ---- |
| 1 | aburo | male | 2015-03-11 |
| 2 | jirou | female | 1993-01-14 |

## 2.4. DELETE文
### 特定条件に該当するデータを削除<!-- omit in toc -->
```sql
--idが1のレコードを削除する
DELETE FROM members WHERE id = 1;
```
実行後のテーブル
| id  | name | sex | birthday |
| ---- | ---- | ---- | ---- |
| 2 | jirou | female | 1993-01-14 |

### 全件データを削除<!-- omit in toc -->
```sql
--membersのレコード全てを削除する
DELETE FROM members;
```
実行後のテーブル
| id  | name | sex | birthday |
| ---- | ---- | ---- | ---- |

## 2.5. 絞り込み WHERE
データの全体母数からWHERE句を使ってデータ集合を絞り込むために利用します。
WHERE句が使えるのはSQL4大命令のうち「SELECT」、「UPDATE」、「DELETE」。

### SELECTのWHEREによる絞り込み<!-- omit in toc -->
```sql
SELECT ”取得したい情報” from "テーブル名" WHERE "絞込をしたいcolumn名" = "値";
```
利用できる比較演算子
| 記号  | 説明 |
| ---- | ---- |
| = | 等価演算子 |
| <=> | 安全等価演算子(NULL) |
| > | 右不等演算子 |
| >= | 以上演算子 |
| < | 左不等演算子 |
| <= | 以下演算子 |
| !=, <> | 不等価演算子 |

なおWHERE句内の比較演算は**AND,OR**で絞り込みが可能です。
```sql
SELECT * from users WHERE age >= 20 AND age <= 30; 
```

## 2.6. BETWEEN句
〇〇以上、〇〇未満の情報を取得するというケースは不等号を使っても表現することが出来ますが、BETWEENを使うことでも表現することが可能です。
```sql
SELECT ”取得したい情報” from "テーブル名" WHERE "絞込をしたいcolumn名" BETWEEN "最小値" AND "最大値";
```
BETWEEN句以降に最小値と最大値を指定します。
この時最小値と最大値の順番は重要です。
BETWEEN句が使えるのは、整数型を代表する以上以下で表現が出来る型のみです。

## 2.7. LIKE句
部分一致で検索するときに用います。
LIKE句で使う"%"は、ワイルドカードと読んでおり、"%ky%"としたときには、kyを含む文字列を取得することが出来ます。
これを応用して、"ky%"と書いた時には、kyから始まる文字列の絞込が出来ます。
```sql
SELECT ”取得したい情報” from "テーブル名" WHERE "絞込をしたいcolumn名" LIKE "%絞込をしたい文字列%";
```
## 2.8. INとNOT IN
INで指定するときには、カンマ区切りの配列で複数の条件を指定することが出来ます。
文字列の場合にも("foo","bar","baz")という形で指定をすることが出来ます。
```sql
SELECT ”取得したい情報” from "テーブル名" WHERE "絞込をしたいcolumn名" in ("指定したい情報をカンマ区切りで指定");
SELECT ”取得したい情報” from "テーブル名" WHERE "絞込をしたいcolumn名" not in ("指定したい情報をカンマ区切りで指定");
```

## 2.9. EXISTS
2つのテーブルが関係する場合の検索処理に用います。
```sql
SELECT ”取得したい情報” from "テーブル名" WHERE EXISTS (SELECT "column名" FROM "判定に使うテーブル名" WHERE "テーブル名.column名" = "判定に使うテーブル名.判定に使うcolumn名");
```
SQLの中にSQLが書かれている形のことをサブクエリーと呼びます。
サブクエリーが何なのか？という説明よりも、()の中で問い合わせた結果を使って再度検索が動いているのをイメージ出来るようになるとレベルアップ出来ると思います。

## 2.10. ORDER BY文
ORDER BYはソートを行ってくれる機能です
```sql
SELECT [表示要素名] FROM [テーブル名] ORDER BY [ソートする要素名] [昇順・降順の指定];
```
昇順・降順の指定
| 指定  | 順 |
| ---- | ---- |
| ASC | 昇順 |
| DESC | 降順 |

並び順の指定を省略した場合はASCがデフォルトです。
複数のソートキーも対応しています。はじめに書くほど優先でカラムが実行されます。

## 2.11 表示件数の制限
LIMITはデータの表示件数を制限できます。
```sql
select * from テーブル名 LIMIT 取得件数;
```

## 2.12. テーブル定義の確認
DESCRIBEはテーブルの定義情報を確認することが出来ます。
```sql
DESCRIBE テーブル名;
```

## 2.13. SQLの集合関数
集合関数とは、SQLに備わっている演算機能です。
集合関数には主に次の5つがあります。
| 関数名  | 説明 |
| ---- | ---- |
| COUNT | 総数を求める |
| SUM | 総和を求める |
| MAX | 最大値を求める |
| MIN | 最小値を求める |
| AVG | 平均を求める |

### 2.13.1. COUNT
SELECT COUNTはデータの件数を数えます。
```sql
select count(*) from テーブル名;
```

### 2.13.3. SUM
sumは総和です。
```sql
select sum(カラム名) from テーブル名;
```

### 2.13.4. MAX
maxは最大値です。
```sql
select max(age) from users where birthplace = '大分県';
```

### 2.13.5. MIN
MINは最小値です。
```sql
select count(*),max(age),min(age) from users where birthplace = '大分県' and gender_id = 0;
```

### 2.13.6. AVG
avgは平均値です。
```sql
SELECT count(*) AS 総数,
       max(age) AS 最高齢,
       min(age) AS 最年少,
       avg(age) AS 平均年齢
FROM users
WHERE birthplace = '大分県';
```

## 2.14. グループ
### 2.14.1. GROUP BY<!-- omit in toc -->
group byは「〜ごと」という処理を行います。
```sql
SELECT 関数名(カラム名１),カラム名２ FROM テーブル名 GROUP BY カラム名２;
```
### 2.14.2. HAVING<!-- omit in toc -->
having は集合関数の結果をもとに絞り込むことができます。
```sql
SELECT 関数名(カラム名１),カラム名２ FROM テーブル名 GROUP BY カラム名２ HAVING 関数名(カラム名１);
```

# 3. テーブルの結合
テーブルの結合には幾つかのパターンがあります。
* 内部結合　：　指定された共通列で、紐付いているレコード”のみ” で結合テーブルが作成される
* 外部結合　：　指定された共通列で、紐付いているレコード”以外” も結合テーブルとして作成される

### 3.1. 内部結合
内部結合とは、２つのテーブルを結合しデータを取得する方法において、共通列が一致するレコード"のみ" 取得する方法が内部結合になります。
```sql
SELECT
  テーブルA.カラム1,
  テーブルB.カラム1,
  ......
FROM
  テーブルA
  INNER JOIN テーブルB ON テーブルA.カラム2 = テーブルB.カラム2
```
内部結合では、FROM句で指定したテーブルAと、結合するテーブルBをINNER JOIN句で指定します。
そして、テーブル同士の紐付け条件としてON句を利用し、共通列となるテーブルA.カラム2、テーブルB.カラム2を指定し紐付けを行う事でテーブルが結合されます。

<img src="https://camo.qiitausercontent.com/085482893c20f3a934052197813982f09ef3c79a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f37343135332f34306463653362312d646564332d326230652d346363622d3437656336613937613361322e706e67" width="50%">

### 3.2. 外部結合
#### 左外部結合<!-- omit in toc -->
```sql
SELECT
  テーブルA.カラム1,
  テーブルB.カラム1,
  ......
FROM
  テーブルA
  LEFT OUTER(省略可) JOIN テーブルB ON テーブルA.カラム2 = テーブルB.カラム2
```
左外部結合では、FROM句で指定したテーブルAと、結合するテーブルBをLEFT JOIN句で指定します。
テーブル同士の紐付け条件は、内部結合と同様にON句を利用し、共通列となるテーブルA.カラム2、テーブルB.カラム2を指定し紐付けを行います。

<img src="https://camo.qiitausercontent.com/b07b6e018aa5f4bb423bc850184cec173f465f79/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f37343135332f64306433363034642d343231342d626563332d393733352d3363353532643861653235352e706e67" width="50%">

#### 右外部結合<!-- omit in toc -->
```sql
SELECT
  テーブルA.カラム1,
  テーブルB.カラム1,
  ......
FROM
  テーブルA
  RIGHT OUTER(省略可) JOIN テーブルB ON テーブルA.カラム2 = テーブルB.カラム2
```
右外部結合では、左外部結合とは反対で、RIGHT JOIN句で指定したテーブルBを基に、FROM句で結合するテーブルAをで指定します。
テーブル同士の紐付け条件は、左外部結合と同様にON句を利用し、共通列となるテーブルA.カラム2、テーブルB.カラム2を指定し紐付けを行います。

<img src="https://camo.qiitausercontent.com/7ecd1b5ce0d365092722b1f0a5d9be19e3ecb982/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f37343135332f33643638313334312d353935322d623630342d656638372d3133383034336434383366352e706e67" width="50%">

#### 完全外部結合<!-- omit in toc -->
```sql
SELECT
  テーブルA.カラム1,
  テーブルB.カラム1,
  ......
FROM
  テーブルA
  FULL OUTER(省略可) JOIN テーブルB ON テーブルA.カラム2 = テーブルB.カラム2
```
完全外部結合は、サンプルのSQLを見て頂くと解る通り、左外部結合と右外部結合の機能を併せ持っています。
テーブル同士の紐付け条件は、左/右外部結合と同様にON句を利用し、共通列となるテーブルA.カラム2、テーブルB.カラム2を指定し紐付けを行います。

<img src="https://camo.qiitausercontent.com/84e676d5e6a36b2c462235f41e22eda169709425/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f37343135332f38393834663366652d313164382d366536312d663335642d6261346638656662376638662e706e67" width="50%">
<!-- omit in toc -->