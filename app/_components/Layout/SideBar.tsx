"use client";

import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { sidebarData } from "../SidebarData";
import { sidebarDataType } from "@/types/layput";
import { useRouter } from "next/navigation";

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
    <div className="w-64 h-full flex flex-col justify-between items-center bg-grayBg py-5">
      <div className="w-full h-10 bg-redBtn"></div>
      <div className="w-full flex flex-col">
        {sidebarData.map((item) => (
          <div key={item.id} className="w-full flex flex-col">
            <div
              className={`flex flex-row-reverse text-blackText no-underline justify-between items-center gap-3 px-3 py-3 cursor-pointer hover:bg-grayBorder ${
                selected?.id == item.id ? "bg-grayBorder" : null
              }`}
              onClick={() => handleSelectItem(item)}
            >
              <div className="flex flex-row-reverse gap-3">
                <div className="flex items-center">{item.icon}</div>
                <div className="flex items-center">{item.name}</div>
              </div>
              <div className={`${item.subItems ? null : "hidden"}`}>
                {selected?.id === item.id && open === true ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </div>
            </div>
            {selected?.id === item.id && open === true ? (
              <div className="w-full flex flex-col">
                {item.subItems?.map((subItem) => (
                  <div key={subItem.id} className="">
                    {subItem.name}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="w-full h-10 flex flex-row-reverse justify-start items-center gap-3 px-5 bg-redBtn">
        <div>
          <LogoutIcon />
        </div>
        <div>{"خروج"}</div>
      </div>
    </div>
  );
};

export default SideBar;
