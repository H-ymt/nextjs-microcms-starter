"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/blog/search?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          id=""
          placeholder="キーワードを入力"
        />
      </label>
    </form>
  );
}

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
}
