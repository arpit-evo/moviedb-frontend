import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[11.25rem] card-bg sm:w-[17.625rem] sm:p-2 rounded-xl cursor-pointer">
      <div className="h-[15.375rem] sm:h-[25rem] w-full sm:mb-4">
        <img
          src={movie.imageUrl}
          alt="movie poster"
          className="object-cover h-full w-full rounded-t-xl sm:rounded-xl"
        />
      </div>
      <div className="gap-2 p-3 sm:p-2">
        <div className="text-br sm:text-bl">{movie.title}</div>
        <div className="text-bs">{movie.publishingYear}</div>
      </div>
    </div>
  );
};

export default MovieCard;
