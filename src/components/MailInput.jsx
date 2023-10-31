import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { createMailLink } from "../helpers/createMailLink";
import "../styles/mail.css";

const MailInput = ({ setData }) => {
  const [temp, setTemp] = useState({ mail: "", subject: "", message: "" });
  //validation
  const [error, setError] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setError({ type: "", message: "" });
    setTemp(e.target.value);
    setTemp({ ...temp, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (temp === "" || temp === null) {
      return setError({
        type: "error",
        message: "Debes llenar todos los campos",
      });
    }

    //mail
    if (temp.mail === "" || temp.mail === null) {
      return setError({
        type: "mail",
        message: "Debes ingresar un email",
      });
    }

    if (!temp.mail.match(regex)) {
      setError({ type: "mail", message: "Introduce un email valido" });
      return;
    }

    //asunto

    if (temp.subject === "" || temp.subject === null) {
      setError({ type: "subject", message: "Debes introducir un asunto" });
      return;
    }

    //mensaje

    if (temp.message === "" || temp.message === null) {
      setError({ type: "message", message: "Debes introducir un mensaje" });
      console.log("error");
      return;
    }

    setData(createMailLink(temp));

    setError({ type: "success", message: "Mail correcto" });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="containerForm">
          <TextField
            name="mail"
            type="email"
            label="Mail"
            id="inputMail"
            className="inputMail"
            sx={{
              m: 1,
              width: "50%",
            }}
            onChange={handleChange}
            helperText={error.type === "mail" ? error.message : ""}
            placeholder="ejemplo@mail.com"
            error={error.type === "mail" ? true : false}
            {...(error.type === "success" && {
              focused: true,
              color: "success",
            })}
          />

          <TextField
            name="subject"
            type="text"
            label="Asunto"
            id="inputSubject"
            className="inputSubject"
            sx={{
              m: 1,
              width: "50%",
            }}
            onChange={handleChange}
            helperText={error.type === "subject" ? error.message : ""}
            placeholder="Aquí va el asunto"
            error={error.type === "subject" ? true : false}
            {...(error.type === "success" && {
              focused: true,
              color: "success",
            })}
          />
          <div>
            <TextField
              name="message"
              id="inputMessage"
              label="Mensaje"
              multiline
              rows={4}
              helperText={error.type === "message" ? error.message : ""}
              error={error.type === "message" ? true : false}
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
          <div className="botonSubmit">
            <Button variant="contained" type="submit">
              Generar QR
            </Button>
          </div>
        </form>
      </div>
      <div></div>
    </>
  );
};

export default MailInput;
