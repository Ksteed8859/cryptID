import React from 'react';
import Auth from "./utils/auth";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

import SearchBar from './components/SearchBar/SearchBar';
import Nav from './components/Nav/Nav';

import './styles/App.css';

const httpLink = createHttpLink({
uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
const token = localStorage.getItem('id_token');
return {
    headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
    },
};
});

const client = new ApolloClient({
link: authLink.concat(httpLink),
cache: new InMemoryCache(),
});

function App() {

   if (Auth.loggedIn()) {
    return (
        <ApolloProvider client={client}>
        <Router>

            <Routes>

                <Route
                    path='/'
                    element={ <>
                    <Nav/>
                    {/* <Home/> */}
                    </> }
                />

                <Route
                    path='/Login'
                    element={ <>
                    <Nav/>
                    <Login/>
                    </> }
                />
                <Route
                    path='/Signup'
                    element={ <>
                      <Nav/>
                      <Signup/>
                      </> }
                />
                <Route
                    path='/Search'
                    element={ <>
                      <Nav/>
                      <SearchBar/>
                      </> }
                />
            </Routes>
        </Router>
    </ApolloProvider>
    )
   } else {
    return (
        <ApolloProvider client={client}>
        <Router>

            <Routes>

                <Route
                    path='/'
                    element={ <>
                    <Nav/>
                    <Landing/>
                    </> }
                />

                <Route
                    path='/Login'
                    element={ <>
                    <Nav/>
                    <Login/>
                    </> }
                />
                <Route
                    path='/Signup'
                    element={ <>
                      <Nav/>
                      <Signup/>
                      </> }
                />
            </Routes>
        </Router>
    </ApolloProvider>
    )
   }
};

export default App;