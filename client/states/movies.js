import { create } from "zustand";
import { getMovies } from "../api/getMovies";

export const useMovies = create()((set) => ({
  movies: [],
  loadMovies: async () => {
    const movies = await getMovies();
    return set((state) => ({ ...state, movies }));
  },
}));
