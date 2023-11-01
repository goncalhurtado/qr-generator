import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { MuiColorInput } from "mui-color-input";
import Link from "@mui/material/Link";
import "../styles/qr.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
      <div className="qrPageContainer mt-3 row">
        <div className="qrContainer col-12 col-md-6">
          <div className="qr p-2">
            {data != "" ? (
              <Box sx={{ backgroundColor: bg, padding: "10px" }}>
                <QRCode value={data} bgColor={bg} fgColor={color} />
              </Box>
            ) : (
              <div>
                <h5>Tu Codigo Qr va aquí</h5>
              </div>
            )}
          </div>
        </div>
        <div className="setupContainer col-12 col-md-6">
          {data != "" && (
            <>
              <div className="colorContainer mt-3">
                <>
                  <h5 className="p-0 m-2">Personalizar</h5>

                  <MuiColorInput
                    value={color}
                    onChange={handlecolor}
                    label="Color principal"
                    className="mt-2"
                  />

                  <MuiColorInput
                    value={bg}
                    onChange={handlebg}
                    label="Color Fondo"
                    className="mt-4"
                  />
                </>
              </div>

              <div>
                {clear && (
                  <Link
                    className="restablecerColor"
                    onClick={() => clearColors()}
                  >
                    Restablecer Color
                  </Link>
                )}
              </div>
              <div className="descargarContainer mt-3">
                <Button variant="contained" color="primary">
                  Descargar
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Qr;
