# Web開発者向けツールや設定などメモ<!-- omit in toc -->
Web開発者向けツールの紹介やメモなど。

Windowsでの開発者はいつも環境構築ハードモード....。

WindowsのWeb開発者向けのメモ的な物を中心に書きます。

## 目次<!-- omit in toc -->
- [1. ツールなど](#1-ツールなど)
  - [1.1. Chocolatey](#11-chocolatey)
  - [1.2. Cargo](#12-cargo)
  - [1.3. Scoop](#13-scoop)
- [2. その他メモ](#2-その他メモ)
- [3. 個人的なメモ](#3-個人的なメモ)
  - [3.1. 私のNodeのパッケージマネージャに関して](#31-私のnodeのパッケージマネージャに関して)






# 1. ツールなど
## 1.1. Chocolatey
Windows 用のパッケージ管理ソフトウェアの1つ。
Linuxでいう ``apt-get`` のwindows版と言える。

公式サイト: https://chocolatey.org/install

### 基本コマンド<!-- omit in toc -->

| コマンド | 意味 |
| --- | --- |
| choco install [packageName] | パッケージインストール |
| choco list | パッケージの一覧表示 |
| choco list [packageName] | パッケージの検索 |
| choco list -localonly | インストール済みのパッケージ一覧を取得 |
| choco update [packageName] | インストール済みのpackegeをアップデート |
| choco update all | インストール済みのpackegeを全てアップデート(※２) |
| chocolatey uninstall [packageName] | アンインストール |
| choco version | バージョン / インストール済み 確認 |

## 1.2. Cargo
Rustのビルドシステム、パッケージマネージャ。

## 1.3. Scoop
Windows向けのパッケージマネージャー。

個人的にはchocolateryの方がオススメ。

# 2. その他メモ

# 3. 個人的なメモ
## 3.1. 私のNodeのパッケージマネージャに関して
Nodeのバージョン管理は**fnm**を使用している。
環境は以下記事のように作成した。

* [Node.jsバージョン管理ツール「fnm」のインストール方法と使い方](https://qiita.com/heppokofrontend/items/fe1c3bc41a0ae943c2ca?0#%E7%B6%9A%E3%81%84%E3%81%A6%E3%83%AC%E3%82%B8%E3%82%B9%E3%83%88%E3%83%AA%E3%82%92%E6%93%8D%E4%BD%9C%E3%81%97%E3%81%BE%E3%81%99)

基本的にWindows PowerShellで切り替えて使用する。

### 参考<!-- omit in toc -->
| インストール済みnode | 管理 |
| ---- | ---- |
| v16.13.0 | system |
| v18.13.0 | fnm |
