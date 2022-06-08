import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import AirDrop from "./components/AirDrop";
import ConnectWallet from "./components/ConnectWallet";
import FetchWalletBalance from "./components/FetchWalletBalance";
import MakeTransaction from "./components/MakeTransaction";
import { connectToPhantomWallet } from "./services/handleWallet";
// import Withdraw from "./components/Withdraw";

const App: React.FC = () => {
  const [walletBalance, setWalletBalance] = useState<number>(0.0);
  useEffect(() => {
    connectToPhantomWallet(undefined, undefined);
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="">
        <div className="app">
          <ConnectWallet />
          <FetchWalletBalance setWalletBalance={setWalletBalance} />
          <MakeTransaction />
          <AirDrop setWalletBalance={setWalletBalance} />
          {/* <Withdraw /> */}
        </div>
        <div className="app">
          <b>Wallet Balance</b>
          <b>{walletBalance} SOL</b>
        </div>
      </div>
    </>
  );
};

export default App;
