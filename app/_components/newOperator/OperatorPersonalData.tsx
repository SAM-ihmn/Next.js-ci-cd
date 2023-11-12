'use client'
import { Box, TextField } from '@mui/material'
import { PersonalData } from '../types/operatorTypes'

type Props = {
  personalData:PersonalData,
  setPersonalData : React.Dispatch<React.SetStateAction<PersonalData>>
}

const OperatorPersonalData = (props: Props) => {
  const {personalData,setPersonalData } = props

  // actions
  const handleNameField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonalData({ ...personalData, name: e.target.value })
  };

  const handleNationalCode = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonalData({ ...personalData, nationalCode: e.target.value });
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonalData({ ...personalData, phoneNumber: e.target.value });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonalData({ ...personalData, email: e.target.value });
  };


  return (
    <Box sx={{ width: "100%", height: "100%" }}>
    <Box className="text-right">{"مشخصات فردی"}</Box>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row-reverse" },
          gap: 0.5,
        }}
      >
        <TextField placeholder="نام و نام خانوادگی" value={personalData.name} onChange={(e) => handleNameField(e)}
          sx={{ width: { xs: "100%", lg: "50%" } }}
        />
        <TextField
          placeholder="کدملی"
          value={personalData.nationalCode}
          onChange={(e) => handleNationalCode(e)}
          sx={{ width: { xs: "100%", lg: "50%" } }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row-reverse" }, gap: 0.5 }} >
        <TextField
          placeholder="شماره تماس"
          value={personalData.phoneNumber}
          onChange={(e) => handlePhoneNumber(e)}
          sx={{ width: { xs: "100%", lg: "50%" } }}
        />
        <TextField
          placeholder="ایمیل"
          value={personalData.email}
          onChange={(e) => handleEmail(e)}
          sx={{ width: { xs: "100%", lg: "50%" } }}
        />
      </Box>
    </Box>
  </Box>
    )
}

export default OperatorPersonalData