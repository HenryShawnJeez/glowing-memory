import { create, StateCreator } from 'zustand';

type Store = {
  chosenNumber: number;
  setNumber: (value: number) => void;
};

const createState: StateCreator<Store> = ((set) => ({
  chosenNumber: 0,
  setNumber: (value) => set({ chosenNumber: value }),
}));

const useStore = create(createState);

export default useStore;