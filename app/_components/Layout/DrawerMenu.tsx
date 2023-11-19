import React, { useState } from "react";
import { sidebarData } from "./SidebarData";
import { Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { sidebarDataType } from "@/types/types";
import { LogoIcon } from "@/app/_assets/Icons";


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
    <div><LogoIcon className="w-20 h-20"/></div>
    <Divider/>
    <div className="w-full">
      {sidebarData.map((item) => 
          <div key={item.id} className="w-full flex flex-col">
          <div
            className={`flex flex-row-reverse text-blackText no-underline justify-between items-center gap-3 px-3 py-3 cursor-pointer hover:bg-grayBorder ${
              selected?.id == item.id ? "bg-grayBorder rounded-r-lg mr-2" : null
            }`}
            onClick={() => handleSelectItem(item)}
          >
            <div className="flex flex-row-reverse gap-3">
              <div className="flex items-center">{item.icon}</div>
              <div className="flex items-center">{item.name}</div>
            </div>

          </div>
          {/* <Divider/> */}
        </div>
      )}
    </div>
    <Divider/>
    <div className="cursor-pointer" onClick={() => router.push('/login')}>LogOut</div>
  </div>;
};

export default DrawerMenu;
