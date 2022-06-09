import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { errorToast, successToast } from "../components/toastifier/toastify";
import { PROGRAM_ID } from "./constant";

const fetchBalance = async (
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

const fetchPDABalance = async (
  setPDABalance: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    const senderaddress = new PublicKey(window.solana.publicKey);
    const pdaWalletAddress = await PublicKey.findProgramAddress(
      [senderaddress.toBuffer()],
      new PublicKey(PROGRAM_ID)
    );
    const connection = new Connection(clusterApiUrl("devnet"));
    const res = await connection.getBalance(pdaWalletAddress[0]);
    setPDABalance(res / LAMPORTS_PER_SOL);
    successToast("PDA Balance fetched.");
  } catch (err) {
    errorToast("Connect the phantom wallet.");
  }
};

export { fetchBalance, fetchPDABalance };
