import React, { useState } from "react";
import "./index.css";
import { data } from "./data";

import { List } from "./list";

const App = () => {
  

  return (
    <div className="container">
      <List people={data} />
    </div>
  );
};
export default App;
