import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "@mui/material/Button";
import DropdownMenu from "../dropdown/dropdownMenu";

const Navbar = () => {
  const t = useTranslations("Index");

  return (
    <>
      <header className="w-full bg-paperLight dark:bg-paperDark px-[40px] pb-[16px]">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-[8px]">
            <Image
              src="/assets/socials/luna.png"
              alt="luna"
              width={47}
              height={54}
              className="rounded-[4px]"
            />
            <label className="text-[20px] font-medium">Luna LED</label>
          </div>

          {/* Menu */}
          <div className="flex items-center gap-[8px]">
            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              Home
            </Button>
            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              Services
            </Button>
            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              Shop
            </Button>
            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              Gallery
            </Button>
            <DropdownMenu defaultValue="PAGE" menuList={["About us", "News"]} />

            <Button className="text-text-primaryLight dark:text-text-primaryDark">
              Contacts
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
