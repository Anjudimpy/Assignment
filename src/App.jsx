import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import UsersTable from './components/users/UsersTable'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout title="Dashboard" />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<Layout title="Users" />}>
          <Route path="/users" element={<UsersTable />} />
        </Route>
        <Route element={<Layout title="Leaderboard" />}>
          <Route path="/leaderboard" element={<PlaceholderPage title="Leaderboard" />} />
        </Route>
        <Route element={<Layout title="Order" />}>
          <Route path="/order" element={<PlaceholderPage title="Order" />} />
        </Route>
        <Route element={<Layout title="Products" />}>
          <Route path="/products" element={<PlaceholderPage title="Products" />} />
        </Route>
        <Route element={<Layout title="Sales Report" />}>
          <Route path="/sales-report" element={<PlaceholderPage title="Sales Report" />} />
        </Route>
        <Route element={<Layout title="Messages" />}>
          <Route path="/messages" element={<PlaceholderPage title="Messages" />} />
        </Route>
        <Route element={<Layout title="Settings" />}>
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function PlaceholderPage({ title }) {
  return (
    <div className="flex h-64 items-center justify-center rounded-2xl bg-card-bg shadow-sm">
      <p className="text-lg text-text-muted">{title} — Coming Soon</p>
    </div>
  )
}

export default App
