

import  { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const Tr = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from your API
    fetch("http://localhost:2000/product/productget")
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is in the format: [{ label: "Label", value: 10 }, ...]
        const formattedData = [["Label", "Value"]];
        data.forEach((item) => {
          formattedData.push([item.label, item.value]);
        });
        setChartData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {chartData ? (
        <Chart
          chartType="PieChart"
          data={chartData}
          options={{
            title: "Upper Chart",
            is3D: true,
          }}
          width={"100%"}
          height={"400px"}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

