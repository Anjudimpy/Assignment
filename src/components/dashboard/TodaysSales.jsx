import Card from './Card'
import CardHeader from './CardHeader'
import { salesStats } from '../../data/dummyData'
import { Download } from 'lucide-react'

function TodaysSales() {
  return (
    <Card className="col-span-12 lg:col-span-7">
      <CardHeader
        title="Today's Sales"
        subtitle="Sales Summary"
        action={
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-[#ECEFF5] bg-white px-4 py-2.5 text-sm font-medium text-[#737791] transition-colors hover:bg-[#F8F9FB]"
          >
            <Download size={16} />
            Export
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {salesStats.map((stat) => (
          <div key={stat.id} className={`rounded-2xl px-5 py-5 ${stat.bgColor}`}>
            <div
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${stat.iconBg} text-base text-white`}
            >
              {stat.icon}
            </div>
            <p className="text-xl font-bold leading-tight text-[#151D48] sm:text-2xl">{stat.value}</p>
            <p className="mt-1.5 text-sm font-medium text-[#151D48]">{stat.label}</p>
            <p className="mt-2.5 text-xs leading-relaxed">
              <span className="font-semibold text-[#3CD856]">{stat.change}</span>{' '}
              <span className="text-[#737791]">{stat.changeLabel}</span>
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TodaysSales
