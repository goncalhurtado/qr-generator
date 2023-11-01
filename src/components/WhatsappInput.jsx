import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createWpLink } from "../helpers/createWpLink";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "../styles/whatsapp.css";

const WhatsappInput = ({ setData }) => {
  const [temp, setTemp] = useState({ number: "", message: "" });
  //validation
  const [error, setError] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setError({ type: "", message: "" });
    setTemp({ ...temp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const regex = /^\d{1,15}$/;

    e.preventDefault();

    if (temp.number === "" || temp.number === null) {
      return setError({
        type: "error",
        message: "Debes ingresar un número de Whatsapp",
      });
    }

    if (!temp.number.match(regex)) {
      setError({ type: "error", message: "Introduce un número válido" });

      return;
    }

    if (temp.message.value === "") {
      return setError({
        type: "errorMessage",
        message: "Debes ingresar un mensaje",
      });
    }
    console.log(error);
    setData(createWpLink(temp));
    setError({ type: "success", message: "Whatsapp correcto" });
  };
  return (
    <div>
      <div>
        <div className="d-flex justify-content-center">
          <Stack className="alertInfo">
            <Alert severity="info">
              Ingresa un número de teléfono y un mensaje para generar un Código
              QR que permita enviar un WhatsApp al escanearlo.
            </Alert>
          </Stack>
        </div>
        <form onSubmit={handleSubmit} className="containerForm">
          <div>
            <TextField
              type=""
              name="number"
              id="inputNumber"
              className="inputNumber mt-1"
              label="Número de Whatsapp text-start"
              onChange={handleChange}
              helperText={error.type === "error" ? error.message : ""}
              placeholder="Teléfono sin espacios ni puntos"
              error={error.type === "error" ? true : false}
              {...(error.type === "success" && {
                focused: true,
                color: "success",
              })}
            />
          </div>
          <div>
            <TextField
              name="message"
              id="inputMessage"
              className="inputMessage mt-3"
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
          </div>
          <div className="botonSubmit mt-3">
            <Button variant="contained" type="submit">
              Generar QR
            </Button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default WhatsappInput;
