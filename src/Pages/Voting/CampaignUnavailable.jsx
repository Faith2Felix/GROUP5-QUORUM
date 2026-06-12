import {
  ExclamIcon,
  DotIcon,
} from "../../assets/Icon";
import { useNavigate } from "react-router-dom";

function CampaignUnavailable() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A12] flex flex-col justify-center pb-24 px-6 text-center">

      {/* FIXED BACK ARROW */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-10 left-4 z-50 text-white hover:opacity-80 transition-opacity"
      >
        <svg
          className="w-5 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <h2 className="text-white mt-12 item-center text-3xl mb-6">Best New Album</h2>

      {/* SEARCH BAR FIXED */}
      <div className="mb-26">
        <div className="relative w-full">

          {/* ICON INSIDE INPUT */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2915 12.4306H13.563L13.3049 12.1909C14.2398 11.1468 14.7536 9.81376 14.7525 8.43512C14.7525 7.29367 14.401 6.17785 13.7424 5.22876C13.0839 4.27967 12.1479 3.53995 11.0527 3.10314C9.95761 2.66632 8.75256 2.55203 7.58998 2.77471C6.4274 2.9974 5.3595 3.54707 4.52132 4.3542C3.68315 5.16133 3.11234 6.18967 2.88109 7.3092C2.64984 8.42872 2.76853 9.58914 3.22214 10.6437C3.67576 11.6983 4.44393 12.5996 5.42952 13.2338C6.41511 13.8679 7.57385 14.2064 8.75921 14.2064C10.2437 14.2064 11.6083 13.6826 12.6594 12.8124L12.9084 13.061V13.7625L17.5186 18.1931L18.8925 16.8701L14.2915 12.4306ZM8.75921 12.4306C6.46332 12.4306 4.61002 10.646 4.61002 8.43512C4.61002 6.22427 6.46332 4.43961 8.75921 4.43961C11.0551 4.43961 12.9084 6.22427 12.9084 8.43512C12.9084 10.646 11.0551 12.4306 8.75921 12.4306Z"
                fill="white"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center">
        <ExclamIcon size={60} className="text-red-500" />

        <p className="text-white text-xl mt-20 mb-8">
          Live campaign not available at the moment. Check back later.
        </p>

        <button
          onClick={() => navigate("/leaderboard")}
          className="bg-[#22C55E]/15 flex items-center gap-3 py-2 text-[#22C55E] px-3 text-sm rounded-2xl"
        >
          <DotIcon /> View Leaderboard
        </button>
      </div>
    </div>
  );
}

export default CampaignUnavailable;