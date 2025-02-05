import React from "react";
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [30, 50, 80, 40, 100, 60],
      backgroundColor: [
        "#F87171",
        "#FBBF24",
        "#34D399",
        "#60A5FA",
        "#A78BFA",
        "#F472B6",
      ],
      borderColor: "#1E293B",
      borderWidth: 1,
    },
  ],
};

const Charts = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📊 Chart Examples
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-center mb-2">
            📊 Bar Chart
          </h3>
          <Bar data={data} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-center mb-2">
            📈 Line Chart
          </h3>
          <Line data={data} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-center mb-2">
            🥧 Pie Chart
          </h3>
          <Pie data={data} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-center mb-2">
            🍩 Doughnut Chart
          </h3>
          <Doughnut data={data} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-center mb-2">
            📌 Radar Chart
          </h3>
          <Radar data={data} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-center mb-2">
            🌎 Polar Area Chart
          </h3>
          <PolarArea data={data} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
