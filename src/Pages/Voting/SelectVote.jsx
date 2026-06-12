import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNomineeById } from "../../Data/VotingData";
import ReturnArrow from "../../Components/WALLET/ReturnArrow";
import { CoinsIcon } from "../../assets/Icon";
const COIN_PER_VOTE = 10;

export default function SelectVotes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const nominee = getNomineeById(id);

  const [voteCount, setVoteCount] = useState(1);
  const userCoins = 62; 

  const totalCost = voteCount * COIN_PER_VOTE;
  const canAfford = userCoins >= totalCost;

  if (!nominee) {
    return (
      <div className="min-h-screen bg-[#06060e] px-5 pt-6 text-white">
        Nominee not found.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#06060e] text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-6 pb-4">
        <button onClick={() => navigate(-1)} className="flex h-9 w-9 items-center justify-center">
          <ReturnArrow/>
        </button>
        <span className="text-md flex flex-col text-white/50">
          Coin balance <span className="font-bold text-right text-[#F4B400]">{userCoins}</span>
        </span>
      </div>

      {/* Centered content */}
      <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
        <h1 className="mb-2 text-2xl font-extrabold">Select Number of Votes</h1>
        <p className="mb-12 text-sm text-white/50 leading-relaxed max-w-[260px]">
          Choose how many votes you want to cast using your wallet balance.
        </p>

        {/* +/- Counter */}
        <div className="mb-8 flex items-center gap-8">
          <button
            onClick={() => setVoteCount((v) => Math.max(1, v - 1))}
            disabled={voteCount <= 1}
            className="flex h-12 w-12 border border-gray-300 items-center justify-center rounded-full bg-[#7B3FF2] text-2xl font-bold disabled:opacity-30"
          >
            −
          </button>

          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-extrabold">{voteCount}</span>
            <span className="text-sm text-white/50">vote{voteCount !== 1 ? "s" : ""}</span>
          </div>

          <button
            onClick={() => setVoteCount((v) => v + 1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7B3FF2] text-2xl font-bold"
          >
            +
          </button>
        </div>

        {/* Coin cost pill */}
        <div className="mt-14 flex items-center gap-2 px-5 py-2">
          <span className="text-lg"><CoinsIcon/></span>
          <span className="text-sm font-bold text-[#F4B400]">{totalCost} Coins</span>
        </div>

        {!canAfford && (
          <p className="text-xs text-red-400">
            Not enough coins — you need {totalCost - userCoins} more.
          </p>
        )}
      </div>

      {/* Vote button */}
      <div className="px-5 pb-10">
        <button
          disabled={!canAfford}
          onClick={() =>
            navigate(`/nominees/${id}/processing`, {
              state: { voteCount, totalCost, nominee },
            })
          }
          className="w-full rounded-xl bg-[#7B3FF2] py-4 text-sm font-medium disabled:opacity-40"
        >
          Vote
        </button>
      </div>
    </div>
  );
}