import Link from "next/link";
import BlogList from "./components/blog-list";
import { TOP_BLOG_LIMIT } from "./constants";
import { getBlogList } from "./libs/microcms";

export default async function Home() {
  const data = await getBlogList({
    limit: TOP_BLOG_LIMIT,
  });

  return (
    <div>
      <h1>Next.js microCMS Starter</h1>
      <BlogList articles={data.contents} />
      <Link href="/blog">ブログページ一覧</Link>
    </div>
  );
}
