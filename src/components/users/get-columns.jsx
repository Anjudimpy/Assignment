import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui/button'

function SortableHeader({ column, title }) {
  return (
    <Button
      variant="ghost"
      className="h-auto p-0 font-medium text-text-secondary hover:bg-transparent hover:text-text-primary"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {title}
      <ArrowUpDown size={14} />
    </Button>
  )
}

function getColumns() {
  return [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <SortableHeader column={column} title="Name" />
      ),
      cell: ({ row }) => (
        <span className="font-medium text-text-primary">
          {row.getValue('name')}
        </span>
      ),
    },
    {
      accessorKey: 'email',
      header: ({ column }) => (
        <SortableHeader column={column} title="Email" />
      ),
      cell: ({ row }) => (
        <span className="text-text-primary">
          {row.getValue('email')}
        </span>
      ),
    },
    {
      id: 'company_name',
      accessorFn: (row) => row.company?.name,
      header: ({ column }) => (
        <SortableHeader column={column} title="Company Name" />
      ),
      cell: ({ row }) => (
        <span className="text-text-primary">
          {row.original.company?.name}
        </span>
      ),
    },
    {
      id: 'city',
      accessorFn: (row) => row.address?.city,
      header: ({ column }) => (
        <SortableHeader column={column} title="City" />
      ),
      cell: ({ row }) => (
        <span className="text-text-primary">
          {row.original.address?.city}
        </span>
      ),
      filterFn: (row, id, value) => {
        if (!value) return true
        return row.getValue(id) === value
      },
    },
  ]
}

export default getColumns