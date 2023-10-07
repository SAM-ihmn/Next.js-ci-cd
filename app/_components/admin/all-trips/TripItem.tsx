import React from "react";

type Props = {
  openModal: () => void
};

const TripItem = ({openModal}: Props) => {
  return (
    <>
      <div className="flex flex-row-reverse justify-between items-center border border-solid border-grayBorder bg-grayBg py-3 px-2 rounded-md" onClick={openModal}>
        <div>{"کد سفر"}</div>
        <div>{"نام مسافر"}</div>
        <div>{"نام راننده"}</div>
        <div>{"زمان سفر"}</div>
      </div>
    </>
  );
};

export default TripItem;
