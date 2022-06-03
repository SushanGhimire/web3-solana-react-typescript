import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const airDropSol = async () => {
  const publicKey = window.solana.publicKey;
  if (!publicKey) return;
  try {
    const connection = new Connection(clusterApiUrl("devnet"));
    const confirmation = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(confirmation, "confirmed");
  } catch (err) {
    console.log(err);
  }
};
