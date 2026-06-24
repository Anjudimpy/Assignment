import Card from './Card'
import CardHeader from './CardHeader'
import { mapRegions } from '../../data/dummyData'

function SalesMapping() {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-3">
      <CardHeader title="Sales Mapping by Country" />
      <div className="relative h-[210px] w-full min-w-0 overflow-hidden rounded-xl bg-page-bg p-3">
        <svg viewBox="0 0 100 80" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
          <rect width="100" height="80" fill="var(--color-map-bg)" rx="2" />
          {mapRegions.map((region) => (
            <ellipse
              key={region.name}
              cx={region.x + region.width / 2}
              cy={region.y + region.height / 2}
              rx={region.width / 2}
              ry={region.height / 2}
              fill={region.color}
              opacity={0.85}
            />
          ))}
        </svg>
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
          {mapRegions.map((region) => (
            <span key={region.name} className="flex items-center gap-1 text-[10px] text-text-secondary">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: region.color }} />
              {region.name}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default SalesMapping
