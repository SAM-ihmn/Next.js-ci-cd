import { passengerTransactionsTableHeader } from "@/app/_components/_data/drivers";
import { PassengersData } from "@/app/_components/_data/data";
import Table from "@/app/_components/table/Table";
import DriverTransactionsRows from "@/app/_components/table/TableRow/DriverTransactionsRows";
import PassengerTransactionsRows from "@/app/_components/table/TableRow/PassengerTransactionRow";
import SearchBox from "@/app/_components/tool-bar/SearchBox";
import ToolBar from "@/app/_components/tool-bar/ToolBar";
import React from "react";

type Props = {};

export function generateStaticParams() {
  //define params
  return PassengersData.map ((passenger) => {id : driver.code})
}

const page = ({ params }: { params: { id: number } }) => {
  const {id} = params;
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
