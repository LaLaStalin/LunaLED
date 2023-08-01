import React from "react";
import { HomeBanner, Advantages, CardSlider } from "@/components/index";
import { useTranslations, useMessages } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="w-full">
      <HomeBanner />

      <section className="flex flex-col gap-[80px]">
        <div className="max-w-[1280px] flex items-center mx-auto mt-[80px]">
          {/* Card Slider */}
          <div
            className="w-full mb-5 gap-[16px] "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <CardSlider />
          </div>
        </div>

        <Advantages />
      </section>
    </main>
  );
}
