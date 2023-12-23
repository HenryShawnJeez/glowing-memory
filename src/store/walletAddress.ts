import { create, StateCreator } from "zustand";

type WalletAddressStore = {
  walletAddress: string;
  setWalletAddress: (value: string) => void;
};

const createState: StateCreator<WalletAddressStore> = (set) => ({
  walletAddress: "",
  setWalletAddress: (value) => set({ walletAddress: value }),
});

const useWalletAddress = create(createState);

export default useWalletAddress;
