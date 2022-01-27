import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CountUp from 'react-countup'

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
        style={{ backgroundColor: '#DBF3FA', marginTop: '17px' }}
      >
        <CardHeader title="Data around the world" />
        <CardContent>
          <Typography variant="body1">
            Total Cases:{' '}
            <CountUp start={0} end={globalData.TotalConfirmed} duration={2} />
          </Typography>
          <Typography variant="body1">
            New Cases:{' '}
            <CountUp start={0} end={globalData.NewConfirmed} duration={2} />
          </Typography>
          <Typography variant="body1">
            Total Deaths: <CountUp start={0} end={globalData.TotalDeaths} duration={2} />
          </Typography>
          <Typography variant="body1">
            New Deaths: <CountUp start={0} end={globalData.NewDeaths} duration={2} />
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default GlobalCard
