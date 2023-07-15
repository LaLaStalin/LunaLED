import { Button } from "@/components";
import Image from "next/image";
import { useTranslations, useMessages } from "next-intl";
import Link from "next-intl/link";
import React from "react";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="flex  min-h-screen bg-white dark:bg-black flex-col items-center justify-between p-24">
      <div>
        <p>{t("title")}</p>
      </div>
      <Link href="/" locale="en">
        en
      </Link>

      <Link href="/" locale="th">
        th
      </Link>
    </main>
  );
}
