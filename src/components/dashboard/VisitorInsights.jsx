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

function VisitorInsights() {
  return (
    <Card className="col-span-12 lg:col-span-5">
      <CardHeader title="Visitor Insights" />
      <div className="min-w-0 w-full">
        <ResponsiveContainer width="100%" height={230}>
        <LineChart data={visitorInsightsData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ECEFF5" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#737791' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#737791' }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, color: '#737791' }}
          />
          <Line type="monotone" dataKey="loyal" name="Loyal Customers" stroke="#BF83FF" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="new" name="New Customers" stroke="#FA5A7D" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="unique" name="Unique Customers" stroke="#3CD856" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default VisitorInsights
