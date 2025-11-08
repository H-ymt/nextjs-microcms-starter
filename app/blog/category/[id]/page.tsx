import BlogList from "@/app/components/blog-list";
import Pagination from "@/app/components/pagination";
import { BLOG_LIST_LIMIT } from "@/app/constants";
import { getBlogList, getCategoryDetail } from "@/app/libs/microcms";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const { contents: blog, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    filters: `category[equals]${params.id}`,
  });

  const category = await getCategoryDetail(params.id);

  return (
    <>
      <p>カテゴリー: {category.name}</p>
      <BlogList articles={blog} />
      <Pagination
        basePath={`/blog/category/${category.id}`}
        totalCount={totalCount}
      />
    </>
  );
}
