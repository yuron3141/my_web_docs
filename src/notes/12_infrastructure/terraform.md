# Terraform入門<!-- omit in toc -->
TerraformとはHashiCorp社により開発されているオープンソースのインフラ自動構築ツール(IaC)です。
Terraformは作成したコードに基づいて自動でリソースを構築するため、Terraformを利用することでオペレーションミスが無くなる他、複数システムでコードを再利用することで効率化を図ることが可能。

<img src="https://knowledge.sakura.ad.jp/wp-content/uploads/2016/07/terraform_overview.png" width="60%">


## 目次<!-- omit in toc -->
- [1. Terraformの基本知識](#1-terraformの基本知識)
  - [1.1. provider.tf](#11-providertf)
  - [1.2. main.tf](#12-maintf)
  - [1.3. variables.tf](#13-variablestf)
  - [1.4. terraform.tfstate](#14-terraformtfstate)
  - [1.5. Terraformのコマンド](#15-terraformのコマンド)
    - [1.5.1. terraform init](#151-terraform-init)
    - [1.5.2. terraform plan](#152-terraform-plan)
    - [1.5.3. terraform apply](#153-terraform-apply)
  - [1.6. Terraformの使い方(windows10)](#16-terraformの使い方windows10)
- [2. AWSにおけるTerraform入門](#2-awsにおけるterraform入門)
  - [AWS CloudShellを使う方法(TerraformデータはGithub上にある場合)](#aws-cloudshellを使う方法terraformデータはgithub上にある場合)
  - [2.1. provider.tf](#21-providertf)
  - [2.2. variables.tf](#22-variablestf)
  - [2.3. ECS](#23-ecs)
  - [2.4. EFS](#24-efs)
  - [2.5. IAMロール設定](#25-iamロール設定)
  - [2.6. ロードバランサー](#26-ロードバランサー)
  - [2.8. VPC](#28-vpc)
  - [2.9. Subnet](#29-subnet)
  - [2.10. Mount\_target](#210-mount_target)


## 参考資料URL<!-- omit in toc -->

|資料名|URL|
|----|----|
| minecraftサーバをECSで作る |https://www.serotoninpower.club/archives/903/#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%A7%8B%E6%88%90%E5%9B%B3|
---
# 1. Terraformの基本知識
Terraformでは基本的に``xxx.tf``という拡張子：tfで定義された情報に従って各種リソースを構築します。
単一ファイルにすべてを定義することも可能ですが、分離することが一般的です。

テンプレートファイル（.tf）に構成情報、プロバイダ情報2、変数等を記載して作成していきます。
基本的構成は以下のように記述します。

directory
| tfファイル | 内容 |
| ---- | ---- |
| providers.tf | プロバイダ設定 |
| main.tf | リソース定義（ファイル名は任意） |
| variables.tf | 変数設定 |
| terraform.tfstate | リソースの現状を示すファイル（自動作成） |

## 1.1. provider.tf
実行するTerraformのバージョンを指定したり、プロバイダ(AWS,GCP,Azure等)を指定する。
例としてAWSをプロバイダとしてproviders.tfを記述したものは以下である。

```tf
terraform {
    backend "s3" {
        bucket                  = "aws-terraform"
        key                     = "path/terraform.tfstate"
        region                  = "ap-northeast-1"
        shared_credentials_file = "$HOME/.aws/credentials"
        profile                 = "xxxxx"
    }
    required_version        = ">=0.12"
}

provider aws {
    shared_credentials_file =  "$HOME/.aws/credentials"
    profile                 =  "xxxxx"
    region                  =  "ap-northeast-1"
}
```

認証情報もproviders.tfに直接記述可能だが、基本的にはセキュリティリスクを考慮し環境変数で定義する。

### 環境変数の管理手法<!-- omit in toc -->
#### 単一アカウントの場合<!-- omit in toc -->
* ``TF_VAR_<変数名>``というかたちで環境変数で定義
* ``terraform``コマンド実行時にこの環境変数が読み込まれ変数に値が代入される

```
$ export TF_VAR_access_key="AKIAXXXXXXXXXXXXXXXXXX"
$ export TF_VAR_secret_key="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```
#### 複数アカウントの場合<!-- omit in toc -->
* shared_credentials_fileを利用可能
* profileを利用してアカウントをスイッチ可能

```terraform.tfstate```の出力先をbackendで指定可能
* このファイルはリソースの状態管理に使われる重要なファイルのためローカルは非推奨
* コンフリクト時の影響を考慮し、git等は非推奨
* ProviderがAWSであれば、S3/DynamoDBに配置するのが一般的である

## 1.2. main.tf
main.tfではTerraformにて構築するリソース情報を定義します。

* ```resource "<リースの種類>" "<リソース名>" {}```　といった構文で指定
* <リソース名>は任意の名前を設定可能であり、用途を識別できるようにする
* ブロック中には```設定項目名 = 設定値```の形式で記述する

定義済みの他リソースの情報を参照することも可能

* ```<リソースの種類>.<リソース名>.<属性名>```で指定する
* 依存関係はTerraform側で制御されているので、原則、考慮不要
* 明示的に指定したい場合は、```depends_on```で指定する

Sample
```tf
resource "aws_security_group" "allow_tls" {
    name        = "allow_tls"
    description = "Allow TLS inbound traffic"
    vpc_id      = aws_vpc.main.id

    ingress {
        description = "TLS from VPC"
        from_port   = 443
        to_port     = 443
        protocol    = "tcp"
        cidr_blocks = [aws_vpc.main.cidr_block]
    }

    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

resource "aws_security_group_rule" "add-rule" {
    type                     = "ingress"
    from_port                = 0
    to_port                  = 0
    protocol                 = "-1"
    source_security_group_id = aws_security_group.allow_tls.id

    security_group_id = aws_security_group.allow_tls.id

    depends_on = aws_security_group.allow_tls
}
```

## 1.3. variables.tf
変数情報を```main.tf```等から分離するためのテンプレートファイルである。
一応main.tf内で記述可能だが、**可読性を考慮し別ファイルで管理する**ことが多い。
変数は```variable <変数名> {}```といった構文で定義する。

```tf
variable "env" {
    type        = string
    description = "環境種別"
    default     = "dev"
}
```
* ``type`` : 変数の型を定義する(String/List/Map など)
* ``default``: 変数のデフォルト値。コマンド実行時や別ファイルを利用して上書き可能。
* ``description``: 対象変数の説明を示す(コメントのように利用する)

また、Terraformでは2種類の変数が定義可能であり、それぞれローカル変数、入力変数がある。

* ローカル変数
    * ``locals{}``内に定義
    * 式をかける
    * 外部から指定不可能
    * デフォルト値は定義できない

* 入力変数(Input Variables)
    * ``variable{}``内に定義
    * 値のみ指定できる
    * 外部から指定可能
    * デフォルト値の定義が可能


## 1.4. terraform.tfstate
Terraformが管理しているリソースの状態を表すファイルである。
* デフォルトではローカルにtfstateファイルが生成される
* ProviderがAWSであれば、S3などのリモートバックエンドで管理することが多い

作成タイミングは```terraform apply```を実行すると生成される。
* 次回以降、terraform planを実行時に前回実行時のリソース情報と差分が表示される
* 実機との差分確認は行わないという設計方針6となっている

リソースを分割≒コマンド実行単位を分割することで、更新頻度の高低でtfstateを分割できる

## 1.5. Terraformのコマンド
```bash
$ terraform init  # BackendとプロバイダのInitialize
$ terraform plan  # 実行内容の確認、チェック
$ terraform apply # 実行

$ terraform -v # バージョン確認
$ terraform destroy # 構築したリソースを削除
```
### 1.5.1. terraform init
* ワークスペースを初期化するコマンド
* Terraform を実行するためには、まず``terraform init`` でワークスペースの初期化が必須
* .tf（テンプレート）ファイル内の plugin（aws provider など）のダウンロード処理などが走る

### 1.5.2. terraform plan
* Terraform による実行計画を参照するコマンド
* .tf（テンプレート）ファイルに情報を元にどのようなリソースが 作成/修正/削除 されるかを参照可能

### 1.5.3. terraform apply
* .tf（テンプレート）ファイルに記載された情報を元にリソースを作成するコマンド
* リソースが作成後、 ``terraform.tfstate`` に、作成されたリソースに関連する情報が保存される
* 2度目以降の実行後には、1世代前のものが ``terraform.tfstate.backup`` に保存される
* Terraform において、この状態を管理する ``terraform.state`` ファイルが非常に重要となるため、手動更新等は行わないこと

## 1.6. Terraformの使い方(windows10)
Terraform公式サイトからDLしたファイルを展開したディレクトリ(terraform.exeがある層)に入り、CUI(コマンドプロンプトなど)上でterraformコマンドを使って操作します。
作業中のtfファイルやインフラ構築中のファイル群は、その層においてあるほうが操作しやすいです。



# 2. AWSにおけるTerraform入門
AWSにおいてTerraformを使いインフラストラクチャーを構築する方法は複数ある。
1. AWS ClouShell(AWSのWeb上コンソール)を使う方法 ・・・アクセスキー不要
2. ローカルのPCにTerraform等をインストールしローカルから自分のAWSへ構築する方法(企業やチーム開発ではこの手法?)

## AWS CloudShellを使う方法(TerraformデータはGithub上にある場合)
1. Terraformをインストール
```shell
$ wget https://releases.hashicorp.com/terraform/0.14.2/terraform_0.14.2_linux_amd64.zip
$ sudo unzip terraform_0.14.2_linux_amd64.zip -d /usr/local/bin/
```
1. Terraformバージョン確認
```shell
$ terraform --version
```
1. ``git clone``コマンドによりtfファイル群をGitHubよりダウンロード(未検証)

2. Terraformの検証
```bash
$ terraform plan
```
1. Terraform 実行
```
$ terraform apply
```


また削除は以下コマンドで行います。
```bash
$ terraform destroy
```

## 2.1. provider.tf
サンプル
```tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws" # awsにおけるインストールする Provider 指定
      version = "~> 3.0"
    }
  }
}

provider "aws" {}
```

* ``terraform{}``内にTerraform本体のバージョンやプロバイダー(AWS, GCP等)を指定
* ``provider "aws(or gcp etc...)" {}``内にプロバイダー向け情報を記述

## 2.2. variables.tf
サンプル
```tf
variable "aws-ecs-task-name" {
  type    = string
  default = "minecraft-on-ecs"
}
```
## 2.3. ECS
サンプル
```tf
resource "aws_ecs_cluster" "default" {
  name = "default"
}

resource "aws_ecs_task_definition" "minecraft-on-ecs-task" {
  cpu                = var.aws-ecs-cluster-cpu
  execution_role_arn = aws_iam_role.minecraft-on-ecs-task-execution-role.arn
  family             = var.aws-ecs-task-name
  memory             = var.aws-ecs-cluster-memory
  network_mode       = "awsvpc"
  requires_compatibilities = [
    "FARGATE",
  ]
  task_role_arn = aws_iam_role.minecraft-on-ecs-task-execution-role.arn

  volume {
    name = "data"
    efs_volume_configuration {
      file_system_id     = aws_efs_file_system.minecraft-data.id
      root_directory     = "/"
      transit_encryption = "DISABLED"

      authorization_config {
        iam = "DISABLED"
      }
    }
  }

  container_definitions = jsonencode(
    [
      {
        command    = []
        cpu        = 0
        entryPoint = []
        environment = [
          {
            name  = "EULA"
            value = "TRUE"
          },
          {
            name  = "TYPE"
            value = "PAPER"
          },
          {
            name  = "MEMORY"
            value = var.aws-ecs-container-java-memory-heap
          },
        ]
        essential = true
        image     = "itzg/minecraft-server:java16"
        logConfiguration = {
          logDriver = "awslogs"
          options = {
            awslogs-group         = "/ecs/${var.aws-ecs-task-name}"
            awslogs-region        = var.aws-region
            awslogs-stream-prefix = "ecs"
          }
        }
        memory            = var.aws-ecs-container-memory
        memoryReservation = var.aws-ecs-container-memory-reservation
        mountPoints = [
          {
            containerPath = "/data"
            sourceVolume  = "data"
          },
        ]
        name = "minecraft"
        portMappings = [
          {
            containerPort = 25565
            hostPort      = 25565
            protocol      = "tcp"
          },
        ]
      },
    ]
  )

  tags = {
    Name = "minecraft-on-ecs"
  }
}

resource "aws_ecs_service" "minecraft-on-ecs-service" {
  name                               = "minecraft-service"
  cluster                            = aws_ecs_cluster.default.arn
  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 100
  desired_count                      = 1
  enable_ecs_managed_tags            = true
  enable_execute_command             = false
  health_check_grace_period_seconds  = 60
  launch_type                        = "FARGATE"
  platform_version                   = "LATEST"
  scheduling_strategy                = "REPLICA"
  task_definition                    = "${var.aws-ecs-task-name}:${aws_ecs_task_definition.minecraft-on-ecs-task.revision}"

  deployment_circuit_breaker {
    enable   = true
    rollback = false
  }

  deployment_controller {
    type = "ECS"
  }

  load_balancer {
    container_name   = "minecraft"
    container_port   = 25565
    target_group_arn = aws_lb_target_group.minecraft-ecs-target.arn
  }

  network_configuration {
    assign_public_ip = true
    security_groups = [
      aws_security_group.ecs-default.id,
    ]
    subnets = [
      aws_subnet.ecs-default.id,
    ]
  }

  timeouts {}

  tags = {
    "Name" = "minecraft-on-ecs"
  }
}
```
## 2.4. EFS
サンプル
```tf
resource "aws_efs_file_system" "minecraft-data" {
  availability_zone_name = var.aws-availability-zone
  encrypted              = true
  performance_mode       = "generalPurpose"

  lifecycle_policy {
    transition_to_ia = "AFTER_30_DAYS"
  }
  lifecycle_policy {
    transition_to_primary_storage_class = "AFTER_1_ACCESS"
  }

  tags = {
    Name = "minecraft-data"
  }
}

resource "aws_efs_backup_policy" "minecraft-data-backup-policy" {
  file_system_id = aws_efs_file_system.minecraft-data.id

  backup_policy {
    status = "ENABLED"
  }
}

resource "aws_efs_mount_target" "minecraft-data-mount-target" {
  file_system_id = aws_efs_file_system.minecraft-data.id
  subnet_id      = aws_subnet.ecs-default.id
  security_groups = [
    aws_security_group.allow_nfs.id
  ]
}
```
## 2.5. IAMロール設定
Terraform によるIAM Policy の作成方法はいくつかあります。

サンプル
```tf
resource "aws_iam_role" "minecraft-on-ecs-task-role" {
  name        = "minecraft-on-ecs-task"
  description = "Allows ECS tasks to call AWS services on your behalf."

  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "",
        "Effect" : "Allow",
        "Principal" : {
          "Service" : "ecs-tasks.amazonaws.com"
        },
        "Action" : "sts:AssumeRole"
      }
    ]
  })

  managed_policy_arns = [
    "arn:aws:iam::aws:policy/AmazonElasticFileSystemClientReadWriteAccess"
  ]

  tags = {
    Name = "minecraft-on-ecs"
  }
}
```
## 2.6. ロードバランサー
サンプル
```tf
resource "aws_lb" "minecraft-lb" {
  load_balancer_type = "network"
  name               = "minecraft-lb"
  internal           = false
  ip_address_type    = "ipv4"

  subnet_mapping {
    subnet_id     = aws_subnet.ecs-default.id
    allocation_id = aws_eip.minecraft-global-ip.id
  }

  tags = {
    Name = "minecraft-on-ecs"
  }
}
```
## 2.8. VPC
サンプル
```tf
resource "aws_vpc" "ecs-default" {
  assign_generated_ipv6_cidr_block = false
  cidr_block                       = "10.0.0.0/16"
  enable_classiclink               = false
  enable_classiclink_dns_support   = false
  enable_dns_hostnames             = true
  enable_dns_support               = true
  instance_tenancy                 = "default"
  tags = {
    "Description" = "Created for ECS cluster default"
    "Name"        = "ECS default - VPC"
  }
}
```

## 2.9. Subnet
サンプル
```tf
resource "aws_subnet" "ecs-default" {
  assign_ipv6_address_on_creation = false
  availability_zone               = var.aws-availability-zone
  cidr_block                      = "10.0.0.0/24"
  map_public_ip_on_launch         = false
  tags = {
    "Description" = "Created for ECS cluster default"
    "Name"        = "ECS default - Public Subnet 1"
  }
  vpc_id = aws_vpc.ecs-default.id

  timeouts {}
}
```

## 2.10. Mount_target
サンプル(EFSに対して)
```tf
resource "aws_efs_mount_target" "minecraft-data-mount-target" {
  file_system_id = aws_efs_file_system.minecraft-data.id
  subnet_id      = aws_subnet.ecs-default.id
  security_groups = [
    aws_security_group.allow_nfs.id
  ]
}
```