import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import AirDrop from "./components/AirDrop";
import ConnectWallet from "./components/ConnectWallet";
import FetchPdaBalance from "./components/FetchPdaBalance";
import FetchWalletBalance from "./components/FetchWalletBalance";
import MakeTransaction from "./components/MakeTransaction";
import { depositSolToPda } from "./services/deposit";
// import Withdraw from "./components/Withdraw";

const App: React.FC = () => {
  const [sol, setSol] = useState<string>("");
  const [walletBalance, setWalletBalance] = useState<number>(0.0);
  const [pdaBalance, setPDABalance] = useState<number>(0.0);
  const handleDeposit = (e: React.FormEvent): void => {
    e.preventDefault();
    depositSolToPda(parseInt(sol), setPDABalance, setWalletBalance);
  };

  return (
    <>
      <ToastContainer />
      <div className="">
        <div className="app">
          <ConnectWallet />
          <FetchWalletBalance setWalletBalance={setWalletBalance} />
          <FetchPdaBalance setPDABalance={setPDABalance} />
          <MakeTransaction />
          <AirDrop setWalletBalance={setWalletBalance} />
          {/* <Withdraw /> */}
        </div>
        <div className="app">
          <b>Wallet Balance</b>
          <b>{walletBalance} SOL</b>
        </div>
        <div className="app">
          <b>PDA Balance</b>
          <b>{pdaBalance} SOL</b>
        </div>
        <form
          className="app"
          onSubmit={(e) => {
            handleDeposit(e);
          }}
        >
          <label htmlFor="">SOL</label>
          <input
            type="number"
            name=""
            id=""
            value={sol}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setSol(e.currentTarget.value)
            }
          />
          <button>Deposit Sol to PDA</button>
        </form>
      </div>
    </>
  );
};

export default App;
