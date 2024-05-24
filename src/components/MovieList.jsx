import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-6 sm:grid-cols-4">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default MovieList;
