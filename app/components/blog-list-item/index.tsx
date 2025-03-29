import { Article } from "@/app/libs/microcms";
import Link from "next/link";

type Props = {
  blog: Article;
};

export default function BlogListItem({ blog }: Props) {
  return (
    <li>
      <Link href={`/blog/${blog.id}`}>
        <dl>{blog.title}</dl>
      </Link>
    </li>
  );
}
