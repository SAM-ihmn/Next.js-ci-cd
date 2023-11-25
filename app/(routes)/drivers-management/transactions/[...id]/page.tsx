import {driverTransactionsTableHeader } from '@/app/_components/_data/drivers'
import Table from '@/app/_components/table/Table'
import DriverTransactionsRows from '@/app/_components/table/TableRow/DriverTransactionsRows'
import SearchBox from '@/app/_components/tool-bar/SearchBox'
import ToolBar from '@/app/_components/tool-bar/ToolBar'
import React from 'react'
import { DriversData, DriverDataType } from "../../_data/data";

type Props = {
  params: {
    id: number;
  };
};

export function generateStaticParams() {
  //define params
  return DriversData.map ((driver) => {id : driver.id})
}

const page = ({ params }: Props) => {
const {id} = params
  return (
    <div key={params.id} className="fullSize flex flex-col gap-2">
    <ToolBar title="تراکنش های راننده" hidden={true } hiddenNewTicket={true}>
      <SearchBox selectFieldTitle="نوع کاربر" hiddenSelectPart={true}/>
    </ToolBar>
    <Table headerTitleList={driverTransactionsTableHeader}>
      <DriverTransactionsRows/>
    </Table>
  </div>
    )
}

export default page
