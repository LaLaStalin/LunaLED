"use client";

import { useThemeContext } from "@/context/theme";
import Button from "@mui/material/Button";
import Image from "next/image";
import Video from "../video";
import Paper from "@mui/material/Paper";
import InputSelect from "../input/inputSelect";

const HomeBanner = () => {
  const { theme }: any = useThemeContext();

  return (
    <>
      <section className="w-full  bg-paperLight dark:bg-paperDark] relative">
        {/* Video Banner */}
        {theme === "light" ? (
          <div className="absolute top-0 w-full h-full overflow-hidden z-1">
            <Video
              keyValue={theme}
              srcVideo="/assets/banner/bg-HomeBennerLight.mp4"
            />
          </div>
        ) : (
          <div className="absolute top-0 w-full h-full overflow-hidden z-1">
            <Video
              keyValue={theme}
              srcVideo="/assets/banner/bg-HomeBennerDark.mp4"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col items-center gap-[24px] h-full pt-[109px]">
          <h1 className="text-[78px] font-bold uppercase tracking-[-1.5px] z-10">
            best spotlight led for you
          </h1>
          <p className="text-center z-10 text-text-secondaryLight dark:text-text-secondaryDark">
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
          <div className="w-[60%] flex justify-end z-10 ">
            <div className="w-[fit-content] ">
              <div
                className="flex rounded-[4px] gap-[4px] 
              bg-paperLight dark:bg-paperDark shadow-lg shadow-[#9ca3af] dark:shadow-[#1f2937] pr-[24px]
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
                  <p className="text-[14px]  font-medium leading-[18.676px]">
                    COB CIRCLE 100w
                  </p>
                  <div className="flex items-center text-left gap-1 w-full">
                    <p className="text-[24px] font-medium text-Primary-mainLight">
                      ฿1,399
                    </p>
                    <p className="line-through  font-medium text-[14px] text-[#000] dark:text-[#fff] opacity-30	">
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

      {/* Card Fin */}
      <section className="max-w-[1280px] mx-auto flex flex-col w-full items-center justify-center gap-[80px] ">
        <Paper
          elevation={8}
          className="flex flex-col items-center justify-center gap-[32px] py-[60px] px-[95px] z-50 rounded-[8px] mt-[-80px] "
        >
          <h1 className="uppercase text-[40px] font-bold">
            fins the spotlight led
          </h1>
          <div className="flex gap-[32px] flex-col md:flex-row">
            <InputSelect
              defaultValue="COB Circle"
              menuList={["COB Circle", "COB King", "Hight Bay"]}
            />
            <InputSelect
              defaultValue="COB Circle"
              menuList={["COB Circle", "COB King", "Hight Bay"]}
            />{" "}
            <InputSelect
              defaultValue="COB Circle"
              menuList={["COB Circle", "COB King", "Hight Bay"]}
            />{" "}
            <Button
              variant="contained"
              size="medium"
              className="bg-Primary-mainLight w-[141px]"
            >
              search
            </Button>
          </div>
        </Paper>
      </section>
    </>
  );
};

export default HomeBanner;
