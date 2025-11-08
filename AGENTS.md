# AIエージェント用 ドキュメント

## プロジェクト概要

Next.js 15とmicroCMSを使用したブログスターターテンプレート。TypeScriptとApp Routerを使用し、ブログ記事の一覧表示、カテゴリ別表示、詳細表示、検索、ページネーション、プレビュー機能を提供。

## 開発コマンド

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm run dev

# 本番ビルド
pnpm run build

# 本番サーバーの起動
pnpm start

# リント
pnpm run lint
```

## 環境変数

プロジェクトルートに`.env`ファイルを作成し、以下の環境変数を設定:

```
MICROCMS_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=your-service-id
```

## アーキテクチャ

### ディレクトリ構造

- `app/` - Next.js App Router構造
  - `blog/` - ブログ関連のページ
    - `[slug]/` - 記事詳細ページ（動的ルート）
    - `category/[id]/` - カテゴリ別記事一覧
    - `page/[current]/` - ページネーション
    - `search/` - 検索ページ
  - `components/` - 再利用可能なコンポーネント
  - `libs/` - ユーティリティ関数とAPI統合
    - `microcms.ts` - microCMS APIクライアントと型定義
    - `utils.ts` - リッチテキスト処理など
  - `constants/` - アプリケーション定数

### microCMS統合

microCMS APIとの統合は`app/libs/microcms.ts`で管理されており、以下を提供:

- **型定義**: `Blog`, `Category`, `Article`, `Meta`
- **APIクライアント**: `createClient()`で初期化
- **主要関数**:
  - `getBlogList(queries?)` - ブログ記事一覧の取得
  - `getBlogDetail(contentId, queries?)` - 記事詳細の取得
  - `getCategoryList(queries?)` - カテゴリ一覧の取得
  - `getCategoryDetail(contentId, queries?)` - カテゴリ詳細の取得
  - `getMeta(queries?)` - メタ情報の取得

すべてのmicroCMS関数はエラー時に`notFound()`を呼び出す（`getMeta`を除く）。

### microCMS APIスキーマ

#### ブログ (endpoint: "blogs")

- `title` (テキスト)
- `content` (テキストエリア)
- `eyecatch` (画像)
- `category` (カテゴリ)
- `description` (テキストエリア)

#### カテゴリー (endpoint: "categories")

- `name` (テキスト)

### ページルーティング

- `/` - トップページ（最新記事3件表示）
- `/blog` - ブログ記事一覧（6件/ページ）
- `/blog/[slug]` - 記事詳細（`dk`クエリパラメータでプレビュー対応）
- `/blog/page/[current]` - ページネーション
- `/blog/category/[id]` - カテゴリ別記事一覧
- `/blog/search` - 検索結果（`q`クエリパラメータ）

### コンポーネント

- `article/` - 記事詳細表示（シンタックスハイライト付き）
- `blog-list/` - 記事一覧表示
- `blog-list-item/` - 記事一覧アイテム
- `category/` - カテゴリ表示
- `pagination/` - ページネーション
- `search-field/` - 検索フォーム（クライアントコンポーネント）

### リッチテキスト処理

`app/libs/utils.ts`の`formatRitchText()`関数はcheerioとhighlight.jsを使用して:

- リッチテキストHTMLを解析
- コードブロックのシンタックスハイライトを適用
- 言語指定の自動検出対応

### 定数

`app/constants/index.ts`:

- `BLOG_LIST_LIMIT = 6` - ブログ一覧ページの表示件数
- `TOP_BLOG_LIMIT = 3` - トップページの表示件数

### パスエイリアス

`@/*`は`tsconfig.json`でプロジェクトルートにマップされている:

```typescript
import { getBlogDetail } from "@/app/libs/microcms";
```

### メタデータ生成

記事詳細ページは`generateMetadata()`を使用してSEO対応のメタデータを動的生成:

- ページタイトル
- 説明文
- OGP画像
- カノニカルURL
- プレビューモード対応（`dk`パラメータ）

### Node.jsバージョン管理

Voltaを使用してNode.jsとpnpmのバージョンを管理（`package.json`参照）:

- Node.js: 22.14.0
- pnpm: 10.6.1

## 設計作業ルール

設計作業を依頼された場合は、以下のルールに従ってファイルを作成すること：

- ファイル名: `YYYYMMDD_HHMM_{日本語の作業内容}.md`
- 保存場所: `docs/` 以下
- フォーマット: Markdown

例: `docs/20250815_1430_ユーザー認証システム設計.md`

## GitHub 操作ルール

- ユーザーから PR を出して、と言われたときは、現在の作業のフィーチャーブランチを切りコミットを行ってから PR を出すようにする
- ユーザーから commit して、と言われたときは、必ず `git status`や`git diff`を行い、変更内容を確認してから conventional commit 形式でコミットメッセージを作成し、コミットを行うようにする
- 重要: ユーザーから明示的な指示があるまでコミットしないこと
- develop や main への直接 push は禁止です
- PR 作成時は `gh pr create` コマンドに `--base` オプションを付けず、デフォルトのベースブランチを使用してください
