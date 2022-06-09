import {
  AccountMeta,
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { serialize } from "borsh";
import { waitingToast } from "../components/toastifier/toastify";
import { CONNECTION as connection, PROGRAM_ID } from "./constant";
import { fetchBalance, fetchPDABalance } from "./fetchWalletBalance";
import { DepositSol, depositSolSchema } from "./schemas";

export const depositSolToPda = async (
  data: number,
  setPDABalance: React.Dispatch<React.SetStateAction<number>>,
  setWalletBalance: React.Dispatch<React.SetStateAction<number>>
) => {
  const senderaddress = window.solana.publicKey;
  const pdaAddress = await PublicKey.findProgramAddress(
    [senderaddress.toBuffer()],
    new PublicKey(PROGRAM_ID)
  );
  const keys = [
    {
      pubkey: new PublicKey(senderaddress),
      isSigner: true,
      isWritable: true,
    },
    {
      pubkey: new PublicKey(pdaAddress[0].toBase58()),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: SystemProgram.programId,
      isSigner: false,
      isWritable: false,
    },
  ];

  const instruction: {
    keys: AccountMeta[];
    programId: PublicKey;
    data: Buffer;
  } = new TransactionInstruction({
    keys: keys,
    programId: new PublicKey(PROGRAM_ID),
    data: Buffer.from(serialize(depositSolSchema, new DepositSol(data))),
  });
  const transaction = new Transaction().add(instruction);

  //signing the transaction
  try {
    const blockhash = await connection.getRecentBlockhash();
    transaction.recentBlockhash = blockhash.blockhash;
    transaction.feePayer = window.solana.publicKey;
    const signed = await window.solana.signTransaction(transaction);
    console.log(signed);
    const signature = await connection.sendRawTransaction(signed.serialize());
    await connection.confirmTransaction(signature, "confirmed");
    waitingToast(
      `Depositing ${data} sol to your account. it may takes upto 15-20 sec.`,
      20000
    );
    setTimeout(() => {
      fetchPDABalance(setPDABalance);
      fetchBalance(setWalletBalance);
    }, 20000);
    return {
      transactionHash: signature,
    };
  } catch (err) {
    return {
      transactionhash: null,
    };
  }
};
