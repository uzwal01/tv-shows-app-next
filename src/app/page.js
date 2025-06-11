import Footer from "@/components/layout/footer";
import LatestMovieSection from "@/components/sections/LatestMovieSection";
import LatestTVSection from "@/components/sections/LatestTVSection";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="">
      <LatestMovieSection />
      <LatestTVSection />
    </div>
    
    </>
  );
};

export default Home;
