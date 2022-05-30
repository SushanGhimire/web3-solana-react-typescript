import { clusterApiUrl, Connection } from "@solana/web3.js";
import React from "react";

const FetchWalletBalance: React.FC = () => {
  const fetchBalance = async () => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    console.log(connection);
  };

  return (
    <div>
      <button onClick={fetchBalance}>Fetch Wallet Balance</button>
    </div>
  );
};

export default FetchWalletBalance;
