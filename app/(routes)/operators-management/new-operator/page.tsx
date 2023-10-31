'use client'

import { OperatorIcon } from '@/app/_assets/Icons';
import ToolItem from '@/app/_components/tool-bar/ToolItem';
import React from 'react';
import { useRouter } from "next/navigation";


type Props = {}

const page = (props: Props) => {
  const router = useRouter()

  const backButton = () => {
    router.push('/operators-management')
  }
  return (
    <div>
            <div className="w-full h-fit flex flex-col gap-2">
        <div className="w-full flex sm:flex-col gap-2 flex-row-reverse justify-between">
          <div className="sm:w-full w-1/3 text-[28px] text-right">{'ثبت اپراتور جدید'}</div>

          <div className="sm:w-full w-2/3 flex gap-2">
            <ToolItem toolName="  لیست اپراتورها " OnClick={backButton}>
              <OperatorIcon className="w-6 h-6" />
            </ToolItem>
          </div>
        </div>

      </div>

    </div>
  )
}

export default page