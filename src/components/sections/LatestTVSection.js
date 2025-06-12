"use client";
import { getLatestTV } from "@/lib/tmdb";
import React, { useEffect, useState } from "react";
import MovieCard from "../ui/MovieCard";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import { MdLiveTv } from "react-icons/md";
import useResponsiveLimit from "@/lib/useResponsiveLimit";

const LatestTVSection = () => {
  const [latestTV, setLatestTV] = useState([]);
  const limit = useResponsiveLimit();

  useEffect(() => {
    async function fetchLatestTV() {
      const data = await getLatestTV();
      setLatestTV(data && data.results ? data.results : []);
    }

    fetchLatestTV();
  }, []);

  return (
    <>
      <section className="py-[30px] md:[50px]">
      <div className="flex items gap-2 py-5 px-4 md:px-0">
        <MdLiveTv className="text-[1.9em] text-[var(--color-secondary)]"/>
        <h2>Latest TV Shows</h2>
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-items-center gap-x-3 gap-y-4">
        {latestTV.slice(0, limit).map((movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))}
      </div>

      {/* View More button */}
      <div className="flex justify-center mt-6">
        <Link href="/series">
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

export default LatestTVSection;
