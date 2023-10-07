import { Box, TextField } from "@mui/material";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-end">
        <h1 className="w-fit  py-3 px-4">{"تعیین سطح دسترسی اپراتورها"}</h1>
      </div>

      <div className="w-full flex flex-col gap-3 py-3">
        <div className="flex flex-col border border-solid border-grayBorder rounded-md p-3">
          <div className="flex gap-3"></div>
        </div>
      </div>
    </>
  );
};

export default page;
