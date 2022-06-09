import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export class DepositSol {
  instruction: number;
  amount: string;
  constructor(data: number) {
    this.instruction = 7;
    this.amount = (data * LAMPORTS_PER_SOL).toString();
  }
}

export const depositSolSchema = new Map([
  [
    DepositSol,
    {
      kind: "struct",
      fields: [
        ["instruction", "u8"],
        ["amount", "u64"],
      ],
    },
  ],
]);
