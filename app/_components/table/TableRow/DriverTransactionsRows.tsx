"use client";

import { Divider } from "@mui/material";
import React from "react";
import { driverTransactionsData } from "../../_data/drivers";

const DriverTransactionsRows = () => {
  return (
    <div className="w-full h-3/4 flex flex-col gap-2 py-2 overflowY-scroll">
      {driverTransactionsData.map((data) => (
        <div key={data.code} className="w-full flex flex-col gap-2">
          <div className="w-full bg-white p-2 lg:p-0 rounded-lg flex flex-col gap-2 text-[0.9rem] lg:flex-row-reverse lg:gap-0 ">
            <div className="hidden flex-1 lg:flex-center">{data.code}</div>
            <div className="w-full flex-5 flex flex-col lg:flex-row gap-2 lg:gap-0">
              <div className="sm:w-full h-20 lg:h-10 flex flex-row-reverse gap-2 lg:flex-2 lg:flex-row lg:gap-0">
                <div className="w-1/2 flex flex-col gap-2">
                  <div className="w-full h-9 flex flex-row-reverse lg:hidden">
                    <div className="w-1/2 text-right ">{"کد ثبت"}</div>
                    <div className="w-1/2 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md">
                      {data.code}
                    </div>
                  </div>
                  <div className="w-full h-9 flex flex-row-reverse lg:flex-1 lg:flex-center">
                    <div className="w-1/2 text-right lg:hidden">
                      {"نوع تراکنش"}
                    </div>
                    <div className="w-1/2 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md">
                      {data.transactionType}
                    </div>
                  </div>
                </div>
                <div className="w-1/2 h-full lg:flex-1 bg-powderBlue rounded-md flex justify-center items-center lg:flex-center">
                  {data.title}
                </div>
              </div>
              {/* second row */}
              <div className="w-full flex flex-row-reverse lg:flex-row h-20 gap-2 lg:h-10 lg:flex-3 lg:flex-center lg:gap-0">
                <div className="w-1/2 lg:flex-2 flex flex-col lg:flex-row gap-2">
                  <div className="w-full h-9 flex flex-row-reverse lg:flex-1 lg:flex-center">
                    <div className="w-1/2 text-right lg:hidden">
                      {"کد پیگیری"}
                    </div>
                    <div className="w-1/2 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md">
                      {data.trackingNumber}
                    </div>
                  </div>
                  <div className="w-full lg:flex-1 h-9 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md lg:flex-center">
                    {data.date}
                  </div>
                </div>
                <div className="w-1/2 h-full lg:flex-1 sm:bg-grayBackground md:bg-grayBackground text-center rounded-md flex flex-col lg:flex-row justify-evenly lg:justify-center lg:items-center px-2">
                  <div className="lg:hidden"> {"مبلغ تراکنش (ریال)"} </div>
                  <Divider
                    orientation="horizontal"
                    sx={{ display: { lg: "none" } }}
                  />
                  <div>{data.transactionAmount}</div>
                </div>
              </div>
            </div>

            {/* Third row */}
            <div className="w-full h-20 lg:h-10 lg:flex-1 flex flex-col justify-evenly px-2 sm:bg-grayBackground md:bg-grayBackground text-center rounded-md">
              <div className="lg:hidden">{"موجودی کیف پول (ریال)"}</div>
              <Divider
                orientation="horizontal"
                sx={{ display: { lg: "none" } }}
              />
              <div>{data.WalletBalance}</div>
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default DriverTransactionsRows;
