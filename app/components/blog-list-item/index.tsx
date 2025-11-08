import Link from "next/link";
import type { Article } from "@/app/libs/microcms";

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
