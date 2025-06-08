import Image from "next/image";
import React from "react";

const MovieCard = ({ item }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const title = item.title || item.name || "Untitled";
  const rating = item.vote_average?.toFixed(1) || "N/A";
  const posterSrc = item.poster_path
    ? `${IMAGE_BASE_URL}${item.poster_path}`
    : "/image.png";

  return (
    <div className="w-full max-w-[210px] bg-white rounded overflow-hidden flex flex-col mx-5 shadow-gray-600 shadow-lg hover:shadow-2xl cursor-pointer transition-transform duraton-300 ease-in-out">
      {/* Image container */}
      <div className="relative w-full h-[275px]">
        <Image
          src={posterSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      {/* Content below image */}
      <div className="flex flex-col justify-between p-3 h-[130px]">
        {/* Rating box */}
        <div className="min-h-[45px] flex items-start">
          <div className="bg-yellow-500 text-white rounded w-[40px] h-[30px] flex items-center justify-center">
            <span className="text-black text-sm font-semibold">{rating}</span>
          </div>
        </div>

        {/* Title and year */}
        <div>
          <h3 className="text-black text-sm font-semibold line-clamp-2 h-[40px]">
            {title}
          </h3>
          <span className="text-[var(--color-muted)] text-xs">
            {item.release_date?.slice(0, 4) || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
