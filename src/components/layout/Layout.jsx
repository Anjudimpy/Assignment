import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

function Layout({ title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-[#151D48]/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className="lg:grid lg:min-h-screen"
        style={{ gridTemplateColumns: 'var(--sidebar-width) minmax(0, 1fr)' }}
      >
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="min-w-0 overflow-x-hidden px-5 py-5 sm:px-7 sm:py-6 lg:px-9 lg:py-7">
          <div className="mx-auto w-full max-w-[1440px]">
            <TopNav title={title} onMenuClick={() => setSidebarOpen(true)} />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
