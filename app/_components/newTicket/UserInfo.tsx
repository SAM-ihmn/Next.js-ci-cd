"use client";

import theme from "@/materialTheme/theme";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

type Props = {
  user: any;
  setUser: any;
};

type userType = "driver" | "passenger" | null;

type User = {
  name: string | "";
  phoneNumber: string | "";
  email: string | "";
  userType: userType;
};

const UserInfo = (props: Props) => {
  const { user, setUser } = props;
  const [selectedType, setSelectedType] = useState<userType>(null);

  const handleNameField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, name: e.target.value });
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, phoneNumber: e.target.value });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleUserType = (type: "driver" | "passenger") => {
    setUser({ ...user, type: type });
    setSelectedType(type);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box className="text-right pb-2">{"مشخصات فردی"}</Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>

        <Box sx={{display: "flex", flexDirection: { xs: "column", lg: "row-reverse" }, gap: 1 }}>
          <TextField
            dir="rtl"
            placeholder="نام و نام خانوادگی"
            value={user.name}
            onChange={(e) => handleNameField(e)}
            sx={{ width: { xs: "100%", lg: "50%" } }}
          />
          <TextField
            dir="rtl"
            placeholder="شماره تماس"
            value={user.phoneNumber}
            onChange={(e) => handlePhoneNumber(e)}
            sx={{ width: { xs: "100%", lg: "50%" } }}
          />
        </Box>

        <Box sx={{display: "flex",flexDirection: { xs: "column-reverse", lg: "row-reverse" }, gap: 1 }}>
          <Box sx={{ display: "flex", gap: 1, width: { xs: "100%", lg: "50%" } }}>
            <Box
              onClick={() => handleUserType("driver")}
              sx={{
                width: "50%",
                textAlign: "center",
                borderRadius: 1,
                backgroundColor:
                  selectedType === "driver"
                    ? theme.palette.blue.main
                    : theme.palette.greyColor.light,
              }}
            >
              {"راننده"}
            </Box>
            <Box
              onClick={() => handleUserType("passenger")}
              sx={{
                width: "50%",
                textAlign: "center",
                borderRadius: 1,
                backgroundColor:
                  selectedType === "passenger"
                    ? theme.palette.blue.main
                    : theme.palette.greyColor.light,
              }}
            >
              {"مسافر"}
            </Box>
          </Box>

          <TextField
            dir="rtl"
            placeholder="ایمیل"
            value={user.email}
            onChange={(e) => handleEmail(e)}
            sx={{ width: { xs: "100%", lg: "50%" } }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;