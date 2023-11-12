'use client';

import React, {useState } from "react";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import RightDrawer from "../drawer/RightDrawer";
import DrawerMenu from "./DrawerMenu";

const TopBar = () => {
const [state, setState] = useState<boolean>(false)

  const handleModal = () => {
    setState(true)
  }

  const handleClose = () => {
    setState(false)
  }
  

  return (
    <div className="w-full h-16 flex justify-between items-center px-5">
      <div>10:23</div>
      <div className="flex gap-3">
        <div className="hidden lg:flex items-center">
          <Avatar/>
        </div>
        <div className="flex lg:hidden md:justify-center md:items-center md:cursor-pointer" onClick={handleModal}>
          <MenuIcon fontSize="large"/>
        </div>
        <RightDrawer state={state} handleClose={() => handleClose()} children={<DrawerMenu/>}/>
      </div>
    </div>
  );
};

export default TopBar;
