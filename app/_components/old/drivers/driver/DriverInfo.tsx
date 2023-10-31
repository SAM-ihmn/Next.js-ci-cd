import { Divider } from "@mui/material";
import React from "react";

type Props = {
  BackToLastPage?: React.ReactEventHandler;
};

const DriverInfo = (props: Props) => {
  const { BackToLastPage } = props;

  return (
    <div className="fullSize flex flex-col p-2 gap-2 overflow-y-auto lg:w-1/3 lg:border lg:border-solid lg:border-grayBorder lg:rounded-lg ">
      <div className="w-full flex justify-between lg:hidden">
      <div className="cursor-pointer" onClick={BackToLastPage}>
        {"<< بازگشت"}
      </div>
      <div className="font-bold ">{'مشخصات راننده'}</div>
      </div>
      <Divider className="lg:hidden"/>
      <div className="w-full flex flex-row-reverse gap-2 lg:p-5">
        <div className="w-2/5 flex flex-col items-end gap-2">
        <span>{":کد راننده"}</span>
        <span>{":نام و نام خانوادگی"}</span>
        <span>{":کد ملی"}</span>
        <span>{":شماره تماس"}</span>
        <span>{":مدل خودرو"}</span>
        <span>{":شماره پلاک"}</span>
        </div>

        <div className="w-3/5 flex flex-col items-end gap-2">
        <span>{"۵۵۹"}</span>
        <span>{"علی محمدی"}</span>
        <span>{"۰۰۶۶۹۸۴۵۲۵"}</span>
        <span>{"۰۹۱۹۷۱۲۴۹۸۸"}</span>
        <span>{"پژو ۲۰۶"}</span>
        <span>{"۵۸۶۴۲۸"}</span>
        </div>

      </div>
    </div>
  );
};

export default DriverInfo;
