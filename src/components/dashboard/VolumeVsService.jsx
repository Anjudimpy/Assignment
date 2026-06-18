import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import Card from './Card'
import CardHeader from './CardHeader'
import { volumeVsServiceData } from '../../data/dummyData'

function VolumeVsService() {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-3">
      <CardHeader title="Volume vs Service Level" />
      <div className="min-w-0 w-full">
        <ResponsiveContainer width="100%" height={200}>
        <BarChart data={volumeVsServiceData}>
          <XAxis dataKey="label" hide />
          <YAxis hide />
          <Tooltip />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: '#737791' }} />
          <Bar dataKey="volume" name="Volume 1,135" fill="#5D5FEF" radius={[3, 3, 0, 0]} barSize={14} />
          <Bar dataKey="services" name="Services 635" fill="#3CD856" radius={[3, 3, 0, 0]} barSize={14} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default VolumeVsService
