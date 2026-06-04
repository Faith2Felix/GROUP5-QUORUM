import React from "react";
import { useNavigate } from "react-router-dom";

const VotingHistory = () => {
  const navigate = useNavigate();

  const votingHistory = [
    {
      id: 1,
      candidate: "Jane Doe",
      votes: 5,
      date: "20 May 2025",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      candidate: "Jane Doe",
      votes: 5,
      date: "20 May 2025",
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: 3,
      candidate: "John Smith",
      votes: 10,
      date: "21 May 2025",
      image: "https://i.pravatar.cc/150?img=7",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-5 pt-10">
      {/* Header */}
      <button
        onClick={() => navigate(-1)}
        className="mb-12"
      >
        ←
      </button>

      <h1 className="text-center text-3xl font-bold mb-16">
        Voting History
      </h1>

      {/* History List */}
      <div className="space-y-8">
        {votingHistory.map((vote) => (
          <div key={vote.id}>
            <div className="flex items-center gap-4">
              <img
                src={vote.image}
                alt={vote.candidate}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">
                  {vote.candidate}
                </h3>

                <p className="text-gray-300 text-sm">
                  {vote.votes} Votes
                </p>

                <p className="text-gray-400 text-sm">
                  {vote.date}
                </p>
              </div>
            </div>

            <div className="mt-4 border-b border-violet-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingHistory;