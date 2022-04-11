import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import { TableRowCompute } from '.'
import { TypeData } from '../../data/interface'

export const TableCompute = ({
  dataTable,
}: {
  dataTable: TypeData[][],
}) => {
  return (
    <>
      {dataTable.map((row, i) => {
        return (
          <TableRowCompute dataArray={row} key={i} />
        )
      })}
    </>
  )
}
