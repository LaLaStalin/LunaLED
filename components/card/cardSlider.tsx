"use client";

import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { infoCardSlider } from "../../constant";
import { InfoCardSliderType } from "@/type";
import useMediaQuery from "@mui/material/useMediaQuery";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CardSlider = () => {
  const matchesMD = useMediaQuery("(max-width:990px)");
  const matchesSM = useMediaQuery("(max-width:770px)");

  return (
    <main className="px-[80px]">
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={16}
        slidesPerView={matchesMD ? (matchesSM ? 1 : 2) : 3}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{ dynamicBullets: true }}
        className="w-full "
      >
        {infoCardSlider.map((product: InfoCardSliderType, index) => (
          <SwiperSlide key={index}>
            <Paper
              className="flex h-[216px] rounded-[8px] overflow-hidden my-[32px] mx-[16px] bg-paperLight dark:bg-paperDark"
              elevation={8}
            >
              <div className="flex flex-col justify-between items-start pt-[52px] pb-[28px] pl-[40px] h-full">
                <h1 className=" uppercase font-bold w-[172px] text-[30px] leading-[35.01px] tracking-[-1.5px] text-text-primaryLight dark:text-text-primaryDark">
                  {product.name}
                </h1>
                <Button variant="outlined" size="medium">
                  SHOP NOW
                </Button>
              </div>
              <Image
                className="pt-[20px] ml-[-16px] mb-[-10px]"
                src={product.imgSource}
                alt={product.name}
                width={200}
                height={0}
                objectFit="cover"
                loading="lazy"
              />
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default CardSlider;
