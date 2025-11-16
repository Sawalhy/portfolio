'use client'

interface ProgressIndicatorProps {
  progress: number
}

export default function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-1 bg-border/30 z-30 hidden md:block">
        <div
          className="w-full bg-accent transition-all duration-300"
          style={{ height: `${progress}%` }}
        />
      </div>
      
      {/* Progress circle indicator */}
      <div
        className="fixed left-0 w-1 bg-accent z-30 hidden md:block transition-all duration-300"
        style={{
          top: `${progress}%`,
          height: '4px',
          boxShadow: '0 0 0 8px rgba(var(--accent), 0.1)',
          borderRadius: '2px',
          transform: 'translateY(-2px)',
        }}
      />
    </>
  )
}
