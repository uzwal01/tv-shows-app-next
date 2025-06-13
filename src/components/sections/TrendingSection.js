"use client";
import { getGenreList, getGenreMapping, getTrendingMedia } from "@/lib/tmdb";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { BsFire } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import TrendingCard from "../ui/TrendingCard";

const TrendingSection = () => {
  const [trending, setTrending] = useState([]);
  const [genres, setGenres] = useState([]); //Stores all genre_list in setGenres

  const [swiperReady, setSwiperReady] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    async function fetchTrendingMedia() {
      const data = await getTrendingMedia("all", "day");
      const genreData = await getGenreList();

      setTrending(data?.results || []);
      setGenres(genreData || []);
    }
    fetchTrendingMedia();
  }, []);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="">
      <div className="flex items-center gap-2 py-5 px-4 md:px-0">
        <BsFire className="text-[1.9em] text-[var(--color-secondary)]" />
        <h2>Trending</h2>
      </div>

      <div className="flex gap-2">
        {/* left button */}
        <div className="flex items-center ">
          <button
            ref={prevRef}
            className="group bg-[var(--color-muted)] hover:bg-gray-300 px-3 sm:p-3 py-3 rounded cursor-pointer"
          >
            <FaPlay className="text-[var(--color-primary)] group-hover:text-[var(--color-secondary)]" />
          </button>
        </div>

        {/* Swiper */}
        {swiperReady && (
          <Swiper
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 14,
              },
            }}
            spaceBetween={0}
            grid={{ rows: 1 }}
            modules={[Grid, Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="mySwiper w-full"
          >
            {trending.map((trend) => (
              <SwiperSlide key={trend.id}>
                <TrendingCard item={trend} genres={genres} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* right button */}
        <div className="flex items-center ">
          <button
            ref={nextRef}
            className="group bg-[var(--color-muted)] hover:bg-gray-300 px-3 sm:p-3 py-3 rounded cursor-pointer"
          >
            <FaPlay className="text-[var(--color-primary)] group-hover:text-[var(--color-secondary)]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
