import BlogList from "@/app/components/blog-list";
import SearchField from "@/app/components/search-field";
import { BLOG_LIST_LIMIT } from "@/app/constants";
import { getBlogList } from "@/app/libs/microcms";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Paga({ searchParams }: Props) {
  const { contents: blog } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <BlogList articles={blog} />
    </>
  );
}
