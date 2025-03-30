import BlogList from "@/app/components/blog-list";
import Pagination from "@/app/components/pagination";
import { BLOG_LIST_LIMIT } from "@/app/constants";
import { getBlogList, getCategoryDetail } from "@/app/libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  const category = await getCategoryDetail(params.id);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: blog, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    offset: BLOG_LIST_LIMIT * (current - 1),
    filters: `category[equals]${category.id}`,
  });

  if (blog.length === 0) {
    notFound();
  }

  return (
    <>
      <BlogList articles={blog} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/blog/category/${category.id}`}
      />
    </>
  );
}
