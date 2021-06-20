import React from "react";

export const Category = ({ filteritems, categoryies }) => {
  return (
    <div className="btn-container">
      {categoryies.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              filteritems(item);
            }}
            style={{ textTransform: "capitalize" }}
            className="btnsingle"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
