"use client";

import { useFavorites } from "@/lib/FavoritesContext";

import React from "react";
import { BsBookmark, BsBookmarkCheckFill   } from "react-icons/bs";

const FavoriteBtnCard = ({ media }) => {
  const { addFavorites, removeFavorites, isFavorited } = useFavorites();

  const handleFavourite = (e) => {
    e.preventDefault();   //prevents navigation
    e.stopPropagation();


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
        className="flex items-center justify-center gap-2 cursor-pointer text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition-colors duration-300"
        onClick={handleFavourite}
      >
        {isFavorited(media.id) ? <BsBookmarkCheckFill  className="text-lg" /> : <BsBookmark className="text-lg"/>}
        
        
      </div>
    </div>
  );
};

export default FavoriteBtnCard;
