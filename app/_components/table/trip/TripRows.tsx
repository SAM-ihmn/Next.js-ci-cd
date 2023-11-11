"use client";

import React, { useState } from "react";
import { TripData } from "../../_data/data";
import { Divider } from "@mui/material";
import { MoreIcon } from "@/app/_assets/Icons";
import DriverPassengerItem from "./DriverPassengerItem";
import { ItemHalfWidth } from "../TableItems";
import TripDetailModal from "../../trip/TripDetailModal";
import { TripDataType } from "../../types/trip";

const TripRows = () => {
  const [open, setOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<TripDataType | null>(null)

  const handleDetailModal = (trip: TripDataType) => {
    setOpen(true);
    setSelectedTrip(trip)
  }

  return (
    <div className="w-full h-[95%] flex flex-col gap-2 overflow-y-auto lg:p-2">
      {TripData.map((trip) => (
        <>
          <div className="w-full h-fit lg:h-12 flex flex-col gap-2 lg:gap-0 lg:flex-row-reverse lg:items-center lg:rounded-none lg:shadow-none shadow-md shadow-grayText rounded-md sm:bg-white md:bg-white p-2 lg:p-0 cursor-pointer" onClick={() => handleDetailModal(trip)}>
            <ItemHalfWidth
              itemName="کد سفر"
              itemFirstValue={trip.code}
              SecondItem={trip.status}
              equal={false}
              ClassName={
                trip.status === "done" ? "bg-grayBackground" : "bg-powderBlue"
              }
            />

            <DriverPassengerItem
              FarsiTitle={"راننده"}
              name={trip.driver.name}
              phone={trip.driver.phone}
            />

            <DriverPassengerItem
              FarsiTitle={"مسافر"}
              name={trip.passenger.name}
              phone={trip.passenger.phone}
            />

            <div
              className={`hidden lg:flex lg:justify-center lg:items-center flex-1 text-center rounded-full ${
                trip.status === "done" ? "bg-grayBackground" : "bg-powderBlue"}`}>
              {trip.status}
            </div>

          </div>
          <Divider className="sm:hidden md:hidden" />
        </>
      ))}
      <TripDetailModal open={open} setOpen={setOpen} selectedItem={selectedTrip}/>
    </div>
  );
};

export default TripRows;
