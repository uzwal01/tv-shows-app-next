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


  // Mapped genre_ids to genre names
  const genreNames = item.genre_ids
    ?.map((id) => genres.find((g) => g.id === id)?.name)
    .filter(Boolean);

  return (
    <>
      <Link href={`/details/${type}/${item.id}-${title}`}>
  <div className="w-full px-3 sm:px-0">
    <div className="relative w-full max-w-[320px] sm:max-w-[350px] mx-auto rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105">
      <Image
        src={posterSrc}
        alt={title}
        width={350}
        height={200}
        objectFit="cover"
        className="rounded-lg w-full h-auto"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
      />

      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-black/90 to-transparent text-[var(--color-text)] group-hover:from-[var(--color-secondary)]/50 group-hover:to-transparent transition-all duration-300">
        <div className="absolute bottom-10 left-4 right-4">
          <h5 className="text-sm sm:text-sm font-semibold sm:font-light line-clamp-1 group-hover:text-[var(--color-text)]">
            {title.toUpperCase()}
          </h5>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[10px] sm:text-xs line-clamp-1 text-[var(--color-secondary)]">
            {genreNames?.join(", ")}
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
