"use client";

import theme from "@/materialTheme/theme";
import { Box, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { AccessLevel } from "../types/operatorTypes";

type Props = {
  selectedItem: AccessLevel[];
  setSelectedItem: React.Dispatch<React.SetStateAction<AccessLevel[]>>;
};

const OperatorAccessLevel = (props: Props) => {
  const { selectedItem, setSelectedItem } = props;

  const accessLevelDefine = [
    { id: 1, name: "دسترسی به مدیریت اپراتورها" },
    { id: 2, name: "دسترسی به مدیریت تمام سفرها" },
    { id: 3, name: "امکان فعال/غیرفعال کردن راننده" },
    { id: 4, name: "امکان فعال/غیرفعال کردن مسافر" },
    { id: 5, name: "امکان تعریف تیکت جدید" },
    { id: 6, name: "امکان دسته بندی تیکت های قابل پاسخگویی" },
  ];

  const handleSelectingAccessLevel = (item: AccessLevel) => {
    if (selectedItem.some((selected) => selected.id === item.id)) {
      setSelectedItem(
        selectedItem.filter((selected) => selected.id !== item.id)
      );
    } else {
      setSelectedItem([...selectedItem, item]);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: theme.palette.white.main, padding: 2, borderRadius: "8px"
      }}
    >
      <Box dir='rtl'>{"تعیین سطح دسترسی"}</Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {accessLevelDefine.map((item) => (
          <Box
          
            key={item.id}
            sx={{
              backgroundColor: selectedItem.some(
                (selected) => selected.id === item.id
              )
                ? theme.palette.blue.main
                : theme.palette.greyColor.light,
              borderRadius: 2, width: "100%", height:{sm: '4rem', md: '2.5rem'}, px: 2, display: "flex", gap: {xs: "1rem",lg:"2rem"}, justifyContent: "end", alignItems: 'center' }}
            onClick={() => handleSelectingAccessLevel(item)}
          >
            <Box sx={{fontSize:'.9rem'}}>{item.name}</Box>

            <Checkbox
              checked={selectedItem.some((selected) => selected.id === item.id)}
              onChange={() => handleSelectingAccessLevel(item)}
              sx={{display: {xs:"none", md: 'flex'}, alignItems: 'center'}}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OperatorAccessLevel;
