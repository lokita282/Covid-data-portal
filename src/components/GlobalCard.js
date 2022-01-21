import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

 const GlobalCard = ({ globalData }) => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{ width: 700 }}
        style={{ backgroundColor: '#DBF3FA', margin: '17px' }}
      >
        <CardHeader title="Data around the world" />
        <CardContent>
          <Typography variant="body2">
            Total Cases: {globalData.TotalConfirmed}
          </Typography>
          <Typography variant="body2">
            New Cases: {globalData.NewConfirmed}
          </Typography>
          <Typography variant="body2">
            Total Deaths: {globalData.TotalDeaths}
          </Typography>
          <Typography variant="body2">
            New Deaths: {globalData.NewDeaths}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default GlobalCard
