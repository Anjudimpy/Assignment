import Card from './Card'
import CardHeader from './CardHeader'
import { salesStats } from '../../data/dummyData'
import { Download } from 'lucide-react'

function TodaysSales() {
  return (
    <Card className="col-span-12 h-full lg:col-span-8">
      <CardHeader
        title="Today's Sales"
        subtitle="Sales Summary"
        action={
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-[#ECEFF5] bg-white px-4 py-2 text-[13px] font-medium text-[#737791] transition-colors hover:bg-[#F8F9FB]"
          >
            <Download size={15} />
            Export
          </button>
        }
      />

      <div className="grid flex-1 grid-cols-2 gap-4 lg:grid-cols-4">
        {salesStats.map((stat) => (
          <div
            key={stat.id}
            className={`flex min-h-[148px] flex-col rounded-2xl px-5 py-5 ${stat.bgColor}`}
          >
            <div
              className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${stat.iconBg} text-sm text-white`}
            >
              {stat.icon}
            </div>
            <p className="text-xl font-bold text-[#151D48]">{stat.value}</p>
            <p className="mt-1 text-[13px] font-medium text-[#151D48]">{stat.label}</p>
            <p className="mt-auto pt-2 text-[11px] leading-relaxed">
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
