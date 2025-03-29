import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js microCMS Starter",
  description: "A starter template for Next.js with microCMS",
  openGraph: {
    title: "Next.js microCMS Starter",
  },
  alternates: {
    canonical: "https://nextjs-microcms-starter.vercel.app/",
  },
};

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
