'use client'

import React from 'react'
import ToolBar from '@/app/_components/tool-bar/ToolBar'
import SearchBox from '@/app/_components/tool-bar/SearchBox'
import { MenuItem } from '@mui/material'
import Table from '@/app/_components/table/Table'
import TripRows from '@/app/_components/table/trip/TripRows'
import {tripStatus, tripTableHeaderTitles} from '../../_components/_data/data'

type Props = {}


const page = (props: Props) => {


  return (
    <>
    <div className='fullSize flex flex-col gap-2 '>
      <ToolBar hidden={true} title='لیست سفرها' hiddenNewTicket={true}>

      <SearchBox selectFieldTitle="وضعیت سفر">
        {tripStatus.map((trip) => 
          <MenuItem key={trip.id} value={trip.id}>{trip.status}</MenuItem>
        )}
        </SearchBox>
        
      </ToolBar>

      <Table headerTitleList={tripTableHeaderTitles}>
        <TripRows/>
      </Table>
    </div>
    </>
  )
}

export default page