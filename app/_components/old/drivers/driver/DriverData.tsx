import React from "react";
import ItemOptions from "../../admin/all-trips/ModalItemsOptions";
import { Divider } from "@mui/material";
import { DriverDataType } from "@/types/types";


const DriverData = (currentDriver: DriverDataType | null) => {
  return (
    <div className="fullSize flex flex-col px-2">
      <div className="w-full flex flex-col gap-3 py-2 px-2 border border-solid border-grayBorder rounded-md">
        <div className="text-right">{"مشخصات راننده"}</div>
        <Divider />
        <div className="flex flex-col gap-2">
          <div className="w-full flex">
            <ItemOptions name=":کدملی" value={currentDriver?.nationCode} />
            <ItemOptions name=":نام راننده" value={currentDriver?.name} />
          </div>
          <div className="w-full flex">
            <ItemOptions
              name=":تاریخ عضویت "
              value={currentDriver?.signUpDate}
            />
            <ItemOptions name=":شماره تماس" value={currentDriver?.phoneNum} />
          </div>

          <div className="w-full flex">
            <ItemOptions
              name=":شماره پلاک"
              value={currentDriver?.vehicle.code}
            />
            <ItemOptions
              name=":مدل خودرو"
              value={currentDriver?.vehicle.model}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverData;
