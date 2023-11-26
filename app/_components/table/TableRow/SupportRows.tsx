'use client'

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  tickets: TicketType[];
}

type TicketType = {
  code: number;
  subject: string;
  text: string;
  user: string;
  userPhoneNumber: string;
  date: string;
  hour: string;
  unread: boolean;
};

const SupportRows = (props: Props) => {
  const { tickets } = props;
  const router = useRouter()


  return (
    <div className="fullSize flex flex-col gap-2 px-2">
      {tickets.map((ticket) => (
        <div
          key={ticket.code}
          className={`w-full flex flex-col gap-2 lg:flex-row-reverse rounded-md lg:h-9 items-center p-2 shadow-md shadow-grayText lg:shadow-none cursor-pointer ${
            ticket.unread === true
              ? "bg-powderBlue"
              : "bg-grayBackgroundDarker"
          } `}
          onClick={() => router.push(`/support-panel/observe-ticket/`)
        }
        >
          <div className="w-full flex flex-row-reverse lg:flex-1 lg:text-center">
            <div className="w-1/3 text-right lg:hidden">{`شماره تیکت`}</div>
            <div className="w-2/3 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md lg:w-full">
              {ticket.code}
            </div>
          </div>

          <div className="w-full flex flex-row-reverse lg:flex-1 lg:text-center lg:bg-white lg:rounded-md">
            <div className="w-1/3 text-right lg:hidden">{`موضوع تیکت`}</div>
            <div className="w-2/3 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md lg:w-full">
              {ticket.subject}
            </div>
          </div>

          <div className="w-full flex flex-row-reverse lg:flex-1 lg:text-center  lg:rounded-md">
            <div className="w-1/3 text-right lg:hidden">{`متن تیکت`}</div>
            <div className="w-2/3 h-8 no-wrap overflow-hidden text-center sm:bg-grayBackground md:bg-grayBackground rounded-md lg:w-full">
              {`...${ticket.text}`}
            </div>
          </div>

          <div className="w-full flex flex-row-reverse lg:flex-1 lg:text-center  lg:rounded-md">
            <div className="w-1/3 text-right lg:hidden">{`کاربر`}</div>
            <div className="w-2/3 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md lg:w-full">
              {ticket.user}
            </div>
          </div>

          <div className="w-full flex flex-row-reverse lg:flex-1 lg:text-center lg:rounded-md">
            <div className="w-1/3 text-right lg:hidden">{`شماره کاربر`}</div>
            <div className="w-2/3 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md lg:w-full">
              {ticket.userPhoneNumber}
            </div>
          </div>

          <div className="w-full flex flex-row-reverse lg:flex-1 lg:text-center lg:rounded-md">
            <div className="w-1/3 text-right lg:hidden">{`تاریخ ثبت`}</div>
            <div className="w-2/3 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md lg:w-full">
              {ticket.date}
            </div>
          </div>

          <div className="w-full flex flex-row-reverse lg:flex-1 lg:text-center lg:rounded-md">
            <div className="w-1/3 text-right lg:hidden">{`ساعت ثبت`}</div>
            <div className="w-2/3 text-center sm:bg-grayBackground md:bg-grayBackground rounded-md lg:w-full">
              {ticket.hour}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportRows;
