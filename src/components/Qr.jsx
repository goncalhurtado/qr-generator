import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import "../styles/qr.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import Color from "./Color";

const Qr = ({ inputData }) => {
  const data = inputData || "";

  //Color QR

  const [color, setColor] = useState({ main: "#000000", bg: "#ffffff" });
  const [clear, setClear] = useState(false);

  //Download Funct

  const handleDownload = () => {
    const qrToDownload = document.getElementById("qrToDownload");

    if (qrToDownload) {
      htmlToImage.toBlob(qrToDownload).then(function (blob) {
        saveAs(blob, "downloaded-qr-elLinkDeGoncal.png");
      });
    }
  };

  useEffect(() => {
    if (color.main !== "#000000" || color.bg !== "#ffffff") {
      setClear(true);
    }
  }, [color]);
  return (
    <>
      <div className="qrPageContainer mb-3 row">
        <div className="qrContainer col-12 col-md-6">
          <div id="qrToDownload" className="qr p-2">
            {data != "" ? (
              <Box sx={{ backgroundColor: `${color.bg}`, padding: "10px" }}>
                <QRCode value={data} bgColor={color.bg} fgColor={color.main} />
              </Box>
            ) : (
              <div>
                <h5>Tu Código QR va aquí</h5>
              </div>
            )}
          </div>
        </div>
        <div className="setupContainer col-12 col-md-6">
          {data != "" ? (
            <>
              <Color
                color={color}
                setColor={setColor}
                clear={clear}
                setClear={setClear}
              />
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
