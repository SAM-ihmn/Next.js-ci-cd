"use client";

import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

type ResponsibleOperator = {
  code: string;
  department: string;
};

type Props = {
  responsibleOperator: ResponsibleOperator;
  setResponsibleOperator: React.Dispatch<
    React.SetStateAction<ResponsibleOperator>
  >;
};

const SetOperator = (props: Props) => {
  const { responsibleOperator, setResponsibleOperator } = props;
  // actions
  const handleOperatorCode = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResponsibleOperator({ ...responsibleOperator, code: e.target.value });
  };

  const handleOperatorDepartment = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResponsibleOperator({
      ...responsibleOperator,
      department: e.target.value,
    });
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box className="text-right pb-2">{"مشخصات اپراتور"}</Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 1,
        }}
      >
        <TextField
          dir="rtl"
          value={responsibleOperator.code}
          onChange={(e) => handleOperatorCode(e)}
          sx={{ width: { xs: "100%", lg: "50%" } }}
          placeholder="شناسه اپراتور"
        />
        <TextField
          dir="rtl"
          value={responsibleOperator.department}
          onChange={(e) => handleOperatorDepartment(e)}
          sx={{ width: { xs: "100%", lg: "50%" } }}
          placeholder="واحد سازمانی"
        />
        
      </Box>
    </Box>
  );
};

export default SetOperator;
