<div id="top"></div>

## 使用技術一覧

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドの言語一覧 -->
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript">
  <!-- フロントエンドのフレームワーク一覧 -->
<!--   <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"> -->
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="node">
<!--   <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"> -->
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="vite">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react">
<!--   <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"> -->
  
  <!-- バックエンドの言語一覧 -->
  <img src="https://img.shields.io/badge/Kotlin-0095D5?&style=for-the-badge&logo=kotlin&logoColor=white" alt="kotlin">
  <!-- バックエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="spring">
  
  <!-- ミドルウェア一覧 -->
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgresql">
<!--   <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"> -->
<!--   <img src="https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white"> -->
  <img src="https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white" alt="gradle">
  
  <!-- インフラ一覧 -->
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="docker">
<!--   <img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white"> -->
<!--   <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"> -->
<!--   <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34"> -->
<!--   <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"> -->
<!--   <img src="https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white"> -->
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [GitHub Copilot Agentテスト内容](#github-copilot-agentテスト内容)
3. [環境](#環境)
4. [ディレクトリ構成](#ディレクトリ構成)
5. [開発環境構築](#開発環境構築)
6. [トラブルシューティング](#トラブルシューティング)

<!-- READMEの作成方法のドキュメントのリンク -->
<!-- <br />  -->
<!-- <div align="right">  -->
<!--     <a href="READMEの作成方法のリンク"><strong>READMEの作成方法 »</strong></a> -->
<!-- </div> -->
<!-- <br />  -->
<!-- Dockerfileのドキュメントのリンク-->
<!-- <div align="right">
    <a href="Dockerfileの詳細リンク"><strong>Dockerfileの詳細 »</strong></a>
</div>
<br /> -->
<!-- プロジェクト名を記載 -->

## try-github-copilot-agent

GitHub Copilot Agentの機能を確認・テストするためのリポジトリ

<!-- プロジェクトについて -->

## プロジェクトについて

このリポジトリは、GitHub Copilot Agentの様々な機能をテスト・検証するために作成されました。</br>
フロントエンドのフレームワークとしてVite(React+Typescript)を使用し、バックエンドのフレームワークとしてSpringBoot(Kotlin)を使用しています。</br>
Postgresqlをデータベースとして使用しています。ローカル開発環境としてDockerを使用してデータベースを立ち上げています。</br>
このリポジトリを使うことでGitHub Copilot Agentの機能を実際のプロジェクト環境で試すことができます。</br>


<!-- プロジェクトの概要を記載　-->
<!--     <p align="left"> -->
<!--     <br /> -->
<!-- プロジェクト詳細にBacklogのWikiのリンク -->
<!--     <a href="Backlogのwikiリンク"><strong>プロジェクト詳細 »</strong></a> -->
<!--     <br /> -->
<!--     <br />  -->

<p>(<a href="#top">トップへ</a>)</p>

## GitHub Copilot Agentテスト内容

このリポジトリでは以下のGitHub Copilot Agent機能をテスト・検証できます：

### 主要テスト項目
- **コード生成**: フロントエンド（React+TypeScript）とバックエンド（Kotlin+Spring Boot）でのコード生成
- **リファクタリング支援**: 既存コードの改善提案とリファクタリング
- **バグ修正**: Issue作成からコード修正までの一連の流れ
- **テストコード生成**: 単体テストと統合テストの自動生成
- **ドキュメント更新**: READMEやコメントの自動更新
- **コードレビュー**: Pull Requestでのコードレビュー支援

### 利用シナリオ
1. **新機能開発**: GitHub Copilot Agentを使った機能追加
2. **保守作業**: 既存コードの改善とリファクタリング
3. **バグ対応**: Issue から修正までの自動化
4. **テスト拡充**: テストカバレッジ向上のための支援

<p>(<a href="#top">トップへ</a>)</p>

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン  |
|-------------|--------|
| Node.js     | 22.4.1 |
| Typescript  | 5.2.2  |
| Vite        | 5.3.4  |
| Java        | 21.0.4 |
| Spring Boot | 3.3.2  |
| Postgresql  | 15.3   |

その他のパッケージのバージョンは build.gradle.kts と package.json を参照してください

<p>(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->
<pre>
.
├── backend
│   ├── .gradle
│   ├── build
│   ├── gradle
│   ├── src
│   │   ├── main
│   │   │   └── kotlin
│   │   │       └── com
│   │   │           └── example
│   │   │               └── backend
│   │   │                   ├── BootApplication.kt
│   │   │                   ├── MemoController.kt
│   │   │                   ├── MemoRepository.kt
│   │   │                   ├── MemoService.kt
│   │   │                   ├── MemoEntity.kt
│   │   │                   ├── ReqSaveMemo.kt
│   │   │                   └── ResGetMemo.kt
│   │   └── test
│   │       └── kotlin
│   │           └── com
│   │               └── example
│   │                   └── backend
│   │                       ├── controller
│   │                       ├── dto
│   │                       ├── entity
│   │                       ├── repository
│   │                       └── service
│   ├── .gitignore
│   ├── build.gradle.kts
│   ├── gradlew
│   ├── gradlew.bat
│   ├── HELP.md
│   └── settings.gradle.kts
│
├── frontend
│   ├── .gitignore
│   ├── README.md
│   ├── __test__
│   ├── components
│   ├── features
│   ├── next-env.d.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── pages
│   ├── postcss.config.js
│   ├── public
│   ├── styles
│   ├── tailwind.config.js
│   └── tsconfig.json
├── .env
├── .gitignore
├── Makefile
├── README.md
└── docker-compose.yml
</pre>

<p>(<a href="#top">トップへ</a>)</p>

## 開発環境構築

<!-- GitHub Copilot Agentのテスト環境構築に必要な情報を記載 -->

### 前提条件

GitHub Copilot Agentの機能をテストするために以下が必要です：
- GitHub Copilot の有効なサブスクリプション
- GitHub Copilot Agent へのアクセス権限
- Docker Desktop のインストール
- Node.js 22.4.1 以上
- Java 21 以上

### コンテナの作成と起動

### 環境変数の設定

現在このリポジトリでは特別な環境変数の設定は不要です。
必要に応じて .env ファイルを作成してカスタマイズしてください。

基本的なデータベース接続情報：
- データベース: PostgreSQL
- ホスト: localhost
- ポート: 5432
- データベース名: postgres
- ユーザー名: postgres
- パスワード: postgres
以下のコマンドで開発環境を構築

```
make prepare
```

開発環境が構築できたら以下のコマンドでアプリを起動

```
make preview
```

### 動作確認

http://localhost:8080 にアクセスできるか確認
アクセスできたら成功

### GitHub Copilot Agentの利用開始

環境構築が完了したら、以下の方法でGitHub Copilot Agentの機能をテストできます：

1. **GitHub Issues での機能テスト**
   - 新しいIssueを作成してGitHub Copilot Agentに対応を依頼
   - バグ修正、機能追加、リファクタリングなどを試す

2. **Pull Request での機能テスト**
   - コードレビューでのGitHub Copilot Agent活用
   - 改善提案やバグ検出機能のテスト

3. **直接的なコード支援**
   - IDE内でのコード生成支援
   - リアルタイムでの実装サポート

### コンテナの停止

以下のコマンドでコンテナを停止することができます

```
make down
```

### コマンド一覧

| Make           | 実行する処理                            | 元のコマンド                                              |
|----------------|-----------------------------------|-----------------------------------------------------|
| make prepare   | node_modules のインストール、コンテナの起動      | cd frontend && npm install</br>docker compose up -d |
| make f-test    | フロントエンドのテストを実行                    | cd frontend && npm run test                         |
| make b-test    | バックエンドのテストを実行                     | cd backend &&  ./gradle test                        |
| make test      | フロントエンドとバックエンドのテストを実行             | make f-test && make b-test                          |
| make f-preview | フロントエンドを起動（localhost:5173）        | cd frontend && npm run test                         |
| make preview   | フロントエンドとバックエンドを起動(localhost:8080) | cd frontend && npm run build</br>cd frontend &&     |
| make down      | 立ち上げたコンテナを停止する                    | docker compose down                                 |


<!-- ### リモートデバッグの方法

リモートデバッグ を使用する際は以下の url を参考に設定してください<br>
[Django のコンテナへリモートデバッグしよう！](https://qiita.com/shun198/items/9e4fcb4479385217c323)-->

## トラブルシューティング

### Docker Desktop が起動していない

Docker Desktop が起動できていないので起動させましょう

### Ports are not available: address already in use

別のコンテナもしくはローカル上ですでに使っているポートがある可能性があります
<br>
下記記事を参考にしてください
<br>
[コンテナ起動時に Ports are not available: address already in use が出た時の対処法について](https://qiita.com/shun198/items/ab6eca4bbe4d065abb8f)

### Module not found

make build

を実行して Docker image を更新してください

<p>(<a href="#top">トップへ</a>)</p>
