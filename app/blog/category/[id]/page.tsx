import BlogList from "@/app/components/blog-list";
import { BLOG_LIST_LIMIT } from "@/app/constants";
import { getBlogList, getCategoryDetail } from "@/app/libs/microcms";

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

  const category = await getCategoryDetail(params.id);

  return (
    <>
      <p>カテゴリー: {category.name}</p>
      <BlogList articles={blog} />
    </>
  );
}
