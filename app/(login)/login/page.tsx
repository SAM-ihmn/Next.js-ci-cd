"use client";

import theme from "@/materialTheme/theme";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import image from '../../../public/taxi.jpg';
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongData, setWrongData] = useState(false);

  const handleUsername = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWrongData(false);
    setUsername(e.target.value);
  };

  const handlePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWrongData(false);

    let usedPassword = e.target.value;
    setPassword(usedPassword);
  };

  const handleLoginAction = () => {
    if (username === "avaaz" && password === "1234") {
      window.localStorage.setItem("token", "123456789@gh");
      router.push("/trip-management");
    } else {
      setWrongData(true);
    }
  };

  return (
    <div className={`fullSize flex flex-col justify-center items-center bg-[#F7F7F7]`}>
      <div className="w-full lg:w-1/3 md:w-1/2 lg:grayBorder md:grayBorder flex flex-col items-center md:shadow-md lg:shadow-md shadow-grayText ">

      <Image src={image} alt="interface-taxi-8" className="sm:w-3/4 sm:h-64 w-full h-96 lg:object-cover"/>
      <div className="w-full h-96 sm:h-80  flex flex-col justify-center items-center">
        <div className="text-center">{"ورود به سامانه"}</div>
        <div className="w-full p-3 flex flex-col items-center gap-2">
          <TextField
            dir="rtl"
            placeholder="نام کاربری"
            sx={{ width:{xs: "80%", lg:"50%"} }}
            value={username}
            onChange={(e) => handleUsername(e)}
            />
          <TextField
            dir="rtl"
            placeholder="پسورد"
            type="password"
            sx={{ width:{xs: "80%", lg:"50%"} }}
            value={password}
            onChange={(e) => handlePassword(e)}
            />
        </div>
        {wrongData && (
          <div dir="rtl" className="w-1/2 text-center bg-salmonPink rounded-md">
            {"نام کاربری یا رمزعبور اشتباه است."}
          </div>
        )}
        <div className="w-full p-3 flex flex-col items-center gap-2">
          <Button
            sx={{ width:{xs: "80%", lg:"50%"}, backgroundColor: theme.palette.blue.main }}
            onClick={handleLoginAction}
            >
            {"ورود"}
          </Button>
        </div>
      </div>
            </div>
    </div>
  );
};

export default page;
