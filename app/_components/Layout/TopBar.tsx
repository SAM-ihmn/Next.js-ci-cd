'use client';

import React, { EventHandler, useState } from "react";
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
        <div className="sm:hidden">
          <Avatar/>
        </div>
        <div className="hidden sm:flex sm:justify-center sm:items-center sm:cursor-pointer" onClick={handleModal}>
          <MenuIcon fontSize="large"/>
        </div>
        <RightDrawer state={state} handleClose={() => handleClose()} children={<DrawerMenu/>}/>
      </div>
    </div>
  );
};

export default TopBar;
