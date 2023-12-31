"use client";

import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { DropdownLocaleType } from "@/type";
import Link from "next/link";

const DropdownMenu = ({ defaultValue, menuList }: DropdownLocaleType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (menu: string | number) => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className="text-text-primaryLight dark:text-text-primaryDark"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {defaultValue}
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
          <MenuItem key={index} onClick={() => handleClose(menu)}>
            <Link
              href={`/pages/${menu
                .toString()
                .toLowerCase()
                .split(" ")
                .join("")}`}
            >
              {menu}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
