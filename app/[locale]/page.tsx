import React from "react";
import { HomeBanner } from "@/components/index";
import { useTranslations, useMessages } from "next-intl";
import Paper from "@mui/material/Paper";
import { InputSelect, CardSlider } from "@/components";
import { Button } from "@mui/material";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="w-full">
      <HomeBanner />

      <section className="max-w-[1280px] flex items-center mx-auto mt-[80px]">
        <span className="mx-[40px]">{"<"}</span>
        {/* Card Slider */}
        <div
          className="w-full mb-5 gap-[16px] "
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <CardSlider />
          <CardSlider />
          <CardSlider />
        </div>

        <span className="mx-[40px]">{">"}</span>
      </section>
    </main>
  );
}
