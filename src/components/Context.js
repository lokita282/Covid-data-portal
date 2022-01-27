import React from 'react'

const countryDataContext = React.createContext([]);

const countryDataProvider = countryDataContext.Provider

export {
  countryDataContext,
  countryDataProvider
}