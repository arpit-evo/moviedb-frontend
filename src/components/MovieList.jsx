import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="grid gap-6 grid-cols-4">
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
