import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ item }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const title = item.title || item.name || "Untitled";
  const rating = item.vote_average?.toFixed(1) || "N/A";
  const posterSrc = item.poster_path
    ? `${IMAGE_BASE_URL}${item.poster_path}`
    : "/image.png";


  const type = item.title ? "movie" : "tv";


  return (
    <>
      <Link href={`/details/${type}/${item.id}-${title}`}>

        <div className="group flex items-center gap-4 sm:gap-0 justify-center sm:flex-col">
        <div className="w-[160px] h-[230px] max-w-[210px] sm:mx-5 bg-white rounded overflow-hidden shadow-gray-600 shadow-lg group-hover:shadow-2xl cursor-pointer transition-transform duraton-300 ease-in-out">
          {/* Image container */}

          <div className="relative w-full h-full">
            <Image
              src={posterSrc}
              alt={title}
              width={190}
              height={100}
              objectFit="cover"
              className="rounded-sm sm:rounded-t-sm mx-auto"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          </div>
        </div>

        {/* Content below image */}
      <div className="w-[160px] h-[120px] max-w-[210px] mx-auto cursor-pointer ">
         <div className="flex flex-col justify-between py-3">
          {/* Rating box */}
          <div className="min-h-[30px] flex items-center justify-between">
            <div className="bg-[var(--color-yellow)]  rounded w-[38px] h-[29px] flex items-center justify-center">
              <span className="text-black text-sm font-semibold">{rating}</span>
            </div>

            {/* Released Year */}
            <div className="">
              <span className="text-[var(--color-muted)] text-xs">
                {item.release_date?.slice(0, 4) || "N/A"}
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="pt-4">
            <h5 className="text-sm font-semibold line-clamp-2 h-[40px] text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors duration-300">
              {title}
            </h5>
          </div>
        </div>
      </div>
       
      </div>
      </Link>
    </>
  );
};

export default MovieCard;
