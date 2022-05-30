import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";

interface Props {
  setWalletBalance: React.Dispatch<React.SetStateAction<number>>;
}

const FetchWalletBalance: React.FC<Props> = ({ setWalletBalance }) => {
  const fetchBalance = async () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const res = await connection.getBalance(window.solana.publicKey);
    setWalletBalance(res / LAMPORTS_PER_SOL);
  };

  return (
    <div>
      <button onClick={fetchBalance}>Fetch Wallet Balance</button>
    </div>
  );
};

export default FetchWalletBalance;
