import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edit/${movie._id}`);
  };
  // big 266px
  //small 180px
  return (
    <div
      className="card-bg sm:p-2 rounded-xl cursor-pointer mx-auto max-w-fit "
      onClick={handleClick}
    >
      <div className="h-[15.375rem] sm:h-[25rem]  w-full sm:mb-4">
        <img
          src={movie.imageUrl}
          alt="movie poster"
          className="object-cover h-full w-full rounded-t-xl sm:rounded-xl object-center"
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
