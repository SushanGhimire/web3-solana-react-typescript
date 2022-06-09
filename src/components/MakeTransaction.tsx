import React from "react";
import { createTransaction } from "../services/createTransaction";

const MakeTransaction: React.FC = () => {
  return (
    <div>
      <button onClick={createTransaction}>MakeTransaction</button>
    </div>
  );
};

export default React.memo(MakeTransaction);
