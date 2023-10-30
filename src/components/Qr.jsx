import React from "react";
import QRCode from "react-qr-code";

const Qr = ({ inputData }) => {
  const data = inputData || "https://www.google.com";

  return (
    <>
      <div>Qr</div>
      <QRCode value={data} />
    </>
  );
};

export default Qr;
