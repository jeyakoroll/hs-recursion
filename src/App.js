import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  continents,
  countries,
  languages,
  continent,
  country,
  language
} from './grahql';
import ListCountries from "./components/ListCountries";

const App = () => {
  const { data, loading, error } = useQuery(continents);

  if (loading) return 'Loading ...'
  if (error) return 'Error ...'
  console.log('data', data);
  
  // preloading first page of data
  
  return <ListCountries />;
};

export default App;
