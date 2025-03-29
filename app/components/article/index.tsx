import { type Article } from "@/app/libs/microcms";
import { formatRitchText } from "@/app/libs/utils";

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1>{data.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${formatRitchText(data.content)}`,
        }}
      />
    </main>
  );
}
