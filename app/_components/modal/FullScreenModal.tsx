import * as React from "react";
import Modal from "@mui/material/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type Props = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  ClassName?: string
};

export default function FullScreenModal(props: Props) {
  const { open, handleClose, children, ClassName } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
            width: "100%",
            height: "100%",
            backgroundColor: '#F5F6FA',
          },
        }}
      >
        <div className="w-[660px] h-full flex flex-col sm:fullSize bg-white outline-0 p-3">
          <div className="w-full  py-4 flex justify-between items-center">
            <div className="w-fit cursor-pointer" onClick={handleClose}>
              <CloseOutlinedIcon />
            </div>
            <h1>{"جزئیات سفر"}</h1>
          </div>
          <div className={`w-full h-full  ${ClassName}`} >{children}</div>
        </div>
      </Modal>
    </div>
  );
}
