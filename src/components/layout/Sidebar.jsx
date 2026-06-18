import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Trophy,
  ShoppingCart,
  Package,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  X,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/users', label: 'Users', icon: FileText },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { to: '/order', label: 'Order', icon: ShoppingCart },
  { to: '/products', label: 'Products', icon: Package },
  { to: '/sales-report', label: 'Sales Report', icon: FileText },
  { to: '/messages', label: 'Messages', icon: MessageSquare },
  { to: '/settings', label: 'Settings', icon: Settings },
]

function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex h-screen w-[var(--sidebar-width)] flex-col overflow-hidden border-r border-[#ECEFF5] bg-white px-6 py-6 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="mb-8 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#5D5FEF]">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L10 16L16 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-lg font-bold text-[#151D48]">Dabang</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1.5 text-[#737791] hover:bg-[#F8F9FB] lg:hidden"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#5D5FEF] text-white shadow-[0_4px_12px_rgba(93,95,239,0.25)]'
                  : 'text-[#737791] hover:bg-[#F8F9FB] hover:text-[#151D48]'
              }`
            }
          >
            <Icon size={18} className="shrink-0" strokeWidth={1.75} />
            <span className="truncate">{label}</span>
          </NavLink>
        ))}

        <NavLink
          to="/sign-out"
          onClick={(e) => e.preventDefault()}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#737791] transition-colors hover:bg-[#F8F9FB] hover:text-[#151D48]"
        >
          <LogOut size={18} className="shrink-0" strokeWidth={1.75} />
          <span className="truncate">Sign Out</span>
        </NavLink>
      </nav>

      <div className="mt-6 shrink-0">
        <div className="rounded-2xl bg-gradient-to-br from-[#5D5FEF] to-[#7B6CF6] px-5 py-5 text-white">
          <p className="text-sm font-semibold leading-snug">Dabang Pro</p>
          <p className="mt-2 text-xs leading-relaxed text-white/85">
            Get access to all features on tetumbas
          </p>
          <button
            type="button"
            className="mt-5 w-full rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-[#5D5FEF] transition-colors hover:bg-white/90"
          >
            Get Pro
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
