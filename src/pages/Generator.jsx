import React, { useState } from "react";
import UrlInput from "../components/UrlInput";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WhatsappInput from "../components/WhatsappInput";
import Qr from "../components/Qr";
import MailInput from "../components/MailInput";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../styles/generator.css";

const GeneratorComponent = () => {
  const [value, setValue] = React.useState("url");

  const [data, setData] = useState("");

  const handleChange = (event, newValue) => {
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
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab value="url" label="Url" />
          <Tab value="whatsapp" label="Whatsapp" />
          <Tab value="mailInput" label="Mail" />
        </Tabs>
      </Box>

      <Grid container>
        {value === "url" && (
          <Grid item xs={12} md={6}>
            <UrlInput setData={setData} />
          </Grid>
        )}
        {value === "whatsapp" && (
          <Grid item xs={12} md={6}>
            <WhatsappInput setData={setData} />
          </Grid>
        )}
        {value === "mailInput" && (
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
};

export default GeneratorComponent;
