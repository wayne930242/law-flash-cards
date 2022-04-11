import React, { useState, useContext } from 'react'
import cx from 'classnames'
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
      <Box
        className={cx(
          'flex flex-row justify-center',
          { "bg-red-200": deliver && Boolean(ans) !== Boolean(data.back) },
          { "bg-green-200": deliver && Boolean(ans) === Boolean(data.back) },
        )}
      >
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
    )
  }

  const unit = data.front.replace('[]', ' ? ')

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAns(e.target.value)
  }

  return (
    <Box
      className={cx(
        'flex flex-row justify-center',
        { "bg-red-200": deliver && String(ans) !== String(data.back) },
        { "bg-green-200": deliver && String(ans) === String(data.back) },
      )
      }
      noValidate
      autoComplete="off"
      component="form"
    >
      <TextField
        id="outlined-basic"
        label={unit}
        onChange={handleOnInput}
        size="small"
        color={!deliver
          ? 'primary'
          : String(ans) === String(data.back)
            ? 'success'
            : 'error'
        }
      />
    </Box >
  )
}
