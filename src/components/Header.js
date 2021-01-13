import React from "react";
import "../styles/Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Apps, ArrowDropDown, Search } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="http://1000logos.net/wp-content/uploads/2018/04/Gmail-logo-color.jpg"
          alt="img"
        />
      </div>

      <div className="header__middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
