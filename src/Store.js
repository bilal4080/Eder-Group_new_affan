import {data} from "autoprefixer";
import {create} from "zustand";

export const uselangaugestore = create((set) => ({
    language: "eng",
    //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    updatelangauge: (data) => set({language: data}),
}));
