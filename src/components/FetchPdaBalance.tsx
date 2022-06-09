import React from "react";
import { fetchPDABalance } from "../services/fetchWalletBalance";

interface Props {
  setPDABalance: React.Dispatch<React.SetStateAction<number>>;
}

const FetchPdaBalance: React.FC<Props> = ({ setPDABalance }) => {
  return (
    <div>
      <button onClick={() => fetchPDABalance(setPDABalance)}>
        Fetch PDA Ballance
      </button>
    </div>
  );
};

export default FetchPdaBalance;
