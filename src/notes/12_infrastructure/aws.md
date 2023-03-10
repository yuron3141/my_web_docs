# AWS入門<!-- omit in toc -->
AWSはアプリケーションを動かすためのサーバ環境などのインストラクチャーを構築できるサービスです。

AWSで提供されている各サービスや各機能は目次の通りです。

## 目次<!-- omit in toc -->
- [AWS サービス一覧](#aws-サービス一覧)
  - [1. ネットワーク](#1-ネットワーク)
    - [1.1. AWS Elastic IP アドレス(Elastic IP address)](#11-aws-elastic-ip-アドレスelastic-ip-address)
    - [1.2. Elastic Load Balancer(ELB)](#12-elastic-load-balancerelb)
      - [1.2.1 Network Load Balancer(NLB)](#121-network-load-balancernlb)
      - [1.2.2. Application Load Balancer(ALB)](#122-application-load-balanceralb)
    - [1.3. Amazon Virtual Private Cloud(VPC)](#13-amazon-virtual-private-cloudvpc)
    - [1.4. Subnet](#14-subnet)
    - [1.5. Route53](#15-route53)
    - [1.6. Internet Gateway](#16-internet-gateway)
    - [1.7. NAT Gateway](#17-nat-gateway)
    - [1.8. CloudFront](#18-cloudfront)
  - [2. コンテナ](#2-コンテナ)
    - [2.1. AWS ECS(Elastic Container Service)](#21-aws-ecselastic-container-service)
    - [2.2. AWS EKS(Elastic Kubernetes Service)](#22-aws-ekselastic-kubernetes-service)
    - [2.3. AWS ECR(Elastic Container Registry)](#23-aws-ecrelastic-container-registry)
  - [3. ストレージ](#3-ストレージ)
    - [3.1. Amazon EFS(Amazon Elastic File System)](#31-amazon-efsamazon-elastic-file-system)
    - [3.2. Simple Storage Service(S3)](#32-simple-storage-services3)
  - [4. コンピューティング](#4-コンピューティング)
    - [4.1. Lambda](#41-lambda)
    - [4.2. Batch](#42-batch)
    - [4.3. EC2](#43-ec2)
  - [5. リソースのマネジメント](#5-リソースのマネジメント)
    - [5.1. CloudWatch](#51-cloudwatch)
    - [5.2. AWS Systems Manager(SSM)](#52-aws-systems-managerssm)
  - [6. セキュリティ・権限](#6-セキュリティ権限)
    - [6.1. IAM](#61-iam)
    - [6.2. ACM(Certificate Manager)](#62-acmcertificate-manager)
    - [6.3. Web Application Firewall(WAF)](#63-web-application-firewallwaf)
    - [6.4. Shield](#64-shield)
    - [6.5. Cognito](#65-cognito)
  - [7. データベース](#7-データベース)
    - [7.1. RDS](#71-rds)
    - [7.2. DynamoDB](#72-dynamodb)
  - [8. その他](#8-その他)
    - [8.1. EventBridge](#81-eventbridge)
    - [8.2. AWS Comand Line Interface(CLI)](#82-aws-comand-line-interfacecli)
    - [8.3. CodePipeline](#83-codepipeline)
    - [8.4. API Gateway](#84-api-gateway)
- [AWSサービス詳細設定](#awsサービス詳細設定)
  - [1. ネットワーク](#1-ネットワーク-1)
    - [1.1. Route 53](#11-route-53)
    - [1.2. CloudFront](#12-cloudfront)
    - [1.3. VPC](#13-vpc)
      - [1.3.1. VPC](#131-vpc)
      - [1.3.2. サブネット](#132-サブネット)
      - [1.3.3. ルートテーブル](#133-ルートテーブル)
      - [1.3.4. インターネットゲートウェイ](#134-インターネットゲートウェイ)
      - [1.3.5. キャリアゲートウェイ](#135-キャリアゲートウェイ)
      - [1.3.6. DHCPオプションセット](#136-dhcpオプションセット)
      - [1.3.7. Elastic IP](#137-elastic-ip)
      - [1.3.8. マネージドプレフィリクスリスト](#138-マネージドプレフィリクスリスト)
      - [1.3.9. エンドポイント](#139-エンドポイント)
      - [1.3.10. Natゲートウェイ](#1310-natゲートウェイ)
      - [1.3.11. ピアリング接続](#1311-ピアリング接続)
      - [1.3.12. セキュリティ](#1312-セキュリティ)
      - [1.3.13.  DNSファイヤーウォール](#1313--dnsファイヤーウォール)
      - [1.3.14. ネットワークファイヤーウォール](#1314-ネットワークファイヤーウォール)
      - [1.3.15. VPN](#1315-vpn)
      - [1.3.16. Transit Gateway](#1316-transit-gateway)
      - [1.3.17. トラフィックミラーリング](#1317-トラフィックミラーリング)
  - [2. コンテナ](#2-コンテナ-1)
    - [2.1. ECS](#21-ecs)
    - [2.2. EKS](#22-eks)
    - [2.3. ECR](#23-ecr)
  - [3. ストレージ](#3-ストレージ-1)
    - [3.1. EFS](#31-efs)
    - [3.2. S3](#32-s3)
  - [4. コンピューティング](#4-コンピューティング-1)
    - [4.1. Lambda](#41-lambda-1)
      - [4.1.1. アプリケーション](#411-アプリケーション)
      - [4.1.2. 関数](#412-関数)
      - [4.1.3. その他のリソース](#413-その他のリソース)
    - [4.2. Batch](#42-batch-1)
    - [4.3. EC2](#43-ec2-1)
      - [4.3.1. インスタンス](#431-インスタンス)
      - [4.3.2. イメージ(AMI)](#432-イメージami)
      - [4.3.3. Elastic Block Store(EBS)](#433-elastic-block-storeebs)
      - [4.3.4. ネットワーク・セキュリティ](#434-ネットワークセキュリティ)
      - [4.3.5. ロードバランシング](#435-ロードバランシング)
  - [5. リソースのマネジメント](#5-リソースのマネジメント-1)
    - [5.1. CloudWatch](#51-cloudwatch-1)
  - [6. セキュリティ・権限](#6-セキュリティ権限-1)
    - [6.1. IAM](#61-iam-1)


**参考資料URL**

|資料名|URL|
|----|----|
| AWS基礎をまとめてみた |https://qiita.com/g_ayushi/items/0e0f34d19813b8fdc2b8|


# AWS サービス一覧
## 1. ネットワーク
### 1.1. AWS Elastic IP アドレス(Elastic IP address)
このサービスは固定のパブリックIPアドレス(IPv4)を「Amazon EC2」等のインスタンスに設定できる機能です。

#### 特徴<!-- omit in toc -->
* 取得した固定のパブリックIPアドレスを専有できること
* IPアドレスを他のインスタンスやネットワークインターフェイスに付け直すこと(再マッピング)が可能であること
 
例えば、「Amazon EC2」の「インスタンスA」に関連付けた「AWS Elastic IP アドレス（EIP）」をVPC内の「インスタンスB」に付け替えることが可能。
つまり「インスタンスA」に障害が発生した場合でも、そのIPアドレスを「インスタンスB」に再マッピングすることにより、サービスを停止することなく継続することが可能。

#### 目的<!-- omit in toc -->
「Amazon EC2」などのインスタンスを作成時に自動的に付与される「パブリックIPアドレス」は、インスタンスを起動する毎に新しいIPアドレスに変化します。また他のインスタンスに再マッピングすることもできません。
そのためインターネットからアクセスするようなサービスの場合は、固定の「AWS Elastic IP アドレス（EIP）」を利用する必要がある。

### 1.2. Elastic Load Balancer(ELB)
ELBはNLB、ALBなどの総称であり、ロードバランサーはアプリやネットワークに対するトラフィック負荷に応じて処理を分散する仕組みです。

#### 1.2.1 Network Load Balancer(NLB)
このサービスはアプリケーションへの通信量(トラフィック)による負荷を分散するロードバランサーの一つです。

OSI参照モデルにおける「トランスポート層（レイヤー4）」の通信処理を負荷分散するために用いられる。
AWSの「Elastic Load Balancing」のロードバランサーの内で、**高度なパフォーマンスと低レイテンシー(通信遅延)が求められるアプリケーションの構築**に一般的に用いられる。

##### 特徴<!-- omit in toc -->
* TCPやUDPのトランスポート層におけるプロトコルでの通信に関してのトラフィック負荷分散が可能
* 秒間数百万といった大量のリクエスト処理や突発性や変動性が高い通信パターンの処理にも対応可能

|  | |
| ---- | ---- |
| 対応プロトコル | TCP, UDP, TCP+UDPリスナー, TLSリスナー |

「TLS通信終了」に対応し、クライアント側のソースIPアドレスを保持することで、IPアドレスをゾーンごとに分離して管理することで安定した通信処理も可能。
「WebSocket」プロトコルで通信するアプリケーションに対して、接続状態を長時間維持するような通信処理にも対応。
 
また「TCP+UDPリスナー」を使用することで、**TCPとUDPの各通信を同一の「ポート番号」で処理することが可能**である。

#### 1.2.2. Application Load Balancer(ALB)
このサービスはHTTP(S)通信への通信量(トラフィック)による負荷を分散するロードバランサーの一つです。
マイクロサービス(小規模のサービスを組み合わせる構成)やコンテナサービス(ECS)などに、処理を振り分けることが可能です。

OSI参照モデルにおける「アプリケーション層（レイヤー7）」の通信処理を負荷分散するために用いられる。

|  | |
| ---- | ---- |
| 対応プロトコル | HTTP(S), HTTP/2, WebSocket |

### 1.3. Amazon Virtual Private Cloud(VPC)
このサービスはプライベートな専用の仮想ネットワーク環境を構築する機能です。

VPCではAWS内において他の仮想ネットワークから論理的に分離されたセクションを用意し、VPC内でAWSリソースを起動することが可能です。
IPアドレス範囲の選択、サブネットの作成、ルートテーブルの設定、ネットワークゲートウェイの設定などが可能で、仮想ネットワーク環境を完全にコントロールすることができます。

これによってAWSのリソースは、指定されたサブネットの中で起動することができるため、インターネットに接続するリソースはパブリックサブネット、閉域ネットワークで使うリソースにはプライベートサブネットを使用することが可能です。

### 1.4. Subnet
サブネットはVPCのIPアドレスの範囲を分割して作成したネットワークです。

AWSのVPCはAWSクラウド上で他の仮想ネットワークとは切り離されている。
AWSリソースはVPC内で起動することができ、AWSのリソースはサブネットを指定して起動します。

> サブネットはVPCのIPアドレスの範囲を分割して作成したネットワーク


VPCのIPアドレスの範囲内でサブネットを指定することが可能だが、1つのサブネットはVPCの複数アベイラビリティーゾーンをまたぐことはできない。

> アベイラビリティーゾーン:リージョンごとに存在する複数の独立した場所（データセンター）のこと

#### サブネットの種類<!-- omit in toc -->

| 種類 | 説明 |
| ---- | ---- |
| パブリックサブネット | インターネットゲート通信が可能なサブネット |
| プライベートサブネット | インターネットゲートウェイのルートがないサブネットのこと(インターネット通信不可) |
| VPNのみのサブネット | AWS Site-to-Site VPN接続の仮想プライベートゲートウェイへのトラフィックがあるサブネット |

### 1.5. Route53
Amazon Route 53はAWSクラウド内で使用するドメインを一元管理するためのサービスです。
新しいドメインの購入や所有ドメインの維持管理、DNSサーバーのレコード登録管理などが可能。
Route53はドメイン名をIPアドレスに変換するDNSルーティングを設定可能です。(IPv6にも対応)

またDNSヘルスチェックの機能やレイテンシーベースルーティングなど高度な機能も用意されています。

### 1.6. Internet Gateway
AWS Internet GatewayはVPCとインターネットとの間の通信を可能にするためのものである。
Internet GatewayはVPCに存在し、VPCが外部のインターネットと接続したいときに必要。

### 1.7. NAT Gateway
NAT Gatewayはプライベートサブネット内のインスタンス(EC2かECS,EKSなど)がVPC外部のネットワークへ接続するためのものである。
プライベートサブネットは直接インターネットゲートウェイに接続することはできないため、NATゲートウェイを経由しNAT変換を行ってインターネットに接続できるようにします。

> NATはプライベートIPアドレスをグローバルIPアドレスに変換する技術です


### 1.8. CloudFront
Amazon CloudFrontは動画、アプリケーション、静的、動的なコンテンツを迅速かつ安全に配信できるCDN(Content Delivery Network)サービスです。
世界中にエッジサーバーがありあらゆる場所からのアクセスに対しても柔軟に対応できるため、低レイテンシーでユーザーにコンテンツを提供することが可能となり、オリジンサーバーへの負荷の軽減が可能です。

#### 用語<!-- omit in toc -->
| 名称 | 説明 |
| ---- | ---- |
| オリジンサーバ  | コンテンツが格納されているサーバー、EC2やS3、ELBなどが利用可能 |
| ディストリビューショ  | ドメインごとに割り当てられるCloudFrontの設定であり、インスタンスのようなもの |
| TTL  | キャッシュを保持する期間 |


## 2. コンテナ
### 2.1. AWS ECS(Elastic Container Service)
このサービスは高性能でスケーラブルなコンテナ管理ができる機能です。

AWS ECSはクラスターを管理するインフラのインストールや運用、そしてスケーリングをする必要がないのが特徴です。

#### 特徴<!-- omit in toc -->
* サーバーレスであること
* アプリケーションの構築や管理に集中が可能
* スケールに応じたパフォーマンスが可能
* 安全なアプリケーションを作成できる点

#### 起動タイプとその特徴<!-- omit in toc -->
| 種類 | 説明 |
| ---- | ---- |
| Fargate起動タイプ | コンテナ化したアプリケーションに必要となるメモリリソースとvCPUに対して料金が発生するタイプ |
| EC2起動タイプ | EC2インスタンスやEBS ボリュームなどといったAWS リソースに対してのみ料金が発生するタイプ |

### 2.2. AWS EKS(Elastic Kubernetes Service)

**現時点では略(必要になれば追記してください)**

### 2.3. AWS ECR(Elastic Container Registry)
Amazon ECRはコンテナイメージを複数人で共有し、クラウド上でコードを実行してくれるサービスです。

**現時点では略(必要になれば追記してください)**

## 3. ストレージ
### 3.1. Amazon EFS(Amazon Elastic File System)
このサービスはAWSが提供する**ファイルストレージタイプ**のサービスの1つであり、Linux等のOSでマウント可能なファイルシステムを提供しています。
EFSは自動で容量を拡張可能なので拡張やデータ削除によるファイルサーバの縮小などでサービスの停止などは発生しない特徴があります。

#### 選択可能なパフォーマンスモード<!-- omit in toc -->
| 種類 | 説明 |
| ---- | ---- |
| 汎用パフォーマンスモード | デフォルトのモード(使用例:・ウェブ配信環境, コンテンツ管理システム, ホームディレクトリ, 一般的なファイルサービス) |
| 最大I/Oパフォーマンスモード | 最大I/Oモードのファイルシステムは、ファイル操作のレイテンシーがわずかに長くなる代わりに、高いレベルの集計スループットと 1 秒あたりの操作にスケール可能 |

### 3.2. Simple Storage Service(S3)
このサービスはAWSが提供するオブジェクトストレージサービスです。
S3はバックアップおよび復元、アーカイブ、エンタープライズアプリケーションなど様々なユースケースに沿ってデータを保存することが可能。

#### S3の概念と用語<!-- omit in toc -->
| 用語 | 説明 |
| ---- | ---- |
| バケット | S3に格納されるオブジェクトのコンテナ。すべてのオブジェクトはバケット内に格納される。 |
| オブジェクト | S3に格納される基本エンティティ(ファイル)。オブジェクトデータとメタデータで構成される。 |
| キー | バケット内のオブジェクトの識別子。バケット内のすべてのオブジェクトは厳密に1個のキーを持つ。 |
| リージョン |  S3で作成したバケットを保存する地理的なリージョンを選択可能。 |

## 4. コンピューティング
### 4.1. Lambda
AWS Lambdaはサーバレスコンピューティングサービスの1つでインフラ管理を気にすることなく、コードを実行させることができるサービスです。
利用者はプログラムコードを準備し、Lambdaにアップロードするだけで実行できます。

### 4.2. Batch
AWS Batchはフルマネージドなバッチサービスです。
AWS BatchはCPUやメモリに最適化されたコンピューティングリソースの中から必要なものにアクセスし、数十万件におよぶバッチコンピューティングジョブを行います。ジョブを実行するためのインフラ環境をユーザ側で準備する必要がないのが特徴です。

| 用語 | 説明 |
| ---- | ---- |
| ジョブ | AWS Batchで実行される作業の単位 |
| ジョブ定義 | 実行方法を定義する、ジョブの雛形となるテンプレート |
| ジョブキュー | ジョブキューは投入されたジョブの待ち行列 |

### 4.3. EC2
Amazon EC2は仮想サーバサービス(クラウドサーバ)です。
EC2は状況に合わせてスペック(CPU, メモリ, ハードディスクの容量)変更が簡単にできます。



## 5. リソースのマネジメント
### 5.1. CloudWatch
CloudWatchはAWS内で動作する仮想サーバーや各サービスを監視できるサービスです。
必要なものを組み合わせて利用します。

#### メトリクス<!-- omit in toc -->
「メトリクス」はCloudWatchで最も基本的な概念で監視対象から取得するデータポイントのセットのことを指す。
メトリクスは、収集したデータポイントの中から、どのような統計を提示するかを選択することができます。

#### ログ監視機能（CloudWatch Logs）<!-- omit in toc -->
CloudWatchエージェントをインストールすることで、使用中のすべてのシステム、アプリケーション、AWS サービスのログファイルを監視することができます。特定のキーワードやエラーコードなどを指定して検出することが可能です。

#### アラーム通知機能（CloudWatch Alarms)<!-- omit in toc -->
メトリクスが特定の閾値を超えた場合、下回った場合、監視ができなくなった場合など、状況に合わせてアラームを発行することができます。

#### イベント管理・自動化機能（CloudWatch Events)<!-- omit in toc -->
メトリクスの状態が変化した時に、任意のアクションを実行するように設定できます。
状態の変化以外にも、決められたイベントを時間指定で実行することも可能です。
他のオンプレミスサーバの機能で言うとWindows系でいうところのタスクスケジューラー、Linux系でいうところのCronといったものに近いことができます。

### 5.2. AWS Systems Manager(SSM)
AWS SSMではEC2インスタンスのパッチ管理やアンチウィルスソフトの定義ファイルの更新、ソフトウェアのインストール状況の管理、タスクの自動化、共有リソースの利用などが可能です。

## 6. セキュリティ・権限
### 6.1. IAM
IAMはAWSを操作する上で必要となるアクセス制御権限を管理する**ユーザ一元管理サービス**である。

#### IAMユーザ<!-- omit in toc -->
IAMユーザーとは、AWSを利用するアカウントです。
AWSを操作するコンソール画面にログインを行うときに人が利用します。ログイン用のIDを決めて作成します。
またIAMグループを作成し、複数のIAMユーザをまとめて管理をすることができます。

#### IAMグループ<!-- omit in toc -->
IAMグループに権限を付与しておくことで、そのグループに所属したIAMユーザは皆同様権限でAWSを利用することができます。
IAMユーザは複数のグループに所属できます。（最大10グループ）

#### IAMロール<!-- omit in toc -->
IAMロールはEC2などのAWSのサービスや他のアカウントに対してにAWS の操作権限を付与するための仕組みです。
例えば、EC2にRDSへの操作を行うアプリケーションを導入する場合は、EC2にRDSへのアクセス権限を記載したIAMロールをアタッチします。
また、他アカウントにS3への接続を許可する場合には、自分のアカウントに他アカウント用のIAMロールを作成しておくと、他のアカウントから「スイッチ」することで自アカウントのS3を操作することができるようになります。

LambdaやCloudformationを利用する際は必須の設定となります。

IDフェデレーションといって、GoogleやFacebookなどのIDプロバイダーに対してアクセスを許可するようなIAMロールを作成することもできます。

#### IAMポリシ<!-- omit in toc -->
権限の管理元となるサービスです。IAMポリシーはIAMユーザ、IAMグループ、IAMロールに紐づけることができ、AWSリソースへの操作権限を設定する機能です。
| 種類 | 詳細 |
| ---- | ---- |
| AWS管理ポリシ | 各AWSのサービスに対して大まかな制御ポリシーが設定可能 |
| カスタマー管理ポリシ | ユーザがJSONファイルなどを利用して設定するポリシーです。IPアドレスの制御など、AWS管理ポリシーよりも細やかな制御が可能 |
| インラインポリシ | 特定のIAMユーザやIAMロール専用に作成されるポリシ |

### 6.2. ACM(Certificate Manager)
ACMはSSL証明書を発行できるサービスです。
ACMが発行したSSL証明書は、ユーザーのプライベートネットワークリソースや、AWSの様々なサービスに導入可能です。

### 6.3. Web Application Firewall(WAF)
AWS WAFはWebサイトを含めたWebアプリケーションをサイバー攻撃から守るツールである。
**ファイアウォールやIPSなどほかのセキュリティツールでは防御できない、Webアプリケーション層への攻撃を検知・遮断できる**のが特徴。
Webアプリケーションの脆弱性を突くサイバー攻撃(SQL injection XSSなど)の防衛のさらなる対策になる。

WAFはAWSから提供されている標準ルールやAPIを使ってあらゆる脅威に対抗可能なので、アプリケーションを高いレベルで保護可能です。
HTTP および HTTPS リクエストのモニタリングや、コンテンツへのアクセスのコントロールが可能で、OSI参照モデルにおけるアプリケーション層(レイヤー7)で動作します。

### 6.4. Shield
AWS ShieldはアプリケーションをDDoSから保護をするサービスです。
スタンダード(無料)とアドバンスト(有料)の2つのタイプがあります。
スタンダードに関してはAWSを利用している時点で自動的に適用されています。

### 6.5. Cognito
Amazon Cognitoは認証処理サービスの1つであり、主に4つの機能で構成されています。

#### ユーザープール<!-- omit in toc -->
IDやパスワードの認証情報をアプリ内部の「ユーザーディレクトリ」という領域に保存し、その情報を利用してアプリの「認証」を行う機能です。

> ユーザプールにおける認証はいわゆるログインやサインイン等のことで、アクセスしてきたユーザーが誰であるか（アイデンティティ）を確認する処理です

#### IDプール<!-- omit in toc -->
IDプールは外部IDプロバイダーと連携しながらAWSの各サービスに対する「認可」を行う機能です。

> IDプールにおける認可はアクセスしてきたユーザーが誰であるかを確認した後の処理です。

#### Cognito Sync<!-- omit in toc -->
Cognito Syncはモバイルアプリとクラウド間のデータを同期する機能です。

#### AppSync<!-- omit in toc -->
AppSync はモバイルアプリとクラウド間のデータ同期機能です。Cpgnito Syncより高機能です。
特徴としては「GraphQL」が利用できる点です。

## 7. データベース
### 7.1. RDS
RDSはリレーショナルデータベースです。
SQL Server・Mariaデータベース・Amazon Aurora・MySQL・Oracle・Postgre SQLがRDSMとして設定可能です。
AmazonのRDSにはマルチAZオプション、パッチ作業の自動化、レコメンデーション、リードレプリカなどの機能があります。

* マルチAZオプション ・・・ データベースの可用性と持続性を高めるために、異なるアベイラビリティゾーン（AZ）のスタンバイインスタンスにデータを複製すること
* パッチ作業の自動化 ・・・ リレーショナルデータベースのソフトウェアを最新の状態に保つために、ソフトウェアをアップデートすること
* レコメンデーション　・・・ データベースインスタンスの設定や使用状況などを分析して、ユーザーにとって最適な使用環境を構築するためのガイダンス
* リードレプリカ ・・・ 読み取り頻度の高いデータベースの負荷を分散するために、データベースインスタンスのレプリカを複数作成する機能
* スナップショット ・・・ Amazon S3へデータベースのデータを保存する、ユーザー主導型のバックアップのこと
* バックアップの自動化 ・・・ データベースとトランザクションログを自動でバックアップする機能

### 7.2. DynamoDB

## 8. その他
### 8.1. EventBridge
EventBridgeは『イベント』を通じて様々なアプリケーション同士を簡単に接続できるようにするサービスです。
AWSサービス内やSaaSで発生するイベントをAWS内の他のサービスにつなげるものです。

| 用語 | 説明 |
| ---- | ---- |
| イベントバス | 様々なイベントの受け口になるもので3種類存在する |
| イベントソース | 様々なAWSサービス・SaaS・カスタムアプリケーションのこと |
| ルール | イベントバスに紐付き、イベントの検出パターンの定義やターゲットの定義(設定にはIAMロールが必要) |

#### イベントバスの種類<!-- omit in toc -->
##### Default Event Bus<!-- omit in toc -->
AWSのサービス・独自のアプリケーションから発生するイベントに対して使用できるイベントバス。
どのAWSアカウントにも必ず１つ自動的に作られる。

##### Custom Event Bus<!-- omit in toc -->
独自のアプリケーションで使用できるイベントバス。
自由に作成可能。

##### Partner Event Bus<!-- omit in toc -->
AWS以外のSaaSサービス経由で利用できるイベントバス。
SaaSサービス側で登録してあげないと基本的に利用できない。

#### Scheduler <!-- omit in toc -->
SchedulerはEventBridge単体で定期的にAWS各サービスのAPIを呼び出しイベントを実行できる機能(インスタンスの起動、停止など)です。


### 8.2. AWS Comand Line Interface(CLI)
AWS CLIはAWSサービスを管理するための統合ツールであり、専用ツールを使用して、コマンドラインからAWS上の複数のサービスを制御可能。
ローカルのPC上で起動するため、開発に用いるローカルのコンピュータへOS(Windows, Mac, Linux etc..)ごとにインストールして使用する必要があります。

### 8.3. CodePipeline
AWS CodePipelineはソフトウェアの構築、テスト、デプロイまでの過程を自動化し、短時間でアップデートできるようCI/CDをサポートする継続的デリバリーサービスです。

### 8.4. API Gateway
Amazon API GatewayはAPIの作成、公開、保守、モニタリング、保護が簡単にできるサービスです。
APIのバージョン管理、レスポンスデータのモニタリングや監視、API作成(REST API, HTTP API, WebSocket API)、が可能です。
スロットリング(ユーザが一定の時間内に特定の操作に対して送信できるリクエストの数を制限する機能)も設定可能です。

# AWSサービス詳細設定
AWSで提供されている**サービス毎の詳細の設定やパラメータ**に関して解説。
## 1. ネットワーク
### 1.1. Route 53
### 1.2. CloudFront
### 1.3. VPC
#### 1.3.1. VPC
詳しくは上記Gistの「1.3.VPC」にて

#### 1.3.2. サブネット
詳しくは上記Gistの「1.4.Subnet」にて

#### 1.3.3. ルートテーブル
ルールの記載されたテーブルがルートテーブル(通信経路表)であり、パケットのルーティングを設定可能です。
ルートテーブルには、ゲートウェイからのネットワークトラフィックをトラフィックに応じて経路設定します。
ルートテーブルの種類は以下があります。

* メインルートテーブル ・・・ VPCに自動割り当てされるルートテーブル
* カスタムルートテーブル ・・・ VPC用に各自設定するルートテーブル
* サブネットルートテーブル ・・・ サブネットに関連付けられるルートテーブル
* ゲートウェイルートテーブル ・・・ Internet GatewayまたはVPGに関連付けられるルートテーブル
* ローカルゲートウェイルートテーブル ・・・ Outpostsローカルゲートウェイに関連付けられるルートテーブル


| 名称 | 説明　|
| ---- | ---- |
| CIDR | IPネットワークの経路情報を集約する際にクラスの概念をなくした技術であり、IPネットワークのクラスを部分的に割り当ててIPアドレスの使用量を削減できます |
| CIDRブロック | CIDRのプレフィックスに基づいてIPアドレスを解釈するアドレスのグループを指す。CIDRプレフィックスで記載したIPアドレスの範囲をCIDRブロックとしてネットワーク割当や設定の対象アドレスとして指定できます。 |

#### 1.3.4. インターネットゲートウェイ
詳しくは上記Gistの「1.6. Internet Gateway」にて。

#### 1.3.5. キャリアゲートウェイ
キャリア網と直結するゲートウェイです。

#### 1.3.6. DHCPオプションセット
VPC内に関連付けるDHCP関連の設定のことである。

> DHCP ・・・ IPアドレスを自動的に割り当てるプロトコル

#### 1.3.7. Elastic IP
詳しくは上記Gistの「1.1. Elastic IP」にて。

#### 1.3.8. マネージドプレフィリクスリスト
複数のCIDRブロックを一元管理することができる機能です。

#### 1.3.9. エンドポイント
AWSのサービスに接続するために**必要なURL**を指します。
記述は以下の通りです。

``protocol://service-code[.region-code].amazonaws.com``

#### 1.3.10. Natゲートウェイ
詳しくは上記Gistの「1.7. Nat Gateway」にて

#### 1.3.11. ピアリング接続
VPC ピアリング接続は、2 つの VPC 間のネットワーク接続であり、これらの間でトラフィックをプライベートにルーティングが可能です。

#### 1.3.12. セキュリティ
##### ・ACL(Acces Control List)<!-- omit in toc -->
ACLはネットワークアクセスコントロールリストと呼ばれ、AWSの中でセキュリティを強化するために使用します。
ネットワークACL自体は設定されたルールに従うファイヤーウォールです。

ネットワークACLとセキュリティグループの違いは以下の通りです。
|  | ネットワークACL | セキュリティグループ |
| ---- | ---- | ---- |
| 設定対象　| サブネット単位 | インスタンス単位 |
|ルール | 許可/拒否ルール | 許可ルールの実 |
| 設定方向 | 入口出口 | 入口出口 |
| ステートフル/ステートレス | ステートレス | ステートフル |
| 評価順 | 順番に評価 | 全て評価 |

##### ・セキュリティグループ<!-- omit in toc -->
セキュリティグループは仮想ファイアウォールです。
ACLとの違いはACL項目に記載。

#### 1.3.13.  DNSファイヤーウォール
**現時点では略(必要になれば追記してください)**

#### 1.3.14. ネットワークファイヤーウォール
**現時点では略(必要になれば追記してください)**

#### 1.3.15. VPN
**現時点では略(必要になれば追記してください)**

#### 1.3.16. Transit Gateway
**現時点では略(必要になれば追記してください)**

#### 1.3.17. トラフィックミラーリング
**現時点では略(必要になれば追記してください)**

## 2. コンテナ
### 2.1. ECS
### 2.2. EKS
### 2.3. ECR
## 3. ストレージ
### 3.1. EFS
### 3.2. S3
## 4. コンピューティング
### 4.1. Lambda
#### 4.1.1. アプリケーション
AWS CloudFormation または他のツール (AWS Serverless Application Model など) を使用してデプロイされたアプリケーションのことです。

**現時点では略(必要になれば追記してください)**

#### 4.1.2. 関数
動かしたいソースコードです。
以下の環境と言語に対応しています。
Node.js(サーバサイドJavaScript), Python, Ruby, Go, Java, PowerShell, C#

##### ・関数の詳細設定<!-- omit in toc -->
コード, テスト, モニタリング, 設定, エイリアス, バージョンに関して...
**現時点では略(必要になれば追記してください)**

#### 4.1.3. その他のリソース
##### ・コード署名設定<!-- omit in toc -->
**現時点では略(必要になれば追記してください)**

##### ・レイヤー<!-- omit in toc -->
使用するライブラリを Lambdaにある関数全体 で共有できる機能のことです。

**現時点では略(必要になれば追記してください)**

##### ・レプリカ<!-- omit in toc -->
レプリカ=> 複製? よくわからない(2022/12時点)

### 4.2. Batch
### 4.3. EC2
#### 4.3.1. インスタンス
インスタンスとは、AWS上で稼働する仮想サーバのことを指し仮想サーバを数える際の単位として使われています。

#### 4.3.2. イメージ(AMI)
AMIはEC2インスタンスの構築に必要な情報がまとまってる起動テンプレートです。
以下の3つが設定可能です。


| 名称 | 説明 |
| ---- | ---- |
| OS、アプリケーション | AmazonLinux, Ubuntu, Windows, macOS, Red Hatなど |
| ブロックデバイスマッピング | EC2にどのEBS・インスタンスストアを紐づけるかを決める設定 |
| AWSアカウントの権限の管理情報 | 作成したEC2インスタンスを誰が使えるかの権限を保存可能 |

#### 4.3.3. Elastic Block Store(EBS)
EC2インスタンスにアタッチして使われるAWSのストレージサービスであり、EC2が仮想サーバならEBSはHDDのような関係となっている。

##### ・EBSの種類<!-- omit in toc -->
| 名称 | 内容 |
| ---- | ---- |
| 汎用 SSD (gp2) | Amazon EC2インスタンスが利用するデフォルトのEBSボリューム |
| プロビジョンド IOPS SSD (io1) | 高いパフォーマンスを提供するEBSストレージ、アクセス頻度が高く、ディスクI/Oが多くなるDBやApplicationに適す |
| スループット最適化 HDD (st1) | 高速なHDDを基盤で安定したスループットが必要なシステムに適すボリューム,ログ管理やビッグデータ向けのデータストアなどアクセス頻度が高いシステム向け |
| Cold HDD (sc1) | EBSボリュームタイプの中でも低コストなボリューム、SSDより大容量のデータの保存に適しているのでバックアップやアクセス頻度の少ないもの向き |

#### 4.3.4. ネットワーク・セキュリティ
##### ・セキュリティグループ(仮想ファイヤウォール)<!-- omit in toc -->
EC2ではセキュリティグループという仮想ファイアウォール機能によりインスタンスに入出力される通信を制御ができます。
具体的には通信を許可するポートなどをこの項目で設定可能です。

| 名称 | 説明　|
| ---- | ---- |
| インバウンドルール | 外部からサーバーへアクセスを許可する内容のルール |
| アウトバウンドルール | サーバーから外部へのアクセスに対するルール |

セキュリティグループは実装するWEBサーバの種類ごとに合わせて設定します。
* 公開用WEBサーバ ... HTTP/HTTPSはすべてのIPから許可する、SSHは管理者側の固定IPのみ許可する
* DBサーバ ... WEBサーバのIPアドレス、プロコトルにDB情報を設定し、SSHは管理者側の固定IPのみ許可する

##### ・Elastic IP<!-- omit in toc -->
固定のパブリックIPアドレス(IPv4)を設定する機能。
IPアドレスを他のインスタンスやネットワークインターフェイスに付け直すこと(再マッピング)が可能です。

##### ・プレイスメントグループ<!-- omit in toc -->
複数のインスタンスを論理的にグループ化して、パフォーマンスの向上・耐障害性を高める機能。
3つの種類がある。

##### ・キーペア<!-- omit in toc -->
秘密鍵と公開鍵を合わせた2つの鍵のことを指し、SSH鍵の作成時に自動作成される。

##### ・ネットワークインターフェース(ENI)<!-- omit in toc -->
物理サーバにおけるNICと同じ機能。

#### 4.3.5. ロードバランシング
##### ・ロードバランサー<!-- omit in toc -->
外部からの通信（トラフィック）を複数のサーバーに分散する仕組みを提供するもの。NLBとALBがある。

##### ・ターゲットグループ<!-- omit in toc -->
トラフィックを分散する複数のターゲット(トラフィックを分散するところ)を含んでグループ化したもの。

## 5. リソースのマネジメント
### 5.1. CloudWatch

## 6. セキュリティ・権限
### 6.1. IAM 