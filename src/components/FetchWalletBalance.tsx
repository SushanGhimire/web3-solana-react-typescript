import React from "react";
import { fetchBalance } from "../services/fetchWalletBalance";

interface Props {
  setWalletBalance: React.Dispatch<React.SetStateAction<number>>;
}

const FetchWalletBalance: React.FC<Props> = ({ setWalletBalance }) => {
  return (
    <div>
      <button onClick={() => fetchBalance(setWalletBalance)}>
        Fetch Wallet Balance
      </button>
    </div>
  );
};

export default React.memo(FetchWalletBalance);
