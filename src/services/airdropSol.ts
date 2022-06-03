import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { waitingToast } from "../components/toastifier/toastify";
import { fetchBalance } from "./fetchWalletBalance";

export const airDropSol = async (
  setWalletBalance: React.Dispatch<React.SetStateAction<number>>
) => {
  const publicKey = window.solana.publicKey;
  if (!publicKey) return;
  try {
    const connection = new Connection(clusterApiUrl("devnet"));
    const confirmation = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(confirmation, "confirmed");
    waitingToast(
      "Airdropping 1 sol to your account. it may takes upto 15-20 sec.",
      20000
    );
    setTimeout(() => {
      fetchBalance(setWalletBalance);
    }, 20000);
  } catch (err) {
    console.log(err);
  }
};
