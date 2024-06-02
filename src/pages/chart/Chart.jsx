import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const [products, setProducts] = useState(null);
  const [offset, setOffset] = useState(1);
  const PAGE_COUNT = 5;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products", {
        params: {
          limit: PAGE_COUNT,
          skip: PAGE_COUNT * offset,
        },
      })
      .then((res) => setProducts(res.data.products));
  }, [offset]);

  const data = {
    labels: products?.map((pro) => pro.title),
    datasets: [
      {
        label: "# of Stocks",
        data: products?.map((pro) => pro.stock),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="chart">
      <div className="chart-style">
        <Pie data={data} />;
        <button onClick={() => setOffset((p) => p - 1)} className="chart-btn">
          Prev
        </button>
        <button onClick={() => setOffset((p) => p + 1)} className="chart-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Chart;
