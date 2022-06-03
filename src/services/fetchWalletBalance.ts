import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { errorToast, successToast } from "../components/toastifier/toastify";

export const fetchBalance = async (
  setWalletBalance: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"));
    const res = await connection.getBalance(window.solana.publicKey);
    setWalletBalance(res / LAMPORTS_PER_SOL);
    successToast("Balance fetched.");
  } catch (err) {
    errorToast("Connect the phantom wallet.");
  }
};
