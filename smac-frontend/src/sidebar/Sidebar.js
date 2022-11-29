import React from "react";
import dashboard from "../icons/dashboard.svg";
import classroom from "../icons/classroom.svg";
import messages from "../icons/messages.svg";
import docs from "../icons/docs.svg";
import assignments from "../icons/assignments.svg";
import smactab from "../icons/smactab.svg";
// import { ThemeContext } from "../theme/themeContext";

export default function Sidebar() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   const handleTheme = () =>
//     theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <div className="min-h-screen flex flex-wrap items-center bg-backGround dark:bg-white pr-10">
        <div className="bg-headerBGLight py-8 flex flex-col space-y-6 rounded-tr-lg rounded-br-lg">
            <button className="hover:bg-backGround  mx-3.5 p-1 rounded-md">
            <img src={dashboard} alt="logo" />
            </button>
            <button className="hover:bg-backGround  mx-3.5 p-1 rounded-md">
            <img src={classroom} alt="logo"/>
            </button>
            <button className="hover:bg-backGround  mx-3.5 p-1 rounded-md">
            <img src={messages} alt="logo"/>
            </button>
            <button className="hover:bg-backGround  mx-3.5 p-1 rounded-md">
            <img src={docs} alt="logo"/>
            </button>
            <button className="hover:bg-backGround  mx-3.5 p-1 rounded-md">
            <img src={assignments} alt="logo"/>
            </button>
            <button className="hover:bg-backGround  mx-3.5 p-1 rounded-md">
            <img src={smactab} alt="logo" />
            </button>
        </div>
    </div>
  );
}
