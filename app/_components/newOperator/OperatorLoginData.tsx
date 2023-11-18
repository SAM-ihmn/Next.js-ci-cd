import React from "react";
import { LoginData } from "../types/operatorTypes";
import { Box, TextField } from "@mui/material";
import theme from "@/materialTheme/theme";

type Props = {
  loginData: LoginData;
  setLoginData: React.Dispatch<React.SetStateAction<LoginData>>;
};

const OperatorLoginData = (props: Props) => {
  const { loginData, setLoginData } = props;

  // actions
  const handleOperatorUserName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginData({ ...loginData, username: e.target.value });
  };

  const handleOperatorPassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginData({ ...loginData, password: e.target.value });
  };

  return (
    <Box sx={{ width: "100%", height: "100%", backgroundColor: theme.palette.white.main, padding: 2, borderRadius: "8px" }}>
      <Box className="text-right">{"نام کاربری و رمز عبور"}</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row-reverse" },
          gap: 0.5,
        }}
      >
        <TextField
        dir='rtl'
          placeholder="نام کاربری"
          value={loginData.username}
          onChange={(e) => handleOperatorUserName(e)}
          sx={{ width: { xs: "100%", lg: "50%" } }}
        />

        <TextField
        dir='rtl'
          placeholder="رمز عبور"
          value={loginData.password}
          onChange={(e) => handleOperatorPassword(e)}
          sx={{ width: { xs: "100%", lg: "50%" } }}
        />
      </Box>
    </Box>
  );
};

export default OperatorLoginData;
