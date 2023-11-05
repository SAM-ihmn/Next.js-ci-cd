import React from 'react'

type Props = {}

const page = ({ params }: { params: { id: number } }) => {
  return (
    <div>page {params.id} </div>
  )
}

export default page