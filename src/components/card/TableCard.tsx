import React, { useState, useContext, useEffect } from 'react'
import cx from 'classnames'
import { Box, Checkbox, TextField, InputAdornment, Popover, Typography, IconButton } from '@mui/material'
import { Help } from '@mui/icons-material'

import { GlobalContext } from '../Flashcards'
import { TypeCard } from '../../data/interface'

export const TableCard = ({
  data,
}: {
  data: string | boolean,
}) => {
  const [ans, setAns] = useState<boolean | string>(null)

  const { deliver, reveal, clear, setClear, openHelp } = useContext(GlobalContext)

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOnCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAns(e.target.checked)
  }

  useEffect(() => {
    if (clear === false) return
    setAns(null)
    setClear(() => false)

  }, [clear, setClear])

  if (typeof data === 'boolean') {
    return (
      <Box
        className={cx(
          'flex flex-row justify-center',
          { "bg-red-200": deliver && Boolean(ans) !== Boolean(data) },
          { "bg-green-200": deliver && Boolean(ans) === Boolean(data) },
        )}
      >
        <Checkbox
          onChange={handleOnCheck}
          checked={reveal
            ? Boolean(data) as boolean
            : Boolean(ans) as boolean
          }
          color={!deliver
            ? 'default'
            : Boolean(ans) === Boolean(data)
              ? 'success'
              : 'error'
          }
          disabled={reveal}
        />
      </Box>
    )
  }

  if (data.search(/\[.*?\]/) === -1) {
    return (<div>
      {data}
    </div>)
  }

  const back = data.match(/\[.*?\]/)[0].replace('[', '').replace(']', '')
  const frontArray: string[] = data.split(/\[.*?\]/)

  const card: TypeCard = {
    front: frontArray.join(' ? '),
    back,
  }

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAns(e.target.value)
  }

  return (
    <div className='flex flex-col'>
      <Box
        className={cx(
          'flex flex-row justify-center',
          { "bg-yellow-200": deliver && String(ans) !== String(card.back) },
          { "bg-green-200": deliver && String(ans) === String(card.back) },
        )}
        noValidate
        autoComplete="off"
        component="form"
      >
        <TextField
          id="outlined-basic"
          label={reveal
            ? undefined
            : card.front
          }
          onChange={handleOnInput}
          size="small"
          color={!deliver
            ? 'primary'
            : String(ans) === String(card.back)
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
          value={reveal ? card.back : ans ?? ''}
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
                    <Typography sx={{ p: 2 }}>{card.back}</Typography>
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
      }}>{card.back}</Typography> : null}
    </div>
  )
}
