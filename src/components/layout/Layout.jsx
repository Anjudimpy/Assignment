import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

function Layout({ title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-page-bg">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-text-primary/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className="min-h-screen "
      
      >
        <Sidebar />
         <main className="ml-64 min-h-screen overflow-y-auto px-5 py-5">
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
