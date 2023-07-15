import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import Link from "next-intl/link";
import { DropdownLocaleType } from "@/type";

const DropdownLocale = ({ defaultValue, menuList }: DropdownLocaleType) => {
  const [currentLang, setCurrentLang] = useState<string | number>(defaultValue);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const currentLangFromStorage = localStorage.getItem("lang");
    if (currentLangFromStorage) {
      setCurrentLang(currentLangFromStorage);
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang: string | number) => {
    if (typeof lang === "string") {
      setCurrentLang(lang);
      localStorage.setItem("lang", lang);
    }

    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {currentLang}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuList.map((menu, index) => (
          <Link key={index} href="/" locale={menu.toString().toLowerCase()}>
            <MenuItem onClick={() => handleClose(menu)}>{menu}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default DropdownLocale;
