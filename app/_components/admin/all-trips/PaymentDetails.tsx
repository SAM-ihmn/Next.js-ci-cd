import React from "react";
import ItemOptions from "./ModalItemsOptions";
import { Divider } from "@mui/material";

const PaymentDetails = () => {
  // Fake Data
  const PaymentData = {
    method: "پرداخت آنلاین",
    fee: "۲۵/۰۰۰",
    trackingCode: "۵۴۷۹۳۲۱",
    status: 'پرداخت موفق'
  };

  return (
    <div className="w-full h-full flex flex-col px-2">
      <div className="w-full flex flex-col gap-3 py-2 px-2 border border-solid border-grayBorder rounded-md">
        <div className="text-right">{"جزئیات پرداخت"}</div>
        <Divider />
        <div className="flex flex-col gap-2">
        <div className="w-full flex sm:flex-col-reverse">
          <ItemOptions name=":عملیات " value={PaymentData.status} />

          <ItemOptions name=":هزینه سفر" value={PaymentData.fee} />
        </div>

        <div className="w-full flex sm:flex-col-reverse">
          <ItemOptions name=":کد پیگیری" value={PaymentData.trackingCode} />
          <ItemOptions name=":نحوه پرداخت" value={PaymentData.method} />

        </div>
        </div>
          
      </div>
    </div>
  );
};

export default PaymentDetails;
