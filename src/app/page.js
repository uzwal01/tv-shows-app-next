import Footer from "@/components/layout/footer";
import LatestMovieSection from "@/components/sections/LatestMovieSection";
import LatestTVSection from "@/components/sections/LatestTVSection";
import TrendingSection from "@/components/sections/TrendingSection";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="my-[50px]">
        <TrendingSection />
      <LatestMovieSection />
      <LatestTVSection />
    </div>
    
    </>
  );
};

export default Home;
