import React, { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import FetchWalletBalance from "./components/FetchWalletBalance";
import MakeTransaction from "./components/MakeTransaction";
// import Withdraw from "./components/Withdraw";

const App: React.FC = () => {
  const [walletBalance, setWalletBalance] = useState<number>(0.0);
  return (
    <div className="">
      <div className="app">
        <ConnectWallet />
        <FetchWalletBalance setWalletBalance={setWalletBalance} />
        <MakeTransaction />
        {/* <Withdraw /> */}
      </div>
      <div className="app">
        <b>Wallet Balance</b>
        <b>{walletBalance} SOL</b>
      </div>
    </div>
  );
};

export default App;
