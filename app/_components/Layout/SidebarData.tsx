import {
  DashboardIcon,
  OperatorIcon,
  PassengerIcon,
  SupportIcon,
  TripIcon,
  VehicleIcon,
} from "@/app/_assets/Icons";
import { sidebarDataType } from "@/types/types";

export const sidebarData: sidebarDataType[] = [
  // {
  //   id: 1,
  //   name: "داشبورد",
  //   path: "/",
  //   icon: <DashboardIcon className="w-5 h-5" />,
  // },
  {
    id: 2,
    name: "مدیریت سفرها",
    path: "/trip-management",
    icon: <TripIcon className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "مدیریت اپراتورها",
    path: "/operators-management",
    icon: <OperatorIcon className="w-5 h-5" />,
  },
  {
    id: 4,
    name: "مدیریت راننده ها",
    path: "/drivers-management",
    icon: <VehicleIcon className="w-5 h-5" />,
  },
  {
    id: 5,
    name: "مدیریت مسافرها",
    path: "/passengers-management",
    icon: <PassengerIcon className="w-5 h-5" />,
  },
  {
    id: 6,
    name: "پنل پشتیبانی",
    path: "/support-panel",
    icon: <SupportIcon className="w-6 h-6" />,
  },
];
