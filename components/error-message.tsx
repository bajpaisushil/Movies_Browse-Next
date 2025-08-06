"use client"

import { AlertCircle, RefreshCw } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="max-w-2xl mx-auto py-16">
      <Alert className="border-2 border-destructive/20 bg-destructive/5">
        <AlertCircle className="h-5 w-5 text-destructive" />
        <AlertDescription className="text-lg text-destructive font-medium">{message}</AlertDescription>
      </Alert>

      {onRetry && (
        <div className="text-center mt-6">
          <Button onClick={onRetry} variant="outline" className="border-2 bg-transparent">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      )}
    </div>
  )
}
