"use client";

import { SupportIcon } from "@/app/_assets/Icons";
import SetOperator from "@/app/_components/newTicket/SetOperator";
import TicketText from "@/app/_components/newTicket/TicketText";
import UserInfo from "@/app/_components/newTicket/UserInfo";
import ToolItem from "@/app/_components/tool-bar/ToolItem";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type User = {
  name: string | "";
  phoneNumber: string | "";
  email: string | "";
  type: "driver" | "passenger" | "";
};

type ResponsibleOperator = {
  code: string;
  department: string;
};

export default function Page() {
const router = useRouter()

  // states
  const [user, setUser] = useState<User>({
    name: "",
    phoneNumber: "",
    email: "",
    type: "",
  });

  const [responsibleOperator, setResponsibleOperator] =
    useState<ResponsibleOperator>({
      code: "",
      department: "",
    });

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  // actions
  const postData = () => {
    console.log(user, responsibleOperator, subject, content);
  };

  return (
    <div className="fullSize p-5 flex flex-col gap-2 items-center">
      <div className="w-full h-fit flex flex-col gap-2">
        <div className="w-full flex gap-2 flex-row-reverse justify-between">
          <div className="sm:w-full w-1/3 text-[1.2rem] text-right">
            {"ثبت تیکت جدید"}
          </div>

          <div className="sm:w-full w-2/3 flex gap-2">
            <ToolItem toolName="  لیست تیکت ها " OnClick={() => router.push('/support-panel')}>
              <SupportIcon className="w-6 h-6" />
            </ToolItem>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 sm:h-[95%] pb-2 overflow-auto">
        <div className="flex flex-col gap-2 ">
          <UserInfo user={user} setUser={setUser} />
          <SetOperator
            responsibleOperator={responsibleOperator}
            setResponsibleOperator={setResponsibleOperator}
          />
          <TicketText
            subject={subject}
            setSubject={setSubject}
            content={content}
            setContent={setContent}
          />
           <Box sx={{ display: "flex", justifyContent: "center" }}>
           <Button
             sx={{ width: {xs:"100%", lg:"50%"}, height: "3rem" }}
             onClick={postData}
           >
             {"ثبت تیکت"}
           </Button>
         </Box>
        </div>
      </div>
    </div>
  );
};
