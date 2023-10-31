import React from "react";
import { PassengerDataType } from "@/types/types";
import { PassengerList } from "./passengerList";

type Props = {
  showDriverInfo: (id: number) => void;
};

const DriverItem = ({ showDriverInfo }: Props) => {
  // actions
  const handleClick = (passenger: PassengerDataType) => {
    showDriverInfo(passenger.code);
  };

  return (
    <>
      {PassengerList.map((passenger, index) => (
        <div
          key={index}
          className="flex flex-row-reverse sm:flex-col justify-between items-center border border-solid border-grayBorder bg-grayBg py-3 px-2 rounded-md"
          onClick={() => handleClick(passenger)}
        >
          <div className="w-full flex  flex-col lg:flex-row-reverse">
            <div className="w-full flex justify-end gap-2 lg:w-1/12 lg:gap-0">
              <div className="text-right lg:text-center lg:w-full">{passenger.code}</div>
              <div className="w-1/3 text-right lg:hidden">{":کد مسافر"}</div>
            </div>

            <div className="w-full flex justify-end gap-2 lg:w-4/12 lg:gap-0">
              <div className="text-right lg:w-full">{passenger.name}</div>
              <div className="w-1/3 text-right lg:hidden">{":نام مسافر"}</div>
            </div>

            <div className="w-full flex justify-end gap-2 lg:w-2/12 lg:gap-0">
              <div className="text-right lg:w-full lg:text-center">{passenger.nationalCode}</div>
              <div className="w-1/3 text-right lg:hidden">{":کد ملی"}</div>
            </div>

            <div className="w-full flex justify-end gap-2 lg:w-2/12 lg:gap-0">
              <div className="text-right lg:w-full lg:text-center">{passenger.phoneNum}</div>
              <div className="w-1/3 text-right lg:hidden">{":شماره تماس"}</div>
            </div>

            <div className="w-full flex justify-end gap-2 lg:w-2/12 lg:gap-0">
              <div className="text-right lg:w-full">{}</div>
              <div className="w-1/3 text-right lg:hidden">{":ایمیل"}</div>
            </div>

            <div className="w-full flex justify-end gap-2 lg:w-1/12 lg:gap-0">
              <div className="text-right lg:w-full lg:text-center">{passenger.disability === true ? "دارد" : "ندارد"}</div>
              <div className="w-1/3 text-right lg:hidden">{":معلولیت"}</div>
            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default DriverItem;
