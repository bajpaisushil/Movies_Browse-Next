"use client"

import { MovieCard } from "./movie-card"
import type { Movie } from "@/types/movie"

interface MovieGridProps {
  movies: Movie[]
  onMovieClick: (imdbID: string) => void
}

export function MovieGrid({ movies, onMovieClick }: MovieGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie, index) => (
        <div
          key={movie.imdbID}
          className="animate-in fade-in slide-in-from-bottom-4"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <MovieCard movie={movie} onClick={() => onMovieClick(movie.imdbID)} />
        </div>
      ))}
    </div>
  )
}
