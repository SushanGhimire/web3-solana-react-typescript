import React from "react";
import { airDropSol } from "../services/airdropSol";

interface Props {
  setWalletBalance: React.Dispatch<React.SetStateAction<number>>;
}
const AirDrop: React.FC<Props> = ({ setWalletBalance }) => {
  return (
    <div>
      <button onClick={() => airDropSol(setWalletBalance)}>Air Drop</button>
    </div>
  );
};

export default React.memo(AirDrop);
