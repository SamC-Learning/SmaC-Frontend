import React, { useContext } from "react";

import { ThemeContext } from "../theme/themeContext";

import { Button } from "@material-ui/core";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import logoIcon from "../icons/logo.svg";
import sunIcon from "../icons/sun.svg";
import logoInLightIcon from "../icons/logoInLightMode.svg";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <div className="flex items-center dark:bg-white bg-headerBGLight">
      <div className="flex-1">
        {theme === "light" ? (
          <img src={logoIcon} alt="logo" className="my-5 ml-24 h-[30px]" />
        ) : (
          <img
            src={logoInLightIcon}
            alt="logo"
            className="my-5 ml-24 h-[35px]"
          />
        )}
      </div>

      <button
        style={{ textTransform: "none" }}
        className="text-fontButtonPink font-normal text-sm bg-buttonBg py-3 px-3 rounded-[10px]"
      >
        Contact Admin
      </button>

      <Button onClick={handleTheme}>
        <img src={sunIcon} alt="logo" className="mx-6" />
      </Button>

      <NotificationsNoneIcon className="mr-6 text-white dark:text-black" />

      <Avatar
        src="https://assets-prd.ignimgs.com/2022/09/20/iron-man-motive-button-1663693168356.jpg"
        sx={{ width: "48px", height: "48px" }}
        className="mr-12"
      />
    </div>
  );
}
