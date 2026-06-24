import {
  DollarSign,
  ShoppingBag,
  Package,
  Users,
} from 'lucide-react'

export const salesStats = [
  {
    id: 1,
    label: 'Total Sales',
    value: '$1k',
    change: '+8%',
    changeLabel: 'from yesterday',
    bgColor: 'bg-accent-pink-light',
    iconBg: 'bg-accent-pink',
    icon: DollarSign,
  },
  {
    id: 2,
    label: 'Total Order',
    value: '300',
    change: '+5%',
    changeLabel: 'from yesterday',
    bgColor: 'bg-accent-orange-light',
    iconBg: 'bg-accent-orange',
    icon: ShoppingBag,
  },
  {
    id: 3,
    label: 'Product Sold',
    value: '5',
    change: '+1.2%',
    changeLabel: 'from yesterday',
    bgColor: 'bg-success-light',
    iconBg: 'bg-success',
    icon: Package,
  },
  {
    id: 4,
    label: 'New Customers',
    value: '8',
    change: '+0.5%',
    changeLabel: 'from yesterday',
    bgColor: 'bg-accent-purple-light',
    iconBg: 'bg-accent-purple',
    icon: Users,
  },
]