import { BLOG_LIST_LIMIT } from "@/app/constants";
import { getBlogList } from "@/app/libs/microcms";
import ArticleList from "@/app/components/blog-list";
import Pagination from "@/app/components/pagination";

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const current = parseInt(params.current as string, 10);
  const data = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    offset: BLOG_LIST_LIMIT * (current - 1),
  });

  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath="/blog" />
    </>
  );
}
