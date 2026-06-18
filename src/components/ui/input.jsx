function Input({ className = '', startContent, ...props }) {
  if (startContent) {
    return (
      <div
        className={`flex h-10 w-full items-center overflow-hidden rounded-xl border border-[#ECEFF5] bg-white ${className}`}
      >
        <span className="flex h-full w-11 shrink-0 items-center justify-center text-[#5D5FEF]">
          {startContent}
        </span>
        <input
          className="h-full min-w-0 flex-1 border-0 bg-transparent pr-4 text-sm text-[#151D48] outline-none placeholder:text-[#A3A9C2] focus:ring-0"
          {...props}
        />
      </div>
    )
  }

  return (
    <input
      className={`h-10 w-full rounded-xl border border-[#ECEFF5] bg-white px-4 text-sm text-[#151D48] outline-none placeholder:text-[#A3A9C2] focus:border-[#5D5FEF] focus:ring-2 focus:ring-[#5D5FEF]/20 ${className}`}
      {...props}
    />
  )
}

export { Input }
