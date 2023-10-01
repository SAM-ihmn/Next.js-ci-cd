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
        name: "harchi",
        path: "/harchi",
        icon: <AdminPanelSettingsRoundedIcon />,
      },
      {
        id: 2,
        name: "harchi 2",
        path: "/harchi",
        icon: <AdminPanelSettingsRoundedIcon />,
      },
    ],
  },
  {
    id: 3,
    name: "مدیریت رانندگان",
    path: "/drivers",
    icon: <DirectionsCarRoundedIcon />,
  },
  {
    id: 4,
    name: "مدیریت مسافران",
    path: "/passengers",
    icon: <PersonRoundedIcon />,
  },
];