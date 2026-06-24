import Card from './Card'
import CardHeader from './CardHeader'
import { topProducts } from '../../data/dummyData'

const badgeColors = {
  45: 'bg-primary-light text-primary',
  29: 'bg-success-light text-success',
  18: 'bg-accent-purple-light text-accent-purple',
  25: 'bg-accent-orange-light text-accent-orange',
}

function TopProducts() {
  return (
    <Card className="col-span-12 lg:col-span-6">
      <CardHeader title="Top Products" />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs font-medium text-text-secondary">
              <th className="pb-4 pr-6">#</th>
              <th className="pb-4 pr-6">Name</th>
              <th className="pb-4 pr-6">Popularity</th>
              <th className="pb-4">Sales</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr key={product.id} className="border-b border-page-bg last:border-0">
                <td className="py-4 pr-6 text-text-secondary">{product.id}</td>
                <td className="py-4 pr-6 font-medium text-text-primary">{product.name}</td>
                <td className="py-4 pr-6">
                  <div className="h-2 w-full max-w-[180px] overflow-hidden rounded-full bg-border">
                    <div
                      className={`h-full rounded-full ${product.color}`}
                      style={{ width: `${product.popularity}%` }}
                    />
                  </div>
                </td>
                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      badgeColors[product.sales] || 'bg-page-bg text-text-secondary'
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
