import React, { useState } from "react";
import UrlInput from "../components/UrlInput";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import WhatsappInput from "../components/WhatsappInput";
import Qr from "../components/Qr";
import MailInput from "../components/MailInput";
import { BorderBottom } from "@mui/icons-material";

const Generator = () => {
  const [value, setValue] = React.useState("url");

  const [data, setData] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <h3
        className="text-center m-0 p-2"
        style={{ backgroundColor: "#3f50b5", color: "white" }}
      >
        Generador de Qr
      </h3>
      {/* <div style={{ borderBottom: "1px solid black" }}> */}
      <Box
        sx={{
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
        }}
        display="flex"
        justifyContent="center"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary tabs example"
        >
          <Tab value="url" label="Url" />
          <Tab value="whatsapp" label="Whatsapp" />
          <Tab value="mailInput" label="Mail" />
        </Tabs>
      </Box>
      {/* </div> */}
      <div className="row text-center">
        {value === "url" && <UrlInput setData={setData} />}
        {value === "whatsapp" && <WhatsappInput setData={setData} />}
        {value === "mailInput" && <MailInput setData={setData} />}

        <Qr inputData={data} />
      </div>
    </>
  );
};

export default Generator;
