import React, { useState } from "react";
import Values from "values.js";
import { Singlecolor } from "./singlecolor";

function App() {
  const defcolor = new Values("#f15025").all(10); //100 / 10 ie shades
  const [color, setcolor] = useState("");
  const [error, seterror] = useState(false);
  const [list, setlist] = useState(defcolor);

  const handelsubmit = (e) => {
    e.preventDefault();

    try {
      seterror(false);
      let colors = new Values(color).all(10); //returns an array
      console.log(colors);
      setlist(colors);
    } catch (error) {
      seterror(true); //if color code is wrong
      alert("Such color doesn't exist");
    }
  };

  return (
    <div className="mega">
      <div className="container1">
        <h2>Color Generator</h2>
        <form onSubmit={handelsubmit}>
          <input
            type="text"
            id="inputcolor"
            name="inputcolor"
            value={color}
            placeholder="#f15025"
            onChange={(e) => {
              setcolor(e.target.value);
            }}
            className={`${error ? "error" : null}`} //very imp
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </div>

      <div className="colors">
        <h4>Different colors....</h4>
        <div className="color-list">
          {list.map((color, index) => {
            return (
              <>
                <Singlecolor
                  key={index}
                  {...color}
                  index={index}
                  hexcolor={color.hex}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
