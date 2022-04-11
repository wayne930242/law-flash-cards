import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Flashcards from './components/Flashcards'

export default function App() {

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          法規複習
        </Typography>
        <Flashcards />
      </Box>
    </Container>
  )
}
