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
import { targetVsRealityData } from '../../data/dummyData'
import { chartColors } from '../../theme/chartTheme'

function TargetVsReality() {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-3">
      <CardHeader title="Target vs Reality" />
      <div className="min-w-0 w-full">
        <ResponsiveContainer width="100%" height={200}>
        <BarChart data={targetVsRealityData} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: chartColors.tick }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: chartColors.tick }} />
          <Bar dataKey="reality" name="Reality Sales (8.823)" fill={chartColors.success} radius={[3, 3, 0, 0]} barSize={10} />
          <Bar dataKey="target" name="Target Sales (12.122)" fill={chartColors.accentYellow} radius={[3, 3, 0, 0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default TargetVsReality
