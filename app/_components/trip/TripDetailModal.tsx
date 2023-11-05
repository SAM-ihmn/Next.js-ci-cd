"use client";
import React, { useCallback, useMemo } from "react";
import FullScreenModal from "../modal/FullScreenModal";
import DetailsSection from "./DetailsSection";
import ItemBox from "./ItemBox";
import { TripDataType, TripDetailModalProps } from "../types/trip";


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
    { itemTitle: "کدملی", itemValue: selectedItem?.driver.name },
    { itemTitle: "شماره تماس", itemValue: selectedItem?.driver.name },
    { itemTitle: "معلولیت", itemValue: selectedItem?.driver.name },
    { itemTitle: "مدل خودرو", itemValue: selectedItem?.driver.name },
    { itemTitle: "شماره پلاک", itemValue: selectedItem?.driver.name },
  ],
  passenger: [
    { itemTitle: "نام و نام خانوادگی", itemValue: selectedItem?.driver.name },
    { itemTitle: "کدملی", itemValue: selectedItem?.driver.name },
    { itemTitle: "شماره تماس", itemValue: selectedItem?.driver.name },
    { itemTitle: "معلولیت", itemValue: selectedItem?.driver.name },
  ],
  transactions: [
    { itemTitle: "هزینه سفر", itemValue: selectedItem?.driver.name },
    { itemTitle: "دریافتی راننده", itemValue: selectedItem?.driver.name },
    { itemTitle: "کد تخفیف", itemValue: selectedItem?.driver.name },
    { itemTitle: "نحوه پرداخت", itemValue: selectedItem?.driver.name },
    { itemTitle: "انعام راننده", itemValue: selectedItem?.driver.name },
    { itemTitle: "کمک به خیریه", itemValue: selectedItem?.driver.name },
  ],
});

const TripDetailModal = (props: TripDetailModalProps) => {

  // props comes from _components/table/trip/TripRows
  const { open, setOpen, selectedItem } = props;

  // actions
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const ItemList = useMemo(() => generateItemList(selectedItem),[selectedItem]);

  return (
    <FullScreenModal open={open} handleClose={handleClose}>
      <div className="fullSize flex flex-col gap-2">
        <DetailsSection sectionTitle="مشخصات عمومی سفر" userStatus={false}>
          {ItemList.general.map((item) => (
            <ItemBox itemValue={item.itemValue} itemTitle={item.itemTitle} />
          ))}
        </DetailsSection>

        <DetailsSection sectionTitle="مشخصات راننده" userStatus={false}>
          {ItemList.driver.map((driver) => (
            <ItemBox itemValue={driver.itemValue} itemTitle={driver.itemTitle} /> 
          ))}
        </DetailsSection>

        <DetailsSection sectionTitle="مشخصات مسافر" userStatus={false}>
          {ItemList.passenger.map((passenger) => (
            <ItemBox itemValue={passenger.itemValue} itemTitle={passenger.itemTitle} /> 
          ))}
        </DetailsSection>

        <DetailsSection sectionTitle=" جزئیات پرداخت" userStatus={false}>
          {ItemList.transactions.map((transaction) => (
            <ItemBox itemValue={transaction.itemValue} itemTitle={transaction.itemTitle}/>
          ))}
        </DetailsSection>

      </div>
    </FullScreenModal>
  );
};

export default TripDetailModal;
