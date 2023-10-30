import React, { useState } from "react";
import QRCode from "react-qr-code";
import { MuiColorInput } from "mui-color-input";

const Qr = ({ inputData }) => {
  const [bg, setBg] = useState("#ffffff");
  const [color, setColor] = useState("#000000");

  const data = inputData || "https://www.google.com";

  const handlebg = (newValue) => {
    setBg(newValue);
  };
  const handlecolor = (newValue) => {
    setColor(newValue);
  };
  return (
    <>
      <div>Qr</div>
      <QRCode value={data} bgColor={bg} fgColor={color} />
      <MuiColorInput value={bg} onChange={handlebg} />
      <MuiColorInput value={color} onChange={handlecolor} />
    </>
  );
};

export default Qr;