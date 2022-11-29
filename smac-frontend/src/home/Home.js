import React from "react";

// import ReactStickies from 'react-stickies';
import ReactStickyNotes from "@react-latest-ui/react-sticky-notes";
import Calender from "../calender/Calender";
import moretab from "../icons/moretab.svg";
// import Chart from "react-apexcharts";

// import ApexCharts from "apexcharts";

// const activitydata = [
//   {
//     options: {
//       chart: {
//         id: "basic-bar",
//       },
//       xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
//       },
//     },
//     series: [
//       {
//         name: "series-1",
//         data: [30, 40, 45, 50, 49, 60, 70, 91],
//       },
//     ],
//   },
// ];

export default function Home() {
  const Activity = () => {
    return (
      <div className="w-2/3">
        <div className="flex">
          <p className="font-semibold text-xl text-white mb-5">Activity</p>
          <button className="mb-3">
            <img src={moretab} alt="logo" />
          </button>
        </div>

        {/* <Chart
          options={activitydata.options}
          series={activitydata.series}
          type="line"
          width="500"
        /> */}
      </div>
    );
  };

  const Statistics = () => {
    return (
      <div>
        <p className="font-semibold text-xl text-white mb-5">Statistics</p>
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
