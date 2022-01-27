import { React } from 'react'
import { 
  Typography, 
  Card, 
  CardHeader, 
  CardContent 
} from '@mui/material'

const CountryCard = ({ countryData }) => {
  const renderCard = (card, index) => {
    return (
      <Card
        key={index}
        sx={{ width: 700 }}
        style={{ backgroundColor: '#DBF3FA', margin: '17px' }}
      >
        <CardHeader title={`Data for ${card.Country}`} />
        <CardContent>
          <Typography variant="body2">
            Total Cases: {card.TotalConfirmed}
          </Typography>
          <Typography variant="body2">
            New Cases: {card.NewConfirmed}
          </Typography>
          <Typography variant="body2">
            Total Deaths: {card.TotalDeaths}
          </Typography>
          <Typography variant="body2">New Deaths: {card.NewDeaths}</Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {countryData.map(renderCard)}
    </div>
  )
}

export default CountryCard
