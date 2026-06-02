import {
  EventsIcon,
  HomeIcon,
  LeaderboardIcon,
  VotesIcon,
  WalletIcon,
} from "../../assets/Icon";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full right-0 bg-[#1E293B] border-t border-gray-800 flex justify-around py-6 z-50">
      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <HomeIcon />
        <p className="text-xs">HOME</p>
      </div>

      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <EventsIcon />
        <p className="text-xs">EVENTS</p>
      </div>

      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <WalletIcon />
        <p className="text-xs">WALLET</p>
      </div>

      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <VotesIcon />
        <p className="text-xs">VOTES</p>
      </div>

      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <LeaderboardIcon />
        <p className="text-xs">LEADERBOARD</p>
      </div>
    </div>
  );
};
export default BottomNav;
