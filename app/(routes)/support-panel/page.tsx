import { supportHeaderTitles, ticket } from "@/app/_components/_data/data";
import Table from "@/app/_components/table/Table";
import SupportRows from "@/app/_components/table/TableRow/SupportRows";
import SearchBox from "@/app/_components/tool-bar/SearchBox";
import ToolBar from "@/app/_components/tool-bar/ToolBar";
import { MenuItem } from "@mui/material";
import React from "react";

type Props = {};

export const ticketTypes = ["رسیدگی به اعتراضات", "امور مالی"];

const page = (props: Props) => {
  return (
    <div className="fullSize flex flex-col gap-2 p-5">
      <ToolBar title="پنل پشتیبانی" hidden={true}>
        <SearchBox selectFieldTitle="دسته بندی تیکت">
          {ticketTypes.map((team, index) => (
            <MenuItem value={index}>{team}</MenuItem>
          ))}
        </SearchBox>
      </ToolBar>

      <Table headerTitleList={supportHeaderTitles}>
        <SupportRows tickets={ticket} />
      </Table>
    </div>
  );
};

export default page;