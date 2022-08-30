import create from "zustand";
import { makeDataUsable } from "../utils/helper";

const useDataStore = create((set) => ({
  data: [],
  teams: [],
  makeDataUsable: (data) => {
    const [teams, usableData] = makeDataUsable(data);
    set({ teams, data: usableData });
  },
}));

export default useDataStore;
