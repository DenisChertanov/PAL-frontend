import React from "react";
import "./css/AnimeCountLineChart.css";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  CategoryScale,
  registerables,
} from "chart.js";
Chart.register(ArcElement, Tooltip, Title, Legend, ...registerables);
Chart.register(CategoryScale);

function AnimeCountLineChart({ animeCountDistribution, ...props }) {
  const data = {
    labels: animeCountDistribution.map(
      (animeCountPeriod) => animeCountPeriod.period
    ),
    datasets: [
      {
        label: "Количество аниме",
        data: animeCountDistribution.map(
          (animeCountPeriod) => animeCountPeriod.count
        ),
        fill: false,
        borderColor: "rgb(215, 35, 35)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="line-div">
      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        // height={150}
        width={650}
      />
    </div>
  );
}

export default AnimeCountLineChart;
