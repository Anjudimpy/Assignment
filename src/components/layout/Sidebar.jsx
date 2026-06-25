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
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card-bg">
      <div className="flex shrink-0 items-center justify-between px-5 pb-4 pt-5">
        <div className="flex items-center gap-2.5 ">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L10 16L16 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-base font-bold text-text-primary">Dabang</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1 text-text-secondary hover:bg-page-bg lg:hidden"
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
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:bg-page-bg hover:text-text-primary'
              }`
            }
          >
            <Icon size={17} className="shrink-0" strokeWidth={1.75} />
            <span className="truncate">{label}</span>
          </NavLink>
        ))}

        <button
          type="button"
          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[13px] font-medium text-text-secondary transition-colors hover:bg-page-bg hover:text-text-primary"
        >
          <LogOut size={17} className="shrink-0" strokeWidth={1.75} />
          <span>Sign Out</span>
        </button>
      </nav>

      <div className="shrink-0 px-4 pb-5 pt-3">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-secondary-dark px-5 pt-6 pb-0 text-center">
          <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-white/[0.08]" />
          <div className="pointer-events-none absolute bottom-6 right-4 h-14 w-14 rounded-full bg-white/[0.06]" />

          <div className="relative flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-card-bg shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 5L12 19L18 5"
                  stroke="var(--color-primary)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-base font-bold text-white">Dabang Pro</h3>

            <p className="mt-2 max-w-[170px] text-xs leading-relaxed text-white/90">
              Get access to all features on tetumbas
            </p>

            <div className="mt-5 w-full px-4 pb-4">
              <button
                type="button"
                className="w-full rounded-lg bg-card-bg px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-card-bg/95"
              >
                Get Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
