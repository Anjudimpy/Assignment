import { Search, Bell, ChevronDown, Menu } from 'lucide-react'

function TopNav({ title = 'Dashboard', onMenuClick }) {
  return (
    <header className="mb-6 grid grid-cols-1 items-center gap-4 lg:mb-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] lg:gap-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl p-2 text-[#737791] hover:bg-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        <h1 className="text-xl font-bold text-[#151D48] sm:text-2xl">{title}</h1>
      </div>

      <div className="relative w-full min-w-0 lg:justify-self-center">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5D5FEF]" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full rounded-xl border-0 bg-white py-3 pl-11 pr-4 text-sm text-[#151D48] shadow-[0_2px_12px_rgba(0,0,0,0.04)] outline-none placeholder:text-[#A3A9C2] focus:ring-2 focus:ring-[#5D5FEF]/20"
        />
      </div>

      <div className="flex shrink-0 flex-wrap items-center justify-end gap-3 sm:gap-4 lg:justify-self-end">
        <button
          type="button"
          className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#151D48] hover:bg-white sm:flex"
        >
          <span className="text-base">🇺🇸</span>
          <span className="font-medium">Eng (US)</span>
          <ChevronDown size={14} className="text-[#737791]" />
        </button>

        <button
          type="button"
          className="relative rounded-xl bg-[#FFF8E6] p-2.5 hover:bg-[#FFF3D6]"
        >
          <Bell size={20} className="text-[#FF947A]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FA5A7D]" />
        </button>

        <button type="button" className="flex items-center gap-3 rounded-xl px-2 py-1.5 hover:bg-white">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Musfiq"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <div className="hidden min-w-0 text-left sm:block">
            <p className="truncate text-sm font-semibold text-[#151D48]">Musfiq</p>
            <p className="text-xs text-[#737791]">Admin</p>
          </div>
          <ChevronDown size={14} className="hidden text-[#737791] sm:block" />
        </button>
      </div>
    </header>
  )
}

export default TopNav
