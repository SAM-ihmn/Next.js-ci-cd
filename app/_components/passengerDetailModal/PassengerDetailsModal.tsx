import React from "react";
import FullScreenModal from "../modal/FullScreenModal";
import { Button, Divider } from "@mui/material";
import theme from "@/materialTheme/theme";
import { useRouter } from "next/navigation";
import SectionItem from "../detailModals/SectionItem";
import { PassengerDataType } from "@/types/types";
import { SectionHeader } from "../detailModals/SectionHeader";

type Props = {
  open: boolean;
  handleClose: () => void;
  selectedPassengerData: PassengerDataType;
};

const PassengerDetailsModal = (props: Props) => {
  const { open, handleClose, selectedPassengerData } = props;
  const router = useRouter();

  //* actions **//
  const handlePassengerTransaction = () => {};

  const changePassengerAccessability = () => {};

  const value = '125'

  return (
    <FullScreenModal
      open={open}
      handleClose={handleClose}
      modalTitle="مشخصات مسافر"
    >
      <div className="w-full h-full flex flex-col justify-between gap-2">
        <div className="w-full h-50 flex flex-col gap-2 overflow-y-auto">
          {/* first section */}
          <section className="w-full flex flex-col lg:flex-row-reverse lg:flex-wrap grayBorder px-2 py-3">
            <SectionHeader
              headerTitle="مشخصات مسافر"
              onClickFunction={handlePassengerTransaction}
              hiddenButton
              buttonTitle='غیرفعال کردن مسافر'
            />
            <SectionItem title="کد مسافر" value={value} />
            <SectionItem title="وضعیت مسافر" value={value} />
            <SectionItem title="نام و نام خانوادگی" value={value} />
            <SectionItem title="کدملی" value={value} />
            <SectionItem title="معلولیت" value={value} />
            <SectionItem title="استعلام از بهزیستی" value={value} />
            <SectionItem title="شماره تماس" value={value} />
            <SectionItem title="ایمیل" value={value} />
          </section>

          <section className="w-full flex flex-col lg:flex-row-reverse lg:flex-wrap grayBorder px-2 py-3">
          <SectionHeader
              headerTitle="مشخصات مالی"
            />
            <SectionItem title="شماره حساب" value={value} />
            <SectionItem title="شماره شبا" value={value} />
            <SectionItem title="کمک به خیریه" value={value} />
            <SectionItem title="برداشت از خیریه" value={value} />
            <SectionItem title="اعتبار فعلی" value={value} />
          </section>

          <section className="w-full flex flex-col lg:flex-row-reverse lg:flex-wrap grayBorder px-2 py-3">
          <SectionHeader
              headerTitle="گزارش کلی"
            />
            <SectionItem title="تاریخ عضویت" value={value} />
            <SectionItem title="کل سفرها" value={value} />
            <SectionItem title="امتیاز" value={value} />
          </section>
        </div>

        <div className="w-full h-16 flex gap-2 sticky bottom-2">
          <div className="flex-1">
            <Button fullWidth sx={{ backgroundColor: theme.palette.blue.main }}>
              {"مشاهده مدارک"}
            </Button>
          </div>
          <div className="flex-1">
            <Button
              fullWidth
              sx={{ backgroundColor: theme.palette.blue.main }}
              onClick={() =>
                router.push(`/passengers-management/transactions/${selectedPassengerData.code}`)
              }>
              {"مشاهده تراکنش ها"}
            </Button>
          </div>
        </div>
      </div>
    </FullScreenModal>
  );
};

export default PassengerDetailsModal;
