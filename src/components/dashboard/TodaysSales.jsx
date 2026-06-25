import Card from './Card'
import CardHeader from './CardHeader'
import { salesStats } from '../../data/dummyData'
import { Download } from 'lucide-react'

function TodaysSales() {
  return (
    <Card className="col-span-12 lg:col-span-8">
      <CardHeader
        title="Today's Sales"
        subtitle="Sales Summary"
        action={
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-border bg-card-bg px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors hover:bg-page-bg"
          >
            <Download size={15} />
            Export
          </button>
        }
      />

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {salesStats.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.id}
              className={`flex min-h-[170px] flex-col rounded-2xl p-5 ${stat.bgColor}`}
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${stat.iconBg}`}
              >
                <Icon
                  size={22}
                  className="text-white"
                />
              </div>

              <h3 className="text-xl font-bold text-text-primary">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm font-semibold text-text-primary">
                {stat.label}
              </p>

              <p className="mt-auto pt-5 text-xs">
                <span className="font-semibold text-success">
                  {stat.change}
                </span>{' '}
                <span className="text-text-secondary">
                  {stat.changeLabel}
                </span>
              </p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default TodaysSales