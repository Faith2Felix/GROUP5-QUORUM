import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Components/Voting/SearchBar"; 
import { topCategories } from "../../Data/VotingData.js";

function CategoriesPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return topCategories.filter((c) =>
      c.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#0A0A12] px-5 pt-6 pb-18 text-white">
       {/* Back Arrow Navigation */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
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
        </div>
      <div className="mb-5 text-2xl font-bold tracking-tight">All Categories</div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="mt-5 space-y-1">
        {filtered.map((cat) => (
          <button
            key={cat.id}
onClick={() => {
  if (cat.label === "Best New Act") {
    navigate("/campaign-unavailable");
  } else {
    navigate(`/categories/${encodeURIComponent(cat.label)}`);
  }
}}            className="flex w-full items-center justify-between border-b border-white/40 py-4 last:border-b-0"
          >
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-white/10">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold text-white/90">{cat.label}</p>
            </div>

            <span className="text-lg text-white/40">{">"}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;