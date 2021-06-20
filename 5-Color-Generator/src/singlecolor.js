import React from "react";
// import rgbToHex from "./utils";

export const Singlecolor = ({ rgb, weight, index, hexcolor }) => {
  const [alert, setalert] = React.useState(false);
  // console.log(rgb) rgb is an array
  const bcg = rgb.join(","); //to join with coma each element
  console.log(bcg);
  const hex = "#" + hexcolor;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setalert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]); //once alert changes
  return (
    <div
      className={`${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setalert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="percent-value">{hex}</p>
      {alert && (
        <p className="alert" style={{ textAlign: "center" }}>
          Copied To Clipboard
        </p>
      )}
    </div>
  );
};
