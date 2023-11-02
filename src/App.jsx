import "./App.css";
// import GeneratorComponent from "./pages/generator";
import React, { useState } from "react";
import UrlInput from "./components/UrlInput";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Qr from "./components/Qr";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsappInput from "./components/WhatsappInput";
import MailInput from "./components/MailInput";

function App() {
  const URL_KEY = "url";
  const WHATSAPP_KEY = "whatsapp";
  const MAIL_KEY = "mail";

  const [value, setValue] = useState(URL_KEY);

  const [data, setData] = useState("");

  const handleChange = (event, newValue) => {
    console.log(newValue.value);
    setValue(newValue);
  };

  return (
    <>
      <h3
        className="text-center m-0 p-2"
        style={{ backgroundColor: "#1565c0", color: "white" }}
      >
        Generador de QR
      </h3>

      <Box
        sx={{
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={handleChange}
        >
          <Tab value={URL_KEY} label="Url" />
          <Tab value={WHATSAPP_KEY} label="Whatsapp" />
          <Tab value={MAIL_KEY} label="Mail" />
        </Tabs>
      </Box>

      <Grid container>
        {value === URL_KEY && (
          <Grid item xs={12} md={6}>
            <UrlInput setData={setData} />
          </Grid>
        )}
        {value === WHATSAPP_KEY && (
          <Grid item xs={12} md={6}>
            <WhatsappInput setData={setData} />
          </Grid>
        )}
        {value === MAIL_KEY && (
          <Grid item xs={12} md={6}>
            <MailInput setData={setData} />{" "}
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Qr inputData={data} />
        </Grid>
      </Grid>
      <div
        className="text-center w-100 p-3"
        style={{
          backgroundColor: "#1565c0",
          color: "white",
          bottom: "0",
        }}
      >
        <div className="d-flex justify-content-center">
          <h6 className="m-0">Desarrollado por Goncal Hurtado</h6>
          <GitHubIcon
            className="ms-1"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              window.open("https://github.com/goncalhurtado", "_blank");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
