import React from "react";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

//General Fetch Function
async function FetchFromTMDB(endpoint) {
  const url = `${BASE_URL}${endpoint}&api_key=${API_KEY}`;
  console.log(`Fetching URL: ${url}`);
  const headers = {
    accept: "application/json",
  };

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (err) {
    console.error("TMDB Fetch Error", err.message);
  }
}

export default FetchFromTMDB;

//Public Endpoints using API KEY
export async function getTrendingMedia(type = "all", time = "day") {
  return FetchFromTMDB(`/trending/${type}/${time}?language=en-US`);
}

export async function getLatestMovies() {
  return FetchFromTMDB(`/movie/now_playing?language=en-US&page=1`);
}

export async function getLatestTV() {
  return FetchFromTMDB(`/tv/on_the_air?language=en-US&page=1`);
}

export async function getTopRatedMovies() {
  return FetchFromTMDB(`/movie/top_rated?language=en-US&page=1`);
}

export async function getTopRatedTV() {
  return FetchFromTMDB(`/tv/top_rated?language=en-US&page=1`);
}

//Each Movie/Card Detail
// Fetch details of a movie or tv show
export async function getMediaDetails(type, id) {
  return FetchFromTMDB(`/${type}/${id}?language=en-US`);
}


// Watch Youtube Trailer
export async function getYoutubeTrailer(type, id) {
  return FetchFromTMDB(`/${type}/${id}?language=en-US&append_to_response=videos`)
}