'use client'
import React, { useState } from 'react'

type Props = {}

const SelectableItem = (props: Props) => {
  const [selected, setSelected] = useState(false)

  return (
    <div className={`${(selected === true)? 'bg-'}`}>

    </div>
  )
}

export default SelectableItem