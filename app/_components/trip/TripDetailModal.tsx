"use client";
import React, { useCallback, useMemo } from "react";
import FullScreenModal from "../modal/FullScreenModal";
import DetailsSection from "./DetailsSection";
import ItemBox from "./ItemBox";
import { TripDataType, TripDetailModalProps } from "../types/tripTypes";

// categorized data based on selected trip from trip list
// Moved outside to prevent recreation on each render
const generateItemList = (selectedItem: TripDataType | null) => ({
  general: [
    { itemTitle: "کد سفر", itemValue: selectedItem?.code },
    { itemTitle: "امتیاز سفر", itemValue: "4/5" },
    { itemTitle: "تاریخ سفر", itemValue: "۱۴۰۲−۱۲−۲۳" },
    { itemTitle: "زمان قبول درخواست", itemValue: "۸:۲۶" },
    { itemTitle: "زمان شروع سفر", itemValue: "۸:۳۰" },
    { itemTitle: "زمان پایان سفر", itemValue: "۱۰:۳۰" },
  ],
  driver: [
    { itemTitle: "نام و نام خانوادگی", itemValue: selectedItem?.driver.name },
    {
      itemTitle: "کدملی",
      itemValue: "۵۸۳۶۹۸۴۵۲۰",
      //  selectedItem?.driver.name
    },
    {
      itemTitle: "شماره تماس",
      itemValue: "۰۹۱۹۷۱۲۴۹۸۸",
      // selectedItem?.driver.name
    },
    {
      itemTitle: "معلولیت",
      itemValue: "ندارد",
      // selectedItem?.driver.name
    },
    {
      itemTitle: "مدل خودرو",
      itemValue: "پژو ۲۰۶",
      // selectedItem?.driver.name
    },
    {
      itemTitle: "شماره پلاک",
      itemValue: "1256 P 25",
      // selectedItem?.driver.name
    },
  ],
  passenger: [
    {
      itemTitle: "نام و نام خانوادگی",
      itemValue: "رضا محمدی",
      // selectedItem?.driver.name
    },
    {
      itemTitle: "کدملی",
      itemValue: "۵۸۳۶۹۸۴۵۲۰",
      // selectedItem?.driver.name
    },
    { itemTitle: "شماره تماس", itemValue: selectedItem?.driver.name },
    {
      itemTitle: "معلولیت",
      itemValue: "نابینا",
      // selectedItem?.driver.name
    },
  ],
  transactions: [
    {
      itemTitle: "هزینه سفر",
      itemValue: "۱۰۰۰۰۰",
      // selectedItem?.driver.name
    },
    {
      itemTitle: "دریافتی راننده",
      itemValue: "۵۰۰۰۰",
      // selectedItem?.driver.name
    },
    {
      itemTitle: "کد تخفیف",
      itemValue: "...",
      // selectedItem?.driver.name
    },

    {
      itemTitle: "نحوه پرداخت",
      itemValue: "کارت به کارت",
      // selectedItem?.driver.name
    },
    {
      itemTitle: "انعام راننده",
      itemValue: "...",
      // selectedItem?.driver.name
    },
    {
      itemTitle: "کمک به خیریه",
      itemValue: "...",
      // selectedItem?.driver.name
    },
  ],
});

const TripDetailModal = (props: TripDetailModalProps) => {
  // props comes from _components/table/trip/TripRows
  const { open, setOpen, selectedItem } = props;

  // actions
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const ItemList = useMemo(
    () => generateItemList(selectedItem),
    [selectedItem]
  );

  let A = true;
  let B: boolean = A === true ? false : true;

  return (
    <FullScreenModal
      modalTitle="جزئیات سفر"
      open={open}
      handleClose={handleClose}
    >
      <div className="w-full lg:h-full sm:h-5/6 flex flex-col gap-2 overflow-y-auto">
        <DetailsSection sectionTitle="مشخصات عمومی سفر" userStatus={false}>
          {ItemList.general.map((item, index) => (
            <ItemBox
              key={index}
              itemValue={item.itemValue}
              itemTitle={item.itemTitle}
            />
          ))}
          <div className="w-full flex flex-col lg:flex-row-reverse gap-2 py-2">
            <div className="lg:w-1/2 w-full flex flex-row-reverse gap-2">
              <div
                className={`w-1/2 rounded-md  text-center ${
                  A === true
                    ? "bg-powderBlue"
                    : "bg-grayBackground text-grayText"
                }`}
              >
                {"حمل تجهیزات"}
              </div>
              <div
                className={`w-1/2 rounded-md  text-center ${
                  B === true
                    ? "bg-powderBlue"
                    : "bg-grayBackground text-grayText"
                }`}
              >
                {"بازگشت به مبدا"}
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex flex-row-reverse gap-2">
              <div
                className={`w-1/2 rounded-md  text-center ${
                  B === true
                    ? "bg-powderBlue"
                    : "bg-grayBackground text-grayText"
                }`}
              >
                {"توقف"}
              </div>
              <div
                className={`w-1/2 rounded-md  text-center ${
                  A === true
                    ? "bg-powderBlue"
                    : "bg-grayBackground text-grayText"
                }`}
              >
                {"همراهی راننده"}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row-reverse py-1">
            <div className="w-1/4 text-right">{" مبدا"}</div>
            <div dir="rtl" className="w-3/4 rounded-md bg-grayBackground px-2">
              {"سهروردی شمالی,بن بست بیشه,پلاک ۹"}
            </div>
          </div>

          <div className="w-full flex flex-row-reverse py-1">
            <div className="w-1/4 text-right">{" مقصد"}</div>
            <div dir="rtl" className="w-3/4 rounded-md bg-grayBackground px-2">
              {"میدان ونک, خیابان ولیعصر, خیابان شریفی, پلاک ۳۰"}
            </div>
          </div>

          <div className="w-full flex flex-row-reverse py-1">
            <div className="w-1/4 text-right">{" مقصد دوم"}</div>
            <div dir="rtl" className="w-3/4 rounded-md bg-grayBackground px-2">
              {"..."}
            </div>
          </div>
        </DetailsSection>

        <DetailsSection sectionTitle="مشخصات راننده" userStatus={false}>
          {ItemList.driver.map((driver, index) => (
            <ItemBox
              key={index}
              itemValue={driver.itemValue}
              itemTitle={driver.itemTitle}
            />
          ))}
        </DetailsSection>

        <DetailsSection sectionTitle="مشخصات مسافر" userStatus={false}>
          {ItemList.passenger.map((passenger, index) => (
            <ItemBox
              key={index}
              itemValue={passenger.itemValue}
              itemTitle={passenger.itemTitle}
            />
          ))}

          <div className="w-full flex gap-2 py-2">
            <div
              className={`w-1/2 rounded-md text-center ${
                A === true ? "bg-powderBlue" : "bg-grayBackground text-grayText"
              }`}
            >
              {"استفاده از عصا و ویلچر"}
            </div>
            <div
              className={`w-1/2 rounded-md text-center ${
                B === true ? "bg-powderBlue" : "bg-grayBackground text-grayText"
              }`}
            >
              {"ناشنوا / کم شنوا"}
            </div>
          </div>
        </DetailsSection>

        <DetailsSection sectionTitle=" جزئیات پرداخت" userStatus={false}>
          {ItemList.transactions.map((transaction, index) => (
            <ItemBox
            key={index}
              itemValue={transaction.itemValue}
              itemTitle={transaction.itemTitle}
            />
          ))}
        </DetailsSection>
      </div>
    </FullScreenModal>
  );
};

export default TripDetailModal;
