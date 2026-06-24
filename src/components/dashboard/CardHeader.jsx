function CardHeader({ title, subtitle, action }) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div className="space-y-1.5">
        <h2 className="text-base font-bold leading-snug text-text-primary sm:text-lg">{title}</h2>
        {subtitle && (
          <p className="text-sm leading-relaxed text-text-secondary">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  )
}

export default CardHeader
