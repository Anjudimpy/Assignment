import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui/button'

function getColumns() {
  return [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="h-auto p-0 font-medium text-text-secondary hover:bg-transparent hover:text-text-primary"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown size={14} />
        </Button>
      ),
      cell: ({ row }) => <span className="font-medium text-text-primary">{row.getValue('name')}</span>,
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      id: 'company_name',
      accessorFn: (row) => row.company?.name,
      header: 'Company Name',
      cell: ({ row }) => <span className="text-text-primary">{row.original.company?.name}</span>,
    },
    {
      id: 'city',
      accessorFn: (row) => row.address?.city,
      header: 'City',
      filterFn: (row, id, value) => {
        if (!value) return true
        return row.getValue(id) === value
      },
    },
  ]
}

export default getColumns
