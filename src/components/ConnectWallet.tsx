import React, { useState } from "react";
import { PhantomProvider } from "../phantom/PhontomProvider";
import {
  connectToPhantomWallet,
  handleWalletDisconnect,
} from "../services/handleWallet";

const ConnectWallet: React.FC = () => {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined
  );
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
    undefined
  );

  return (
    <div>
      {provider === undefined || walletKey === undefined ? (
        <button
          onClick={() => {
            connectToPhantomWallet(setProvider, setWalletKey);
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          onClick={() => {
            handleWalletDisconnect(setProvider, setWalletKey);
          }}
        >
          Disconnect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
