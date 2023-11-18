import React, { useState } from 'react'
import UserInfo from './UserInfo';
import SetOperator from './SetOperator';
import { Box } from '@mui/material';
import TicketText from './TicketText';

type Props = {}

type User = {
  name: string | null;
  phoneNumber: string | null;
  email: string | null;
  type: "driver" | "passenger" | null;
};

type ResponsibleOperator = {
  code: string;
  department: string;
};


const NewTicketForm = (props: Props) => {

  const [user, setUser] = useState<User>({
    name: null,
    phoneNumber: null,
    email: null,
    type: null,
  });

  const [responsibleOperator, setResponsibleOperator] = useState<ResponsibleOperator>({
    code: "",
    department: ""
  });

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");



  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
      <UserInfo user={user} setUser={setUser}/>
      <SetOperator responsibleOperator={responsibleOperator} setResponsibleOperator={setResponsibleOperator}/>
      <TicketText subject={subject} setSubject={setSubject} content={content} setContent={setContent}/>
    </Box>
  )
}

export default NewTicketForm