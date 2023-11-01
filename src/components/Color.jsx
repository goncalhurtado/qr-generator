import React from "react";
import { MuiColorInput } from "mui-color-input";
import Link from "@mui/material/Link";
import "../styles/qr.css";

const Color = ({ color, setColor, clear, setClear }) => {
  const handlebg = (newValueBg) => {
    setColor({ main: color.main, bg: newValueBg });
  };
  const handlecolor = (newValueMain) => {
    setColor({ main: newValueMain, bg: color.bg });
  };

  const clearColors = () => {
    setColor({ main: "#000000", bg: "#ffffff" });
    setClear(false);
  };

  return (
    <>
      <div className="colorContainer mt-3">
        <>
          <MuiColorInput
            value={color.main}
            onChange={handlecolor}
            label="Color Principal"
            className="mt-2"
          />

          <MuiColorInput
            value={color.bg}
            onChange={handlebg}
            label="Color Fondo"
            className="mt-4"
          />
        </>
      </div>

      <div>
        {clear && (
          <Link className="restablecerColor" onClick={() => clearColors()}>
            Restablecer Color
          </Link>
        )}
      </div>
    </>
  );
};

export default Color;
