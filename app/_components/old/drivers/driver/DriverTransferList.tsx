import React from 'react'

type Props = {
  BackToLastPage?: React.ReactEventHandler
}

const DriverTransferList = (props: Props) => {

  const {BackToLastPage} = props;

  return (
    <div className='fullSize flex flex-col p-2 gap-2 overflow-y-auto lg:w-1/3 lg:border lg:border-solid lg:border-grayBorder lg:rounded-lg' >
      <div className='cursor-pointer lg:hidden' onClick={BackToLastPage}> {'>'}</div>
      <div className='w-full h-16 flex flex-col '>
        hello world Transfers
      </div>
    </div>
  )
}

export default DriverTransferList