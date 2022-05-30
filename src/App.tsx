import React from "react";
import ConnectWallet from "./components/ConnectWallet";
import Withdraw from "./components/Withdraw";

const App: React.FC = () => {
  return (
    <div className="app">
      <ConnectWallet />
      <Withdraw />
    </div>
  );
};

export default App;
