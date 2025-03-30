import BlogList from "@/app/components/blog-list";
import { BLOG_LIST_LIMIT } from "@/app/constants";
import { getBlogList } from "@/app/libs/microcms";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { contents: blog } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    filters: `category[equals]${params.id}`,
  });

  return <BlogList articles={blog} />;
}
