import React, { useState } from "react";
import { sidebarData } from "./SidebarData";
import { Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { sidebarDataType } from "@/types/types";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";


type Props = {};

const DrawerMenu = (props: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState<sidebarDataType | null>(null);
  const [open, setOpen] = useState(false);


  const handleSelectItem = (navItem: sidebarDataType) => {
    setSelected(navItem);
    if (navItem.subItems) {
      setOpen(!open);
    } else {
      setOpen(false);
      router.push(navItem.path);
    }
  };



  return <div className="fullSize flex flex-col justify-between items-center py-4">
    <div>TAXI 8</div>
    <Divider/>
    <div className="w-full">
      {sidebarData.map((item) => 
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
              {item.subItems?.map((subItem : sidebarDataType) => (
                <div key={subItem.id}  className="flex gap-3 items-center justify-end  pr-10 py-3  cursor-pointer md:justify-center md:px-0" onClick={() => router.push(subItem.path)}>
                    <div className="md:hidden">{subItem.name}</div>
                    <div>{subItem.icon}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
    <Divider/>
    <div>LogOut</div>
  </div>;
};

export default DrawerMenu;
