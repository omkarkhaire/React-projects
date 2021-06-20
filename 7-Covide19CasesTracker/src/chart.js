import React, { useEffect, useState, PureComponent } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

var url = "https://disease.sh/v3/covid-19/all";

export const Chart = () => {
  const [rates, setdata] = useState({});

  const fetchdata = async () => {
    try {
      const response = await fetch(url);
      const actualdata = await response.json();

      setdata(actualdata);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(rates);

  return (
    <div
      style={{
        width: "40vw",
        margin: "auto",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div>
        <ul style={{ listStyle: "none", textAlign: "start" }}>
          <li
            style={{
              listStyle: "none",
              textAlign: "start",
              backgroundColor: "#FF8333",
              margin: "5px",
            }}
          >
            Total Cases
          </li>
          <li
            style={{
              listStyle: "none",
              textAlign: "start",
              backgroundColor: "#97FF33",
              margin: "5px",
            }}
          >
            Recovered Cases
          </li>
          <li
            style={{
              listStyle: "none",
              textAlign: "start",
              backgroundColor: "#F2260A",
              margin: "5px",
            }}
          >
            Total Deaths
          </li>
          <li
            style={{
              listStyle: "none",
              textAlign: "start",
              backgroundColor: "#0A99F2",
              margin: "5px",
            }}
          >
            Active Cases
          </li>
        </ul>
      </div>
    </div>
  );
};
//  <PieChart width={400} height={400}>
//    <Pie
//      dataKey="value"
//      isAnimationActive={false}
//      data={data}
//      cx="50%"
//      cy="50%"
//      outerRadius={80}
//      fill="#8884d8"
//      label
//    />

//    <Tooltip />
//  </PieChart>;

// {/* <PieChart width={800} height={400}>
//   <Pie
//     data={data}
//     cx={120}
//     cy={200}
//     innerRadius={60}
//     outerRadius={80}
//     fill="#8884d8"
//     paddingAngle={5}
//     dataKey="value"
//   >
//     {data.map((entry, index) => (
//       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//     ))}
//     <Tooltip />
//   </Pie>
// </PieChart>; */}
