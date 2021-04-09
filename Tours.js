import React from "react";
import { Tour } from "./Tour";

//distructured here     /////
export const Tours = ({ tours, removetour }) => {
  return (
    <section className="structure">
      <div className="tourstitel">
        <h1>Our Tours</h1>
      </div>
      <div className="underline">
        <hr />
      </div>

      <div className="collection">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removetour={removetour} />;
        })}
      </div>
    </section>
  );
};
