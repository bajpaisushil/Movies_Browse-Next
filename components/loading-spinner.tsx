export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-primary"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-spin border-r-purple-500 animation-delay-150"></div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-foreground">Loading movies...</p>
        <p className="text-sm text-muted-foreground">Please wait while we fetch the latest results</p>
      </div>
    </div>
  )
}
