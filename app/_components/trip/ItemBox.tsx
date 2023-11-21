type ItemBoxType = {
  itemValue: string | number | undefined;
  itemTitle: string;
};

const ItemBox = (props: ItemBoxType) => {
  const { itemValue, itemTitle } = props;
  return (
    <div className="sm:w-full w-1/2 flex p-1">
      <div className="w-1/2 text-center bg-grayBackground rounded-md px-2">
        {itemValue}
      </div>
      <div className="w-1/2 text-right">{itemTitle}</div>
    </div>
  );
};

export default ItemBox;