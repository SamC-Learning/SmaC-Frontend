import React from "react";

// import { Container } from "@material-ui/core";

import { classRoomData } from "../store/classRoomDummyData";

import { renderClassRoomIcon } from "../icons/classRoomIcon";


export default function ClassRooms() {

  const renderCard = ({ Icon, subjectName, facultyName, timings }) => (
    <div className="border-border border-2 mr-12 rounded-3xl py-5 pl-7 pr-16">
      {renderClassRoomIcon(Icon)}
      <p className="font-semibold text-lg text-white mt-4">{subjectName}</p>
      <p className="font-semibold text-xs text-white">{facultyName}</p>
      <p className="font-semibold text-xs text-white mt-3">{timings}</p>
    </div>
  );

  const renderSections = (section) => {
    const { title, sectionData } = section;
    return (
      <div className="">
        <p className="font-bold text-3xl text-white mb-5">{title}</p>
        <div className="flex items-center mb-5">
          {sectionData.map((item) => renderCard(item))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-backGround w-full pt-10">
      <p className="font-semibold text-5xl text-white py-16">ClassRooms</p>
      {classRoomData.map((item) => renderSections(item))}
      <div className="w-full h-9" />
    </div>
  );
}
