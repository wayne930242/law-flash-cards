import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Flashcards'
import { Box, Checkbox, TextField } from '@mui/material'

import { TypeCard } from '../../data/interface'

export const FrontSide = ({
  data,
}: {
  data: TypeCard,
}) => {
  const [ans, setAns] = useState<boolean | string | number>(null)

  const { deliver } = useContext(GlobalContext)

  const handleOnCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAns(e.target.checked)
  }

  if (typeof data.back === 'boolean') {
    return (
      <div
        className={deliver && ans !== data.back ? 'bg-red-400' : ''}
      >
        <Box>
          <Checkbox
            onChange={handleOnCheck}
            checked={Boolean(ans) as boolean}
            color={!deliver
              ? 'default'
              : ans === data.back
                ? 'success'
                : 'error'
            }
          />
        </Box>
      </div>

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
      <TextField id="outlined-basic" label={unit} onChange={handleOnInput} size="small"
        color={!deliver
          ? 'primary'
          : String(ans) === String(data.back)
            ? 'success'
            : 'error'
        }
      />
    </Box>
  )
}
