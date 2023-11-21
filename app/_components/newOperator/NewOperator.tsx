"use client";

import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import OperatorPersonalData from "./OperatorPersonalData";
import OperatorLoginData from "./OperatorLoginData";
import { AccessLevel, LoginData, PersonalData } from "../types/operatorTypes";
import OperatorAccessLevel from "./OperatorAccessLevel";

const NewOperator = () => {
  // states
  const initialPersonalData :PersonalData  ={
    name: null,
    nationalCode: null,
    phoneNumber: null,
    email: null,
  }

  const initialLoginData : LoginData = {
    username: null,
    password: null,
  }

  const [personalData, setPersonalData] = useState(initialPersonalData);
  const [loginData, setLoginData] = useState(initialLoginData);
  const [selectedItem, setSelectedItem] = useState<AccessLevel[]>([]);

  // actions
  const postData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // post data
    console.log(personalData);
    console.log(loginData);
    console.log(selectedItem);

    // reset form
    setPersonalData(initialPersonalData);
    setLoginData(initialLoginData);
    setSelectedItem([]);

    alert("saved!");
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-2">
      <div className="w-full md:w-1/2 lg:w-1/2 h-full flex flex-col justify-between p-3 sm:gap-3 rounded-lg">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, overflowY:{xs: 'auto', md:'hidden'} }}>
          <OperatorPersonalData
            personalData={personalData}
            setPersonalData={setPersonalData}
          />
          <OperatorLoginData
            loginData={loginData}
            setLoginData={setLoginData}
          />
          <OperatorAccessLevel
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ width: "50%", height: "3rem" }}
            onClick={(e) => postData(e)}
          >
            {"ثبت اپراتور"}
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default NewOperator;
