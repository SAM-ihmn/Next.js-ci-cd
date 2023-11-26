'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const router = useRouter();

    if (typeof window === "object" && window.localStorage.getItem("token")) 
      {return ( <div>page</div>) } else { router.push('/login')}
}

export default page