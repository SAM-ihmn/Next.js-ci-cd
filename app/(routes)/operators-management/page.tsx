"use client";

import SearchBox from "@/app/_components/tool-bar/SearchBox";
import ToolBar from "@/app/_components/tool-bar/ToolBar";
import { MenuItem, } from "@mui/material";
import React from "react";
import {OperatorTableHeaderTitles, operatorTeams} from '../../_components/_data/data'
import Table from "@/app/_components/table/Table";
import OperatorRows from "@/app/_components/table/TableRow/OperatorRows";

type Props = {};

const page = (props: Props) => {

  return (
    <div className="fullSize flex flex-col gap-2">
      <ToolBar title="لیست اپراتورها" hiddenNewTicket={true}>
        <SearchBox selectFieldTitle="نوع کاربر">
          {operatorTeams.map((team) => 
            <MenuItem value={team.id}>{team.teamName}</MenuItem>
        )}
        </SearchBox>
      </ToolBar>

      <Table headerTitleList={OperatorTableHeaderTitles}>
        <OperatorRows />
      </Table>



    </div>
  );
};

export default page;
