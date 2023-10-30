import React, { useState } from "react";
import Qr from "./Qr";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

function UrlInput() {
  const [data, setData] = useState("");
  const [temp, setTemp] = useState("");
  //validation
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setTemp(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const regex =
      /^(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*[\w-@?^=%&/~+#])?/;

    if (!temp.match(regex)) {
      setError("error");
      return;
    }

    setData(temp);
    setError("success");
    console.log(error);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Url"
            id="outlined-start-adornment"
            sx={{
              m: 1,
              width: "50%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            onChange={handleChange}
            helperText={error === "error" ? "Introduce una url valida" : ""}
            placeholder="https://www.ejemplo.com"
            error={error === "error" ? true : false}
            {...(error === "success" && { focused: true, color: "success" })}
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
