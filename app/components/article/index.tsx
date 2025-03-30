import { type Article } from "@/app/libs/microcms";
import { formatRitchText } from "@/app/libs/utils";
import Link from "next/link";
import Category from "@/app/components/category";

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1>{data.title}</h1>
      {data.category ? (
        <Link href={`/blog/category/${data.category.id}`}>
          <Category category={data.category} />
        </Link>
      ) : null}
      <div
        dangerouslySetInnerHTML={{
          __html: `${formatRitchText(data.content)}`,
        }}
      />
    </main>
  );
}
