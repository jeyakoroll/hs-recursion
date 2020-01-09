import { createContext } from 'react';

const AppContext = createContext({
  continents: null,
  countries: null,
  languages: null
})

export default AppContext;