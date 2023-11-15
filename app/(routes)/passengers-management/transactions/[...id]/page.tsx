import { passengerTransactionsTableHeader } from "@/app/_components/_data/drivers";
import Table from "@/app/_components/table/Table";
import DriverTransactionsRows from "@/app/_components/table/TableRow/DriverTransactionsRows";
import PassengerTransactionsRows from "@/app/_components/table/TableRow/PassengerTransactionRow";
import SearchBox from "@/app/_components/tool-bar/SearchBox";
import ToolBar from "@/app/_components/tool-bar/ToolBar";
import React from "react";

type Props = {};

const page = ({ params }: { params: { id: number } }) => {
  return (
    <div className="fullSize flex flex-col gap-2">
      <ToolBar title="تراکنش های مسافر" hidden={true} hiddenNewTicket={true}>
        <SearchBox selectFieldTitle="وضعیت مسافر" hiddenSelectPart={true} />
      </ToolBar>
      <Table headerTitleList={passengerTransactionsTableHeader}>
        <PassengerTransactionsRows />
      </Table>
    </div>
  );
};

export default page;
