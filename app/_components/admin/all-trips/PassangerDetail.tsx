import React from "react";
import ItemOptions from "./ModalItemsOptions";
import { Divider } from "@mui/material";

const PassengerDetails = () => {
  // Fake Data
  const PassengerData = {
    passengerName: "رضا محمدی",
    nationalCode: "۰۰۵۸۶۳۴۷۹۲",
    phoneNum: "۰۹۱۹۷۱۲۴۹۸۸",
    signUpDate: '۱۴۰۲-۰۸-۰۶'
  };

  return (
    <div className="w-full h-full flex flex-col px-2">
      <div className="w-full flex flex-col gap-3 py-2 px-2 border border-solid border-grayBorder rounded-md">
        <div className="text-right">{"مشخصات مسافر"}</div>
        <Divider />
        <div className="flex flex-col gap-2">
        <div className="w-full flex">
          <ItemOptions name=":کدملی" value={PassengerData.nationalCode} />
          <ItemOptions name=":نام مسافر" value={PassengerData.passengerName} />
        </div>

        <div className="w-full flex">
          <ItemOptions name=":تاریخ عضویت" value={PassengerData.signUpDate} />
          <ItemOptions name=":شماره تماس" value={PassengerData.phoneNum} />
        </div>
        </div>
          
      </div>
    </div>
  );
};

export default PassengerDetails;
