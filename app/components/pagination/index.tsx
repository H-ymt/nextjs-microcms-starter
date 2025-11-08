import Link from "next/link";
import { BLOG_LIST_LIMIT } from "@/app/constants";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/blog",
}: Props) {
  const pages = Array.from({
    length: Math.ceil(totalCount / BLOG_LIST_LIMIT),
  }).map((_, i) => i + 1);
  return (
    <nav aria-label="ページナビゲーション">
      <ul>
        {pages.map((p) => (
          <li aria-current={current === p ? "page" : undefined} key={p}>
            {current !== p ? (
              <Link href={`${basePath}/page/${p}`}>{p}</Link>
            ) : (
              <span>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
