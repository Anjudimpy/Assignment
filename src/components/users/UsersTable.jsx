import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  ListRestart,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import getColumns from './get-columns'
import Card from '../dashboard/Card'
import CardHeader from '../dashboard/CardHeader'
import { SearchInput } from '../ui/search-input'
import { Button } from '../ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const API_URL = 'https://jsonplaceholder.typicode.com/users'
const PAGE_SIZE = 10

function applyFilters(users, search, city) {
  let result = [...users]

  if (search?.trim()) {
    const query = search.toLowerCase()
    result = result.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    )
  }

  if (city) {
    result = result.filter((user) => user.address.city === city)
  }

  return result
}

function applySorting(users, sortColumn, sortDesc) {
  if (!sortColumn) return users

  const sorted = [...users]

  sorted.sort((a, b) => {
    let aValue = ''
    let bValue = ''

    if (sortColumn === 'name') {
      aValue = a.name
      bValue = b.name
    } else if (sortColumn === 'email') {
      aValue = a.email
      bValue = b.email
    } else if (sortColumn === 'company_name') {
      aValue = a.company.name
      bValue = b.company.name
    } else if (sortColumn === 'city') {
      aValue = a.address.city
      bValue = b.address.city
    }

    const comparison = aValue.localeCompare(bValue)
    return sortDesc ? -comparison : comparison
  })

  return sorted
}

const UsersTable = () => {
  const [filter, setFilter] = useState('')
  const [cityFilter, setCityFilter] = useState('')
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: PAGE_SIZE })
  const [pageCount, setPageCount] = useState(1)
  const [allCities, setAllCities] = useState([])

  useEffect(() => {
    setPagination((prev) => ({ ...prev, pageIndex: 0 }))
  }, [globalFilter, cityFilter])

  const getAllUsers = async ({ queryKey }) => {
    const [, search, city, page, sortColumn, sortDesc] = queryKey

    try {
      const response = await axios.get(API_URL)
      const allUsers = response.data

      const cities = [...new Set(allUsers.map((user) => user.address.city))].sort()
      setAllCities(cities)

      const filtered = applyFilters(allUsers, search, city)
      const sorted = applySorting(filtered, sortColumn, sortDesc)
      const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
      const start = page * PAGE_SIZE

      setPageCount(totalPages)

      return {
        rows: sorted.slice(start, start + PAGE_SIZE),
        total: sorted.length,
        allTotal: allUsers.length,
      }
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Something went wrong while fetching users.'
      throw new Error(message)
    }
  }

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: [
      'users',
      globalFilter,
      cityFilter,
      pagination.pageIndex,
      sorting.at(0)?.id,
      sorting.at(0)?.desc,
    ],
    queryFn: getAllUsers,
    retry: 1,
    placeholderData: (previous) => previous,
  })

  const tableData = useMemo(() => data?.rows ?? [], [data])

  const resetFilters = () => {
    setFilter('')
    setGlobalFilter('')
    setCityFilter('')
    setColumnVisibility({})
    setSorting([])
    setPagination({ pageIndex: 0, pageSize: PAGE_SIZE })
  }

  const columns = getColumns()

  const table = useReactTable({
    columns,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onSortingChange: (updater) => {
      setSorting(updater)
      setPagination((prev) => ({ ...prev, pageIndex: 0 }))
    },
    pageCount,
    sortDescFirst: false,
    state: { columnVisibility, pagination, sorting },
  })

  if (isLoading) {
    return (
      <Card className="flex flex-col items-center justify-center py-20">
        <Loader2 size={40} className="animate-spin text-primary" />
        <p className="mt-4 text-sm text-text-secondary">Loading users...</p>
      </Card>
    )
  }

  if (isError) {
    return (
      <Card className="flex flex-col items-center justify-center py-20">
        <AlertCircle size={40} className="text-red-500" />
        <p className="mt-4 text-sm font-medium text-red-600">{error?.message}</p>
        <Button className="mt-4" onClick={() => refetch()}>
          Retry
        </Button>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader
        title="Users"
        subtitle={`${data?.total ?? 0} of ${data?.allTotal ?? 0} users${isFetching ? ' · Updating...' : ''}`}
      />

      <div className="mb-5 flex w-full flex-wrap justify-end gap-2">
        <SearchInput
          className="w-full sm:w-72"
          variant="default"
          name="search-input"
          placeholder="Search by name or email..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          onDebouncedChange={setGlobalFilter}
          debounceMs={500}
        />

        <select
          value={cityFilter}
          onChange={(event) => setCityFilter(event.target.value)}
          className="h-10 rounded-xl border border-border bg-card-bg px-4 text-sm text-text-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">All Cities</option>
          {allCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <Button onClick={resetFilters} variant="outline">
          <ListRestart size={16} />
          Reset
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <ArrowLeftRight size={16} />
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="bottom">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id.replace(/_/g, ' ')}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-full flex-1 rounded-xl border border-border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={columns.length} className="h-24 text-center text-red-500">
                  No results!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2 p-2 sm:flex-row sm:justify-between">
        <span className="text-sm text-text-secondary">
          {`Page ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount() || 1}`}
        </span>
        <div className="flex items-center justify-center space-x-2">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            size="lg"
            variant="ghost"
          >
            <ChevronLeft size={16} />
            Prev
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            size="lg"
            variant="ghost"
          >
            Next
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default UsersTable
