"use client";

import { SupportIcon } from "@/app/_assets/Icons";
import { SectionHeader } from "@/app/_components/detailModals/SectionHeader";
import ToolItem from "@/app/_components/tool-bar/ToolItem";
import ItemBox from "@/app/_components/trip/ItemBox";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function Page ({ params }: { params: { id: number } }){
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="w-full h-full flex flex-col items-center gap-2 p-5">
      <div className=" w-full items-start">
        <div className="w-1/2">

        <ToolItem
          toolName="لیست تیکت ها"
          OnClick={() => router.push("/support-panel")}
          > <SupportIcon className="w-6 h-6"/>
          </ToolItem>
          </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-2 overflow-scroll ">
        <div className="w-full h-[85%] flex flex-col gap-2 rounded-lg ">

          <section className="flex flex-col gap-2 ">
            <div className="w-full flex flex-row-reverse flex-wrap grayBorder bg-white p-2">
              <SectionHeader headerTitle="مشخصات فردی" />
              <ItemBox itemTitle="کد ثبت" itemValue={"25"} />
              <ItemBox itemTitle="نام و نام خانوادگی" itemValue={"25"} />
              <ItemBox itemTitle="شماره تماس" itemValue={"25"} />
              <ItemBox itemTitle="آدرس ایمیل" itemValue={"25"} />
            </div>

            <div className="w-full flex flex-row-reverse flex-wrap grayBorder bg-white p-2">
              <SectionHeader headerTitle="مشخصات تیکت" />
              <ItemBox itemTitle="موضوع" itemValue={"25"} />
              <ItemBox itemTitle="واحد مسئول" itemValue={"25"} />
            </div>
          </section>
          {/* tickets */}
          <section className="flex flex-col gap-2 p-2 bg-white rounded-lg">
            {/* user message */}
            <div className="w-full flex flex-col items-start ">
              <div className="w-full lg:w-2/3 shadow-md shadow-grayText bg-grayBackground rounded-lg p-2">
                <div className="w-full flex flex-row-reverse justify-between px-3">
                  {"محمدمهدی رسولی"}
                </div>
                <div dir="rtl" className="py-2 px-3 text-justify text-[.9rem]">
                  {
                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                  }
                </div>
              </div>
            </div>
            {/* support message */}
            <div className="w-full flex flex-col items-end ">
              <div className="w-full lg:w-2/3 flex flex-col gpa-2 shadow-md shadow-grayText rounded-lg bg-powderBlue p-2">
                {/* message header */}
                <div className="w-full flex flex-row-reverse justify-between px-3">
                  <div>{"نیما واحدی"}</div>
                  <div className="bg-white rounded-full px-3">
                    {"واحد بررسی شکایات"}
                  </div>
                </div>
                <div dir="rtl" className="py-2 px-3 text-justify text-[.9rem]">
                  {
                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                  }
                </div>
              </div>
            </div>
            {/* user message */}
            <div className="w-full flex flex-col items-start ">
              <div className="w-full lg:w-2/3 shadow-md shadow-grayText bg-grayBackground rounded-lg p-2">
                <div className="w-full flex flex-row-reverse justify-between px-3">
                  {"محمدمهدی رسولی"}
                </div>
                <div dir="rtl" className="py-2 px-3 text-justify text-[.9rem]">
                  {
                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                  }
                </div>
              </div>
            </div>
            {/* support message */}
            <div className="w-full flex flex-col items-end ">
              <div className="w-full lg:w-2/3 flex flex-col gpa-2 shadow-md shadow-grayText rounded-lg bg-powderBlue p-2">
                {/* message header */}
                <div className="w-full flex flex-row-reverse justify-between px-3">
                  <div>{"نیما واحدی"}</div>
                  <div className="bg-white rounded-full px-3">
                    {"واحد بررسی شکایات"}
                  </div>
                </div>
                <div dir="rtl" className="py-2 px-3 text-justify text-[.9rem]">
                  {
                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                  }
                </div>
              </div>
            </div>
            {/* user message */}
            <div className="w-full flex flex-col items-start ">
              <div className="w-full lg:w-2/3 shadow-md shadow-grayText bg-grayBackground rounded-lg p-2">
                <div className="w-full flex flex-row-reverse justify-between px-3">
                  {"محمدمهدی رسولی"}
                </div>
                <div dir="rtl" className="py-2 px-3 text-justify text-[.9rem]">
                  {
                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                  }
                </div>
              </div>
            </div>
            {/* support message */}
            <div className="w-full flex flex-col items-end ">
              <div className="w-full lg:w-2/3 flex flex-col gpa-2 shadow-md shadow-grayText rounded-lg bg-powderBlue p-2">
                {/* message header */}
                <div className="w-full flex flex-row-reverse justify-between px-3">
                  <div>{"نیما واحدی"}</div>
                  <div className="bg-white rounded-full px-3">
                    {"واحد بررسی شکایات"}
                  </div>
                </div>
                <div dir="rtl" className="py-2 px-3 text-justify text-[.9rem]">
                  {
                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="w-full lg:w-1/2 flex flex-row-reverse gap-2 px-2">
        <TextField
        dir="rtl"
        fullWidth
          value={message}
          onChange={(e) => handleTextChange(e)}
          placeholder="پاسخ خود را تایپ کنید"
        />
        <div className="w-1/4 text-center rounded-md bg-powderBlue" onClick={() => {}}>
          {"ارسال"}
        </div>
      </section>
    </div>
  );
};
