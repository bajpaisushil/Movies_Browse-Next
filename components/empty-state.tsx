import { Search, Film } from "lucide-react"

interface EmptyStateProps {
  query: string
}

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <div className="text-center py-20 space-y-6">
      <div className="relative">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-12 h-12 text-muted-foreground" />
        </div>
        <Film className="w-8 h-8 text-muted-foreground/50 absolute -top-2 -right-2" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-foreground">No results found</h3>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          We couldn't find any movies or series matching{" "}
          <span className="font-semibold text-foreground">"{query}"</span>
        </p>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 max-w-md mx-auto">
        <p className="text-sm text-muted-foreground font-medium mb-2">Try these suggestions:</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Check your spelling</li>
          <li>• Try different keywords</li>
          <li>• Use broader search terms</li>
          <li>• Adjust your filters</li>
        </ul>
      </div>
    </div>
  )
}
