import React, { useState } from "react";
import Qr from "./Qr";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

function UrlInput() {
  const [data, setData] = useState("");
  const [temp, setTemp] = useState("");
  const handleChange = (e) => {
    setTemp(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(temp);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Url"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Generate QR
          </Button>
        </form>
      </div>
      <Qr inputData={data} />
    </>
  );
}

export default UrlInput;
