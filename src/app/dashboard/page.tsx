"use client";
import { useWallet } from "@/hooks/useWallet";
import StatsCards from "@/components/dashboard/StatsCards";
import Chart from "@/Chart";

export default function DashboardPage() {
  const { account, balance } = useWallet();
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow text-center">
      <p>👛 Wallet: {account || "Not connected"}</p>
      <p>💰 Balance: {balance ? `${balance} ETH` : "Loading..."}</p>
      <StatsCards />
      <Chart />
    </div>
  );
}
