type TripStatus = {
  id: number;
  status: string;
};

type OperatorTeam = {
  id: number;
  teamName: string;
};

type TripDataType = {
  code: number;
  status: "inProgress" | "done";
  payment: "done" | "fail";
  driver: {
    name: string;
    phone: string;
  };
  passenger: {
    name: string;
    phone: string;
  };
};

type DriverDataType = {
  code: number,
  name: string,
  phoneNumber: string,
  nationalCode: string,
  drivingLicenseNumber: string,
  disability: 'ناشنوا' | 'کم شنوا',
  status: 'فعال' | 'در انتظار بررسی مدارک' | 'غیرفعال',
}

type PassengerData = {
  code: number,
  name: string,
  phoneNumber: string,
  nationalCode: string,
  disability: 'ناشنوا' | 'نابینا',
  status: 'فعال' | 'در انتظار بررسی مدارک' | 'غیرفعال'
}


//******** routes/operator-management/page.tsx ********//

// header of table
export const OperatorTableHeaderTitles : string[] = ['شناسه کارمند', 'نام و نام خانوادگی', 'کد ملی', 'ایمیل' , 'شماره تماس' , 'نوع کاربر', 'جزئیات'
]

// options for searchBar
export const operatorTeams: OperatorTeam[] = [
  {
    id: 1,
    teamName: "امور مالی",
  },
  {
    id: 2,
    teamName: "رسیدگی به شکایات رانندگان",
  },
  {
    id: 3,
    teamName: "رسیدگی به شکایات مسافران",
  },
  {
    id: 4,
    teamName: "پشتیبانی فنی",
  },
];

//data of table items
export const OperatorsData = [
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
  {
    code: 2569,
    name: 'مریم پوراحمدی',
    nationalCode: '6640059029',
    phoneNumber: '09197124988',
    email:'pourahmadi-maryam@gmail.com',
    department: 'بررسی شکایات مسافران',
  },
]

//******** routes/trip-management/page.tsx ********//

// header of table
export const tripTableHeaderTitles: string[] = [
  "کد سفر",
  "نام راننده",
  "شماره تماس راننده",
  "نام مسافر",
  "شماره تماس مسافر",
  "وضعیت سفر",
  "جزئیات بیشتر",
];

// options for searchBar
export const tripStatus: TripStatus[] = [
  {
    id: 1,
    status: "در حال سفر",
  },
  {
    id: 2,
    status: "تمام شده",
  },
  {
    id: 3,
    status: "جستجوی سفر",
  },
];

// data of table items
export const TripData: TripDataType[] = [
  {
    code: 113,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 114,
    status: "done",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 115,
    status: "done",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 116,
    status: "done",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 117,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 118,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 119,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 114,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 115,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 116,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 117,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 118,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 119,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 117,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 118,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
  {
    code: 119,
    status: "inProgress",
    payment: "done",
    driver: {
      name: "محمدمهدی رسولی",
      phone: "09197124988",
    },
    passenger: {
      name: "میلاد نوری",
      phone: "09197124988",
    },
  },
];

//******** routes/drivers-management/page.tsx ********//
export const driverStatus:string[] = ['فعال', 'در انتظار بررسی مدارک', 'غیرفعال']

export const driverHeaderTitles : string[] = ['کد راننده', 'نام و نام خانوادگی', 'شماره تماس', 'کد ملی', 'شماره گواهینامه', 'معلولیت', 'وضعیت راننده', 'جزئیات بیشتر']

export const DriversData : DriverDataType[] = [
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ناشنوا',
    status: 'فعال',
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ناشنوا',
    status: 'فعال',
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ناشنوا',
    status: 'فعال',
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ناشنوا',
    status: 'فعال',
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ناشنوا',
    status: 'فعال',
  }
]

//******** routes/passengers-management/page.tsx ********//

export const passengerStatus:string[] = ['فعال', 'در انتظار بررسی مدارک', 'غیرفعال']

export const passengerHeaderTitles = ['کد مسافر', 'نام و نام خانوادگی', 'شماره تماس', 'کدملی', 'معلولیت', 'جزئیات بیشتر']

export const PassengersData: PassengerData[] = [
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    disability: 'ناشنوا',
    status: 'غیرفعال'
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    disability: 'ناشنوا',
    status: 'فعال'
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    disability: 'ناشنوا',
    status: 'فعال'
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    disability: 'ناشنوا',
    status: 'فعال'
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    disability: 'ناشنوا',
    status: 'فعال'
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    disability: 'ناشنوا',
    status: 'فعال'
  },
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    disability: 'ناشنوا',
    status: 'فعال'
  },

]