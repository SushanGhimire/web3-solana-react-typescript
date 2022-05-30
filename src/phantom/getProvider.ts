import { PhantomProvider } from "./PhontomProvider";

export const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) return provider as PhantomProvider;
    }
    window.open("https://phantom.app/", "_blank");
  };