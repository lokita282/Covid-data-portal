import {React} from 'react'
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography 
} from '@mui/material'

 const Header = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{padding: '15px'}}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 5 }}>
            Covid Cases around the world
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
