'use client'

import { Button, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useState } from "react";

type Props = {
  selectFieldTitle: string;
  children?: React.ReactNode;
  hiddenSelectPart?: boolean
};

const SearchBox = (props: Props) => {
  const { selectFieldTitle, children, hiddenSelectPart } = props;

  // states
  const [searchSubject, setSearchSubject] = useState("");
  const [selected, setSelected] = useState("");

  // actions
  const handleSearchField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchSubject(e.target.value);
  };

  const handleSelectField = (e: SelectChangeEvent) => {
    setSelected(e.target.value);
  };

  const handleSearchAction = () => {
    console.log("searchSubject:", searchSubject, "selected:", selected);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row-reverse gap-2 bg-white p-2 shadow-md shadow-grayText rounded-lg">
      <div className={` flex lg:flex-col-reverse lg:gap-1 ${(hiddenSelectPart === true) ? 'lg:w-5/6 w-full' : 'lg:w-1/2 w-full' } `}>
        <div className={`w-3/4 lg:w-full`}>
          <TextField
            fullWidth
            value={searchSubject}
            onChange={(e) => handleSearchField(e)}
          />
        </div>
        <div className="lg:w-full w-1/4 text-right">{"نوار جستجو"}</div>
      </div>

      <div className={` flex gap-2 ${(hiddenSelectPart === true) ? 'lg:w-1/6 w-full' : 'lg:w-1/2 w-full'} `}>
        <div className={` ${(hiddenSelectPart === true) ? 'w-full' : 'lg:w-1/3 w-1/4'} `}>
          <Button variant="contained" onClick={handleSearchAction}>
            {"جستجو"}
          </Button>
        </div>
        <div className={`lg:w-2/3 w-3/4 flex lg:flex-col-reverse lg:gap-1 ${(hiddenSelectPart === true) && 'hidden'}`}>
          <div className={`lg:w-full w-2/3 `}>
            <Select
              fullWidth
              value={selected}
              onChange={(e) => handleSelectField(e)}
            >
              {children}
            </Select>
          </div>
          <div className="lg:w-full w-1/3 text-right">{selectFieldTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
