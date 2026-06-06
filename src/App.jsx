import { Routes, Route } from "react-router-dom";
import QuorumVotingHome from "./Pages/Voting/QuorumVotingHome";
import CategoriesPage from "./Pages/Voting/CategoriesPage";
import CategoryNomineesPage from "./Pages/Voting/CategoryNomineesPage";
import NomineesPage from "./Pages/Voting/NomineesPage";
import NomineeDetailPage from "./Pages/Voting/NomineeDetailPage";
import SelectVotes from "./Pages/Voting/SelectVote";
import Processing from "./Pages/Voting/Processing";
import CampaignPaused from "./Pages/Voting/CampaignPaused";
import InsufficientCoins from "./Pages/Voting/InsufficientCoins";
import VoteSuccess from "./Pages/Voting/VoteSuccess";
import VotingReceipt from "./Pages/Voting/VotingReceipt";



function App() {
  return (
    <Routes>
      <Route path="/" element={<QuorumVotingHome />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:label" element={<CategoryNomineesPage />} />
      <Route path="/nominees" element={<NomineesPage />} />
      <Route path="/nominees/:id" element={<NomineeDetailPage />} />
      <Route path="/nominees/:id/select-votes" element={<SelectVotes />} />
      <Route path="/nominees/:id/processing" element={<Processing />} />
      <Route path="/nominees/:id/campaign-paused" element={<CampaignPaused />} />
      <Route path="/nominees/:id/insufficient-coins" element={<InsufficientCoins />} />
      <Route path="/nominees/:id/vote-success" element={<VoteSuccess />} />
      <Route path="/nominees/:id/receipt" element={<VotingReceipt />} />

    </Routes>
  );
}

export default App;

