# Docker入門<!-- omit in toc -->
DockerはDocker社が開発している**コンテナ型仮想化技術を実現する**ためのプラットフォームの1つです。 
DockerではホストOSの上に動作しているDocker Engineからコンテナと呼ばれるミドルウェアの環境構築がされた実行環境を作成し、その中でアプリケーションを動作させます。
そのためホスト型仮想化よりも圧倒的に軽量に動作する特徴がコンテナ型仮想化技術にはあります。

Dockerを使う最大のメリットは以下の通りです。 ソフトウェアの実行環境を複雑なアーキテクチャであっても、Dockerを使って管理することで簡単にどんなマシンにでも共有できる点です。

* コード化されたファイルを共有することでどこでも誰でも同じ環境が作れる
* 作成した環境を配布しやすい。
* スクラップ＆ビルドが容易にできる。

## DockerとVMの違い<!-- omit in toc -->

<img src="https://gray-code.com/wp-content/uploads/2019/07/pic01.png" width="60%">

Dockerは1度に1つのコンテナしか操作できないため、**同時に複数のコンテナを操作したい場合はDocker-Compose**を用います。
複数のDockerコンテナを定義し実行するができる特徴があります。

LinuxにおいてはDLや作成したdocker imageはデフォルトでは ``/var/lib/docker/`` 配下に保存される。

## 参考資料<!-- omit in toc -->
| 名称 | URL |
| ---- | ---- |
| Dockerイメージ内のコードを直接編集する方法 |  https://blog.yfsakai.com/posts/2021-08-16-change-code-in-docker-image-directly/ |

