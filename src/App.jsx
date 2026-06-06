import { Routes, Route } from "react-router-dom";
import WalletHome from "./pages/WALLET/WalletHome";
import AppLayout from "./Layouts/AppLayout";
import WalletCoins from "./pages/WALLET/WalletCoins";
import WalletPay from "./pages/WALLET/WalletPay";
import PaymentProcess from "./pages/WALLET/PaymentProcess";
import TransactionHistory from "./pages/WALLET/TransactionHistory";
import VotingHistory from "./pages/WALLET/VotingHistory";
import Profile from "./pages/WALLET/Profile";

function App() {
  return (
    <Routes>
      <Route path="" element={<AppLayout />}>
        <Route path="/wallet" element={<WalletHome />} />
        <Route path="/wallet-coins" element={<WalletCoins />} />
        <Route path="/wallet-pay" element={<WalletPay />} />
      </Route>
      <Route path="/payment-process" element={<PaymentProcess />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/voting-history" element={<VotingHistory />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
