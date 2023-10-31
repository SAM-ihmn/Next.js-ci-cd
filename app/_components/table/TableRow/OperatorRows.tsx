import React from "react";
import { OperatorsData } from "../../_data/data";
import { Divider } from "@mui/material";
import { MoreIcon } from "@/app/_assets/Icons";

type Props = {};

const OperatorRows = (props: Props) => {
  // OperatorsData
  return (
    <div className="w-full flex flex-col gap-2 lg:gap-4 overflow-y-auto lg:p-2">
      {OperatorsData.map((operator) => (
        <>
          <div className="w-full h-fit lg:h-12 flex flex-col gap-2 lg:gap-0 lg:flex-row-reverse lg:items-center lg:rounded-none lg:shadow-none shadow-md shadow-grayText rounded-md sm:bg-white md:bg-white p-2 lg:p-0">
            {/* first row of mobile */}
            <div className="fullSize lg:w-1/2 lg:flex-1 flex flex-row-reverse lg:items-center">
                <div className="lg:hidden flex-1 w-full text-right">{'شناسه'}</div>
                <div className="flex-2 lg:w-full w-1/2 flex text-right lg:text-center gap-2 lg:gap-0"> 
                  <div className={`w-2/3 lg:hidden text-center rounded-md bg-salmonPink`}>
                    {operator.department}
                  </div>
                  <div className="w-1/3 lg:w-full lg:h-full sm:bg-grayBackground md:bg-grayBackground text-center rounded-md"> 
                    {operator.code}
                  </div>
              </div>
            </div>

            {/* second row of mobile */}
            <div className="fullSize flex lg:flex-1 flex-row-reverse items-center">
              <div className="lg:hidden flex-1 text-right">{"نام کامل"}</div>
              <div className="fullSize flex flex-row-reverse items-center flex-2 sm:bg-grayBackground md:bg-grayBackground px-2 lg:px-0 rounded-md">
                <div className="flex-1 text-center">{operator.name}</div>
              </div>
            </div>

            <div className="fullSize flex lg:flex-1 flex-row-reverse items-center">
              <div className="lg:hidden flex-1 text-right">{"کدملی"}</div>
              <div className="fullSize flex flex-row-reverse items-center flex-2 sm:bg-grayBackground md:bg-grayBackground px-2 lg:px-0 rounded-md">
                <div className="flex-1 text-center">{operator.nationalCode}</div>
              </div>
            </div>
            <div className="fullSize flex flex-2 lg:flex-1 flex-row-reverse items-center">
              <div className="lg:hidden flex-1 text-right">{"آدرس ایمیل"}</div>
              <div className="fullSize flex flex-row-reverse items-center flex-2 sm:bg-grayBackground md:bg-grayBackground px-2 lg:px-0 rounded-md">
                <div className="flex-1 text-center">{operator.email}</div>
              </div>
            </div>

            <div className="fullSize flex lg:flex-1 flex-row-reverse items-center">
              <div className="lg:hidden flex-1 text-right">{"شماره تماس"}</div>
              <div className="fullSize flex flex-row-reverse items-center flex-2 sm:bg-grayBackground md:bg-grayBackground px-2 lg:px-0 rounded-md">
                <div className="flex-1 text-center">{operator.phoneNumber}</div>
              </div>
            </div>



            <div
              className={`hidden lg:flex lg:justify-center lg:items-center lg:flex-1 flex-2 text-center rounded-md `}
            >
              {operator.department}
            </div>

            <div className="hidden lg:flex lg:justify-center lg:items-center flex-1 text-center"><MoreIcon className="w-6 h-3"/></div>
          </div>

          <Divider />
        </>
      ))}
    </div>
  );
};

export default OperatorRows;
