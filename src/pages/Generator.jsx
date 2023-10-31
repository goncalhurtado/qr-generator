import React, { useState } from "react";
import UrlInput from "../components/UrlInput";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import WhatsappInput from "../components/WhatsappInput";
import Qr from "../components/Qr";

const Generator = () => {
  const [value, setValue] = React.useState("url");

  const [data, setData] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <h3>Generador de Qr</h3>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary tabs example"
        >
          <Tab value="url" label="Url" />
          <Tab value="whatsapp" label="Whatsapp" />
          <Tab value="three" label="Item Three" />
        </Tabs>
      </Box>
      {value === "url" && <UrlInput data={data} setData={setData} />}
      {value === "whatsapp" && <WhatsappInput data={data} setData={setData} />}
      <div>
        <Qr inputData={data} />
      </div>
    </>
  );
};

export default Generator;
