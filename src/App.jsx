import { Routes, Route } from "react-router-dom"; // removed unused useNavigate

// Voting Pages
import QuorumVotingHome from "./pages/Voting/QuorumVotingHome";
import CategoriesPage from "./pages/Voting/CategoriesPage";
import CategoryNomineesPage from "./pages/Voting/CategoryNomineesPage";
import NomineesPage from "./pages/Voting/NomineesPage";
import NomineeDetailPage from "./pages/Voting/NomineeDetailPage";
import SelectVotes from "./pages/Voting/SelectVote";
import Processing from "./pages/Voting/Processing";
import CampaignPaused from "./pages/Voting/CampaignPaused";
import InsufficientCoins from "./pages/Voting/InsufficientCoins";
import VoteSuccess from "./pages/Voting/VoteSuccess";
import VotingReceipt from "./pages/Voting/VotingReceipt";
import CampaignUnavailable from "./pages/Voting/CampaignUnavailable";

// Wallet Pages
import WalletHome from "./pages/WALLET/WalletHome";
import WalletCoins from "./pages/WALLET/WalletCoins";
import WalletPay from "./pages/WALLET/WalletPay";
import PaymentProcess from "./pages/WALLET/PaymentProcess";
import TransactionHistory from "./pages/WALLET/TransactionHistory";
import VotingHistory from "./pages/WALLET/VotingHistory";
import Profile from "./pages/WALLET/Profile";

// Admin Pages
import AdminHome from "./pages/ADMIN/AdminHome";
import FraudDetect from "./pages/ADMIN/FraudDetect";
import UserMgt from "./pages/ADMIN/UserMgt";
import TransMonitor from "./pages/ADMIN/TransMonitor";
import Platform from "./pages/ADMIN/Platform";

// Authentication Pages
import SignIn from "./pages/AUTHENTICATION/SignIn";
import SignUp from "./pages/AUTHENTICATION/SignUp";
import ResetPassword from "./pages/AUTHENTICATION/ResetPassword";
import RoleSelect from "./pages/AUTHENTICATION/RoleSelect";

// Layout
import AppLayout from "./Layouts/AppLayout";

// Splash & Onboarding Pages
import SplashScreen1 from "./pages/public_pages/SplashScreen1";
import SplashScreen2 from "./pages/public_pages/SplashScreen2";
import OnboardingStep1 from "./pages/public_pages/OnboardingStep1";
import OnboardingStep2 from "./pages/public_pages/OnboardingStep2";
import OnboardingStep3 from "./pages/public_pages/OnboardingStep3";

// Organizer Pages
import TestDash from "./pages/organizers/TestDash";
import CreateEvent from "./pages/organizers/CreateEvent";
import ManageCategories from "./pages/organizers/ManageCategories";
import AddNominee from "./pages/organizers/AddNominee";
import NomineesManagement from "./pages/organizers/NomineesManagement";
import RevenueOverview from "./pages/organizers/RevenueOverview";

// Leaderboard
import LeaderBoard from "./pages/LEADERBOARD/LeaderBoard";

function App() {
  return (
    <Routes>
      {/* Public Splash & Onboarding */}
      <Route path="/" element={<SplashScreen1 />} />
      <Route path="/splash-2" element={<SplashScreen2 />} />
      <Route path="/onboarding-1" element={<OnboardingStep1 />} />
      <Route path="/onboarding-2" element={<OnboardingStep2 />} />
      <Route path="/onboarding-3" element={<OnboardingStep3 />} />

      {/* Authentication */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/role-select" element={<RoleSelect />} />

      {/* Routes that share the AppLayout (protected routes) */}
      <Route element={<AppLayout />}>
        {/* Voting */}
        <Route path="/voting" element={<QuorumVotingHome />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:label" element={<CategoryNomineesPage />} />
        <Route path="/nominees" element={<NomineesPage />} />
        <Route path="/nominees/:id" element={<NomineeDetailPage />} />
        <Route path="/nominees/:id/select-votes" element={<SelectVotes />} />
        <Route path="/nominees/:id/campaign-paused" element={<CampaignPaused />} />
        <Route path="/nominees/:id/insufficient-coins" element={<InsufficientCoins />} />
        <Route path="/nominees/:id/vote-success" element={<VoteSuccess />} />
        <Route path="/nominees/:id/receipt" element={<VotingReceipt />} />
        <Route path="/campaign-unavailable" element={<CampaignUnavailable />} />

        {/* Wallet */}
        <Route path="/wallet" element={<WalletHome />} />
        <Route path="/wallet-coins" element={<WalletCoins />} />
        <Route path="/wallet-pay" element={<WalletPay />} />
        <Route path="/profile" element={<Profile />} />

        {/* Leaderboard */}
        <Route path="/leaderboard" element={<LeaderBoard />} />
 </Route>
 <Route path="/nominees/:id/processing" element={<Processing />} />
         <Route path="/payment-process" element={<PaymentProcess />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/voting-history" element={<VotingHistory />} />
        {/* Organizer */}
        <Route path="/organizer/dashboard" element={<TestDash />} />
        <Route path="/organizer/create-event" element={<CreateEvent />} />
        <Route path="/organizer/manage-categories" element={<ManageCategories />} />
        <Route path="/organizer/add-nominee" element={<AddNominee />} />
        <Route path="/organizer/nominees-management" element={<NomineesManagement />} />
        <Route path="/organizer/revenue" element={<RevenueOverview />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/fraud-detect" element={<FraudDetect />} />
        <Route path="/user-mgt" element={<UserMgt />} />
        <Route path="/trans-monitor" element={<TransMonitor />} />
        <Route path="/platform" element={<Platform />} />
     
    </Routes>
  );
}

export default App;
