import React, { useContext, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import App from './App';
import * as serviceWorker from './serviceWorker';

import Context from './context';
import Reducer from './reducer';

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://countries.trevorblades.com" }),
  cache: new InMemoryCache()
});

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(Reducer, initialState);

  // useEffect(() => {

  //   dispatch({ type: 'CREATE_DATA_CONTINENTS', payload: data })

  // }, []);

  return (
    <ApolloProvider client={client}>
      <Context.Provider value={{ state, dispatch }}>
        <App />
      </Context.Provider>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
