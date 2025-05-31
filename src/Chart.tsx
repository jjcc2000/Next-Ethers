"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", value: 200 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 150 },
  { name: "Thu", value: 380 },
  { name: "Fri", value: 260 },
];

export default function Chart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#6366f1" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
