# Beyond Admin serverless

## What is this?

beyond 特集連載ユーザー管理などの API 側

## そもそもの仕組み

LAMBDA と DYNAMODB の組合せで CRUD の REST API で作成され、BEYOND の WP で管理できないものがこちらに管理させてる状態である

## 開発の前に

dynamodb を migrate する

```
yarn setup
```

## local development

```
yarn dev
```

## deploy 開発環境

```
yarn deploy:dev
# => yarn serverless deploy --stage dev --aws-profile beyond
```

### 本番デプロイ

Github Actions で行います。
Github の Repository に Secret が登録されていて、それを利用して deploy しています。
