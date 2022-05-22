import React from "react";
import "./css/AnimeTypePieChart.css";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Title, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Title, Legend);

function AnimeTypePieChart({ animeTypesStatisticList, ...props }) {
  const data = {
    labels: animeTypesStatisticList.map(
      (animeTypeStatistic) => animeTypeStatistic.animeTypeTitle
    ),
    datasets: [
      {
        label: "DATASET LABEL",
        data: animeTypesStatisticList.map(
          (animeTypeStatistic) => animeTypeStatistic.count
        ),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(15, 155, 100)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="pie-div">
      <Pie
        data={data}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              //   display: false,
              position: "right",
              labels: {
                fontSize: 25,
              },
            },
          },
        }}
        height={280}
        width={500}
      />
    </div>
  );
}

export default AnimeTypePieChart;
