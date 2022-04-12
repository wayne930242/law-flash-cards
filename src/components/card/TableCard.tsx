import React, { useState, useContext, useEffect } from 'react'
import cx from 'classnames'
import { Box, Checkbox, TextField, InputAdornment, Popover, Typography, IconButton } from '@mui/material'
import { Help } from '@mui/icons-material'

import { GlobalContext } from '../Flashcards'
import { TypeCard } from '../../data/interface'

export const TableCard = ({
  data,
}: {
  data: TypeCard | string,
}) => {

  const [ans, setAns] = useState<boolean | string | number>(null)

  const { deliver, reveal, clear, setClear, openHelp } = useContext(GlobalContext)

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    if (clear === false) return
    setAns(null)
    setClear(() => false)

  }, [clear, setClear])

  if (typeof data === 'string') {
    return (<div>
      {data}
    </div>)
  }

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
          checked={reveal
            ? Boolean(data.back) as boolean
            : Boolean(ans) as boolean
          }
          color={!deliver
            ? 'default'
            : ans === data.back
              ? 'success'
              : 'error'
          }
          disabled={reveal}
        />
      </Box>
    )
  }

  const unit = data.front.replaceAll('[]', ' ? ')

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAns(e.target.value)
  }

  return (
    <div className='flex flex-col'>
      <Box
        className={cx(
          'flex flex-row justify-center',
          { "bg-yellow-200": deliver && String(ans) !== String(data.back) },
          { "bg-green-200": deliver && String(ans) === String(data.back) },
        )}
        noValidate
        autoComplete="off"
        component="form"
      >
        <TextField
          id="outlined-basic"
          label={reveal
            ? undefined
            : unit
          }
          onChange={handleOnInput}
          size="small"
          color={!deliver
            ? 'primary'
            : String(ans) === String(data.back)
              ? 'success'
              : 'warning'
          }
          sx={{
            width: '100%',
          }}
          disabled={reveal}
          margin='dense'
          variant='standard'
          multiline={true}
          value={reveal ? data.back : ans ?? ''}
          InputProps={{
            endAdornment: openHelp
              ? (
                <InputAdornment position="end" className='cursor-pointer'>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 2 }}>{data.back}</Typography>
                  </Popover>
                  <IconButton onClick={handleClick} size="small" color='info'>
                    <Help fontSize='small' />
                  </IconButton>
                </InputAdornment>
              )
              : undefined,
          }}
        />
      </Box >
      {deliver ? <Typography sx={{
        fontSize: '0.7rem',
      }}>{data.back}</Typography> : null}
    </div>
  )
}
