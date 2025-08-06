"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Film, Tv, Play } from "lucide-react"
import type { Movie } from "@/types/movie"

interface MovieCardProps {
  movie: Movie
  onClick: () => void
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "movie":
        return <Film className="w-3 h-3" />
      case "series":
        return <Tv className="w-3 h-3" />
      default:
        return <Play className="w-3 h-3" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "movie":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/20 dark:text-blue-400"
      case "series":
        return "bg-green-500/10 text-green-600 border-green-500/20 dark:bg-green-500/20 dark:text-green-400"
      default:
        return "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:bg-purple-500/20 dark:text-purple-400"
    }
  }

  return (
    <Card
      className="group cursor-pointer border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="aspect-[2/3] relative overflow-hidden">
          {imageLoading && (
            <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!imageError && movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster || "/placeholder.svg"}
              alt={movie.Title}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Film className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-medium">No Image</p>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
            <p className="text-white text-sm font-medium line-clamp-2">Click to view details</p>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
            {movie.Title}
          </h3>

          <div className="flex items-center justify-between gap-2">
            <Badge variant="outline" className={`text-xs font-medium ${getTypeColor(movie.Type)}`}>
              {getTypeIcon(movie.Type)}
              <span className="ml-1 capitalize">{movie.Type}</span>
            </Badge>

            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Calendar className="w-3 h-3" />
              <span>{movie.Year}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
