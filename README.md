<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## システム構成

- **Frontend**
    - Next.js v13.4.4. (React v18.2)
        - UI: Mantine
        - React Query
- **Backend**:
    - NestJS v9.5.0 (Node.js v12~)
        - ORM: Prisma
- **Database**: PostgreSQL
- **Type Checking**: TypeScript

<br><br>
# Backend

## **User Endpoints**

このサービスは、ユーザー情報の更新を行うためのAPIエンドポイントを提供します。認証はJWTを使用し、パスワード情報はレスポンスから除外されます。

### **・GET /user**

認証されたユーザーの情報を取得します。ユーザーのパスワードはレスポンスから除外されます。

**Request**

- Headers: **`Authorization: Bearer <token>`**

**Response**

- 200 OK: ユーザー情報（パスワード除く）

<br>

### **・PATCH /user**

認証されたユーザーの情報を更新します。ユーザーのパスワードはレスポンスから除外されます。

**Request**

- Headers: **`Authorization: Bearer <token>`**
- Body: ユーザー情報のニックネームの更新データ

**Response**

- 200 OK: 更新後のユーザー情報（パスワード除く）

<br><br><hr>

## **Authentication Endpoints**

このサービスは、ユーザー認証（サインアップ、ログイン、ログアウト）を行うためのAPIエンドポイントを提供します。認証はJWTを使用し、パスワード情報はレスポンスから除外されます。

### **・GET /auth/csrf**

CSRFトークンを取得します。

**Request**

- No parameters required

**Response**

- 200 OK: CSRFトークン

<br>

### **・POST /auth/signup**

新規ユーザーを登録します。パスワードはbcryptでハッシュ化されます。

**Request**

- Body: ユーザー情報（メールアドレスとパスワード）

**Response**

- 200 OK: メッセージ（登録成功）

<br>

### **・POST /auth/login**

ユーザーを認証し、JWTを発行します。JWTはHTTP Onlyのクッキーとしてクライアントに送信されます。

**Request**

- Body: ユーザー情報（メールアドレスとパスワード）

**Response**

- 200 OK: メッセージ（認証成功）、JWTを含むクッキー

<br>

### **・POST /auth/logout**

ユーザーのログアウトを行います。クッキーのJWTをクリアします。

**Request**

- Headers: **`Authorization: Bearer <token>`**

**Response**

- 200 OK: メッセージ（ログアウト成功）

<br><br><hr>

## **Todo Endpoint**

このサービスは、認証されたユーザーのTodoタスクの作成、取得、更新、削除を行うためのAPIエンドポイントを提供します。

### **・GET /todo**

認証されたユーザーの全てのタスクを取得します。

**Request**

- Headers: **`Authorization: Bearer <token>`**

**Response**

- 200 OK: ユーザーの全てのタスク

<br>

### **・GET /todo/:id**

認証されたユーザーの特定のタスクを取得します。

**Request**

- Headers: **`Authorization: Bearer <token>`**
- Path Parameters: **`id`** (タスクのID)

**Response**

- 200 OK: 指定されたIDのタスク

<br>

### **・POST /todo**

新しいタスクを作成します。

**Request**

- Headers: **`Authorization: Bearer <token>`**
- Body: タスク情報

**Response**

- 200 OK: 作成されたタスク

<br>

### **・PATCH /todo/:id**

特定のタスクを更新します。

**Request**

- Headers: **`Authorization: Bearer <token>`**
- Path Parameters: **`id`** (タスクのID)
- Body: タスク情報の更新データ

**Response**

- 200 OK: 更新後のタスク

<br>

### **・DELETE /todo/:id**

特定のタスクを削除します。

**Request**

- Headers: **`Authorization: Bearer <token>`**
- Path Parameters: **`id`** (タスクのID)

**Response**

- 204 No Content: タスクの削除成功

<br><br><hr>
