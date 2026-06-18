import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

function SearchInput({
  value,
  onChange,
  onDebouncedChange,
  debounceMs = 500,
  placeholder = 'Search here...',
  variant = 'pill',
  className = '',
  name,
}) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(value ?? '')

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value)
    }
  }, [isControlled, value])

  useEffect(() => {
    if (!onDebouncedChange) return undefined

    const timer = setTimeout(() => {
      onDebouncedChange(internalValue)
    }, debounceMs)

    return () => clearTimeout(timer)
  }, [internalValue, debounceMs, onDebouncedChange])

  const handleChange = (event) => {
    const nextValue = event.target.value
    if (!isControlled) {
      setInternalValue(nextValue)
    }
    onChange?.(event)
  }

  const variants = {
    pill: 'h-11 rounded-full border-0 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]',
    default: 'h-10 rounded-xl border border-[#ECEFF5] bg-white shadow-none',
  }

  return (
    <div className={`flex w-full items-center overflow-hidden ${variants[variant]} ${className}`}>
      <span className="flex h-full w-12 shrink-0 items-center justify-center text-[#5D5FEF]">
        <Search size={18} strokeWidth={2} />
      </span>
      <input
        type="text"
        name={name}
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 border-0 bg-transparent pr-5 text-sm text-[#151D48] outline-none placeholder:text-[#A3A9C2] focus:ring-0"
      />
    </div>
  )
}

export { SearchInput }
