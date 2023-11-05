import { Divider } from "@mui/material";
import React from "react";
import { DriverDataType } from "../_data/data";

type Props = {
  driver: DriverDataType | null
};

type ItemProps = {
  title: string;
  value: string;
};

export const DetailItem = (props: ItemProps) => {
  const { title, value } = props;
  return (
    <div className="w-full lg:w-1/2 flex flex-row-reverse gap-2">
      <div>:{title}</div>
      <div>{value}</div>
    </div>
  );
};

const DriverDetail = (props: Props) => {
  const {driver} = props 

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full p-2 border flex flex-col border-solid border-grayBackgroundDarker rounded-md gap-2">
        <div className="w-full flex flex-row-reverse justify-between py-2">
          <span>{"مشخصات راننده"}</span>
          <div className="bg-salmonPink rounded-md px-4">
            {"غیرفعال کردن راننده"}
          </div>
        </div>
        <Divider />
        <div className="w-full flex flex-col lg:flex-row-reverse">
          <DetailItem title={"کد راننده"} value={"2564"}  />
          <DetailItem title={"وضعیت راننده"} value={"فعال"} />
        </div>
        <div className="w-full flex flex-col lg:flex-row-reverse">
          <DetailItem
            title={" نام و نام خانوادگی"}
            value={"امیرحسین رحیم وند"}
          />
          <DetailItem title={" کدملی"} value={"۶۶۴۰۰۲۵۸۹۶"} />
        </div>
        <div className="w-full flex flex-col lg:flex-row-reverse">
          <DetailItem title={"شماره گواهینامه"} value={"۵۵۶۶۲۲۸۸۴۴"} />
          <DetailItem title={"معلولیت"} value={"ندارد"} />
        </div>
      </div>
      <div className="w-full p-2 border flex flex-col border-solid border-grayBackgroundDarker rounded-md gap-2">
        <div className="w-full text-right">{"مشخصات مالی"}</div>
        <Divider />
        <div className="w-full flex flex-col lg:flex-row-reverse">
          <DetailItem title={"شماره حساب"} value={"۷۵۸۹۶۲۵۶۵۳"} />
          <DetailItem title={"شماره شبا"} value={"R205465483400004545"} />
        </div>
      </div>
      <div className="w-full p-2 border flex flex-col border-solid border-grayBackgroundDarker rounded-md gap-2">
        <div className="w-full text-right">{"مشخصات خودرو"}</div>
        <Divider />
        <div className="w-full flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 flex flex-row-reverse gap-2">
            <div>{"مدل خودرو"}</div>
            <div>{"۴۰۵"}</div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-row-reverse gap-2">
            <div>{"شماره پلاک"}</div>
            <div>{"۴۰۵"}</div>
          </div>

        </div>
      </div>
      <div className="w-full p-2 border flex flex-col border-solid border-grayBackgroundDarker rounded-md gap-2">
        <div className="w-full text-right">{"گزارش کلی"}</div>
        <Divider />
        <div className="w-full flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 flex flex-row-reverse gap-2">
            <div>{"تاریخ عضویت"}</div>
            <div>{"۴۰۵"}</div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-row-reverse gap-2">
            <div>{"تعداد سفرهای انجام شده"}</div>
            <div>{"45"}</div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 flex flex-row-reverse gap-2">
            <div>{"امتیاز کسب شده"}</div>
            <div>{"۴۰۵"}</div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-row-reverse gap-2">
            <div>{"درامد خالص"}</div>
            <div>{"250000000"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetail;
