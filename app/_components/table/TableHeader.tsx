import React from "react";

type Props = {
  headerTitleList: string[],
  sortDataFunction? : () => void,
  className? : string
};

const TableHeader = (props: Props) => {
  const {headerTitleList, sortDataFunction, className} = props

  return (
    <div className="w-full h-12 hidden lg:flex flex-row-reverse justify-between items-center py-2 px-2 bg-powderBlue rounded-t-lg">
      {headerTitleList.map((title, index) => (
        <div key={index} className={`text-center flex-1 ${sortDataFunction && 'cursor-pointer'} ${className}`} onClick={sortDataFunction}>
          {title}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
