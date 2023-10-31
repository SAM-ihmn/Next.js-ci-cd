type Props = {
  itemName: string;
  itemValue: any;
  ClassName?: string
};

type Props2 = {
  itemName: string;
  itemFirstValue: any;
  SecondItem: any;
  equal: boolean;
  ClassName?: string;
};

export const ItemFullWidth = (props: Props) => {
  const { itemName, itemValue, ClassName } = props;

  return (
    <div className={`fullSize flex lg:flex-1 flex-row-reverse items-center ${ClassName}`}>
      <div className="lg:hidden flex-1 text-right">{itemName}</div>
      <div className="fullSize flex flex-row-reverse items-center flex-2 sm:bg-grayBackground md:bg-grayBackground  lg:px-0 rounded-md">
        <div className="flex-1 text-right lg:text-center pr-2 lg:pr-0">{itemValue}</div>
      </div>
    </div>
  );
};

export const ItemHalfWidth = (props: Props2) => {
  const { itemName, itemFirstValue, SecondItem, equal, ClassName } = props;

  return (
    <div className="fullSize lg:w-1/2 lg:flex-1 flex flex-row-reverse lg:items-center">
      <div className="lg:hidden flex-1 w-full text-right">{itemName}</div>
      <div className="flex-2 lg:w-full w-1/2 flex text-right lg:text-center gap-2 lg:gap-0">
        <div
          className={`lg:hidden text-center rounded-md ${
            equal === true ? "w-1/2" : "w-2/3"
          } ${ClassName}`}
        >
          {SecondItem}
        </div>
        <div
          className={`lg:w-full lg:h-full sm:bg-grayBackground md:bg-grayBackground text-center rounded-md ${
            equal === true ? "w-1/2" : "w-1/3"
          } text-right lg:text-center pr-2 lg:pr-0 `}
        >
          {itemFirstValue}
        </div>
      </div>
    </div>
  );
};
