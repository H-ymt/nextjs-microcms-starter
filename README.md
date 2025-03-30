# Starter template for Next.js with microCMS

## 概要

Next.js x microCMS のミニマルスターター

### 機能

- ブログ記事の一覧表示
- カテゴリ別のブログ記事表示
- ブログ記事の詳細表示
- ページネーション
- 記事のプレビュー

### 使用技術

- [Next.js](https://nextjs.org/)
- [microCMS](https://microcms.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 環境情報

- 本番環境
  - [https://remix-microcms-resume-template.vercel.app](https://nextjs-microcms-starter.vercel.app/)

## microCMSのAPIスキーマ設定

### コンテンツ

エンドポイント: contents
APIの型: リスト形式

| フィールド ID | 表示名             | 種類               |
| ------------- | ------------------ | ------------------ |
| title         | タイトル           | テキストフィールド |
| content       | 内容               | テキストエリア     |
| eyecatch      | アイキャッチ       | 画像               |
| category      | カテゴリ           | カテゴリ           |
| description   | ディスクリプション | テキストエリア     |

### カテゴリー

エンドポイント: categories
APIの型: リスト形式

| フィールド ID | 表示名     | 種類               |
| ------------- | ---------- | ------------------ |
| name          | カテゴリ名 | テキストフィールド |

## 開発環境構築

### インストール

```bash
pnpm install
```

`.env` ファイルをプロジェクトのルートディレクトリに作成し、以下の内容を追加してください。

```
MICROCMS_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=your-service-id
```

`.env` ファイルを作成後、以下のコマンドで開発環境を構築

```bash
pnpm run dev
```

ブラウザで http://localhost:3000 を開き、アプリケーションを確認します。
