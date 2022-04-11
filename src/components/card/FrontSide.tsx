import React, { useState } from 'react'
import { Box, Checkbox, TextField } from '@mui/material'

import { TypeCard } from '../../data/interface'

export const FrontSide = ({
  data,
}: {
  data: TypeCard,
}) => {
  const [ans, setAns] = useState<boolean | string | number>(null)

  const handleOnCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAns(e.target.checked)
  }

  if (typeof data.back === 'boolean') {
    return (
      <Box>
        <Checkbox onChange={handleOnCheck} checked={ans as boolean} />
      </Box>
    )
  }

  const unit = data.front.replace('[]', ' ? ')

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAns(e.target.value)
  }

  return (
    <Box
      noValidate
      autoComplete="off"
      component="form"
    >
      <TextField id="outlined-basic" label={unit} variant="outlined" onChange={handleOnInput} size="small" />
    </Box>
  )
}
