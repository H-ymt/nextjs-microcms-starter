import { getBlogDetail } from "@/app/libs/microcms";
import Article from "@/app/components/article";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ dk: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.eyecatch?.url || ""],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return (
    <>
      <Article data={data} />
      <div>
        <Link href="/blog">Back to Blog</Link>
      </div>
    </>
  );
}
