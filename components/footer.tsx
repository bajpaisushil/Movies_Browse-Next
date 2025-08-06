export function Footer() {
  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🎬</span>
            <span className="font-bold text-lg">MovieExplorer</span>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Discover amazing movies and series from around the world. Powered by OMDb API.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>© 2025 MovieExplorer. Built with Next.js and TypeScript.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
