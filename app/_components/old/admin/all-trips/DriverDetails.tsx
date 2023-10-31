import React from "react";
import ItemOptions from "./ModalItemsOptions";
import { Divider } from "@mui/material";

const DriverDetails = () => {
  // Fake Data
  const driverData = {
    driverName: "امیر کریمی",
    nationalCode: "۰۰۵۸۶۳۴۷۹۲",
    phoneNum: '۰۹۳۶۹۱۹۷۱۲۶',
    signUpDate: '۱۴۰۲-۰۸-۲۶',
    vehicleModel: "پژو ۲۰۶",
    vehicleNum: "۵۵۵۵۵۵۵",
  };

  return (
    <div className="fullSize flex flex-col px-2">
      <div className="w-full flex flex-col gap-3 py-2 px-2 border border-solid border-grayBorder rounded-md">
        <div className="text-right">{"مشخصات راننده"}</div>
        <Divider />
        <div className="flex flex-col gap-2">
        <div className="w-full flex">
          <ItemOptions name=":کدملی" value={driverData.nationalCode} />
          <ItemOptions name=":نام راننده" value={driverData.driverName} />
        </div>
        <div className="w-full flex">
          <ItemOptions name=":تاریخ عضویت " value={driverData.signUpDate} />
          <ItemOptions name=":شماره تماس" value={driverData.phoneNum} />
        </div>

        <div className="w-full flex">
          <ItemOptions name=":شماره پلاک" value={driverData.vehicleNum} />
          <ItemOptions name=":مدل خودرو" value={driverData.vehicleModel} />
        </div>
        </div>
          
      </div>
    </div>
  );
};

export default DriverDetails;
