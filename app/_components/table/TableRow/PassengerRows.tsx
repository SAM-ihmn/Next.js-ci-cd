import React, { useState } from "react";
import { PassengersData } from "../../_data/data";
import { Divider } from "@mui/material";
import { ItemFullWidth, ItemHalfWidth } from "../TableItems";
import PassengerDetailsModal from "../../passengerDetailModal/PassengerDetailsModal";
import { PassengerDataType } from "@/types/types";

const PassengerRows = () => {

  const initialPassenger = {
    code: null,
    name: null,
    nationalCode: null,
    phoneNumber: null,
    disability: null,
    status:'غیرفعال'
  }

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<PassengerDataType>(initialPassenger)

  const openModalPage = (passenger: PassengerDataType) => {
    setOpen(true),
    setSelected(passenger)
  }


  return (
    <div className="w-full flex flex-col gap-2 lg:gap-4 overflow-y-auto lg:p-2">
      {PassengersData.map((passenger) => (
        <>
          <div
            key={passenger.code}
            className="w-full h-fit lg:h-12 flex flex-col gap-2 lg:gap-0 lg:flex-row-reverse lg:items-center lg:rounded-none lg:shadow-none shadow-md shadow-grayText rounded-md sm:bg-white md:bg-white p-2 lg:p-0 cursor-pointer"
            onClick={() => openModalPage(passenger)}
          >
            <ItemHalfWidth
              equal={true}
              ClassName={`${
                passenger.status === "فعال" ? "bg-powderBlue" : "bg-salmonPink"
              }`}
              itemName={"کد مسافر"}
              itemFirstValue={passenger.code}
              SecondItem={passenger.status}
            />
            <ItemFullWidth itemName={"نام مسافر"} itemValue={passenger.name} />
            <ItemFullWidth itemName={"شماره تماس"} itemValue={passenger.phoneNumber}/>
            <ItemFullWidth itemName={"کدملی"} itemValue={passenger.nationalCode} />
            <ItemFullWidth itemName={"معلولیت"} itemValue={passenger.disability} />


          </div>

          <Divider />
        </>
      ))}
      <PassengerDetailsModal open={open} handleClose={() => setOpen(false)} selectedPassengerData={selected}/>
    </div>
  );
};

export default PassengerRows;
