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
    <div className="fixed z-10 w-full flex items-center dark:bg-white bg-headerBGLight">
      <div className="flex-1">
        {theme === "light" ? (
          <img src={logoIcon} alt="logo" className="my-5 ml-24 h-[35px]" />
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
        className="text-fontButtonPink font-bold text-base bg-buttonBg py-4 px-3 rounded-[13px]"
      >
        Contact us
      </button>

      <Button onClick={handleTheme}>
        <img src={sunIcon} alt="logo" className="mx-6" />
      </Button>

      <NotificationsNoneIcon className="mr-6 text-white dark:text-black" />

      <Avatar
        src="https://assets-prd.ignimgs.com/2022/09/20/iron-man-motive-button-1663693168356.jpg"
        sx={{ width: "64px", height: "64px" }}
        className="mr-12"
      />
    </div>
  );
}
