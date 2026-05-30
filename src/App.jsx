import { Route, Routes } from "react-router-dom";
import Wallet from "./pages/WALLET/WalletHome";
import AppLayout from "./Layouts/AppLayout";
import Walletcoins from "./pages/WALLET/Walletcoins";
import WalletPay from "./pages/WALLET/WalletPay";

function App() {
  return (
    <Routes>
      <Route element={< AppLayout/>} >
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/wallet-coins" element={< Walletcoins/>} />
      <Route path="/wallet-pay" element={< WalletPay/>} />
      </Route>
    </Routes>
  );
}
export default App;
