import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "",
  },
  {
    name: "2020",
    Ações: 459,
    amt: 2210
  },
  {
    name: "2021",
    Ações: 2024,
    amt: 2290
  },
  {
    name: "2022",
    Ações: 2334,
    amt: 2000
  },
  {
    name: "2023",
    Ações: 1638,
    amt: 2181
  },
  {
    name: "",
  }

];

export default function App() {
  return (
    <div>
    <h1>Quantidade de ações institusionalizadas no SIGAA</h1> 
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Ações"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
    </div>
  );
}
