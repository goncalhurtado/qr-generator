import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { MuiColorInput } from "mui-color-input";
import Link from "@mui/material/Link";

const Qr = ({ inputData }) => {
  const [bg, setBg] = useState("#ffffff");
  const [color, setColor] = useState("#000000");
  const [clear, setClear] = useState(false);

  const data = inputData || "";

  const handlebg = (newValue) => {
    setBg(newValue);
  };
  const handlecolor = (newValue) => {
    setColor(newValue);
  };

  const clearColors = () => {
    setBg("#ffffff");
    setColor("#000000");
    setClear(false);
  };

  useEffect(() => {
    if (bg !== "#ffffff" || color !== "#000000") {
      setClear(true);
    }
  }, [bg, color]);
  return (
    <>
      {data != "" && (
        <div className="">
          <QRCode value={data} bgColor={bg} fgColor={color} />
          <div>
            <MuiColorInput value={bg} onChange={handlebg} />
            <MuiColorInput value={color} onChange={handlecolor} />
            <div>
              {clear && (
                <Link onClick={() => clearColors()}>Restablecer Color</Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Qr;
