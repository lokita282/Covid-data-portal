import React from 'react'

const CountryDataContext = React.createContext([]);

const CountryDataProvider = CountryDataContext.Provider

export {
  CountryDataContext,
  CountryDataProvider
}