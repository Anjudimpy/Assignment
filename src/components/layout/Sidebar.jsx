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
  Users,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { to: '/order', label: 'Order', icon: ShoppingCart },
  { to: '/products', label: 'Products', icon: Package },
  { to: '/sales-report', label: 'Sales Report', icon: FileText },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/messages', label: 'Messages', icon: MessageSquare },
  { to: '/settings', label: 'Settings', icon: Settings },
]

function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex h-screen w-[var(--sidebar-width)] flex-col overflow-hidden bg-white transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex shrink-0 items-center justify-between px-5 pb-4 pt-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5D5FEF]">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L10 16L16 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-base font-bold text-[#151D48]">Dabang</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1 text-[#737791] hover:bg-[#F8F9FB] lg:hidden"
          aria-label="Close sidebar"
        >
          <X size={18} />
        </button>
      </div>

      <nav className="sidebar-nav flex flex-1 flex-col gap-0.5 overflow-y-auto px-4">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] font-medium transition-colors ${
                isActive
                  ? 'bg-[#5D5FEF] text-white'
                  : 'text-[#737791] hover:bg-[#F8F9FB] hover:text-[#151D48]'
              }`
            }
          >
            <Icon size={17} className="shrink-0" strokeWidth={1.75} />
            <span className="truncate">{label}</span>
          </NavLink>
        ))}

        <button
          type="button"
          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[13px] font-medium text-[#737791] transition-colors hover:bg-[#F8F9FB] hover:text-[#151D48]"
        >
          <LogOut size={17} className="shrink-0" strokeWidth={1.75} />
          <span>Sign Out</span>
        </button>
      </nav>

      <div className="shrink-0 px-4 pb-5 pt-3">
        <div className="rounded-2xl bg-gradient-to-br from-[#5D5FEF] to-[#7B6CF6] px-4 py-4 text-white">
          <p className="text-[13px] font-semibold">Dabang Pro</p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-white/85">
            Get access to all features on tetumbas
          </p>
          <button
            type="button"
            className="mt-3.5 w-full rounded-lg bg-white py-2 text-[11px] font-semibold text-[#5D5FEF] transition-colors hover:bg-white/90"
          >
            Get Pro
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
