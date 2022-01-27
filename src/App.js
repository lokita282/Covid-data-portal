import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import GlobalCard from './components/GlobalCard'
import CountryCard from './components/CountryCard'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import { Typography, Stack, Card} from '@mui/material'
// import { countryDataProvider } from './components/Context'

function App() {

  const [globalData, setGlobalData] = useState([]);
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://api.covid19api.com/summary')
      const globalData = res.data.Global
      const countryData = res.data.Countries
      setGlobalData(globalData)
      setCountryData(countryData)
    }
    fetchData()
  }, []); 
  
  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <div className="App">
        {/* <countryDataProvider value={countryData}> */}
        <Header />
        <Stack spacing={3}>
          <GlobalCard globalData={globalData} />
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
              style={{ backgroundColor: '#F5FCFF', marginBottom: '20px' }}
            >
              <Typography
                variant="h5"
                color="initial"
                sx={{ paddingTop: '30px' }}
              >
                Filter Searches
              </Typography>
              <Search countryData={countryData} />
            </Card>
          </div>
        </Stack>
        <Footer />
        {/* </countryDataProvider> */}
      </div>
    </div>
  )
}

export default App;
