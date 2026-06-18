import { useState, useEffect, useMemo } from 'react'
import { Search, ArrowUpDown, ArrowUp, ArrowDown, Loader2, AlertCircle } from 'lucide-react'
import Card from '../dashboard/Card'
import CardHeader from '../dashboard/CardHeader'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

function UsersTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [cityFilter, setCityFilter] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error(`Failed to fetch users (${response.status})`)
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message || 'Something went wrong while fetching users.')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const cities = useMemo(() => {
    const uniqueCities = [...new Set(users.map((user) => user.address.city))]
    return uniqueCities.sort()
  }, [users])

  const filteredUsers = useMemo(() => {
    let result = [...users]

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      )
    }

    if (cityFilter) {
      result = result.filter((user) => user.address.city === cityFilter)
    }

    result.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name)
      return sortOrder === 'asc' ? comparison : -comparison
    })

    return result
  }, [users, searchQuery, cityFilter, sortOrder])

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  if (loading) {
    return (
      <Card className="flex flex-col items-center justify-center py-20">
        <Loader2 size={40} className="animate-spin text-[#5B5FEF]" />
        <p className="mt-4 text-sm text-[#8A8A8A]">Loading users...</p>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="flex flex-col items-center justify-center py-20">
        <AlertCircle size={40} className="text-red-500" />
        <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 rounded-lg bg-[#5B5FEF] px-4 py-2 text-sm font-medium text-white hover:bg-[#4a4ed4]"
        >
          Retry
        </button>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader
        title="Users"
        subtitle={`${filteredUsers.length} of ${users.length} users`}
        action={
          <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A3A9C2]" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-xl border border-[#ECEFF5] py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#5D5FEF] focus:ring-2 focus:ring-[#5D5FEF]/20"
            />
          </div>

          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="rounded-xl border border-[#ECEFF5] px-4 py-2.5 text-sm outline-none focus:border-[#5D5FEF] focus:ring-2 focus:ring-[#5D5FEF]/20"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <button
            onClick={toggleSort}
            className="flex items-center gap-2 rounded-xl border border-[#ECEFF5] px-4 py-2.5 text-sm font-medium text-[#151D48] transition-colors hover:bg-[#F8F9FB]"
          >
            {sortOrder === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            Sort by Name ({sortOrder === 'asc' ? 'A–Z' : 'Z–A'})
            <ArrowUpDown size={14} className="text-[#737791]" />
          </button>
          </div>
        }
      />

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#ECEFF5] text-left text-xs font-medium text-[#737791]">
              <th className="pb-3 pr-6 font-medium">Name</th>
              <th className="pb-3 pr-6 font-medium">Email</th>
              <th className="pb-3 pr-6 font-medium">Company Name</th>
              <th className="pb-3 font-medium">City</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-10 text-center text-[#737791]">
                  No users found matching your criteria.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-[#F8F9FB] transition-colors hover:bg-[#F8F9FB]/60">
                  <td className="py-4 pr-6 font-medium text-[#151D48]">{user.name}</td>
                  <td className="py-4 pr-6 text-[#737791]">{user.email}</td>
                  <td className="py-4 pr-6 text-[#151D48]">{user.company.name}</td>
                  <td className="py-4 text-[#737791]">{user.address.city}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default UsersTable
