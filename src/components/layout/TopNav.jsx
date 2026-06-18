import { useEffect, useState } from 'react'
import { Bell, ChevronDown, Menu } from 'lucide-react'
import { SearchInput } from '../ui/search-input'

function TopNav({ title = 'Dashboard', onMenuClick }) {
  const [searchValue, setSearchValue] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    document.title = debouncedSearch
      ? `${title} – ${debouncedSearch} | Dabang`
      : `${title} | Dabang`
  }, [debouncedSearch, title])

  return (
    <header className="mb-6 grid grid-cols-1 items-center gap-4 lg:mb-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] lg:gap-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="shrink-0 rounded-xl p-2 text-[#737791] hover:bg-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        <h1 className="truncate text-xl font-bold text-[#151D48] sm:text-2xl">{title}</h1>
      </div>

      <div className="w-full min-w-0 lg:max-w-xl lg:justify-self-center">
        <SearchInput
          variant="pill"
          placeholder="Search here..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onDebouncedChange={setDebouncedSearch}
          debounceMs={400}
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
          className="relative shrink-0 rounded-xl bg-[#FFF8E6] p-2.5 hover:bg-[#FFF3D6]"
        >
          <Bell size={20} className="text-[#FF947A]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FA5A7D]" />
        </button>

        <button type="button" className="flex shrink-0 items-center gap-3 rounded-xl px-2 py-1.5 hover:bg-white">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Musfiq"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <div className="hidden min-w-0 text-left sm:block">
            <p className="truncate text-sm font-semibold text-[#151D48]">Musfiq</p>
            <p className="text-xs text-[#737791]">Admin</p>
          </div>
          <ChevronDown size={14} className="hidden shrink-0 text-[#737791] sm:block" />
        </button>
      </div>
    </header>
  )
}

export default TopNav
