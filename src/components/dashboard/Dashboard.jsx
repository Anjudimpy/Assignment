import TodaysSales from './TodaysSales'
import VisitorInsights from './VisitorInsights'
import TotalRevenue from './TotalRevenue'
import CustomerSatisfaction from './CustomerSatisfaction'
import TargetVsReality from './TargetVsReality'
import TopProducts from './TopProducts'
import SalesMapping from './SalesMapping'
import VolumeVsService from './VolumeVsService'

function Dashboard() {
  return (
    <div className="grid min-w-0 grid-cols-12 gap-6">
      <TodaysSales />
      <VisitorInsights />
      <TotalRevenue />
      <CustomerSatisfaction />
      <TargetVsReality />
      <TopProducts />
      <SalesMapping />
      <VolumeVsService />
    </div>
  )
}

export default Dashboard
