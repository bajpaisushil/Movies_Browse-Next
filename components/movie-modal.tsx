"use client"

import { useState } from "react"
import { X, Star, Calendar, Clock, Users, Award, Globe, Film, Tv, Play } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { MovieDetails } from "@/types/movie"

interface MovieModalProps {
  movie: MovieDetails
  onClose: () => void
}

export function MovieModal({ movie, onClose }: MovieModalProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const getRatingColor = (rating: string) => {
    const numRating = Number.parseFloat(rating)
    if (numRating >= 8) return "text-green-500"
    if (numRating >= 6) return "text-yellow-500"
    return "text-red-500"
  }

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "movie":
        return <Film className="w-4 h-4" />
      case "series":
        return <Tv className="w-4 h-4" />
      default:
        return <Play className="w-4 h-4" />
    }
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto bg-background border-2 p-0">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 bg-background/80 backdrop-blur-sm hover:bg-background border shadow-lg"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="p-6 space-y-6">
          {/* Movie Poster */}
          <div className="flex justify-center">
            <div className="w-64 aspect-[2/3] relative overflow-hidden rounded-lg shadow-lg">
              {!imageError && movie.Poster !== "N/A" ? (
                <img
                  src={movie.Poster || "/placeholder.svg"}
                  alt={movie.Title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Film className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-medium">No Image Available</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Title and Basic Info */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{movie.Title}</h1>

            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {getTypeIcon(movie.Type)}
                <span className="ml-1 capitalize">{movie.Type}</span>
              </Badge>
              {movie.Rated !== "N/A" && <Badge variant="outline">{movie.Rated}</Badge>}
            </div>

            {/* Rating */}
            {movie.imdbRating !== "N/A" && (
              <div className="flex justify-center">
                <div className="bg-card border rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className={`font-bold text-2xl ${getRatingColor(movie.imdbRating)}`}>{movie.imdbRating}</span>
                    <span className="text-muted-foreground text-lg">/10</span>
                  </div>
                  {movie.imdbVotes !== "N/A" && (
                    <p className="text-sm text-muted-foreground">{movie.imdbVotes} votes</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
            {movie.Year !== "N/A" && (
              <div className="text-center space-y-2">
                <Calendar className="w-5 h-5 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">{movie.Year}</p>
                  <p className="text-xs text-muted-foreground">Year</p>
                </div>
              </div>
            )}
            {movie.Runtime !== "N/A" && (
              <div className="text-center space-y-2">
                <Clock className="w-5 h-5 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">{movie.Runtime}</p>
                  <p className="text-xs text-muted-foreground">Runtime</p>
                </div>
              </div>
            )}
            {movie.Language !== "N/A" && (
              <div className="text-center space-y-2">
                <Globe className="w-5 h-5 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">{movie.Language.split(", ")[0]}</p>
                  <p className="text-xs text-muted-foreground">Language</p>
                </div>
              </div>
            )}
            {movie.Country !== "N/A" && (
              <div className="text-center space-y-2">
                <Users className="w-5 h-5 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">{movie.Country.split(", ")[0]}</p>
                  <p className="text-xs text-muted-foreground">Country</p>
                </div>
              </div>
            )}
          </div>

          {/* Genres */}
          {movie.Genre !== "N/A" && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {movie.Genre.split(", ").map((genre) => (
                  <Badge key={genre} variant="secondary" className="bg-primary/10 text-primary">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Plot */}
          {movie.Plot !== "N/A" && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Plot</h3>
              <p className="text-muted-foreground leading-relaxed">{movie.Plot}</p>
            </div>
          )}

          <Separator />

          {/* Cast & Crew */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cast & Crew</h3>
            <div className="space-y-4">
              {movie.Director !== "N/A" && (
                <div>
                  <h4 className="font-semibold text-primary mb-1">Director</h4>
                  <p className="text-muted-foreground">{movie.Director}</p>
                </div>
              )}

              {movie.Writer !== "N/A" && (
                <div>
                  <h4 className="font-semibold text-primary mb-1">Writer</h4>
                  <p className="text-muted-foreground">{movie.Writer}</p>
                </div>
              )}

              {movie.Actors !== "N/A" && (
                <div>
                  <h4 className="font-semibold text-primary mb-1">Cast</h4>
                  <p className="text-muted-foreground">{movie.Actors}</p>
                </div>
              )}
            </div>
          </div>

          {/* Awards */}
          {movie.Awards !== "N/A" && movie.Awards !== "N/A" && (
            <>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  Awards & Recognition
                </h3>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-muted-foreground">{movie.Awards}</p>
                </div>
              </div>
            </>
          )}

          {/* Additional Information */}
          <Separator />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {movie.Released !== "N/A" && (
                <div>
                  <h4 className="font-semibold text-primary mb-1">Released</h4>
                  <p className="text-muted-foreground">{movie.Released}</p>
                </div>
              )}
              {movie.BoxOffice !== "N/A" && (
                <div>
                  <h4 className="font-semibold text-primary mb-1">Box Office</h4>
                  <p className="text-muted-foreground">{movie.BoxOffice}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
