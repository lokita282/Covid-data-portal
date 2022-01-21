import { React } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#DCDCDC' }}>
      <Toolbar>
        <Typography variant="body1" component="div" sx={{ flexGrow: 5 }}>
          Copyright &copy; 2022 Lokita Varma
        </Typography>
      </Toolbar>
    </Box>
  )
}

export default Footer
