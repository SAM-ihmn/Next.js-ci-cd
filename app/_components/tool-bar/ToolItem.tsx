import React from "react";

type Props = {
  children?: React.ReactNode,
  toolName: string,
  disable? : boolean,
  ClassName?: string,
  OnClick: () => void,
  hidden?: boolean
};

const ToolItem = (props: Props) => {
  const {children, toolName, disable, ClassName, OnClick, hidden} = props
  return (
    <>
      <div className={`lg:w-1/4 lg:h-20 w-12 h-12  justify-evenly items-center px-3 py-1  shadow-md shadow-grayText rounded-md ${disable === true ? 'bg-grayBackgroundDarker cursor-not-allowed': 'bg-powderBlue cursor-pointer'} ${hidden === true ? 'hidden' : 'flex'} ${ClassName} `} onClick={OnClick}>
        <div className="flex items-center justify-center">
          {children}
        </div>
        <div className={`hidden lg:flex  ${disable === true ? 'text-grayText' : 'text-blackText '} `}>{toolName}</div>
      </div>
    </>
  );
};

export default ToolItem;
