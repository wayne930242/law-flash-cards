import { TableRow, TableCell } from '@mui/material'

import { TableCard } from '../card/TableCard'
import { TypeData } from '../../data/interface'

export const TableCompute = ({
  dataTable,
}: {
  dataTable: TypeData[][],
}) => {
  let colSpanBuffer = 1
  let rowSpanBuffer = 1

  return (
    <>
      {dataTable.map((row, i) => {
        const dataArray = row

        return (
          <TableRow key={i}>
            {
              dataArray.map((cell, j) => {
                if (cell === '<') return null
                if (cell === '^') return null

                let index = j
                while (dataArray[index + 1] === '<') {
                  colSpanBuffer++
                  index++
                }

                index = i
                while (dataTable[index + 1] && dataTable[index + 1][j] === '^') {
                  rowSpanBuffer++
                  index++
                }

                const colSpan = colSpanBuffer
                const rowSpan = rowSpanBuffer

                colSpanBuffer = 1
                rowSpanBuffer = 1

                return (
                  <TableCell key={j} colSpan={colSpan} rowSpan={rowSpan}>
                    <TableCard data={cell} />
                  </TableCell>
                )
              })
            }
          </TableRow>
        )
      })}
    </>
  )
}
