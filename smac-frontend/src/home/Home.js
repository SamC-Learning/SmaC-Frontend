import React from "react";

// import ReactStickies from 'react-stickies';
import ReactStickyNotes from "@react-latest-ui/react-sticky-notes";
import Calender from "../calender/Calender";
import moretab from "../icons/moretab.svg";

import classes from "../icons/class.svg";
import disabled from "../icons/disabled.svg";
import assignyellow from "../icons/assignyellow.svg";

import ActivityChart from "../activitychart/ActivityChart";

export default function Home() {
  const Activity = () => {
    return (
      <div className="w-2/3">
        <div className="flex relative">
          <p className="font-semibold text-xl text-white mb-5">Activity</p>
          <button className="mt-2 absolute -right-36">
            <img src={moretab} alt="logo" />
          </button>
        </div>
        <ActivityChart />
      </div>
    );
  };

  const Statistics = () => {
    return (
      <div>
        <div className="flex relative">
          <p className="font-semibold text-xl text-white mb-5">Statistics</p>
          <button className="mt-2 absolute right-36">
            <img src={moretab} alt="logo" />
          </button>
        </div>
        <div className="flex">
          <div className="shadow-md mr-12 rounded-3xl bg-headerBGLight py-5 pl-7 w-1/4 pr-20">
          <img src={classes} alt="logo"/>
            <p className="font-semibold text-base text-white mt-2 mb-2">72</p>
            <p className="font-semibold text-xs text-cardText">Total Classes</p>
            <p className="font-semibold text-xs text-green-600 mt-3">
              12 <span className="text-cardText ml-3">Last Week</span>
            </p>
          </div>
          <div className="bg-headerBGLight mr-12 rounded-3xl py-5 pl-7 w-1/4 pr-20">
          <img src={disabled} alt="logo"/>
            <p className="font-semibold text-base text-white mt-2 mb-2">72</p>
            <p className="font-semibold text-xs text-cardText">Total times disabled</p>
            <p className="font-semibold text-xs text-purple-500 mt-3">
              12 <span className="text-cardText ml-3">Last Week</span>
            </p>
          </div>
          <div className="bg-headerBGLight mr-12 rounded-3xl py-5 pl-7 w-1/4 pr-20">
          <img src={assignyellow} alt="logo"/>
            <p className="font-semibold text-base text-white mt-2 mb-2">72</p>
            <p className="font-semibold text-xs text-cardText">Assignments</p>
            <p className="font-semibold text-xs text-yellow-500 mt-3">
              12 <span className="text-cardText ml-3">Last Week</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Calendertab = () => {
    return (
      <div>
        <p className="font-semibold text-xl text-white mb-5">Calender</p>
        <Calender />
      </div>
    );
  };

  const Notes = () => {
    return (
      <div>
        <p className="font-semibold text-xl text-white mb-5">Notes</p>
        <ReactStickyNotes
          backgroundColor="#fefefe"
          useCSS={true}
          //   containerHeight={"280px"}
        />
        {/* <ReactStickies /> */}
      </div>
    );
  };

  return (
    <div className="bg-backGround w-full max-h-screen pt-10">
      <p className="font-medium text-2xl text-white pt-14 pl-10 pb-4">
        Welcome, Rishi
      </p>
      <div className="flex bg-backGround">
        <div className="flex-1 pl-10 pt-6">
          <div className="">{Activity()}</div>
          <div>{Statistics()}</div>
        </div>
        <div className="w-1/3 pt-6 pr-6">
          <div>{Calendertab()}</div>
          <div className="">{Notes()}</div>
        </div>
      </div>
    </div>
  );
}
