function Card({ children, className = '' }) {
  return (
    <div
      className={`flex min-w-0 flex-col rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
