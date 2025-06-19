"use client";
import SearchBar from "@/components/ui/SearchBar";
import React from "react";
import { Suspense } from "react";

const SearchPage = () => {
  return (
    <div>
      <Suspense
        fallback={<div className="text-center mt-10">Loading search...</div>}
      >
        <SearchBar />
      </Suspense>
    </div>
  );
};

export default SearchPage;
