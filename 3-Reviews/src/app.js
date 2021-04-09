import React, { useState, useEffect } from "react";
import { Review } from "./review";
import "./index.css";

export const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};
