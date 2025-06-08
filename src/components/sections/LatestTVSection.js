"use client";
import { getLatestTV } from "@/lib/tmdb";
import React, { useEffect, useState } from "react";
import MovieCard from "../ui/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const LatestTVSection = () => {
  const [latestTV, setLatestTV] = useState([]);

  useEffect(() => {
    async function fetchLatestTV() {
      const data = await getLatestTV("all", "day");
      setLatestTV(data && data.results ? data.results : []);
    }

    fetchLatestTV();
  }, []);

  return (
    <section className="py-[50px]">
      <h2>Latest TV Shows</h2>
      <div className="px-4 ">
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
          {latestTV.map((shows) => (
            <SwiperSlide key={shows.id}>
              <MovieCard item={shows} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestTVSection;
