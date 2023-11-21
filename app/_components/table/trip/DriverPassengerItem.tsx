type DriverPassengerItemDataType = {
  [key: string]: string;
};

 const DriverPassengerItem = (data: DriverPassengerItemDataType) => {
  const { FarsiTitle, name, phone } = data

  return (
    <div className="fullSize flex lg:flex-2 flex-row-reverse items-center">
      <div className="lg:hidden flex-1 text-right">{FarsiTitle}</div>
      <div className="fullSize flex flex-row-reverse xs:flex-col xs:items-end items-center flex-2 sm:bg-grayBackground md:bg-grayBackground px-2 lg:px-0 rounded-md">
        <div className="flex-1 text-right">{name}</div>
        <div className="flex-1 text-center">{phone}</div>
      </div>
    </div>
  );
};

export default DriverPassengerItem;