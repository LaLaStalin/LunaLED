"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DropdownLocale from "../dropdown/dropdownLocale";

const NavbarContact = () => {
  const [theme, setTheme] = useState("light");

  // set heme
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    console.log("ff: ", theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="w-full bg-paperLight dark:bg-paperDark z-[12] px-[40px] py-[16px]">
        <div className="h-full flex flex-col justify-center ">
          <nav
            className="bg-pink-400 
                flex justify-between items-center"
          >
            {/* Contact Side */}
            <div className="flex gap-[24px]">
              <Link href="/" className="flex items-center gap-[8px] text-md ">
                <Icon
                  icon="ri:phone-fill"
                  className="text-xl -rotate-90 text-Primary-mainLight dark:text-Primary-mainDark"
                />
                +9268-1338
              </Link>
              <Link href="/" className="flex items-center gap-[8px] text-md">
                <Icon
                  icon="ic:round-email"
                  className="text-xl text-Primary-mainLight dark:text-Primary-mainDark"
                />
                lunaledth@gmail.com
              </Link>
              <Link href="/" className="flex items-center gap-[8px] text-md">
                <Icon
                  icon="ri:line-fill"
                  className="text-[28px] text-Primary-mainLight dark:text-Primary-mainDark"
                />
                @lunaled
              </Link>
            </div>

            {/* Social Side */}
            <div className="flex items-center gap-[24px]">
              <TextField
                id="outlined-basic"
                label="search"
                variant="outlined"
                InputProps={{
                  inputProps: {
                    className: "bg-[#fff] h-[10px] text-sm rounded",
                  },
                }}
              />

              <div className="flex justify-center items-center ">
                <Link href="/">
                  <IconButton color="primary">
                    <Image
                      src="/assets/socials/lazada.png"
                      alt="lazada"
                      width={26}
                      height={26}
                      className="rounded-[4px]"
                    />
                  </IconButton>
                </Link>
                <Link href="/">
                  <IconButton color="primary">
                    <Image
                      src="/assets/socials/shopee.png"
                      alt="shopee"
                      width={26}
                      height={26}
                      className="rounded-[4px]"
                    />
                  </IconButton>
                </Link>
                <Link href="/">
                  <IconButton color="primary">
                    <Image
                      src="/assets/socials/tiktok.png"
                      alt="tiktok"
                      width={26}
                      height={26}
                      className="rounded-[4px]"
                    />
                  </IconButton>
                </Link>

                <Link href="/">
                  <IconButton color="primary">
                    <Image
                      src="/assets/socials/facebook.png"
                      alt="facebook"
                      width={26}
                      height={26}
                      className="rounded-[4px]"
                    />
                  </IconButton>
                </Link>

                {/* EN */}
                <div>
                  <DropdownLocale defaultValue="EN" menuList={["EN", "TH"]} />
                </div>

                {/* Theme */}
                <IconButton color="primary" onClick={handleThemeSwitch}>
                  <div>Dark</div>
                </IconButton>
              </div>
            </div>
          </nav>
          <hr className="mt-[8px] text-dividerLight dark:text-dividerDark" />
        </div>
      </header>
    </>
  );
};

export default NavbarContact;
