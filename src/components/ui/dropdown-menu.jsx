import { createContext, useContext, useEffect, useRef, useState } from 'react'

const DropdownContext = createContext({ open: false, setOpen: () => {} })

function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  )
}

function DropdownMenuTrigger({ asChild, children }) {
  const { setOpen } = useContext(DropdownContext)

  if (asChild) {
    return (
      <span onClick={() => setOpen((prev) => !prev)} className="inline-flex cursor-pointer">
        {children}
      </span>
    )
  }

  return (
    <button type="button" onClick={() => setOpen((prev) => !prev)}>
      {children}
    </button>
  )
}

function DropdownMenuContent({ children, align = 'end' }) {
  const { open, setOpen } = useContext(DropdownContext)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, setOpen])

  if (!open) return null

  return (
    <div
      ref={ref}
      className={`absolute top-full z-50 mt-2 min-w-[180px] rounded-xl border border-border bg-card-bg p-1 shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${
        align === 'end' ? 'right-0' : 'left-0'
      }`}
    >
      {children}
    </div>
  )
}

function DropdownMenuCheckboxItem({ children, checked, onCheckedChange, className = '' }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm capitalize text-text-primary hover:bg-page-bg ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className="accent-primary"
      />
      {children}
    </label>
  )
}

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem }
