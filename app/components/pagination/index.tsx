import { BLOG_LIST_LIMIT } from "@/app/constants";
import styles from "./index.module.css";
import Link from "next/link";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = "", q }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / BLOG_LIST_LIMIT) }).map(
    (_, i) => i + 1
  );
  return (
    <nav aria-label="ページナビゲーション">
      <ul className={styles.container}>
        {pages.map((p) => (
          <li
            className={styles.list}
            key={p}
            aria-current={current === p ? "page" : undefined}
          >
            {current !== p ? (
              <Link
                href={`${basePath}/page/${p}` + (q ? `?q=${q}` : "")}
                className={styles.item}
              >
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
