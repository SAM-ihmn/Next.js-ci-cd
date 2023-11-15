// sidebar

export type sidebarDataType = {
  id: number,
  name: string,
  path: string,
  icon: React.ReactElement,
  subItems?: subItemType[],
};

export type subItemType = {
  id: number,
  name: string,
  path: string,
  icon: React.ReactElement,
};


// -------------- ModalItemsOptions -------------- //

export type ApiOutPut = {
  name?: string,
  value: string | number | undefined  ,
  classes?: string
}

// -------------- DriverList component -------------- //

export type DriverDataType = {
  code: number,
  name: string,
  nationCode: number,
  phoneNum: string,
  signUpDate: string,
  vehicle: {
    model: string,
    code: string,
  };
};

// -------------- passengerList component -------------- //

export type PassengerDataType = {
  code: number | null,
  name: string | null,
  nationalCode: string | null,
  phoneNumber: string | null,
  disability: string | null,
  status: 'فعال' | 'بررسی مدارک'| 'غیرفعال'
}