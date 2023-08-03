"use client";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Icon } from "@iconify/react";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { socials, infoFooter, shopFooter } from "../../constant";

const footer = () => {
  return (
    <footer className="flex px-[140px] pt-[80px] pb-[32px] gap-[75px] md:px-[80px]">
      <div className="grid grid-cols-2  w-full gap-[40px] md:grid-cols-1">
        {/* section left */}
        <section className="flex flex-col gap-[170px] md:gap-[40px]">
          {/* SUBSCRIBE */}
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[16px] font-semibold  tracking-wider">
              SUBSCRIBE
            </h1>
            <p className="text-[18pxs] tracking-tight">
              Subscribe us and you won't miss the new arrivals, as well as
              discounts and sales.
            </p>
            <span className="flex gap-[16px] ">
              <TextField
                id="outlined-basic"
                size="small"
                label="E-maill"
                variant="outlined"
                className="w-full"
              />
              <Button
                variant="contained"
                size="medium"
                className="bg-Primary-mainLight w-[141px] dark:text-[#fff]"
              >
                Send
              </Button>
            </span>
          </div>
          {/* STAY IN TOUCH */}
          <div>
            <h1 className="text-[16px] font-semibold tracking-wider">
              STAY IN TOUCH
            </h1>

            <span className="flex gap-[8px]">
              {socials.map((items, index) => (
                <IconButton key={index} size="medium">
                  <Icon
                    color={items.color}
                    icon={items.icon}
                    className={` opacity-30 hover:opacity-100`}
                  />
                </IconButton>
              ))}

              <IconButton>
                <Image
                  src="/assets/socials/lazada-en.png"
                  alt="lazada"
                  width={30}
                  height={24.13}
                  objectFit="cover"
                  className="opacity-30 hover:opacity-100"
                />
              </IconButton>
            </span>
            <span className="flex gap-[8px]">
              <p className="text-text-[#0000] opacity-30 dark:text-[#fff] tracking-tight">
                Questions? Please write us at:{" "}
              </p>
              <a
                href="mailto: lunaled@gmail.com"
                className="underline underline-offset-2 text-text-secondaryLight dark:text-text-secondaryDark"
              >
                lunaled@gmail.com
              </a>
            </span>
          </div>
        </section>

        {/* section Right */}
        <section className="flex flex-col items-end gap-[40px] md:items-start">
          {/* INFO */}
          <span className="flex flex-col gap-[16px] ">
            <h1 className="text-[16px] font-semibold tracking-wider">INFO</h1>
            <span className="grid grid-rows-4 grid-flow-col  gap-x-[40px] gap-y-[16px] ">
              {infoFooter.map((info, index) => (
                <button
                  key={index}
                  className="w-[170px]  text-[18px] text-text-secondaryLight dark:text-text-secondaryDark hover:text-Primary-mainLight text-start dark:hover:text-Primary-mainLight"
                >
                  {info.name}
                </button>
              ))}
            </span>
          </span>
          {/* SHOP */}
          <span className="flex flex-col gap-[16px] ">
            <h1 className="text-[16px] font-semibold tracking-wider">SHOP</h1>
            <span className="grid grid-rows-4 grid-flow-col gap-x-[40px] gap-y-[16px]">
              {shopFooter.map((shop, index) => (
                <button
                  key={index}
                  className="w-[170px] text-[18px] text-text-secondaryLight dark:text-text-secondaryDark hover:text-Primary-mainLight text-start dark:hover:text-Primary-mainLight"
                >
                  {shop.name}
                </button>
              ))}
            </span>
          </span>
        </section>
      </div>

      <div>
        <hr className="w-1" />
      </div>
    </footer>
  );
};

export default footer;
