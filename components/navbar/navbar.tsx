"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "@mui/material/Button";
import DropdownMenu from "../dropdown/dropdownMenu";
import Link from "next/link";

const Navbar = () => {
  const transla = useTranslations("Index");

  return (
    <>
      <header className="w-full bg-paperLight dark:bg-paperDark px-[24px] pb-[16px]">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-[8px] ">
              <Image
                src="/assets/socials/luna.png"
                alt="luna"
                width={47}
                height={54}
                className="rounded-[4px]"
              />
              <label className="text-[20px] font-medium">Luna LED</label>
            </div>
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-[8px] sm:hidden ">
            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              <Link href="/">Home</Link>
            </Button>
            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              <Link href="/pages/service">{transla("titleService")}</Link>
            </Button>
            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              <Link href="/pages/shop">Shop</Link>
            </Button>
            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              <Link href="/pages/gallery">Gallery</Link>
            </Button>
            <DropdownMenu defaultValue="PAGE" menuList={["About us", "News"]} />
            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              <Link href="/pages/contacts">Contacts</Link>
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
