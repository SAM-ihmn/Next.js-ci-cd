

// 
export type TripDetailModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: TripDataType | null;
};

export type TripDataType = {
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