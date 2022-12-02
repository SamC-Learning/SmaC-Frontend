import React from 'react'

export default function Assignments() {
  const menuOptions = [];

  return (
    <div className="bg-backGround pt-24 w-full">
      <p className="text-white font-semibold text-5xl mb-4">Assignments</p>
      <div className="flex gap-7 w-full">
        <div className="bg-docsSideBar px-4 py-6 rounded-3xl">
          {menuOptions.map((option, index) => (
            <div
              key={index}
              className="bg-docOptions py-4 px-16 rounded-2xl mb-4 text-white text-xl font-bold"
            >
              {option}
            </div>
          ))}
        </div>
        <div className="flex-1 bg-docOptions rounded-3xl mt-3 p-10 mr-14">
{[...Array(8)].map(item=><div key={item} className="rounded-full bg-docSkeleton h-10 w-1/2 mb-5"/>)}
        </div>
      </div>
    </div>
  );
}
