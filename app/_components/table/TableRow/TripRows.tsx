import React from "react";
import { TripData } from "../../_data/data";
import { Divider } from "@mui/material";
import { MoreIcon } from "@/app/_assets/Icons";

type Props = {};

const TripRows = (props: Props) => {
  return (
    <div className="w-full h-[95%] flex flex-col gap-2 overflow-y-auto lg:p-2">
      {TripData.map((item) => (
        <>
          <div className="w-full h-fit lg:h-12 flex flex-col gap-2 lg:gap-0 lg:flex-row-reverse lg:items-center lg:rounded-none lg:shadow-none shadow-md shadow-grayText rounded-md sm:bg-white md:bg-white p-2 lg:p-0">
            <div className="fullSize lg:w-1/2 lg:flex-1 flex flex-row-reverse lg:items-center">
              <div className="lg:hidden flex-1 w-full text-right">{'کد سفر'}</div>
            <div className="flex-2 lg:w-full w-1/2 flex text-right lg:text-center gap-2 lg:gap-0">
                
              <div
              className={`w-2/3 lg:hidden text-center rounded-md ${
                item.status === "done" ? "bg-grayBackground" : "bg-powderBlue"
              }`}
            >
              {item.status}
            </div>

              <div className="w-1/3 lg:w-full lg:h-full sm:bg-grayBackground md:bg-grayBackground text-center rounded-md"> 

              {item.code}
              </div>
            </div>
            </div>

            <div className="fullSize flex lg:flex-2 flex-row-reverse items-center">
              <div className="lg:hidden flex-1 text-right">{"راننده"}</div>
              <div className="fullSize flex flex-row-reverse items-center flex-2 sm:bg-grayBackground md:bg-grayBackground px-2 lg:px-0 rounded-md">
                <div className="flex-1 text-right">{item.driver.name}</div>
                <div className="flex-1 text-center">{item.driver.phone}</div>
              </div>
            </div>

            <div className="fullSize flex lg:flex-2 flex-row-reverse items-center">
              <div className="lg:hidden flex-1 text-right">{"مسافر"}</div>
              <div className="fullSize flex flex-row-reverse items-center flex-2 sm:bg-grayBackground md:bg-grayBackground px-2 lg:px-0 rounded-md">
                <div className="flex-1 text-right">{item.passenger.name}</div>
                <div className="flex-1 text-center">{item.passenger.phone}</div>
              </div>
            </div>

            <div
              className={`hidden lg:flex lg:justify-center lg:items-center flex-1 text-center rounded-full ${
                item.status === "done" ? "bg-grayBackground" : "bg-powderBlue"
              }`}
            >
              {item.status}
            </div>
            <div className="hidden lg:flex lg:justify-center lg:items-center flex-1 text-center"><MoreIcon className="w-6 h-3"/></div>
          </div>
          <Divider className="sm:hidden md:hidden" />
        </>
      ))}
    </div>
  );
};

export default TripRows;
