import { PassengerDataType } from "@/types/types";
import { TripDataType } from "../types/tripTypes";
import { fabClasses } from "@mui/material";

type TripStatus = {
  id: number;
  status: string;
};

type OperatorTeam = {
  id: number;
  teamName: string;
};



export type DriverDataType = {
  code: number,
  name: string,
  phoneNumber: string,
  nationalCode: string,
  drivingLicenseNumber: string,
  disability: 'ناشنوا' | 'کم شنوا' | 'ندارد',
  status: 'فعال' | 'در انتظار بررسی مدارک' | 'غیرفعال',
  transActions:{
    cardNumber: number,
    shaba: string
  },
  vehicle: {
    model: string,
    platNumber: string
  },
  report: {
    numberOfTrips: number,
    score: string,
    netIncome: string,
    registeryDate: string
  }

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
export const OperatorTableHeaderTitles : string[] = ['شناسه کارمند', 'نام و نام خانوادگی', 'کد ملی', 'ایمیل' , 'شماره تماس' , 'نوع کاربر'
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
export const driverStatus:string[] = ['فعال', 'بررسی مدارک', 'غیرفعال']

export const driverHeaderTitles : string[] = ['کد راننده', 'نام و نام خانوادگی', 'شماره تماس', 'کد ملی', 'شماره گواهینامه', 'معلولیت', 'وضعیت راننده']

export const DriversData : DriverDataType[] = [
  {
    code: 2578,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ناشنوا',
    status: 'فعال',
    transActions : {
      cardNumber: 6548952375893214,
      shaba: 'R00248665867869564355'
    },
    vehicle: {
      model: 'پژو ۲۰۶',
      platNumber: `25 ${'ب'} ${'25486'}`
    },
    report : {
      numberOfTrips: 52,
      score: '6/10',
      netIncome : '260000000 RI',
      registeryDate: '1402-12-25'
    }
  },
  {
    code: 2579,
    name: 'محمد رضوی',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ندارد',
    status: 'غیرفعال',
    transActions : {
      cardNumber: 4589621458963245,
      shaba: 'R0000000078695000055'
    },
    vehicle: {
      model: '405',
      platNumber: `25 ${'ب'} ${'25486'}`
    },
    report : {
      numberOfTrips: 52,
      score: '9/10',
      netIncome : '120000000 RI',
      registeryDate: '1402-2-30'
    }
  },
  {
    code: 2580,
    name: 'مرتضی احمدی ',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ندارد',
    status: 'در انتظار بررسی مدارک',
    transActions : {
      cardNumber: 4589621458963245,
      shaba: 'R0000000078695000055'
    },
    vehicle: {
      model: '405',
      platNumber: `25 ${'ب'} ${'25486'}`
    },
    report : {
      numberOfTrips: 52,
      score: '9/10',
      netIncome : '120000000 RI',
      registeryDate: '1402-2-30'
    }
  },
  {
    code: 2581,
    name: 'امیرحسین رحیم وند',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ناشنوا',
    status: 'فعال',
    transActions : {
      cardNumber: 6548952375893214,
      shaba: 'R00248665867869564355'
    },
    vehicle: {
      model: 'پژو ۲۰۶',
      platNumber: `25 ${'ب'} ${'25486'}`
    },
    report : {
      numberOfTrips: 52,
      score: '6/10',
      netIncome : '260000000 RI',
      registeryDate: '1402-12-25'
    }
  },
  {
    code: 2582,
    name: 'محمد رضوی',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ندارد',
    status: 'غیرفعال',
    transActions : {
      cardNumber: 4589621458963245,
      shaba: 'R0000000078695000055'
    },
    vehicle: {
      model: '405',
      platNumber: `25 ${'ب'} ${'25486'}`
    },
    report : {
      numberOfTrips: 52,
      score: '9/10',
      netIncome : '120000000 RI',
      registeryDate: '1402-2-30'
    }
  },
  {
    code: 2583,
    name: 'مرتضی احمدی ',
    phoneNumber: '09197124988',
    nationalCode: '0059841277',
    drivingLicenseNumber: '65983225',
    disability: 'ندارد',
    status: 'در انتظار بررسی مدارک',
    transActions : {
      cardNumber: 4589621458963245,
      shaba: 'R0000000078695000055'
    },
    vehicle: {
      model: '405',
      platNumber: `25 ${'ب'} ${'25486'}`
    },
    report : {
      numberOfTrips: 52,
      score: '9/10',
      netIncome : '120000000 RI',
      registeryDate: '1402-2-30'
    }
  },
]


//******** routes/passengers-management/page.tsx ********//

export const passengerStatus:string[] = ['فعال', 'بررسی مدارک', 'غیرفعال']

export const passengerHeaderTitles = ['کد مسافر', 'نام و نام خانوادگی', 'شماره تماس', 'کدملی', 'معلولیت']

export const PassengersData: PassengerDataType[] = [
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


// ×××××× 

export const supportHeaderTitles = ['شماره تیکت', 'موضوع تیکت', 'متن تیکت', 'نام کاربر', 'شماره تماس کاربر', 'ساعت', 'تاریخ']


// ticket data:

export const ticket = [{
  code: 125,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: true,
},
{
  code: 126,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: true,
},
{
  code: 127,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: true,
},
{
  code: 128,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: true,
},
{
  code: 129,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: true,
},
{
  code: 130,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: true,
},
{
  code: 131,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: true,
},
{
  code: 132,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: true,
},
{
  code: 133,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: false,
},
{
  code: 134,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: false,
},
{
  code: 135,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: false,
},
{
  code: 136,
  subject: "اعتراضات",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  user: "مرجان امیری",
  userPhoneNumber: "09197124988",
  date: "1402-12-25",
  hour: "20:30",
  unread: false,
},
]