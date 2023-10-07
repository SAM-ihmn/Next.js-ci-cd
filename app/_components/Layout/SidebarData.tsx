import { sidebarDataType } from "@/types/layput";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";


export const sidebarData: sidebarDataType[] = [
  {
    id: 1,
    name: "داشبورد",
    path: "/",
    icon: <DashboardRoundedIcon />,
  },
  {
    id: 2,
    name: "پنل ادمین",
    path: "/admin",
    icon: <AdminPanelSettingsRoundedIcon />,
    subItems: [
      {
        id: 1,
        name: "ثبت اپراتور جدید",
        path: "/admin/new-operator",
        icon: <AdminPanelSettingsRoundedIcon />,
      },
      {
        id: 2,
        name: "دسترسی اپراتورها",
        path: "/admin/access-management",
        icon: <AdminPanelSettingsRoundedIcon />,
      },
      {
        id: 3,
        name: "نمایش سفرها",
        path: "/admin/all-trips",
        icon: <AdminPanelSettingsRoundedIcon />,
      },
    ],
  },
  {
    id: 3,
    name: "مدیریت رانندگان",
    path: "/drivers",
    icon: <DirectionsCarRoundedIcon />,
    subItems: [
      {
        id: 1,
        name: 'لیست تمام راننده ها' ,
        path: '/drivers/drivers-info',
        icon: <DirectionsCarRoundedIcon />
      },
      {
        id: 2,
        name: 'اطلاعات راننده ها' ,
        path: '/drivers/drivers-info',
        icon: <DirectionsCarRoundedIcon />
      },
      {
        id: 3,
        name: 'اطلاعات رانندگان' ,
        path: '/drivers/drivers-info',
        icon: <DirectionsCarRoundedIcon />
      },
    ]
  },
  {
    id: 4,
    name: "مدیریت مسافران",
    path: "/passengers",
    icon: <PersonRoundedIcon />,
  },
];