import { successToast } from "../components/toastifier/toastify";
import { getProvider } from "../phantom/getProvider";
import { PhantomProvider } from "../phantom/PhontomProvider";

const connectToPhantomWallet = (
  setProvider?: React.Dispatch<
    React.SetStateAction<PhantomProvider | undefined>
  >,
  setWalletKey?: React.Dispatch<
    React.SetStateAction<PhantomProvider | undefined>
  >
) => {
  const provider = getProvider();
  if (provider) {
    setProvider && setProvider(provider);
    setWalletKey && connectWallet(setWalletKey);
  } else setProvider && setProvider(undefined);
};
const connectWallet = async (
  setWalletKey: React.Dispatch<
    React.SetStateAction<PhantomProvider | undefined>
  >
) => {
  const { solana } = window;
  try {
    const res = await solana.connect();
    setWalletKey(res.publicKey.toString());
    successToast("Wallet connected.");
  } catch (err: any) {
    console.log(err.response);
  }
};

const handleWalletDisconnect = async (
  setProvider: React.Dispatch<
    React.SetStateAction<PhantomProvider | undefined>
  >,
  setWalletKey: React.Dispatch<
    React.SetStateAction<PhantomProvider | undefined>
  >
) => {
  const { solana } = window;
  try {
    await solana.disconnect();
    successToast("Wallet dissconnected");
    setWalletKey(undefined);
    setProvider(undefined);
  } catch (err: any) {
    console.log(err);
  }
};

export { connectToPhantomWallet, handleWalletDisconnect };
