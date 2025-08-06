"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Filter } from "lucide-react"
import type { SearchFilters } from "@/types/movie"

interface FilterPanelProps {
  filters: SearchFilters
  onFilterChange: (filters: SearchFilters) => void
}

export function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i)

  const handleTypeChange = (type: string) => {
    onFilterChange({ ...filters, type: type === "all" ? "" : type })
  }

  const handleYearChange = (year: string) => {
    onFilterChange({ ...filters, year: year === "all" ? "" : year })
  }

  return (
    <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Filters</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="type-filter" className="text-sm font-medium">
              Content Type
            </Label>
            <Select value={filters.type || "all"} onValueChange={handleTypeChange}>
              <SelectTrigger className="bg-background border-2 transition-colors focus:border-primary">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="movie">🎬 Movies</SelectItem>
                <SelectItem value="series">📺 Series</SelectItem>
                <SelectItem value="episode">🎭 Episodes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label htmlFor="year-filter" className="text-sm font-medium">
              Release Year
            </Label>
            <Select value={filters.year || "all"} onValueChange={handleYearChange}>
              <SelectTrigger className="bg-background border-2 transition-colors focus:border-primary">
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
