import React from 'react'

type Props = {}

const TripDetails = (props: Props) => {
  return (
    <div className='w-full h-full flex flex-col px-2'>
      <div className='w-full py-2 px-2 border border-solid border-grayBorder rounded-md'>
        <div className='text-right'>{'مشخصات عمومی سفر'}</div>
        <div className='w-full flex'>
          <div className='w-1/2 flex justify-end'>{':تاریخ سفر'}</div>
          <div className='w-1/2 flex justify-end'>{':کد سفر'}</div>
        </div>
        <div className='w-full flex'>
          <div className='w-1/2 flex justify-end'>{':مقصد'}</div>
        <div className='w-1/2 flex justify-end'>{':مبداء'}</div>
        </div>
      </div>
    </div>
  )
}

export default TripDetails