import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { createWpLink } from "../helpers/createWpLink";

const WhatsappInput = ({ data, setData }) => {
  const [temp, setTemp] = useState({ number: "", message: "" });
  //validation
  const [error, setError] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setError({ type: "", message: "" });
    setTemp({ ...temp, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    const inputNumber = document.getElementById("inputNumber");
    const inputMessage = document.getElementById("inputMessage");
    const regex = /^\d{1,15}$/;

    e.preventDefault();

    if (inputNumber.value === "" || inputNumber.value === null) {
      return setError({
        type: "error",
        message: "Debes ingresar un numero de Whatsapp",
      });
    }

    if (!temp.number.match(regex)) {
      setError({ type: "error", message: "Introduce un numero válido" });

      return;
    }

    if (temp.message.value === "") {
      return setError({
        type: "errorMessage",
        message: "Debes ingresar un mensaje",
      });
    }

    setData(createWpLink(temp));
    setError({ type: "success", message: "Whatsapp correcto" });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            type=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            name="number"
            id="inputNumber"
            label="Número de Whatsapp"
            sx={{
              m: 1,
              width: "50%",
            }}
            onChange={handleChange}
            helperText={error.type === "error" ? error.message : ""}
            placeholder="Teléfono sin espacios ni puntos"
            error={error.type === "error" ? true : false}
            {...(error.type === "success" && {
              focused: true,
              color: "success",
            })}
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            name="message"
            id="inputMessage"
            label="Mensaje (opcional)"
            multiline
            rows={4}
            helperText={error.type === "errorMessage" ? error.message : ""}
            error={error.type === "errorMessage" ? true : false}
            {...(error.type === "errorMessage" && {
              focused: true,
              color: "error",
            })}
            {...(error.type === "success" && {
              focused: true,
              color: "success",
            })}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Generar QR
          </Button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default WhatsappInput;
