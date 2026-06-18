function Card({ children, className = '' }) {
  return (
    <div
      className={`min-w-0 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
