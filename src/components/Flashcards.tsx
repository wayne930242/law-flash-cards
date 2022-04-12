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
  Button,
} from '@mui/material'
import { SmartButton, Help } from '@mui/icons-material'

import { TableCompute } from './table'
import { TypeFlashCard } from '../data/interface'

import Data from '../data'

export const GlobalContext = createContext<{
  reveal: boolean,
  setReveal: React.Dispatch<React.SetStateAction<boolean>>,
  deliver: boolean,
  setDeliver: React.Dispatch<React.SetStateAction<boolean>>,
  clear: boolean,
  setClear: React.Dispatch<React.SetStateAction<boolean>>,
  openHelp: boolean,
  setOpenHelp: React.Dispatch<React.SetStateAction<boolean>>,
}>({
  reveal: false,
  setReveal: null,
  deliver: false,
  setDeliver: null,
  clear: false,
  setClear: null,
  openHelp: false,
  setOpenHelp: null,
})

export const Flashcards = () => {
  const AllData: TypeFlashCard[] = Data

  const [currentId, setCurrentId] = useState<string>(AllData[~~((AllData.length) * Math.random())].id)
  const [reveal, setReveal] = useState<boolean>(false)
  const [deliver, setDeliver] = useState<boolean>(false)
  const [clear, setClear] = useState<boolean>(false)
  const [openHelp, setOpenHelp] = useState<boolean>(false)

  const current: TypeFlashCard = AllData.filter(ele => ele.id === currentId)[0]

  const handleOnLuck = () => {
    setReveal(false)
    setDeliver(false)
    setOpenHelp(false)
    setClear(true)
    setCurrentId(AllData[~~((AllData.length) * Math.random())].id)
  }

  const handleOnPeak = (_e: React.MouseEvent<Element>) => {
    setReveal(r => !r)
    setDeliver(false)
    setOpenHelp(false)
  }

  const handleOnDiliver = (_e: React.MouseEvent<Element>) => {
    setDeliver(r => !r)
    setReveal(false)
    setOpenHelp(false)
  }

  const handleOnClear = () => {
    setClear(true)
  }

  const handleChange = (e: SelectChangeEvent) => {
    setReveal(false)
    setDeliver(false)
    setOpenHelp(false)
    setClear(true)
    setCurrentId(e.target.value)
  }

  const handleOnHelp = () => {
    setOpenHelp(h => !h)
    setReveal(false)
    setDeliver(false)
  }

  return (
    <GlobalContext.Provider value={{ reveal, setReveal, deliver, setDeliver, clear, setClear, openHelp, setOpenHelp }}>
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
        <div className='py-4 flex flex-row justify-between'>
          <div className='flex flex-row justify-center'>
            <div className='mx-2'>
              <Button onClick={handleOnLuck} variant='contained' color='warning' startIcon={<SmartButton />}>
                隨選
              </Button>
            </div>
            <div className='mx-2'>
              <Button onClick={handleOnHelp} variant={openHelp ? 'outlined' : 'contained'} color='info' startIcon={<Help />}>
                提示模式
              </Button>
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <div className='mx-2'>
              <Button onClick={handleOnDiliver} variant={deliver ? "outlined" : "contained"} color="success">
                {deliver ? '重來' : '交卷'}
              </Button>
            </div>
            <div className='mx-2'>
              <Button onClick={handleOnPeak} variant={reveal ? "outlined" : "contained"}>
                {reveal ? '翻面' : '答案'}
              </Button>
            </div>
            <div className='mx-2'>
              <Button onClick={handleOnClear} variant={"contained"} color="error">
                清空
              </Button>
            </div>
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
