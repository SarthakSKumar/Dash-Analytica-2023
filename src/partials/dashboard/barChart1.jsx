import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-dist";
import { parse } from "papaparse";
import { XLSX } from "xlsx";

const Card1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchExcelData();
  }, []);

  const fetchExcelData = async () => {
    const filePath =
      "C:\\Users\\sunil\\Desktop\\Electhon-2023\\Maps\\Datasets\\tweets_data.xlsx";
    const file = await fetch(filePath);
    const arrayBuffer = await file.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const result = XLSX.utils.sheet_to_json(sheet);
    setData(result);
  };

  const createBarChart = (data) => {
    const ceoData = data.find((row) => row.username === "ceo_karnataka");

    const barData = [
      {
        x: [ceoData.replies_count, ceoData.retweets_count, ceoData.likes_count],
        y: ["Average Replies", "Average Retweets", "Average likes"],
        type: "bar",
        orientation: "h",
        marker: { color: "#00acee" },
      },
    ];

    const layout = {
      title: `Analysis on the handle: ${ceoData.username}`,
      font: { size: 22 },
      yaxis: { categoryorder: "total ascending" },
      barmode: "stack",
    };

    Plotly.newPlot("barChart", barData, layout);
  };

  useEffect(() => {
    if (data.length > 0) {
      createBarChart(data);
    }
  }, [data]);

  return <div id="barChart" style={{ width: "100%", height: "500px" }}></div>;
};

export default Card1;
