function CardHeader({ title, subtitle, action }) {
  return (
    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div className="space-y-1">
        <h2 className="text-base font-semibold leading-snug text-[#151D48] sm:text-lg">{title}</h2>
        {subtitle && (
          <p className="text-sm leading-relaxed text-[#737791]">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  )
}

export default CardHeader
