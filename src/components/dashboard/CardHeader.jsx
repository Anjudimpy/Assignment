function CardHeader({ title, subtitle, action }) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div className="space-y-1.5">
        <h2 className="text-base font-bold leading-snug text-[#051C48] sm:text-lg p-6">{title}</h2>
        {subtitle && (
          <p className="text-sm leading-relaxed text-[#737791]">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  )
}

export default CardHeader
