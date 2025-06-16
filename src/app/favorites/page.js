"use client";

import MovieCard from "@/components/ui/MovieCard";
import { useFavorites } from "@/lib/FavoritesContext";

import { BsBookmarkHeartFill } from "react-icons/bs";
import React from "react";

const FavoritesList = () => {
  const { favorites, removeFavorites } = useFavorites();

  return (
    <>
      <div className="">
        <div className="flex items-center gap-2 py-5 px-4 md:px-0">
            <BsBookmarkHeartFill className="text-[1.9em] text-[var(--color-secondary)]"/>

            <h2 className="">My Favorites</h2>
        </div>
        
        {favorites.length === 0 ? (
          <p>You have not Favorited anything yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-x-3 gap-y-4">
            {favorites.map((item) => (
              <MovieCard key={item.id} item={item} onRemove={removeFavorites}/>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FavoritesList;
