"use client";

import React, { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { sidebarData } from "./SidebarData";
import { sidebarDataType } from "@/types/types";
import { useRouter } from "next/navigation";
import { Divider } from "@mui/material";
import { ExitIcon, LogoIcon } from "@/app/_assets/Icons";

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

  const handleLogout = () => {
    if (typeof window === "object") {
    window.localStorage.removeItem("token")
    }
    router.push('/login')
  }

  return (
    <div className="lg:w-64 xs:hidden sm:hidden md:hidden h-full flex flex-col justify-between items-center bg-white py-5">
      <div className="w-full flex justify-center items-center h-10"><LogoIcon className="w-30 h-6"/></div>
      <div className="w-full flex flex-col">
        {sidebarData.map((item) => (
          <div key={item.id} className="w-full flex flex-col">
            <div
              className={`flex flex-row-reverse text-blackText no-underline justify-between items-center gap-3 px-3 py-2 cursor-pointer ${
                selected?.id == item.id ? "bg-powderBlue rounded-lg mx-2" : null
              } md:justify-center md:m-0 md:rounded-md`}
              onClick={() => handleSelectItem(item)}
            >
              <div className="flex flex-row-reverse gap-3">
                <div className="flex items-center">{item.icon}</div>
                <div className="flex items-center">{item.name}</div>
              </div>
            </div>

            {/* <Divider/> */}

          </div>
        ))}
      </div>
      <div className="w-full h-10 flex flex-row-reverse justify-start items-center cursor-pointer gap-3 px-5" onClick={handleLogout}>
        <div className="flex justify-center items-center">
          <ExitIcon className="w-5 h-5" />
        </div>
        <div className="md:hidden">{"خروج"}</div>
      </div>
    </div>
  );
};

export default SideBar;
