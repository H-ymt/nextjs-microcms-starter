import Link from "next/link";
import BlogList from "../components/blog-list";
import Pagination from "../components/pagination";
import SearchField from "../components/search-field";
import { BLOG_LIST_LIMIT } from "../constants";
import { getBlogList, getCategoryList } from "../libs/microcms";

export default async function Page() {
  const data = await getBlogList({
    limit: BLOG_LIST_LIMIT,
  });

  const categories = await getCategoryList();

  return (
    <div>
      <h1>Blog Page</h1>
      <SearchField />
      <ul>
        {categories?.contents.map((category) => (
          <li key={category.id}>
            <Link href={`/blog/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>

      <BlogList articles={data.contents} />
      <Pagination basePath="/blog" totalCount={data.totalCount} />
    </div>
  );
}
