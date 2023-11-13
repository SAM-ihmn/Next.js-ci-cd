import React from "react";
import { PassengersData } from "../../_data/data";
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
            // onClick={() => openModalPage(Passenger)}
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


          </div>

          <Divider />
        </>
      ))}
    </div>
  );
};

export default PassengerRows;
