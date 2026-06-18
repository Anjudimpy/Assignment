import Card from './Card'
import CardHeader from './CardHeader'
import { topProducts } from '../../data/dummyData'

const badgeColors = {
  45: 'bg-[#E8EDFF] text-[#5D5FEF]',
  29: 'bg-[#E6F9EF] text-[#3CD856]',
  18: 'bg-[#F3E8FF] text-[#BF83FF]',
  25: 'bg-[#FFF4DE] text-[#FF947A]',
}

function TopProducts() {
  return (
    <Card className="col-span-12 lg:col-span-5">
      <CardHeader title="Top Products" />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-[#ECEFF5] text-left text-xs font-medium text-[#737791]">
              <th className="pb-4 pr-6">#</th>
              <th className="pb-4 pr-6">Name</th>
              <th className="pb-4 pr-6">Popularity</th>
              <th className="pb-4">Sales</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr key={product.id} className="border-b border-[#F8F9FB] last:border-0">
                <td className="py-4 pr-6 text-[#737791]">{product.id}</td>
                <td className="py-4 pr-6 font-medium text-[#151D48]">{product.name}</td>
                <td className="py-4 pr-6">
                  <div className="h-2 w-full max-w-[180px] overflow-hidden rounded-full bg-[#ECEFF5]">
                    <div
                      className={`h-full rounded-full ${product.color}`}
                      style={{ width: `${product.popularity}%` }}
                    />
                  </div>
                </td>
                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      badgeColors[product.sales] || 'bg-[#F8F9FB] text-[#737791]'
                    }`}
                  >
                    {product.sales}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default TopProducts
