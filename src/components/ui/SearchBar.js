"use client"
import { getSearchList } from "@/lib/tmdb";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
// import useResponsiveLimit from "@/lib/useResponsiveLimit";

const SearchBar = () => {
  const searchParams = useSearchParams(); //to extract information from the URL query string
  const query = searchParams.get("query"); // extracts the value of the parameter named "query" from the URL
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const limit = useResponsiveLimit();

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getSearchList(query);
        setResults(res.results);
      } catch (err) {
        console.error("Error loading the search results...", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="">
      <h2>
        Search Results for: <strong>{query}</strong>
      </h2>
      {loading && (
        <div className="flex items-center justify-center h-[500px]">
          <p>Loading....</p>
        </div>
      )}
      {!loading && results.length === 0 && (
        <div className="flex items-center justify-center h-[500px]">
          <p className="text-center text-2xl">No Results found.</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-x-3 gap-y-4 my-5">
        {results.map((movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
