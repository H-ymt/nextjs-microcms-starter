import { Article } from "@/app/libs/microcms";
import BlogListItem from "../blog-list-item";

type Props = {
  articles?: Article[];
};

export default function BlogList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません</p>;
  }

  return (
    <ul>
      {articles.map((article) => (
        <BlogListItem key={article.id} blog={article} />
      ))}
    </ul>
  );
}
