import React, { useEffect, useState } from "react";
var url = "https://disease.sh/v3/covid-19/countries";
var i = 0;
export const Countries = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  const fetchdata = async () => {
    const responce = await fetch(url);
    const actualdata = await responce.json();
    setdata(actualdata);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data);

  const handelsubmit = (e) => {
    e.preventDefault();
  };

  const filtereddata = data.filter((data) =>
    data.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="actualdata">
      <h1
        style={{ textAlign: "center", marginBottom: "10px", marginTop: "10px" }}
      >
        Country-wise COVID-19 Analysis
        <form onSubmit={handelsubmit}>
          <input
            type="text"
            placeholder="Search For Country"
            className="input"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </form>
      </h1>
      <div className="countrycollection">
        {filtereddata.map((adata) => {
          const {
            country,
            active,
            cases,
            todayCases,
            deaths,
            recovered,
            todayDeaths,
            countryInfo,
          } = adata;
          return (
            <div key={i++} className="countrycard">
              <h2 style={{ textAlign: "center" }}>{country}</h2>
              <img src={countryInfo.flag} alt={countryInfo.flag} />
              <div className="countrycarddata">
                <div className="singleinfo">
                  <div>
                    <h3>Total Cases</h3>
                  </div>
                  <div>
                    <h3>{cases}</h3>
                  </div>
                </div>
                <div className="singleinfo">
                  <div>
                    <h3>Total Active cases </h3>
                  </div>
                  <div>
                    <h3>{active}</h3>
                  </div>
                </div>
                <div className="singleinfo">
                  <div>
                    <h3>Recovered </h3>
                  </div>
                  <div>
                    <h3>{recovered}</h3>
                  </div>
                </div>
                <div className="singleinfo">
                  <div>
                    <h3>Today's cases </h3>
                  </div>
                  <div>
                    <h3>{todayCases}</h3>
                  </div>
                </div>
                <div className="singleinfo">
                  <div>
                    <h3>Today's deaths </h3>
                  </div>
                  <div>
                    <h3>{todayDeaths}</h3>
                  </div>
                </div>
                <div className="singleinfo">
                  <div>
                    <h3>Total Deaths </h3>
                  </div>
                  <div>
                    <h3>{deaths}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
