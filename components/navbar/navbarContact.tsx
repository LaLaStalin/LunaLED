"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const NavbarContact = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
      <header className="w-full bg-paperLight dark:bg-paperDark z-[12] px-[40px] h-[80px]">
        <nav
          className="bg-pink-400 
                flex justify-between items-center h-full"
        >
          {/* Contact Side */}
          <div className="flex gap-[24px]">
            <Link
              href="/"
              className="flex items-center gap-[8px] text-md bg-text-primaryLight"
            >
              <Icon icon="ri:phone-fill" className="text-xl -rotate-90" />
              +9268-1338
            </Link>
            <Link href="/" className="flex items-center gap-[8px] text-md">
              <Icon icon="ic:round-email" className="text-xl" />
              lunaledth@gmail.com
            </Link>
            <Link href="/" className="flex items-center gap-[8px] text-md">
              <Icon icon="ri:line-fill" className="text-xl" />
              @lunaled
            </Link>
          </div>
          {/* Social Side */}
          <div className="flex gap-[24px]">
            <Box
              component="form"
              sx={{
                width: 220,
                "& .MuiInputBase-root": {
                  height: 40,
                  paddingTop: 2,
                  paddingBottom: 2,
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>

            <div className="flex justify-center items-center gap-[16px]">
              <Link href="/">
                <Icon icon="entypo-social:facebook" className="text-xl" />
              </Link>
              <Link href="/">
                <Icon icon="entypo-social:facebook" className="text-xl" />
              </Link>
              <Link href="/">
                <Icon icon="entypo-social:facebook" className="text-xl" />
              </Link>
              <Link href="/">
                <Icon icon="entypo-social:facebook" className="text-xl" />
              </Link>
              <button>EN</button>
              <button onClick={handleThemeSwitch}>Dark</button>{" "}
            </div>
          </div>
        </nav>
        <hr className="mt-[-8px] text-dividerLight dark:text-dividerDark" />
      </header>
    </>
  );
};

export default NavbarContact;
