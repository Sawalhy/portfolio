'use client'

interface ProgressIndicatorProps {
  scrollProgress: number
}

export default function ProgressIndicator({ scrollProgress }: ProgressIndicatorProps) {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 h-64 hidden lg:flex flex-col items-center gap-4 z-30">
      {/* Vertical progress line */}
      <div className="w-0.5 h-64 bg-border">
        <div
          className="w-full bg-accent transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>
      {/* Circle indicator */}
      <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-2 border-background transform translate-x-1/2" />
    </div>
  )
}
