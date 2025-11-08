import type { Category as CategoryType } from "@/app/libs/microcms";

type Props = {
  category?: CategoryType;
};

export default function Category({ category }: Props) {
  if (!category) {
    return null;
  }

  return <span>{category.name}</span>;
}
