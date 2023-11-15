"use client";

import { passengerHeaderTitles } from "@/app/_components/_data/data";
import Table from "@/app/_components/table/Table";
import PassengerRows from "@/app/_components/table/TableRow/PassengerRows";
import SearchBox from "@/app/_components/tool-bar/SearchBox";
import ToolBar from "@/app/_components/tool-bar/ToolBar";
import { MenuItem } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="fullSize flex flex-col gap-2">
      <ToolBar title="لیست مسافران" hidden={true} hiddenNewTicket={true}>
        <SearchBox hiddenSelectPart={true} selectFieldTitle="نوع مسافر"/>
      </ToolBar>
      <Table headerTitleList={passengerHeaderTitles}>
        <PassengerRows/>
      </Table>
    </div>
  );
};

export default page;
