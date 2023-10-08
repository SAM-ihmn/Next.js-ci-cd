import React from "react";
import ItemOptions from "./ModalItemsOptions";
import { Divider } from "@mui/material";

const TripDetails = () => {
  // Fake Data
  const tripData = {
    date: "۱۴۰۲-۰۶-۲۳",
    code: "۲۶۸۵۹۴",
    origin: "تهران-سهروردی شمالی-بن بست بیشه",
    distance : "میدان ونک- گاندی شمالی- پ ۳۰"
  };

  return (
    <div className="w-full h-full flex flex-col px-2">
      <div className="w-full flex flex-col gap-3 py-2 px-2 border border-solid border-grayBorder rounded-md">
        <div className="text-right">{"مشخصات عمومی سفر"}</div>
        <Divider/>
        <div className="flex flex-col gap-2">

        <div className="w-full flex">
          <ItemOptions name=":تاریخ سفر" value={tripData.date} />
          <ItemOptions name=":کد سفر" value={tripData.code} />
        </div>
        <div className="w-full flex flex-col items-end gap-2">
          <ItemOptions name=":مبداء" value={tripData.origin} />
          <ItemOptions name=":مقصد" value={tripData.distance} />
        </div>

        </div>
      </div>
    </div>
  );
};

export default TripDetails;
