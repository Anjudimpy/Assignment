import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import Card from './Card'
import CardHeader from './CardHeader'
import { visitorInsightsData } from '../../data/dummyData'
import { chartColors } from '../../theme/chartTheme'

function VisitorInsights() {
  return (
    <Card className="col-span-12 max-h-[355px] lg:col-span-4">
      <CardHeader title="Visitor Insights" />
      <div className="min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%" minHeight={220}>
        <LineChart data={visitorInsightsData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: chartColors.tick }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: chartColors.tick }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, color: chartColors.tick }}
          />
          <Line type="monotone" dataKey="loyal" name="Loyal Customers" stroke={chartColors.accentPurple} strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="new" name="New Customers" stroke={chartColors.accentPink} strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="unique" name="Unique Customers" stroke={chartColors.success} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default VisitorInsights
