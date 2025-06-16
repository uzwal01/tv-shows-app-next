"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Unique key for saving to localStorage
const FAVORITES_KEY = "favourites";

// Create a context object
const FavoritesContext = createContext();

// This component will wrap your app to provide favorites to all children
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the app starts
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save updated favorites to localStorage
  const updateLocalStorage = (newFavorites) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  // Add a new favorite item
  const addFavorites = (media) => {
    setFavorites((prev) => {
      const alreadyAdded = prev.some((item) => item.id === media.id);
      if (alreadyAdded) return prev;

      const updated = [...prev, media];
      updateLocalStorage(updated);
      return updated;
    });
  };

  // Remove a favorite item
  const removeFavorites = (id) => {
    setFavorites((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      updateLocalStorage(updated);
      return updated;
    });
  };

  // Check if an item is already favorited
  const isFavorited = (id) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorites, removeFavorites, isFavorited }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook to use favorites easily in any component
export const useFavorites = () => useContext(FavoritesContext);
