import React from "react";
import { DriversData, PassengersData } from "../../_data/data";
import { MoreIcon } from "@/app/_assets/Icons";
import { Divider } from "@mui/material";
import { ItemFullWidth, ItemHalfWidth } from "../TableItems";

const PassengerRows = () => {
  return (
    <div className="w-full flex flex-col gap-2 lg:gap-4 overflow-y-auto lg:p-2">
      {PassengersData.map((passenger) => (
        <>
          <div
            key={passenger.code}
            className="w-full h-fit lg:h-12 flex flex-col gap-2 lg:gap-0 lg:flex-row-reverse lg:items-center lg:rounded-none lg:shadow-none shadow-md shadow-grayText rounded-md sm:bg-white md:bg-white p-2 lg:p-0"
          >
            <ItemHalfWidth
              equal={true}
              ClassName={`${
                passenger.status === "فعال" ? "bg-powderBlue" : "bg-salmonPink"
              }`}
              itemName={"کد راننده"}
              itemFirstValue={passenger.code}
              SecondItem={passenger.status}
            />
            <ItemFullWidth itemName={"نام راننده"} itemValue={passenger.name} />
            <ItemFullWidth itemName={"شماره تماس"} itemValue={passenger.phoneNumber}/>
            <ItemFullWidth itemName={"کدملی"} itemValue={passenger.nationalCode} />
            <ItemFullWidth itemName={"معلولیت"} itemValue={passenger.disability} />

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

export default PassengerRows;
