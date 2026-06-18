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

function TargetVsReality() {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-3">
      <CardHeader title="Target vs Reality" />
      <div className="min-w-0 w-full">
        <ResponsiveContainer width="100%" height={200}>
        <BarChart data={targetVsRealityData} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ECEFF5" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#737791' }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: '#737791' }} />
          <Bar dataKey="reality" name="Reality Sales (8.823)" fill="#3CD856" radius={[3, 3, 0, 0]} barSize={10} />
          <Bar dataKey="target" name="Target Sales (12.122)" fill="#FFCF6C" radius={[3, 3, 0, 0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default TargetVsReality
