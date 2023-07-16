import { HomeBanner } from "@/components/index";
import { useTranslations, useMessages } from "next-intl";

import React from "react";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="">
      <HomeBanner />
      <div>jaifkasdaskdl</div>
    </main>
  );
}
