"use client";
import { getLatestMovies } from "@/lib/tmdb";
import React, { useEffect, useState } from "react";
import MovieCard from "../ui/MovieCard";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import useResponsiveLimit from "@/lib/useResponsiveLimit";


const LatestMovieSection = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const limit = useResponsiveLimit();

  useEffect(() => {
    async function fetchLatestMovies() {
      const data = await getLatestMovies();
      setLatestMovies(data && data.results ? data.results : []);
    }

    fetchLatestMovies();
  }, []);

  return (
    <>
      <section className="py-[30px] md:[50px]">
      <div className="flex items-center gap-2 py-5 px-4 md:px-0">
        <BiSolidCameraMovie className="text-[1.9em] text-[var(--color-secondary)]"/>
        <h2>Latest Movies</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-x-3 gap-y-4">
        {latestMovies.slice(0, limit).map((movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))}
      </div>

      {/* View More button */}
      <div className="flex justify-center mt-6">
        <Link href="/movies">
          <button className="flex justify-center items-center gap-2 hover:text-[var(--color-secondary)] w-[120px] h-[35px] rounded-2xl text-[var(--color-muted)] border border-[var(--color-muted)] hover:border-[var(--color-secondary)] transition-colors duration-300 cursor-pointer">
            <h5>View More</h5>
            <div>
              <MdKeyboardDoubleArrowRight className="text-xl"/>
            </div>

          </button>
        </Link>
      </div>
    </section>
    </>
  );
};

export default LatestMovieSection;
