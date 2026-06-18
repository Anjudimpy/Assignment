function Table({ className = '', children }) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full text-sm">{children}</table>
    </div>
  )
}

function TableHeader({ children }) {
  return <thead>{children}</thead>
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>
}

function TableRow({ className = '', children, ...props }) {
  return (
    <tr className={`border-b border-[#F8F9FB] transition-colors hover:bg-[#F8F9FB]/60 ${className}`} {...props}>
      {children}
    </tr>
  )
}

function TableHead({ className = '', children }) {
  return (
    <th className={`pb-3 pr-6 text-left text-xs font-medium text-[#737791] ${className}`}>
      {children}
    </th>
  )
}

function TableCell({ className = '', children }) {
  return <td className={`py-4 pr-6 text-[#737791] ${className}`}>{children}</td>
}

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell }
