import { Box, Checkbox, TextField } from '@mui/material'
import { TypeCard } from '../../data/interface'

export const BackSide = ({
  data,
}: {
  data: TypeCard,
}) => {
  
  return (
    <>
      {typeof data.back === 'boolean'
        ? (
          <Box>
            <Checkbox disabled checked={data.back} />
          </Box>
        )
        : (
          <Box
            noValidate
            autoComplete="off"
            component="form"
          >
            <TextField disabled id="outlined-basic" variant="outlined" size="small" value={data.back}/>
          </Box>
        )
      }
    </>
  )
}
