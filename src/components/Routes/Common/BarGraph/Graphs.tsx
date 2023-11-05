import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Pie, PolarArea, Radar } from "react-chartjs-2";
import { color } from "chart.js/helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);
const backgroudColorsArray = [
  "rgb(240 253 244)",
  "rgb(220 252 231)",
  "rgb(187 247 208)",
  "rgb(134 239 172)",
  "rgb(74 222 128)",
  "rgb(34 197 94)",
  " rgb(22 163 74)",
  "rgb(21 128 61)",
  "rgb(22 101 52)",
  "rgb(20 83 45)",
  "rgb(5 46 22)",
];
export const horizontalBarOptions = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};
export const verticalBarOptions = {
  indexAxis: "x" as const,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};
export const PieData = ({ genres, occurences, chartType }: any) => {
  console.log(genres, occurences);
  return {
    labels: genres,
    datasets: [
      {
        label: "Pie Data",
        data: occurences,
        backgroundColor:
          chartType === "radar" ? "rgba(22 101 52)" : backgroudColorsArray,
        borderColor: "rgba(22 101 52)",
        borderWidth: 1,
      },
    ],
  };
};

const getBarData = ({ genres, occurences }: any) => {
  return {
    labels: genres,
    datasets: [
      {
        label: "Frequency",
        data: genres.map((genre: string, index: number) => occurences[index]),
        backgroundColor: backgroudColorsArray,
      },
    ],
  };
};

function Graphs({ data: genreData, chartType }: any) {
  const shuffledGenreData = genreData.sort(() => Math.random() - 0.5);
  let genres: string[] = [];
  let occurences: string[] = [];
  shuffledGenreData?.forEach((genre: any) => {
    genres.push(genre[0]);
    occurences.push(genre[1]);
  });

  switch (chartType) {
    case "horizontalBar":
      return (
        <Bar
          options={horizontalBarOptions}
          data={getBarData({ genres, occurences })}
          style={{ maxWidth: "80%", maxHeight: "80%", margin: "50px" }}
          redraw={true}
        />
      );
    case "verticalBar":
      return (
        <Bar
          options={verticalBarOptions}
          data={getBarData({ genres, occurences })}
          style={{ maxWidth: "80%", maxHeight: "80%", margin: "50px" }}
          redraw={true}
        />
      );
    case "pie":
      return (
        <Pie
          data={PieData({ genres, occurences })}
          style={{ maxWidth: "80%", maxHeight: "80%", margin: "50px" }}
          redraw={true}
        />
      );
    case "radar":
      return (
        <Radar
          data={PieData({ genres, occurences, chartType: "radar" })}
          style={{ maxWidth: "80%", maxHeight: "80%", margin: "50px" }}
          redraw={true}
          options={{
            scales: {
              r: {
                angleLines: {
                  color: "white",
                  borderDash: [5, 5],
                },
                grid: {
                  color: "rgb(21 128 61)", // Set the color of the grid lines
                },
              },
            },
          }}
        />
      );
    case "polar": {
      return (
        <PolarArea
          data={PieData({ genres, occurences })}
          style={{ maxWidth: "80%", maxHeight: "80%", margin: "50px" }}
          options={{
            scales: {
              r: {
                grid: {
                  color: "rgb(21 128 61)",
                },
              },
            },
          }}
        />
      );
    }
  }
  return <></>;
}

export default Graphs;
