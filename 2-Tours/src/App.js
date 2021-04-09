import React, { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { Tour } from "./Tour";
import { Tours } from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

  const removetour = (id) => {
    const newtours = tours.filter((tour) => tour.id !== id);
    settours(newtours);
  };

  const fetchTours = async () => {
    try {
      //to handel network error
      const responce = await fetch(url);
      const tours = await responce.json();
      setloading(false);
      settours(tours);
    } catch (error) {
      //some network eorror
      setloading(true);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="container">
        <h1>No tours left</h1>
        <button className="refresh-btn" onClick={fetchTours}>Refresh</button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removetour={removetour} />
    </div>
  );
}

export default App;
