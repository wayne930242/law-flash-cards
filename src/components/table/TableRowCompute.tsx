import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import { TableCard } from '../card/TableCard'
import { TypeData } from '../../data/interface'

export const TableRowCompute = ({
  dataArray,
  rowSpan = 1,
}: {
  dataArray: TypeData[],
  rowSpan?: number,
}) => {
  let colSpanBuffer = 1

  return (
    <TableRow>
      {
        dataArray.map((cell, i) => {
          if (cell === '<') return null

          let index = i
          while (dataArray[index + 1] === '<') {
            colSpanBuffer++
            index++
          }

          const colSpan = colSpanBuffer
          colSpanBuffer = 1
          return (
            <TableCell key={i} colSpan={colSpan} rowSpan={rowSpan}>
              <TableCard data={cell} />
            </TableCell>
          )
        })
      }
    </TableRow>
  )
}
