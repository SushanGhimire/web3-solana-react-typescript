import React from "react";
import { airDropSol } from "../services/airdropSol";

const AirDrop: React.FC = () => {
  return (
    <div>
      <button onClick={airDropSol}>Air Drop</button>
    </div>
  );
};

export default AirDrop;
