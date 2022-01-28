import { useState, useEffect, useRef, useContext } from 'react'
import {
  Box,
  TextField,
  Card,
  Button,
  Typography,
  CardHeader,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material'
import CountryCard from './CountryCard'

import { CountryDataContext } from './Context'

export default function Search() {
  const {countryData}  = useContext(CountryDataContext)

  const [countriesList, setCountriesList] = useState([])
  const [country, setCountry] = useState('Afghanistan')
  const [parameter, setParameter] = useState('')
  const [data, setData] = useState({})
  const [displayState, setDisplayState] = useState('none')
  const [p1DisplayState, setp1DisplayState] = useState('none')
  const [p2DisplayState, setp2DisplayState] = useState('none')
  const [p3DisplayState, setp3DisplayState] = useState('none')
  const [p4DisplayState, setp4DisplayState] = useState('none')
  const [p5DisplayState, setp5DisplayState] = useState('none')
  const [p6DisplayState, setp6DisplayState] = useState('none')
  
  const searchRef = useRef(null)

  const scrollToBottom = () => {
    searchRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
    })
  }

  useEffect(() => {
    const fetchData = async () => {
  const countries = []
      await countryData.map((country) => {
        countries.push(country.Country)
        setCountriesList(countries)
        })
    } 
    fetchData()
    console.log('executing')
  }, [countryData])

  const handleSearch = () => {
    if(parameter === '') return alert('Please enter a parameter')
    countryData.map((c) => {
      if (country === c.Country) {
        setData(c)
        
      } else return null
    })

    switch (parameter) {
      case 'NewConfirmed':
        setp1DisplayState('block')
        setp2DisplayState('none')
        setp3DisplayState('none')
        setp4DisplayState('none')
        setp5DisplayState('none')
        setp6DisplayState('none')
        break
      case 'TotalConfirmed':
        setp2DisplayState('block')
        setp1DisplayState('none')
        setp3DisplayState('none')
        setp4DisplayState('none')
        setp5DisplayState('none')
        setp6DisplayState('none')
        break
      case 'NewDeaths':
        setp3DisplayState('block')
        setp1DisplayState('none')
        setp2DisplayState('none')
        setp4DisplayState('none')
        setp5DisplayState('none')
        setp6DisplayState('none')
        break
      case 'TotalDeaths':
        setp4DisplayState('block')
        setp1DisplayState('none')
        setp2DisplayState('none')
        setp3DisplayState('none')
        setp5DisplayState('none')
        setp6DisplayState('none')
        break
      case 'NewRecovered':
        setp5DisplayState('block')
        setp1DisplayState('none')
        setp2DisplayState('none')
        setp3DisplayState('none')
        setp4DisplayState('none')
        setp6DisplayState('none')
        break
      case 'TotalRecovered':
        setp6DisplayState('block')
        setp1DisplayState('none')
        setp2DisplayState('none')
        setp3DisplayState('none')
        setp4DisplayState('none')
        setp5DisplayState('none')
        break
      default:
        break
    }
    setDisplayState('block')
    
  }

  const handleRefresh = (e) => {
    setParameter('')
    setCountry('')
    setDisplayState('none')
    setp1DisplayState('none')
    setp2DisplayState('none')
    setp3DisplayState('none')
    setp4DisplayState('none')
    setp5DisplayState('none')
    setp6DisplayState('none')

  }

  return (
    <>
    <div ref={searchRef} />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            InputLabelProps={{ shrink: true }}
            id="outlined-select-country-native"
            select
            label="Country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            SelectProps={{
              native: true,
            }}
          >
            {countriesList.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </TextField>
          <Box
            sx={{
              minWidth: '95%',
              marginTop: '1%',
            }}
          >
            <FormControl sx={{ width: '30ch' }}>
              <InputLabel id="demo-simple-select-label">Parameter</InputLabel>

              <Select
                required
                id="param"
                label="parameter"
                name="param"
                value={parameter}
                onChange={(event) => setParameter(event.target.value)}
              >
                <MenuItem value={'NewConfirmed'}>Confirmed new cases</MenuItem>
                <MenuItem value={'TotalConfirmed'}>
                  Total confirmed cases
                </MenuItem>
                <MenuItem value={'NewDeaths'}>New deaths reported</MenuItem>
                <MenuItem value={'TotalDeaths'}>
                  Total number of deaths
                </MenuItem>
                <MenuItem value={'NewRecovered'}>
                  Newly recovered people
                </MenuItem>
                <MenuItem value={'TotalRecovered'}>
                  Total recovered people
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <Button sx={{ m: 2 }} variant="contained" onClick= {() => {
          handleSearch()
          scrollToBottom()}}>
          Search
        </Button>

        <Button sx={{ m: 2 }} variant="contained" onClick={handleRefresh}>
          Refresh
        </Button>
        <div
          style={{
            marginTop: '35px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{ display: displayState, width: 700 }}
            style={{ backgroundColor: '#F5FCFF' }}
          >
            <CardHeader
              title={`Search results for ${data.Country}`}
            />
            <CardContent>
              <Typography variant="body2" sx={{ display: p1DisplayState }}>
                Confirmed new cases: {data.NewConfirmed}
              </Typography>
              <Typography variant="body2" sx={{ display: p2DisplayState }}>
                Total confirmed cases: {data.TotalConfirmed}
              </Typography>
              <Typography variant="body2" sx={{ display: p3DisplayState }}>
                New deaths reported: {data.NewDeaths}
              </Typography>
              <Typography variant="body2" sx={{ display: p4DisplayState }}>
                Total number of deaths: {data.TotalDeaths}
              </Typography>
              <Typography variant="body2" sx={{ display: p5DisplayState }}>
                Newly recovered people: {data.NewRecovered}
              </Typography>
              <Typography variant="body2" sx={{ display: p6DisplayState }}>
                Total recovered people: {data.TotalRecovered}
              </Typography>
            </CardContent>
          </Card>
        </div >
      </Box>

      {displayState === 'none' ? (
        <CountryCard countryData={countryData}/>
      ) : (
        <></>
      )}
    </>
  )
}
