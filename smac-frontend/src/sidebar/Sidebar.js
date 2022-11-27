import React, { useContext } from "react";

import { ThemeContext } from "../theme/themeContext";

import { Button } from "@material-ui/core";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import logoIcon from "../icons/logo.svg";
import sunIcon from "../icons/sun.svg";
import logoInLightIcon from "../icons/logoInLightMode.svg";

export default function Sidebar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <div className="flex items-center dark:bg-white bg-headerBGLight">
      <div className="flex-1"></div>
    </div>
  );
}
