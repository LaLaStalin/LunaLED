import React from "react";
import { useTranslations } from "next-intl";
import InputSearch from "../input/inputSearch";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// icon
import HomeIcon from "@mui/icons-material/Home";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CollectionsIcon from "@mui/icons-material/Collections";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GradeIcon from "@mui/icons-material/Grade";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const transla = useTranslations("Index");

  return (
    <nav className="menu-sidebar  ">
      <ul>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <li className="pb-2 ">
            <InputSearch />
          </li>
          <li>
            {/* Home */}
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </li>

          <li>
            {/* Service */}
            <ListItemButton>
              <ListItemIcon>
                <SupportAgentIcon />
              </ListItemIcon>
              <ListItemText primary="Service" />
            </ListItemButton>
          </li>

          <li>
            {/* Shop */}
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </ListItemButton>
          </li>
          <li>
            {/* Gallery */}
            <ListItemButton>
              <ListItemIcon>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </ListItemButton>
          </li>

          <li>
            {/* Page */}
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Page" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PeopleAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="About us" />
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <GradeIcon />
                  </ListItemIcon>
                  <ListItemText primary="News" />
                </ListItemButton>
              </List>
            </Collapse>
          </li>
          <li>
            {/* Contacts */}
            <ListItemButton>
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </li>

          {/* Contact */}
          <div className=" pt-10">
            <ListSubheader> 092-638-1338</ListSubheader>
            <ListSubheader> lunaledth@gmail.com</ListSubheader>
            <ListSubheader>line: @lunaled</ListSubheader>
          </div>
        </List>
      </ul>
    </nav>
  );
}
