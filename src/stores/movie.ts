import { defineStore } from "pinia";

type Movie = {
  name: string;
  description: string;
  year: string;
  genre: {
    one: string;
    two: string;
    three: string;
  };
};

export const useMovieStore = defineStore("counter", {
  state: () => ({
    movie: {} as Movie,
    showFullVide: false,
  }),
});
