"use client";
export default function StatsCards() {
  const stats = [
    { title: "Total Users", value: "1,245" },
    { title: "Revenue", value: "$32,400" },
    { title: "Tx Count", value: "2,309" },
    { title: "Gas Spent", value: "0.623 ETH" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
        >
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            {s.title}
          </h3>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
}
