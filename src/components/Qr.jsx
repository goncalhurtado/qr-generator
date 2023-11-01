import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { MuiColorInput } from "mui-color-input";
import Link from "@mui/material/Link";
import "../styles/qr.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { saveAs } from "file-saver";

const Qr = ({ inputData }) => {
  //Color Function

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

  //Download Funct

  const handleDownload = () => {
    const qrToDownload = document.getElementById("qrToDownload");

    if (qrToDownload) {
      htmlToImage.toBlob(qrToDownload).then(function (blob) {
        saveAs(blob, "downloaded-qr.png");
        console.log("Downloaded");
      });
    }
  };

  useEffect(() => {
    if (bg !== "#ffffff" || color !== "#000000") {
      setClear(true);
    }
  }, [bg, color]);
  return (
    <>
      <div className="qrPageContainer mb-3 row">
        <div className="qrContainer col-12 col-md-6">
          <div id="qrToDownload" className="qr p-2">
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
          {data != "" ? (
            <>
              <div className="colorContainer mt-3">
                <>
                  <MuiColorInput
                    value={color}
                    onChange={handlecolor}
                    label="Color Principal"
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleDownload}
                >
                  Descargar
                </Button>
              </div>
            </>
          ) : (
            <div className="">
              <div>
                <h5 style={{ color: "#848484" }}>
                  Aqui vas a personalizar tu QR
                </h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Qr;
