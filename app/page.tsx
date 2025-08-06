"use client"

import { useState, useCallback } from "react"
import { SearchBar } from "@/components/search-bar"
import { MovieGrid } from "@/components/movie-grid"
import { FilterPanel } from "@/components/filter-panel"
import { PaginationControls } from "@/components/pagination-controls"
import { MovieModal } from "@/components/movie-modal"
import { LoadingSpinner } from "@/components/loading-spinner"
import { ErrorMessage } from "@/components/error-message"
import { EmptyState } from "@/components/empty-state"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Movie, MovieDetails, SearchFilters } from "@/types/movie"

const API_KEY = process.env.NEXT_PUBLIC_PRIVATE_API_KEY;
const API_BASE_URL = "https://www.omdbapi.com/";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [filters, setFilters] = useState<SearchFilters>({
    type: "",
    year: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const searchMovies = useCallback(
    async (query: string, page = 1, searchFilters: SearchFilters = filters) => {
      if (!query.trim()) {
        setMovies([])
        setTotalResults(0)
        setHasSearched(false)
        return
      }

      setLoading(true)
      setError(null)
      setHasSearched(true)

      try {
        const params = new URLSearchParams({
          apikey: API_KEY,
          s: query,
          page: page.toString(),
        })

        if (searchFilters.type) {
          params.append("type", searchFilters.type)
        }
        if (searchFilters.year) {
          params.append("y", searchFilters.year)
        }

        const response = await fetch(`${API_BASE_URL}?${params}`)
        const data = await response.json()

        if (data.Response === "True") {
          setMovies(data.Search || [])
          setTotalResults(Number.parseInt(data.totalResults) || 0)
        } else {
          setMovies([])
          setTotalResults(0)
          setError(data.Error || "No results found")
        }
      } catch (err) {
        setError("Failed to fetch movies. Please check your connection and try again.")
        setMovies([])
        setTotalResults(0)
      } finally {
        setLoading(false)
      }
    },
    [filters],
  )

  const fetchMovieDetails = async (imdbID: string) => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`)
      const data = await response.json()

      if (data.Response === "True") {
        setSelectedMovie(data)
        setShowModal(true)
      } else {
        setError("Failed to fetch movie details")
      }
    } catch (err) {
      setError("Failed to fetch movie details")
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
    searchMovies(query, 1, filters)
  }

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters)
    setCurrentPage(1)
    if (searchQuery) {
      searchMovies(searchQuery, 1, newFilters)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    searchMovies(searchQuery, page, filters)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleMovieClick = (imdbID: string) => {
    fetchMovieDetails(imdbID)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedMovie(null)
  }

  const totalPages = Math.ceil(totalResults / 10)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background">
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Movie Explorer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover your next favorite movie or series from millions of titles worldwide
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        {/* Filters */}
        {hasSearched && (
          <section className="max-w-4xl mx-auto">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </section>
        )}

        {/* Results Section */}
        <section className="space-y-6">
          {loading && <LoadingSpinner />}

          {error && !loading && <ErrorMessage message={error} />}

          {!loading && !error && movies.length === 0 && hasSearched && <EmptyState query={searchQuery} />}

          {!loading && !error && movies.length === 0 && !hasSearched && (
            <div className="text-center py-20">
              <div className="space-y-4">
                <div className="text-6xl mb-4">🎬</div>
                <h2 className="text-2xl font-semibold text-foreground">Ready to explore?</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Search for any movie or series above to get started on your cinematic journey
                </p>
              </div>
            </div>
          )}

          {!loading && !error && movies.length > 0 && (
            <div className="space-y-8">
              {/* Results Info */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Showing {movies.length} of {totalResults.toLocaleString()} results
                  </p>
                  {searchQuery && <p className="text-lg font-medium text-foreground">Results for "{searchQuery}"</p>}
                </div>
              </div>

              {/* Movie Grid */}
              <MovieGrid movies={movies} onMovieClick={handleMovieClick} />

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center pt-8">
                  <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />

      {/* Movie Modal */}
      {showModal && selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  )
}
