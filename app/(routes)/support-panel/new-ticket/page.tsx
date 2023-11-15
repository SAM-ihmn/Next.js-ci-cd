"use client";

import NewTicketForm from "@/app/_components/newTicket/NewTicketForm";
import UserInfo from "@/app/_components/newTicket/UserInfo";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

type Props = {};



const page = (props: Props) => {

  const postData = () => {

  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-2">
      <div className="w-full md:w-1/2 lg:w-1/2 h-full flex flex-col justify-between p-3 sm:gap-3 bg-white rounded-lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: { xs: "auto", md: "hidden" },
          }}
        >
          <NewTicketForm/>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ width: "50%", height: "3rem" }}
            onClick={postData}
          >
            {"ثبت اپراتور"}
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default page;
