import { BLOG_LIST_LIMIT } from "@/app/constants";
import Link from "next/link";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = "/blog" }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / BLOG_LIST_LIMIT) }).map(
    (_, i) => i + 1
  );
  return (
    <nav aria-label="ページナビゲーション">
      <ul>
        {pages.map((p) => (
          <li key={p} aria-current={current === p ? "page" : undefined}>
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
