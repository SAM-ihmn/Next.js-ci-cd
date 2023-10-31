import { Divider } from "@mui/material";
import React from "react";

type Props = {
  BackToLastPage?: React.ReactEventHandler;
};

const DriverTripList = (props: Props) => {
  const { BackToLastPage } = props;

  return (
    <div className="fullSize flex flex-col p-2 gap-2 overflow-y-auto lg:w-1/3 lg:border lg:border-solid lg:border-grayBorder lg:rounded-lg ">
      <div className="w-full flex justify-between lg:hidden">
      <div className="cursor-pointer" onClick={BackToLastPage}>
        {"<< بازگشت"}
      </div>
      <div className="font-bold ">{'لیست سفرها'}</div>
      </div>
      <Divider className="lg:hidden"/>

      <div className="fullSize flex flex-col">
        <div>
          <span>مبداء</span>
        </div>
      </div>
    </div>
  );
};

export default DriverTripList;
