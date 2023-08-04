"use client";

import { Button, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from "next/image";
import { Icon } from "@iconify/react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const subscribe = () => {
  return (
    <div
      className="w-full bg-cover bg-center px-[16px] h-[540px] grid grid-cols-2 relative "
      style={{ backgroundImage: "url(/assets/banner/bg-Subscribe.png)" }}
    >
      <section className="flex flex-col gap-[24px] w-[400px] justify-center items-center">
        <h1 className="text-[50px] font-semibold text-text-primaryDark text-start w-full">
          SUBSCRIBE
        </h1>
        <p className="text-[18px] text-text-secondaryDark">
          Subscribe us and you won't miss the new arrivals, as well as discounts
          and sales.
        </p>
        <span className="flex gap-[16px] ">
          <ThemeProvider theme={darkTheme}>
            <TextField
              id="outlined-basic"
              size="small"
              label="E-maill"
              variant="outlined"
              className="w-full text-text-secondaryDark border-text-secondaryDark"
            />
          </ThemeProvider>
          <Button
            variant="contained"
            size="medium"
            className="bg-Primary-mainLight w-[141px] dark:text-[#fff]"
          >
            Send
          </Button>
        </span>
      </section>
      <section className="">
        <Icon
          className="absolute mt-[-30px]"
          icon="icomoon-free:cross"
          color="#1876F2"
          width={561}
          height={561}
        />
        <Image
          className=" absolute z-10 bottom-0"
          src="/assets/product/product-Subscribe.png"
          alt="cob-circlr-500w"
          width={620}
          height={0}
          objectFit="cover"
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default subscribe;
