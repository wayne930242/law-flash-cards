import React, { useState, createContext } from 'react'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Divider,
  Button,
} from '@mui/material'

import { TableCompute } from './table'
import { TypeFlashCard } from '../data/interface'

import { seventyOneToSeventyThree } from '../data'

export const GlobalContext = createContext<{
  reveal: boolean,
  setReveal: React.Dispatch<React.SetStateAction<boolean>>,
  deliver: boolean,
  setDeliver: React.Dispatch<React.SetStateAction<boolean>>,
}>({
  reveal: false,
  setReveal: null,
  deliver: false,
  setDeliver: null,
})

export const Flashcards = () => {
  const [currentId, setCurrentId] = useState<string>('71-73')
  const [reveal, setReveal] = useState<boolean>(false)
  const [deliver, setDeliver] = useState<boolean>(false)

  const AllData: TypeFlashCard[] = [
    seventyOneToSeventyThree,
  ]

  const current: TypeFlashCard = AllData.filter(ele => ele.id === currentId)[0]

  const handleOnPeak = (_e: React.MouseEvent<Element>) => {
    setReveal(r => !r)
  }

  const handleOnDiliver = (_e: React.MouseEvent<Element>) => {
    setDeliver(r => !r)
  }

  const handleChange = (e: SelectChangeEvent) => {
    setCurrentId(e.target.value)
  }

  return (
    <GlobalContext.Provider value={{ reveal, setReveal, deliver, setDeliver }}>
      <div>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">範圍</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={current.id}
              label="範圍"
              onChange={handleChange}
            >
              {AllData.map(ele => (
                <MenuItem value={ele.id} key={ele.id}>{ele.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div className='py-4 flex flex-row justify-end'>
          <div className='mx-4'>
            <Button onClick={handleOnDiliver} variant={reveal ? "outlined" : "contained"} color="success">
              {reveal ? '重試' : '對答案'}
            </Button>
          </div>
          <div className='mx-4'>
            <Button onClick={handleOnPeak} variant={reveal ? "outlined" : "contained"}>
              {reveal ? '蓋起來' : '看答案'}
            </Button>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" size="small">
            {
              current.head ? (
                <TableHead>
                  <TableCompute dataTable={current.head} />
                </TableHead>
              )
                : null
            }
            <TableBody>
              <TableCompute dataTable={current.data} />
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </GlobalContext.Provider>
  )
}

export default Flashcards
