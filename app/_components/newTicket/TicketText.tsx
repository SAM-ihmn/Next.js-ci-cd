import theme from "@/materialTheme/theme";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

type Props = {
  subject:string,
  setSubject: React.Dispatch<React.SetStateAction<string>>,
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>
};

const TicketText = (props: Props) => {
const {subject, setSubject, content, setContent} = props

  const handleSubjectChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSubject(e.target.value);
  };

  const handleContentChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContent(e.target.value);
  };

  return (
    <Box sx={{backgroundColor: theme.palette.white.main, padding: 2, borderRadius: "8px"}}>
      <Box className="text-right pb-2">{"تعریف تیکت"}</Box>

      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}
      >
        <TextField
          dir="rtl"
          placeholder="عنوان تیکت را وارد کنید."
          value={subject}
          onChange={(e) => handleSubjectChanges(e)}
          sx={{ width: "100%" }}
        />
        <TextField
          dir="rtl"
          placeholder="متن تیکت را وارد کنید."
          value={content}
          onChange={handleContentChanges}
          sx={{
            width: "100%",
            "& .mui-1lkr5rz-MuiInputBase-input-MuiOutlinedInput-input": {
              height: "15rem",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TicketText;
