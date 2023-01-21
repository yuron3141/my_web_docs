# PostgreSQL入門<!-- omit in toc -->
DL方法は割愛

| 詳細 | URL |
| ---- | ---- |
| PostgreSQLのコマンド集 | https://www.javadrive.jp/postgresql/connect/index5.html |

## 目次<!-- omit in toc -->
- [1. postgreSQLの操作](#1-postgresqlの操作)
  - [1.1. postgreSQLのバージョン/DL済み確認](#11-postgresqlのバージョンdl済み確認)
  - [1.2. postgreSQLの起動と停止方法](#12-postgresqlの起動と停止方法)
  - [1.3. postgreSQLのパスワードを忘れた場合の対処](#13-postgresqlのパスワードを忘れた場合の対処)


# 1. postgreSQLの操作
## 1.1. postgreSQLのバージョン/DL済み確認
```
postgres --version
```

## 1.2. postgreSQLの起動と停止方法
pg_ctlコマンドのファイルパスは各自postgreSQLをDLしたディレクトリに合わせて``.../PostgreSQL/VERSION/data``を指定する。

### 起動<!-- omit in toc -->
```
pg_ctl -D "C:\Program Files\PostgreSQL\14\data" start
```
### 停止<!-- omit in toc -->
```
pg_ctl -D "C:\Program Files\PostgreSQL\14\data" stop
```

## 1.3. postgreSQLのパスワードを忘れた場合の対処
下記URLが参考になるかと。

https://bit.ly/3WN9GyN