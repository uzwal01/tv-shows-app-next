"use client";

import { useFavorites } from "@/lib/FavoritesContext";

import React from "react";
import { BsBookmark, BsBookmarkCheckFill   } from "react-icons/bs";

const FavoriteBtn = ({ media }) => {
  const { addFavorites, removeFavorites, isFavorited } = useFavorites();

  const handleFavourite = () => {
    if (isFavorited(media.id)) {
      removeFavorites(media.id);
    } else {
      addFavorites(media);
    }
  };

  return (
    <div>
      {/* Favorite Button */}
      <div
        className="flex items-center justify-center gap-2 cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-300"
        onClick={handleFavourite}
      >
        {isFavorited(media.id) ? <BsBookmarkCheckFill  className="text-2xl" /> : <BsBookmark className="text-2xl" />}
        <h4>{isFavorited(media.id) ? "Remove" : "Favourite"}</h4>
        
      </div>
    </div>
  );
};

export default FavoriteBtn;
