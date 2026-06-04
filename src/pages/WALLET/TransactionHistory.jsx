import React, { useState } from "react";
import { CoinsIcon, RefreshCw } from "../../assets/Icon";
import { XCircleIcon } from "lucide-react";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState("all");

  const transactions = [
    {
      title: "Coin Purchase",
      date: "20 May 2025",
      amount: "+100 Coins",
      type: "credit",
      status: "Successful",
    },
    {
      title: "Coin Purchase",
      date: "20 May 2025",
      amount: "+100 Coins",
      type: "credit",
      status: "Successful",
    },
    {
      title: "Coin Purchase",
      date: "20 May 2025",
      amount: "+100 Coins",
      type: "credit",
      status: "Successful",
    },
    {
      title: "Coin Purchase",
      date: "20 May 2025",
      amount: "+100 Coins",
      type: "credit",
      status: "Failed",
    },
  ];

  const filteredTransactions =
    activeTab === "all"
      ? transactions
      : transactions.filter((tx) => tx.type === activeTab);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-4 pt-16 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Transaction History</h1>

        <button className="text-gray-400 text-xl">
          <RefreshCw className="w-6 h-6 text-white"/>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mt-18">
        {["all", "credit", "debit"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-1 rounded-3xl text-base capitalize border-2 border-[#F8FAFC] ${
              activeTab === tab ? "bg-[#7B3FF2]" : "bg-[#000000]/[.2]"
            }`}
          >
            {tab === "credit" ? "Credits" : tab === "debit" ? "Debits" : "All"}
          </button>
        ))}
        <button>
          <XCircleIcon className="w-10 h-10"/>
        </button>
      </div>

      {/* Transaction List */}
      <div className="mt-8">
        {filteredTransactions.map((tx, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 px-5 border-b border-gray-600"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <CoinsIcon className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-semibold text-base">{tx.title}</h3>

                <p className="text-sm text-gray-400">{tx.date}</p>
              </div>
            </div>

            <div className="text-right">
              <p
                className={`font-semibold text-base ${
                  tx.type === "credit" ? "text-[#F8FAFC]" : "text-[#F4B400]"
                }`}
              >
                {tx.amount}
              </p>

              <p
                className={`text-base text-center ${
                  tx.status === "Successful" ? "text-green-400" : "text-red-400"
                }`}
              >
                {tx.status}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-center text-xl font-medium text-[#F8FAFC] pt-28">No more transactions</p>
    </div>
  );
};

export default TransactionHistory;
