function Button({ children, className = '', variant = 'default', size = 'default', disabled, type = 'button', onClick, ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    default: 'bg-[#5D5FEF] text-white hover:bg-[#4a4ed4]',
    outline: 'border border-[#ECEFF5] bg-white text-[#151D48] hover:bg-[#F8F9FB]',
    ghost: 'text-[#737791] hover:bg-[#F8F9FB] hover:text-[#151D48]',
  }

  const sizes = {
    default: 'h-10 px-4 py-2',
    lg: 'h-10 px-4 py-2',
    sm: 'h-8 px-3 text-xs',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
