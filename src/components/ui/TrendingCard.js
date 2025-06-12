import { getMediaDetails } from "@/lib/tmdb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendingCard = ({ item, genres }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const title = item.title || item.name || "Untitled";
  const posterSrc = item.backdrop_path
    ? `${IMAGE_BASE_URL}${item.backdrop_path}`
    : "/image.png";

  const type = item.title ? "movie" : "tv";

  // const genreNames = item.genre_id
  //   ?.map((id) => genres.find((g) => g.id === id)?.name)
  //   .filter(Boolean);

  return (
    <>
      <Link href={`/details/${type}/${item.id}-${title}`}>
        <div className="">
          <div className="relative w-[350px] mx-auto rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105">
            <Image
              src={posterSrc}
              alt={title}
              width={350}
              height={200}
              objectFit="cover"
              className="rounded-lg sm:rounded-t-sm mx-auto opacity-100 w-full h-auto"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
            <div className="absolute bottom-0 left-0 w-full mx-auto h-[100px] bg-gradient-to-t from-black/90 to-transparent text-[var(--color-text)] group-hover:bg-gradient-to-t group-hover:from-[var(--color-secondary)]/50 group-hover:to-transparent transition-all duration-300">
              <div className="absolute bottom-10 left-5">
                <h5 className="text-sm font-semibold line-clamp-2 text-[var(--color-text)] ">
                  {title.toUpperCase()}
                </h5>
              </div>
              <div>
                <p className="text-xs mt-1 text-gray-300">
                  {/* {genreNames?.join(", ")} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TrendingCard;
