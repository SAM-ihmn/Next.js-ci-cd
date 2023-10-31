import React from "react";
import { DriversData } from "../../_data/data";
import { MoreIcon } from "@/app/_assets/Icons";
import { Divider } from "@mui/material";
import { ItemFullWidth, ItemHalfWidth } from "../TableItems";

const DriverRows = () => {
  return (
    <div className="w-full flex flex-col gap-2 lg:gap-4 overflow-y-auto lg:p-2">
      {DriversData.map((driver) => (
        <>
          <div
            key={driver.code}
            className="w-full h-fit lg:h-12 flex flex-col gap-2 lg:gap-0 lg:flex-row-reverse lg:items-center lg:rounded-none lg:shadow-none shadow-md shadow-grayText rounded-md sm:bg-white md:bg-white p-2 lg:p-0"
          >
            <ItemHalfWidth
              equal={true}
              ClassName={`${
                driver.status === "فعال" ? "bg-powderBlue" : "bg-salmonPink"
              }`}
              itemName={"کد راننده"}
              itemFirstValue={driver.code}
              SecondItem={driver.status}
            />
            <ItemFullWidth itemName={"نام راننده"} itemValue={driver.name} />
            <ItemFullWidth itemName={"شماره تماس"} itemValue={driver.phoneNumber}/>
            <ItemFullWidth itemName={"کدملی"} itemValue={driver.nationalCode} />
            <ItemFullWidth itemName={"گواهینامه"} itemValue={driver.nationalCode} />
            <ItemFullWidth itemName={"معلولیت"} itemValue={driver.disability} />
            <ItemFullWidth ClassName={'sm:hidden md:hidden'} itemName={"وضعیت راننده"} itemValue={driver.status} />

            <div className="hidden lg:flex justify-center items-center flex-1 ">
              <MoreIcon className="w-6 h-3" />
            </div>

          </div>

          <Divider />
        </>
      ))}
    </div>
  );
};

export default DriverRows;
