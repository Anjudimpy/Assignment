function Input({ className = '', startContent, ...props }) {
  if (startContent) {
    return (
      <div
        className={`flex h-10 w-full items-center overflow-hidden rounded-xl border border-border bg-card-bg ${className}`}
      >
        <span className="flex h-full w-11 shrink-0 items-center justify-center text-primary">
          {startContent}
        </span>
        <input
          className="h-full min-w-0 flex-1 border-0 bg-transparent pr-4 text-sm text-text-primary outline-none placeholder:text-text-muted focus:ring-0"
          {...props}
        />
      </div>
    )
  }

  return (
    <input
      className={`h-10 w-full rounded-xl border border-border bg-card-bg px-4 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
      {...props}
    />
  )
}

export { Input }
