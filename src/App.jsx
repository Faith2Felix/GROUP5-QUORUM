import { Routes, Route, useNavigate } from "react-router-dom"; // <-- Swapped Link for useNavigate
import WalletHome from "./pages/WALLET/WalletHome";
import AppLayout from "./Layouts/AppLayout";
import WalletCoins from "./pages/WALLET/WalletCoins";
import WalletPay from "./pages/WALLET/WalletPay";
import PaymentProcess from "./pages/WALLET/PaymentProcess";
import TransactionHistory from "./pages/WALLET/TransactionHistory";
import VotingHistory from "./pages/WALLET/VotingHistory";
import Profile from "./pages/WALLET/Profile";

// Splash & Onboarding Pages
import SplashScreen1 from "./pages/public_pages/SplashScreen1";
import SplashScreen2 from "./pages/public_pages/SplashScreen2";
import OnboardingStep1 from "./pages/public_pages/OnboardingStep1";
import OnboardingStep2 from "./pages/public_pages/OnboardingStep2";
import OnboardingStep3 from "./pages/public_pages/OnboardingStep3";

// Step-by-Step Organizer Feature Reconstruction
import TestDash from "./pages/organizers/TestDash.jsx";
import CreateEvent from "./pages/organizers/CreateEvent.jsx";
import ManageCategories from "./pages/organizers/ManageCategories.jsx";
import AddNominee from "./pages/organizers/AddNominee.jsx";
import NomineesManagement from "./pages/organizers/NomineesManagement.jsx";
import RevenueOverview from "./pages/organizers/RevenueOverview.jsx"; 

function App() {
  const navigate = useNavigate();

  
  return (
    <>
     

      <Routes>
        {/* Splash & Onboarding Routes */}
        <Route path="/" element={<SplashScreen1 />} />
        <Route path="/splash-2" element={<SplashScreen2 />} />
        <Route path="/onboarding-1" element={<OnboardingStep1 />} />
        <Route path="/onboarding-2" element={<OnboardingStep2 />} />
        <Route path="/onboarding-3" element={<OnboardingStep3 />} />

        {/* Wallet Routes Wrapper */}
        <Route path="" element={<AppLayout />}>
          <Route path="/wallet" element={<WalletHome />} />
          <Route path="/wallet-coins" element={<WalletCoins />} />
          <Route path="/wallet-pay" element={<WalletPay />} />
        </Route>
        <Route path="/payment-process" element={<PaymentProcess />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/voting-history" element={<VotingHistory />} />
        <Route path="/profile" element={<Profile />} />

        {/* Organizer Flow Module Base */}
        <Route path="/organizer/dashboard" element={<TestDash />} />
        <Route path="/organizer/create-event" element={<CreateEvent />} />
        <Route path="/organizer/manage-categories" element={<ManageCategories />} />
        <Route path="/organizer/add-nominee" element={<AddNominee />} />
        <Route path="/organizer/nominees-management" element={<NomineesManagement />} />
        <Route path="/organizer/revenue" element={<RevenueOverview />} /> 
      </Routes>
    </>
  );
}

export default App;