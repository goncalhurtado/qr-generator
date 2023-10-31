import React, { useState } from "react";
import Qr from "./Qr";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

function UrlInput({ data, setData }) {
  const [temp, setTemp] = useState("");
  //validation
  const [error, setError] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setError("");
    setTemp(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex =
      /^(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*[\w-@?^=%&/~+#])?/;

    if (temp === "" || temp === null) {
      return setError({
        type: "error",
        message: "Debes ingresar una url",
      });
    }

    if (!temp.match(regex)) {
      setError({ type: "error", message: "Introduce una url valida" });
      return;
    }

    setData(temp);
    setError({ type: "success", message: "Ulr correcto" });
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
            helperText={error.type === "error" ? error.message : ""}
            placeholder="https://www.ejemplo.com"
            error={error.type === "error" ? true : false}
            {...(error.type === "success" && {
              focused: true,
              color: "success",
            })}
          />

          <Button variant="contained" type="submit">
            Generate QR
          </Button>
        </form>
      </div>
      <div></div>
    </>
  );
}

export default UrlInput;
