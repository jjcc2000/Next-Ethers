"use client";
import { useWallet } from "@/hooks/useWallet";
import ThemeToggle from "@/ui/ThemeToggle";

export default function DashboardPage() {
  const { account, balance } = useWallet();
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow text-center">
      <p>👛 Wallet: {account || "Not connected"}</p>
      <p>💰 Balance: {balance ? `${balance} ETH` : "Loading..."}</p>
      <ThemeToggle />
    </div>
  );
}
