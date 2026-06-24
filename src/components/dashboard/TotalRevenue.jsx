import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import Card from './Card'
import CardHeader from './CardHeader'
import { revenueData } from '../../data/dummyData'
import { chartColors } from '../../theme/chartTheme'

function TotalRevenue() {
  return (
    <Card className="col-span-12 lg:col-span-6">
      <CardHeader title="Total Revenue" />
      <div className="min-w-0 w-full">
        <ResponsiveContainer width="100%" height={220}>
        <BarChart data={revenueData} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: chartColors.tick }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: chartColors.tick }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: chartColors.tick }} />
          <Bar dataKey="online" name="Online Sales" fill={chartColors.primary} radius={[4, 4, 0, 0]} barSize={12} />
          <Bar dataKey="offline" name="Offline Sales" fill={chartColors.success} radius={[4, 4, 0, 0]} barSize={12} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default TotalRevenue
