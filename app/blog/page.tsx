import BlogList from "../components/blog-list";
import Pagination from "../components/pagination";
import { BLOG_LIST_LIMIT } from "../constants";
import { getBlogList } from "../libs/microcms";
import styles from "./page.module.css";

export default async function Page() {
  const data = await getBlogList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <div className={styles.page}>
      <h1>Blog Page</h1>
      <BlogList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath="/blog" />
    </div>
  );
}
