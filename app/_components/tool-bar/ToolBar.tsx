'use client'

import React, { useState } from "react";
import { DownloadIcon, PlusIcon, SearchIcon } from "@/app/_assets/Icons";
import ToolItem from "./ToolItem";
import { useRouter } from "next/navigation";


type Props = {
  title: string;
  children: React.ReactNode,
  hidden?: boolean,
  hiddenNewTicket? : boolean
};

const ToolBar = (props: Props) => {
  const { title, children, hidden, hiddenNewTicket } = props;
  const router = useRouter()

  // state
  const [searchBar, setSearchBar] = useState(false)

  // actions
  const setNewOperator = () => {
    router.push('/operators-management/new-operator')
  };

  const setNewTicket = () => {
    router.push('/support-panel/new-ticket')
  }

  const getReportFile = () => {};
  const OpenSearchBar = () => {
    setSearchBar(!searchBar)
  };


  return (
    <div>
      <div className="w-full h-[10%] flex flex-col gap-2">
        <div className="w-full flex gap-2 flex-row-reverse justify-between items-center">
          <div className=" w-1/2 lg:text-[28px] text-[1.3rem] text-right">{title}</div>

          <div className=" w-1/2 flex gap-2">
            <ToolItem disable toolName="دریافت گزارش" OnClick={getReportFile}>
              <DownloadIcon className="w-6 h-6" />
            </ToolItem>


            <ToolItem hidden={hidden} toolName="ثبت اپراتور جدید" OnClick={setNewOperator}>
              <PlusIcon className="w-6 h-6" />
            </ToolItem>

            <ToolItem hidden={hiddenNewTicket} toolName="ثبت تیکت جدید" OnClick={setNewTicket} >
            <PlusIcon className="w-6 h-6" />
            </ToolItem>

            <ToolItem toolName="نوار جستجو" OnClick={OpenSearchBar}>
              <SearchIcon className="w-6 h-6" />
            </ToolItem>


          </div>
        </div>

        {searchBar === true && <>{children}</>}

      </div>
    </div>
  );
};

export default ToolBar;
