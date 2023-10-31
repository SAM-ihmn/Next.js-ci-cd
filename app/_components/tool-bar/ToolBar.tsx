'use client'

import React, { useState } from "react";
import { DownloadIcon, PlusIcon, SearchIcon } from "@/app/_assets/Icons";
import ToolItem from "./ToolItem";
import { useRouter } from "next/navigation";


type Props = {
  title: string;
  children: React.ReactNode,
  hidden?: boolean
};

const ToolBar = (props: Props) => {
  const { title, children, hidden } = props;
  const router = useRouter()

  // state
  const [searchBar, setSearchBar] = useState(false)

  // actions
  const setNewOperator = () => {
    router.push('/operators-management/new-operator')
  };

  const getReportFile = () => {};
  const OpenSearchBar = () => {
    setSearchBar(!searchBar)
  };


  return (
    <div>
      <div className="w-full h-fit flex flex-col gap-2">
        <div className="w-full flex sm:flex-col gap-2 flex-row-reverse justify-between">
          <div className="sm:w-full w-1/3 text-[28px] text-right">{title}</div>

          <div className="sm:w-full w-2/3 flex gap-2">
            <ToolItem disable toolName="دریافت گزارش" OnClick={getReportFile}>
              <DownloadIcon className="w-6 h-6" />
            </ToolItem>


            <ToolItem hidden={hidden} toolName="ثبت اپراتور جدید" OnClick={setNewOperator}>
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
