import React from "react";
import ConnectWallet from "./components/ConnectWallet";
import FetchWalletBalance from "./components/FetchWalletBalance";
import Withdraw from "./components/Withdraw";

const App: React.FC = () => {
  return (
    <div className="app">
      <ConnectWallet />
      <Withdraw />
      <FetchWalletBalance />
    </div>
  );
};

export default App;
