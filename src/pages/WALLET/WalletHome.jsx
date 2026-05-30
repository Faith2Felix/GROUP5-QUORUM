import React from "react";

const Wallet = () => {
  return (
    <div className="bg-[#070B1A] min-h-screen text-white flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between px-5 pt-6">
        <button className="text-2xl text-purple-300">←</button>

        <h1 className="text-xl font-bold tracking-wide">MY WALLET</h1>

        <button className="text-xl text-purple-300">🔔</button>
      </div>

      {/* WALLET CARD */}
      <div className="mx-5 mt-8 bg-gradient-to-b from-purple-700 to-purple-900 rounded-[28px] p-6 shadow-2xl">
        {/* Balance text */}
        <div className="flex justify-between items-center">
          <p className="text-gray-300 text-sm">● Current Balance</p>

          <button className="text-gray-300 text-xl">×</button>
        </div>

        {/* Coins */}
        <div className="flex items-center mt-10 gap-3">
          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-2xl">
            $
          </div>

          <h2 className="text-5xl font-bold">120</h2>

          <span className="text-3xl font-semibold text-gray-200">Coins</span>
        </div>

        {/* Bottom of card */}
        <div className="flex items-end justify-between mt-20">
          <div>
            <p className="text-gray-400 text-xs uppercase">Wallet ID</p>

            <p className="text-lg font-medium mt-1">QRM-2284</p>
          </div>

          <button className="border border-orange-300 text-orange-300 px-6 py-3 rounded-full hover:bg-orange-300 hover:text-black transition">
            Fund Wallet
          </button>
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="px-5 mt-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Recent Transactions</h2>

        <button className="text-purple-300 text-sm">View ALL</button>
      </div>

      {/* TRANSACTION CARDS */}
      <div className="px-5 mt-5 flex flex-col gap-5">
        {/* CARD 1 */}
        <div className="bg-[#111827] rounded-3xl p-5 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-300 text-2xl">
              ↓
            </div>

            <div>
              <h3 className="text-xl font-semibold">Coin Purchase</h3>

              <p className="text-gray-400 text-sm">20 May 2025</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-cyan-400 text-2xl font-bold">+100 Coins</p>

            <p className="text-cyan-300 text-xs mt-1">SUCCESSFUL</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#111827] rounded-3xl p-5 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-orange-300 text-2xl">
              ↑
            </div>

            <div>
              <h3 className="text-xl font-semibold">Vote Deduction</h3>

              <p className="text-gray-400 text-sm">20 May 2025</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-orange-300 text-2xl font-bold">-5 Coins</p>

            <p className="text-cyan-300 text-xs mt-1">SUCCESSFUL</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#111827] rounded-3xl p-5 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-orange-300 text-2xl">
              ↑
            </div>

            <div>
              <h3 className="text-xl font-semibold">Vote Deduction</h3>

              <p className="text-gray-400 text-sm">20 May 2025</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-orange-300 text-2xl font-bold">-5 Coins</p>

            <p className="text-cyan-300 text-xs mt-1">SUCCESSFUL</p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="flex justify-around mt-10 px-5">
        <div className="text-center">
          <div className="text-purple-400 text-2xl">🗳️</div>

          <h3 className="text-4xl font-bold mt-2">24</h3>

          <p className="text-gray-400 text-sm">Votes Cast</p>
        </div>

        <div className="text-center">
          <div className="text-yellow-400 text-2xl">🏆</div>

          <h3 className="text-4xl font-bold mt-2">Tier 2</h3>

          <p className="text-gray-400 text-sm">Voter Status</p>
        </div>
      </div>

    </div>
  );
};

export default Wallet;
