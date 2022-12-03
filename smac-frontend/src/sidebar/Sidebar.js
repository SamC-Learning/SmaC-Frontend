import React, { useState } from "react";

import { Link } from "react-router-dom";

import cx from "classnames";

import dashboard from "../icons/dashboard.svg";
import classroom from "../icons/classroom.svg";
import messages from "../icons/messages.svg";
import docs from "../icons/docs.svg";
import assignments from "../icons/assignments.svg";
import smactab from "../icons/smactab.svg";

export default function Sidebar() {
  const sideBarMenuOption = [
    { title: "dashboard", Icon: dashboard },
    { title: "classroom", Icon: classroom },
    { title: "messages", Icon: messages },
    { title: "docs", Icon: docs },
    { title: "assignments", Icon: assignments },
    { title: "smactab", Icon: smactab },
  ];

  const [menuOption, setMenuOption] = useState("dashboard");

  const handleOptionChange = (option) => setMenuOption(option);

  return (
    <div className="min-h-screen flex flex-wrap items-center bg-backGround dark:bg-white pr-10">
      <div className="bg-headerBGLight py-8 flex flex-col space-y-6 rounded-tr-lg rounded-br-lg">
        {sideBarMenuOption.map(({ title, Icon }) => (
          <Link to={title}>
            <button
              className={cx(
                "hover:bg-backGround mx-3.5 p-3 rounded-md",
                menuOption === title && "bg-docSkeleton"
              )}
              onClick={() => handleOptionChange(title)}
            >
              <img src={Icon} alt="logo" />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
