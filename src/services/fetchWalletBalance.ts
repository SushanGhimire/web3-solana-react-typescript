import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const fetchBalance = async (
  setWalletBalance: React.Dispatch<React.SetStateAction<number>>
) => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const res = await connection.getBalance(window.solana.publicKey);
  setWalletBalance(res / LAMPORTS_PER_SOL);
};
