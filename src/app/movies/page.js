"use client"

import MovieCard from '@/components/ui/MovieCard'
import { getPopularMovies } from '@/lib/tmdb';
import React, { useEffect, useState } from 'react'
import { BiSolidCameraMovie } from 'react-icons/bi'

const MoviesPage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    

    useEffect(() => {
        async function fetchPopularMovies() {
            const data = await getPopularMovies();
            setPopularMovies(data && data.results? data.results : [])
        }
        fetchPopularMovies();
    }, [])

  return (
    <>
      <section className="my-[50px]">
        <div className="flex items-center gap-2 py-5 px-4 md:px-0">
        <BiSolidCameraMovie className="text-[1.9em] text-[var(--color-secondary)]"/>
        <h2>Popular Movies</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-x-3 gap-y-4">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))}
      </div>
      </section>
    </>
  )
}

export default MoviesPage
