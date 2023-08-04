"use client";

import React from "react";
import {
  HomeBanner,
  Advantages,
  CardSlider,
  Subscribe,
} from "@/components/index";
import { useTranslations, useMessages } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/redux/store/store";
import { onThemeChange } from "@/redux/store/themeReducer";
import {
  onAgeChange,
  onNameChange,
  onAddBaby,
  killingBaby,
} from "@/redux/store/userReducer";
import App from "@/components/sidebar/sidebar";

export default function Home() {
  // const { theme, benz } = useAppSelector((state) => state.themeReducer);
  // const { name, surname, age, baby } = useAppSelector(
  //   (state) => state.userReducer
  // );
  // const dispatch = useAppDispatch();

  // useTranslations
  const t = useTranslations("Index");

  return (
    <main className="w-full relative">
      <HomeBanner />

      {/* ตัวอย่างการใช้ redux */}
      {/* <h1>
        {theme}" "{benz}
      </h1>
      <button
        onClick={() =>
          dispatch(onThemeChange(theme === "light" ? "dark" : "light"))
        }
      >
        click
      </button>

      <h1>
        name: {name} <br /> surname: {surname} <br /> age: {age} <br /> baby :{" "}
        {baby.map((babyName, i) => (
          <span key={i}>{babyName}</span>
        ))}
      </h1>
      <div className="flex gap-10">
        <button
          onClick={() =>
            dispatch(onNameChange({ name: "sd", surname: "asdasd" }))
          }
        >
          Click Name + Surname
        </button>
        <button onClick={() => dispatch(onAgeChange("10"))}>Click Age</button>
        <button onClick={() => dispatch(onAddBaby("B"))}>Click Add Baby</button>
        <button onClick={() => dispatch(killingBaby("A"))}>
          Click kill Baby
        </button>
      </div> */}

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
        <Subscribe />
      </section>
    </main>
  );
}
