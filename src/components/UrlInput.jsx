import React from "react";
import Qr from "./Qr";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function UrlInput() {
  return (
    <>
      <div>
        <div>
          <TextField
            label="Url"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <Qr />
    </>
  );
}

export default UrlInput;
