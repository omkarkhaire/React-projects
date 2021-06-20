import React from "react";
import ReactDom from "react-dom";
import "./index.css"; //css file

import { Globalstats } from "./globalstats";
import { Header } from "./header";
import { Countries } from "./countries";
import { Footer } from "./footer";
import { Chart } from "./chart";

function Booklist() {
  return (
    <div>
      <Header />
      <Globalstats />
      <Countries />
      <Footer />
    </div>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
