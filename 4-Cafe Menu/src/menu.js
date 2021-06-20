import React, { useState } from "react";
import "./index.css";

export const Menu = ({ items }) => {
  return (
    <div className="menu">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;

        return (
          <div key={id} className="item">
            <div className="allcontaints">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header className="header">
                  <h4 style={{ textTransform: "capitalize" }}>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <hr/>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
