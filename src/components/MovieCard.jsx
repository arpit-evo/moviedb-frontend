import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edit/${movie._id}`);
  };
  return (
    <div
      className="card-bg sm:p-2 rounded-xl cursor-pointer mx-auto max-w-fit "
      onClick={handleClick}
    >
      <div className=" sm:mb-4 sm:h-[400px] ">
        <img
          src={movie.imageUrl}
          alt="movie poster"
          className="object-cover h-full w-full rounded-t-xl sm:rounded-xl object-center aspect-2/3"
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
