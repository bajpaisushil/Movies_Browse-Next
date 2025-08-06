"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Film } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Film className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">MovieExplorer</span>
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}
