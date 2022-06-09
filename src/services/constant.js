import { clusterApiUrl, Connection } from "@solana/web3.js";

export const PROGRAM_ID = "AknC341xog56SrnoK6j3mUvaD1Y7tYayx1sxUGpeYWdX";
export const CONNECTION = new Connection(clusterApiUrl("devnet"), "confirmed");
