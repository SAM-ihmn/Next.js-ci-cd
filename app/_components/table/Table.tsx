import React from "react";
import TableHeader from "./TableHeader";

type Props = {
  headerTitleList: string[];
  children: React.ReactNode;
};

const Table = (props: Props) => {
  const { headerTitleList, children } = props;

  return (
    <div className="fullSize">
      <TableHeader headerTitleList={headerTitleList} />
      <div className="w-full h-[95%] flex flex-col gap-2 pt-2 justify-between lg:bg-white lg:rounded-b-lg lg:shadow-md lg:overflow-y-auto shadow-grayText ">
        {children}
      </div>
    </div>
  );
};

export default Table;
