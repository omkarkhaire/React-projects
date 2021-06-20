import React, { useEffect, useState } from "react";

var url = "https://disease.sh/v3/covid-19/all";
export const Globalstats = () => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState({});

  const fetchdata = async () => {
    try {
      const response = await fetch(url);
      const actualdata = await response.json();
      setloading(false);
      setdata(actualdata);
    } catch (error) {
      setloading(true);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="containerglobalstats" style={{ marginBottom: "20px" }}>
      <div className="header">
        <h2 style={{ textTransform: "capitalize" }}>
          global statistics of covid 19
        </h2>
      </div>
      <hr />
      <div className="groupinfo">
        <div className="singleinfo">
          <div>
            <h3>Total Cases</h3>
          </div>
          <div>
            <h3>{data.cases}</h3>
          </div>
        </div>
        <div className="singleinfo">
          <div>
            <h3>Critical Cases </h3>
          </div>
          <div>
            <h3>{data.critical}</h3>
          </div>
        </div>
        <div className="singleinfo">
          <div>
            <h3>Active Cases </h3>
          </div>
          <div>
            <h3>{data.active}</h3>
          </div>
        </div>
        <div className="singleinfo">
          <div>
            <h3>Total Deaths</h3>
          </div>
          <div>
            <h3>{data.deaths}</h3>
          </div>
        </div>
        <div className="singleinfo">
          <div>
            <h3>Todays Cases </h3>
          </div>
          <div>
            <h3> {data.todayCases}</h3>
          </div>
        </div>
        <div className="singleinfo">
          <div>
            <h3>Todays Deaths</h3>
          </div>
          <div>
            <h3> {data.todayDeaths}</h3>
          </div>
        </div>
        <div className="singleinfo">
          <div>
            <h3>Affected Countries </h3>
          </div>
          <div>
            <h3> {data.affectedCountries}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
