import React from "react";

import { Button } from "@material-ui/core";

import AttachIcon from "../icons/attachIcon.svg";

const filterMenuOptions = ["All", "Assigned", "Completed", "Due"];

export default function Assignments() {
  // option came from Backend
  const subjectOption = ["Devops", "ElectricCircuits", "EMFT", "Aids"];

  const valueStreamsOption = ["Value Streams"];

  return (
    <div className="bg-backGround pt-24 w-full">
      <p className="text-white font-semibold text-5xl mb-4">Assignments</p>
      <div className="flex gap-3 w-full">
        <div className="px-4 py-6 flex flex-col rounded-3xl">
          {filterMenuOptions.map((option, index) => (
            <button
              key={index}
              className="bg-docsSideBar py-4 px-6 rounded-2xl mb-4 text-white text-base font-bold"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="bg-docSkeleton px-4 py-6 rounded-3xl">
          {subjectOption.map((option, index) => (
            <div
              key={index}
              className="bg-docOptions py-4 px-6 rounded-2xl mb-4 text-white text-base font-bold"
            >
              {option}
            </div>
          ))}
        </div>
        <div className="bg-docSkeleton px-4 py-6 rounded-3xl">
          {valueStreamsOption.map((option, index) => (
            <div
              key={index}
              className="bg-docOptions py-4 px-6 rounded-2xl mb-4 text-white text-base font-bold"
            >
              {option}
            </div>
          ))}
        </div>
        {/* from backend */}
        <div className="flex-1 bg-docOptions rounded-3xl mt-3 p-10 mr-14">
          <div className="w-full rounded-3xl p-7 text-white font-semibold text-xl bg-docSkeleton h-60">
            <p>Questions</p>
            <p>Description.....</p>
          </div>
          <input
            className="bg-docSkeleton w-full p-7 rounded-3xl placeholder:text-white text-white mt-3"
            placeholder="Answer Description"
          />
          <Button
            style={{
              backgroundColor: "#454545",
              color: "white",
              marginTop: "24px",
              borderRadius: "30px",
              textTransform: "none",
              width: "245px",
              textAlign: "left",
            }}
            // endIcon={<AttachIcon/>}
          >
            Attachment
          </Button>
          <div className="flex gap-10 mt-4">
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                marginTop: "24px",
                borderRadius: "15px",
                textTransform: "none",
                textAlign: "left",
                padding:"8px 40px 8px 40px"
              }}
            >Hand-In</Button>
            <Button
              style={{
                backgroundColor: "#454545",
                color: "white",
                marginTop: "24px",
                borderRadius: "15px",
                textTransform: "none",
                textAlign: "left",
                padding:"8px 40px 8px 40px"
              }}
            >Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
