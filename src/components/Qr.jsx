import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { MuiColorInput } from "mui-color-input";
import Link from "@mui/material/Link";
import "../styles/qr.css";
import Box from "@mui/material/Box";

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
      <div className="qrPageContainer mt-3">
        <div className="qrContainer">
          <div className="qr p-2">
            {data != "" ? (
              <Box sx={{ backgroundColor: bg, padding: "10px" }}>
                <QRCode value={data} bgColor={bg} fgColor={color} />
              </Box>
            ) : (
              <div>
                <h5>Tu qr va aqui mi reyyy</h5>
              </div>
            )}
          </div>
        </div>
        <div className="setupContainer">
          {data != "" && (
            <>
              <div className="colorContainer mt-3">
                <>
                  <h5 className="p-0 mt-3">Personalizar</h5>
                  <MuiColorInput value={bg} onChange={handlebg} />
                  <MuiColorInput value={color} onChange={handlecolor} />
                </>
              </div>

              <div>
                {clear && (
                  <Link onClick={() => clearColors()}>Restablecer Color</Link>
                )}
              </div>
              <div className="descargarContainer mt-3">
                <button>asd</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Qr;
