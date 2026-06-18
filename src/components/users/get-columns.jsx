import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui/button'

function getColumns() {
  return [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="h-auto p-0 font-medium text-[#737791] hover:bg-transparent hover:text-[#151D48]"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown size={14} />
        </Button>
      ),
      cell: ({ row }) => <span className="font-medium text-[#151D48]">{row.getValue('name')}</span>,
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      id: 'company_name',
      accessorFn: (row) => row.company?.name,
      header: 'Company Name',
      cell: ({ row }) => <span className="text-[#151D48]">{row.original.company?.name}</span>,
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
