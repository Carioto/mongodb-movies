import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const client = new ApolloClient({
  uri:'/graphql',
  cache: new InMemoryCache(),
});


function App() {
  
  return (
    <ApolloProvider client={client}>
    <Header />
    <main>
    <Outlet />
    </main>
    </ApolloProvider>
  )
}

export default App
