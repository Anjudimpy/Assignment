import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

function Layout({ title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Overlay */}
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="min-h-screen">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="min-h-screen lg:ml-64 px-4 py-5 sm:px-5">
          <div className="mx-auto w-full max-w-[1440px]">
            <TopNav
              title={title}
              onMenuClick={() => setIsSidebarOpen(true)}
            />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout