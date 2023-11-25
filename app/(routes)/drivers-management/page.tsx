"use client";

import { driverHeaderTitles, driverStatus } from "@/app/_components/_data/data";
import Table from "@/app/_components/table/Table";
import DriverRows from "@/app/_components/table/TableRow/DriverRows";
import SearchBox from "@/app/_components/tool-bar/SearchBox";
import ToolBar from "@/app/_components/tool-bar/ToolBar";
import { MenuItem } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="fullSize flex flex-col gap-2">
      <ToolBar title="لیست رانندگان" hidden={true} hiddenNewTicket={true}>
        <SearchBox selectFieldTitle="نوع کاربر">
          {driverStatus.map((status, index) => (
            <MenuItem key={index} value={index}>{status}</MenuItem>
          ))}
        </SearchBox>
      </ToolBar>
      <Table headerTitleList={driverHeaderTitles}>
        <DriverRows/>
      </Table>
    </div>
  );
};

export default page;
