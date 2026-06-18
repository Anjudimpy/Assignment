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

function TotalRevenue() {
  return (
    <Card className="col-span-12 lg:col-span-6">
      <CardHeader title="Total Revenue" />
      <div className="min-w-0 w-full">
        <ResponsiveContainer width="100%" height={220}>
        <BarChart data={revenueData} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ECEFF5" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#737791' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#737791' }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: '#737791' }} />
          <Bar dataKey="online" name="Online Sales" fill="#5D5FEF" radius={[4, 4, 0, 0]} barSize={12} />
          <Bar dataKey="offline" name="Offline Sales" fill="#3CD856" radius={[4, 4, 0, 0]} barSize={12} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default TotalRevenue
