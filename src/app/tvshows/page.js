"use client"
import MovieCard from "@/components/ui/MovieCard";
import { getPopularTV } from "@/lib/tmdb";
import React, { useEffect, useState } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";


const TvShowsPage = () => {
  const [popularTv, setPopularTv] = useState([]);

  useEffect(() => {
    async function fetchPopularTv() {
      const data = await getPopularTV();
      setPopularTv(data && data.results? data.results : []);
    }
    fetchPopularTv();
  }, []);
  return (
    <>
      <section className="my-[50px]">
        <div className="flex items-center gap-2 py-5 px-4 md:px-0">
        <BiSolidCameraMovie className="text-[1.9em] text-[var(--color-secondary)]"/>
        <h2>Popular TV Shows</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-x-3 gap-y-4">
        {popularTv.map((tv) => (
          <MovieCard key={tv.id} item={tv} />
        ))}
      </div>
      </section>
    </>
  );
};

export default TvShowsPage;