## 目次<!-- omit in toc -->
- [1. Dockerの基本知識](#1-dockerの基本知識)
  - [1.1. 動作確認コマンド](#11-動作確認コマンド)
  - [1.2. 基本コマンド](#12-基本コマンド)
  - [1.3. 基本操作](#13-基本操作)
    - [Dockerコンテナの起動方法](#dockerコンテナの起動方法)
  - [1.4. Docker基本ファイル](#14-docker基本ファイル)
    - [1.4.1. Docker-Compose.yml](#141-docker-composeyml)
    - [1.4.2. DockerFile](#142-dockerfile)
    - [1.4.3. Docker Image](#143-docker-image)
  - [1.5. Dockerの使い方(windows(私の場合)入りLinuxによる使用方法)](#15-dockerの使い方windows私の場合入りlinuxによる使用方法)
- [2. Dockerによる各技術の実装方法](#2-dockerによる各技術の実装方法)
  - [2.1.](#21)



# 1. Dockerの基本知識
各OSへのDockerのインストール方法や起動方法の説明は割愛します。

## 1.1. 動作確認コマンド
```bash
docker version #インストールされたDockerのバージョンを確認する
docker ps #動作しているコンテナを確認する
docker ps -a #取得済みのイメージを一覧表示する
docker images #ダウンロードしたDockerイメージを一覧表示する
docker rmi イメージID #dockerイメージの削除
```

## 1.2. 基本コマンド
* Dockerコンテナ作成用コマンド
```bash
docker run コンテナ名 #コンテナを起動状態で作成するコマンド
docker create コンテナ名 #コンテナを停止状態で作成するコマンド
```

* その他の基本コマンド
```bash
docker search [OPTIONS] 
#イメージ名//キーワードからオンライン上のDockerイメージを探す
 
docker pull [OPTIONS] 
#イメージ名:[TAG]//イメージをダウンロードする
 
docker images [OPTIONS]
#// ダウンロードしたDockerイメージを一覧表示する
 
docker inspect [OPTIONS] 
#イメージID//イメージを確認する
 
docker rmi [OPTIONS] 
#イメージID//イメージを削除する
 
docker history [OPTIONS] 
#イメージID//ヒストリーを確認する
```

* コンテナに関するコマンド
```bash
docker run [OPTIONS]  イメージ名[:TAG] [ARG]
#コンテナを起動する 
 
docker ps [OPTIONS]
#稼働コンテナを一覧表示
 
docker stop [OPTIONS]  コンテナID
#コンテナを停止する
 
docker kill [OPTIONS]  コンテナID 
#コンテナを終了する
 
docker rm [OPTIONS]  コンテナID
#コンテナを削除する
 
docker restart [OPTIONS]  コンテナID
#コンテナを再起動する
```
* その他のコマンド
```bash
docker info
#システム情報を表示する

docker help
#ヘルプを表示する
```
* オプション
```bash
-d #:バックグラウンドで実行

–name #コンテナ名：コンテナに名前をつける

-v #：ホストとコンテナ間でディレクトリやファイルを共有する

–rm #: コンテナ終了時にコンテナを削除するため、コマンドを試したい時にオススメ

-a #:停止中のコンテナまで含めて表示する

–filter “status=exited” #：停止中のコンテナのみ表示するオプション。

-i #: コンテナの標準入力を開くことができ、コマンドが打てる

-t #: ttyを利用する

#上記2つを合わせて、-itとすることが多い
```

## 1.3. 基本操作
### Dockerコンテナの起動方法

1. Docker-compose.ymlのあるディレクトリ(Dockerコンテナ構成のルートディレクトリ)に移動し以下コマンドを実行
```bash
docker-compose build
```
2. 以下コマンドを実行することでdocker projectが生成されバックグラウンドで起動する(オプション等要注意)
```bash
# -d オプションをつけることでバックグラウンドで container が稼働するようになります。
# -d をつけないとメインスレッド処理となってしまうため注意しますしょう。
docker-compose up -d
```

##  1.4. Docker基本ファイル
###  1.4.1. Docker-Compose.yml
Docker-Compose.ymlはDocker Projectで作成する container と Host OS の関連付け、
つまり**container の初期設定を定義する**ファイルです。



サンプル
```yml
version: '3.3' # Docker-Compose.yml を実行するにあたっての docker build の version 指定

services: # コンテナを定義する親要素
  app:
    container_name: sample_web_app # コンテナ名の設定
    build: ./docker/app # DockerFile の参照先
    volumes: # HostOS のディレクトリやファイルとコンテナ内でシンボリックリンクを繋げる
    - ./www:/var/www
    networks: # ローカルネットワークにおける IP アドレスの指定
      web_segment:
        ipv4_address: 172.240.0.2

  gw:
    image: nginx # DockerFile を使用しない場合は Docker-Compose.yml で直接 image を指定できる。
    container_name: sample_web_gw
    ports: # ポートフォワーディング この例なら HostOS への 10080 ポートアクセスをこのコンテナの 80 番ポートにフォワードする。
    - 10080:80
    volumes:
    - ./www:/var/www
    - ./docker/gw/default.conf:/etc/nginx/conf.d/default.conf # conf ファイルの紐付け
    depends_on: # 依存関係の定義 この例なら app container が作成されてから構築の意味
    - app
    networks:
      web_segment:
        ipv4_address: 172.240.0.3

  db:
    build:
      context: .
      dockerfile: docker/mysql/Dockerfile
    volumes:
      - ./docker/mysql/db:/docker-entrypoint-initdb.d
      - db-store:/var/lib/mysql # DB データの永続化。本ファイルの例の場合、末尾の「volumes: db-store:」を使用している。詳しい解説はそこで。
      - ./logs:/var/log/mysql
      - ./docker/mysql/my.cnf:/etc/mysql/conf.d/my.cnf
    ports:
      - "33306:3306" 
    environment: # MySQL の場合初期 DB の作成と root password 及び mysql user account の登録が可能
      MYSQL_ROOT_PASSWORD: password
      MYSQL_USER: administrator
      MYSQL_PASSWORD: password
      MYSQL_DATABASE: default_database
      TZ: "Asia/Tokyo"
    networks:
      web_segment:
        ipv4_address: 172.240.0.4

networks: # docker 仮想ネットワークの作成
  web_segment:
    driver: bridge # driver の選択
    ipam:
      config:
      - subnet: 172.240.0.0/24 # subnet mask の指定。 この例なら、この Docker Project に所属する container は 172.240.0.0~254 の範囲を同一ネットワークとして判定可能となる。

volumes: # Docker MySQL のデータは再起動で消えてしまいます。そのため他の container と同じく volume 定義を皆試すと思いますが、Docker の仕様上エラーになります。Docker の「名前付きボリューム」と呼ばれる領域を構築し、データの永続化を行います。
  db-store:
```
###  1.4.2. DockerFile
Docker FileにはLinux で環境を構築する時と同じようなコマンドをいくつか記述したり、環境変数などの定義が可能なファイルです。
内部の実装は通常のサーバ構築(EC2やLinux)とほぼ同じでような記述を行います。

###  1.4.3. Docker Image
Docker ImageはDocker container の構築を想定し最適化されたcontainerのtemplateファイルです。

## 1.5. Dockerの使い方(windows(私の場合)入りLinuxによる使用方法)
1. WSL2をONにしてインストールしたUbuntuにコマンドラインで入る
2. ``Docker -v``でDocker使用可能か確認
3. 起動したコマンドラインで使う

# 2. Dockerによる各技術の実装方法
## 2.1. 