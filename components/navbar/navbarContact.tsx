"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DropdownLocale from "../dropdown/dropdownLocale";
import { useThemeContext } from "@/context/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import InputSearch from "../input/inputSearch";
import { socials, socialsNav } from "@/constant";
import { useMediaQuery } from "@mui/material";
import Sidebar from "../sidebar/sidebar";

const NavbarContact = () => {
  const { theme, setTheme }: any = useThemeContext();

  const matchesMD = useMediaQuery("(max-width:990px)");

  // set Theme Tailwind
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
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="w-full bg-paperLight dark:bg-paperDark z-[12] px-[24px] py-[16px]">
        <div className="h-full flex flex-col justify-center ">
          <nav
            className="bg-pink-400 
                flex justify-between items-center"
          >
            {/* Contact Side */}
            <div className="flex gap-[24px] md:hidden">
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
            <div className="flex items-center gap-[24px] md:pr-[40px]">
              <div className="md:hidden">
                <InputSearch></InputSearch>
              </div>

              <div className="flex justify-center items-center ">
                {socialsNav.map((social) => (
                  <Link href={social.link} className="md:hidden">
                    <IconButton color="primary">
                      <Image
                        src={social.img}
                        alt={social.name}
                        width={26}
                        height={26}
                        className="rounded-[4px]"
                      />
                    </IconButton>
                  </Link>
                ))}

                {/* EN */}
                <div className="text-text-primaryLight">
                  <DropdownLocale defaultValue="EN" menuList={["EN", "TH"]} />
                </div>

                {/* Theme */}
                <IconButton
                  onClick={handleThemeSwitch}
                  color="inherit"
                  className="opacity-80"
                >
                  {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </div>
            </div>
          </nav>
          <hr className=" mt-[8px] text-dividerLight dark:text-dividerDark opacity-10" />
        </div>
      </header>
      {matchesMD && <Sidebar />}
    </>
  );
};

export default NavbarContact;
