"use client";

import React, { useState } from "react";
import { DriversData, DriverDataType } from "../../_data/data";
import { MoreIcon } from "@/app/_assets/Icons";
import { Button, Divider } from "@mui/material";
import { ItemFullWidth, ItemHalfWidth } from "../TableItems";
import FullScreenModal from "../../modal/FullScreenModal";
import DriverDetail from "../../driver/DriverDetail";
import theme from "@/materialTheme/theme";
import { useRouter } from "next/navigation";

const DriverRows = () => {
  const router = useRouter()
  const [selectedDriver, setSelectedDriver] = useState<DriverDataType| null>(null)
  const [open, setOpen] = useState(false);
  const openModalPage = (driver:DriverDataType) => {
    setOpen(true);
    setSelectedDriver(driver)
    console.log(driver?.code)
  
  };

  return (
    <div className="w-full flex flex-col gap-2 lg:gap-4 overflow-y-auto lg:p-2" >
      {DriversData.map((driver) => (
        <>
          <div
            key={driver.code}
            className="w-full h-fit lg:h-12 cursor-pointer flex flex-col gap-2 lg:gap-0 lg:flex-row-reverse lg:items-center lg:rounded-none lg:shadow-none shadow-md shadow-grayText rounded-md sm:bg-white md:bg-white p-2 lg:p-0"
            onClick={() => openModalPage(driver)}
          >
            <ItemHalfWidth
              equal={true}
              ClassName={`${
                driver.status === "فعال" ? "bg-powderBlue" : "bg-salmonPink"
              }`}
              itemName={"کد راننده"}
              itemFirstValue={driver.code}
              SecondItem={driver.status}
            />
            <ItemFullWidth itemName={"نام راننده"} itemValue={driver.name} />
            <ItemFullWidth
              itemName={"شماره تماس"}
              itemValue={driver.phoneNumber}
            />
            <ItemFullWidth itemName={"کدملی"} itemValue={driver.nationalCode} />
            <ItemFullWidth
              itemName={"گواهینامه"}
              itemValue={driver.nationalCode}
            />
            <ItemFullWidth itemName={"معلولیت"} itemValue={driver.disability} />
            <ItemFullWidth
              ClassName={"sm:hidden md:hidden"}
              itemName={"وضعیت راننده"}
              itemValue={driver.status}
            />

          </div>

          <Divider />
        </>
      ))}
      <FullScreenModal open={open} handleClose={() => setOpen(!open)} >
        <div className="fullSize flex flex-col justify-between">

        <DriverDetail driver={selectedDriver} />
        <div className="w-full flex gap-2 ">
          <div className="flex-1">
            <Button sx={{paddingY: 1, width: '100%', backgroundColor: theme.palette.blue.main}}>{'مشاهده مدارک'}</Button>
          </div>
          <div className="flex-1">
            <Button sx={{paddingY: 1, width: '100%', backgroundColor: theme.palette.blue.main}} onClick={() => router.push(`/drivers-management/transactions/${selectedDriver?.code}`)}>{'مشاهده تراکنش ها'}</Button>
          </div>
        </div>
        </div>
      </FullScreenModal>
    </div>
  );
};

export default DriverRows;
