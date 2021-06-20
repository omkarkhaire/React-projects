import React, { useState } from "react";
import ReactDom from "react-dom";
import { Category } from "./category";
import Data from "./data";
import { Menu } from "./menu";

const categoryforbtn=["all items",...new Set(Data.map((item)=>{return item.category}))];
console.log(categoryforbtn);

function App() {
  const [menuitems, setmenuitems] = useState(Data);
  const [categoryies, setcatogeries] = useState(categoryforbtn);

  
  

  const filteritems = (category) => {
    if (category === "all items") {
      setmenuitems(Data);
      return;
    }
    const newitems = Data.filter((item) => item.category === category); //store data of equal
    setmenuitems(newitems);
  };
  return (
    <div className="entirecontainer">
      <div className="titel">
        <h1>Our Menu</h1>
        <hr />
      </div>
      <Category filteritems={filteritems} categoryies={categoryies} />
      <Menu items={menuitems} />
    </div>
  );
}

export default App;
