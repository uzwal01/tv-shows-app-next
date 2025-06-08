"use client";
import { getLatestMovies } from "@/lib/tmdb";
import React, { useEffect, useState } from "react";
import MovieCard from "../ui/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const LatestMovieSection = () => {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    async function fetchLatestMovies() {
      const data = await getLatestMovies("all", "day");
      setLatestMovies(data && data.results ? data.results : []);
    }

    fetchLatestMovies();
  }, []);

  return (
    <section className="py-[50px]">
      <h2>Latest Movies</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-8 place-items-center">
        {latestMovies.map((movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))}
      </div> */}

      <div className="px-4 relative">
        <Swiper
          spaceBetween={20}
          scrollbar={{ draggable: true }}
          modules={[Scrollbar]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
        >
          {latestMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard item={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestMovieSection;
