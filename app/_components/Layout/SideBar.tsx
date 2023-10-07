"use client";

import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { sidebarData } from "./SidebarData";
import { sidebarDataType } from "@/types/layput";
import { useRouter } from "next/navigation";
import { Divider } from "@mui/material";

type Props = {};

const SideBar = (props: Props) => {
  // states
  const router = useRouter();
  const [selected, setSelected] = useState<sidebarDataType | null>(null);
  const [open, setOpen] = useState(false);

  // actions
  const handleSelectItem = (navItem: sidebarDataType) => {
    setSelected(navItem);
    if (navItem.subItems) {
      setOpen(!open);
    } else {
      setOpen(false);
      router.push(navItem.path);
    }
  };


  return (
    <div className=" lg:w-64 md:w-16 sm:hidden h-full flex flex-col justify-between items-center border-r-0 border-t-0 border-b-0 border-l border-solid border-grayBorder  py-5">
      <div className="w-full flex justify-center items-center h-10">TAXI 8</div>
      <div className="w-full flex flex-col">
        {sidebarData.map((item) => (
          <div key={item.id} className="w-full flex flex-col">
            <div
              className={`flex flex-row-reverse text-blackText no-underline justify-between items-center gap-3 px-3 py-3 cursor-pointer hover:bg-grayBorder ${
                selected?.id == item.id ? "bg-grayBorder rounded-r-lg mr-2" : null
              } md:justify-center md:m-0 md:rounded-md`}
              onClick={() => handleSelectItem(item)}
            >
              <div className="flex flex-row-reverse gap-3">
                <div className="flex items-center">{item.icon}</div>
                <div className="flex items-center md:hidden">{item.name}</div>
              </div>
              <div className={`${item.subItems ? null : "hidden"} md:hidden `}>
                {selected?.id === item.id && open === true ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </div>
            </div>
            <Divider/>
            {selected?.id === item.id && open === true ? (
              <div className="w-full flex flex-col">
                {item.subItems?.map((subItem) => (
                  <div key={subItem.id}  className="flex gap-3 items-center justify-end  pr-10 py-3  cursor-pointer md:justify-center md:px-0" onClick={() => router.push(subItem.path)}>
                      <div className="md:hidden">{subItem.name}</div>
                      <div>{subItem.icon}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="w-full h-10 flex flex-row-reverse justify-start items-center cursor-pointer gap-3 px-5" onClick={() => router.push('/login')}>
        <div>
          <LogoutIcon />
        </div>
        <div className="md:hidden">{"خروج"}</div>
      </div>
    </div>
  );
};

export default SideBar;
