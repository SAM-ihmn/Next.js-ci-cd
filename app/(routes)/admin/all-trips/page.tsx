'use client'

import TripItem from "@/app/_components/admin/all-trips/TripItem";
import React, { useState } from "react";
import FullScreenModal from "@/app/_components/modal/FullScreenModal";
import TripDetails from "@/app/_components/admin/all-trips/TripDetails";

type Props = {};

const page = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModalOpen = () => {
    setOpenModal(true)
  }

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="flex items-center justify-end">
        <h1 className="w-fit  py-3 px-4">{"نمایش تمام سفرها"}</h1>
      </div>

      <div className="w-full h-full flex flex-col gap-3 py-3">
        <div className="w-full h-[92%] flex flex-col border-x border-y-0 border-solid border-grayBorder gap-3 p-3 overflow-y-auto">
          <TripItem openModal={handleModalOpen} />
        </div>
        <FullScreenModal
          open={openModal}
          handleClose={handleModalClose}
        >
          <TripDetails/>
        </FullScreenModal>
      </div>
    </>
  );
};

export default page;
