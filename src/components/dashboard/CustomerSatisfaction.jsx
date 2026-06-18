import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import Card from './Card'
import CardHeader from './CardHeader'
import { satisfactionData } from '../../data/dummyData'

function CustomerSatisfaction() {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-4">
      <CardHeader title="Customer Satisfaction" />
      <div className="min-w-0 w-full">
        <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={satisfactionData}>
          <defs>
            <linearGradient id="lastMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5D5FEF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#5D5FEF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="thisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3CD856" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3CD856" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="point" hide />
          <YAxis hide />
          <Tooltip />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: '#737791' }} />
          <Area type="monotone" dataKey="lastMonth" name="Last Month $3,004" stroke="#5D5FEF" fill="url(#lastMonth)" strokeWidth={2} />
          <Area type="monotone" dataKey="thisMonth" name="This Month $4,504" stroke="#3CD856" fill="url(#thisMonth)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default CustomerSatisfaction
