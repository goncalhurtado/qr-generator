import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "../styles/url.css";

function UrlInput({ setData }) {
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
    setError({ type: "success", message: "Url correcto" });
  };

  return (
    <>
      <div className="containerForm">
        <form onSubmit={handleSubmit}>
          <TextField
            className="formInput"
            type="url"
            label="Url"
            id="inputMail"
            onChange={handleChange}
            helperText={error.type === "error" ? error.message : ""}
            placeholder="https://www.ejemplo.com"
            error={error.type === "error" ? true : false}
            {...(error.type === "success" && {
              focused: true,
              color: "success",
            })}
          />
          <div className="botonSubmit">
            <Button variant="contained" type="submit">
              Generar QR
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UrlInput;
