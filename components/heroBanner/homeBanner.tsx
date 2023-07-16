"use client";

import { useThemeContext } from "@/context/theme";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomeBanner = () => {
  const { theme }: any = useThemeContext();

  return (
    <section className="w-full h-[739px] bg-paperLight dark:bg-paperDark] relative">
      {/* Video Banner */}
      {theme === "light" ? (
        <div className="absolute top-0 w-full h-full overflow-hidden z-1">
          <video
            autoPlay
            loop
            muted
            key={theme}
            className="w-full h-full object-cover"
          >
            <source src={"/assets/banner/bg-HomeBennerLight.mp4"} />
          </video>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full overflow-hidden z-1">
          <video
            autoPlay
            loop
            muted
            key={theme}
            className="w-full h-full object-cover"
          >
            <source src={"/assets/banner/bg-HomeBennerDark.mp4"} />{" "}
          </video>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col items-center gap-[24px] h-full pt-[109px]">
        <h1 className="text-[78px] font-bold uppercase tracking-[-1.5px] z-10">
          best spotlight led for you
        </h1>
        <p className="text-center z-10 ">
          Lorem ipsum dolor sit amet consectetur. Adipiscing sed cursus odio
          velit et faucibus lacus ante montes. Nunc adipiscing turpis congue
          <br />
          sednon ut. Ornare nunc feugiat feugiat mauris cum.
        </p>

        {/* BTN Shop */}
        <Button
          size="large"
          variant="outlined"
          href="/"
          className="font-semibold"
        >
          Shop now
        </Button>

        {/* mini Card */}
        <div className="w-[60%] flex justify-end z-10">
          <div className="w-[fit-content]">
            <div
              className="flex rounded-[4px] gap-[4px] 
          bg-paperLight shadow-lg shadow-[#9ca3af] pr-[24px]
          "
            >
              <Image
                src="/assets/product/cob-circlr-100w.png"
                alt="cob-circlr-100w"
                width={100}
                height={71}
                className="ml-[-50px]"
              />
              <div className="flex items-center flex-col justify-center ">
                <p className="text-[14px] font-medium leading-[18.676px]">
                  COB CIRCLE 100w
                </p>
                <div className="flex text-left gap-1 w-full">
                  <p className="text-[12px] text-Primary-mainLight">฿1,399</p>
                  <p className="line-through text-[12px] text-rgba(0, 0, 0, 1)">
                    ฿6,399
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/assets/product/cob-circlr-100w.png"
          alt="cob-circlr-100w"
          width={0}
          height={0}
          style={{ width: "auto", height: "100%" }}
          objectFit="cover"
          unoptimized
          className="z-10 mt-[-15px]"
        />
      </div>
    </section>
  );
};

export default HomeBanner;
