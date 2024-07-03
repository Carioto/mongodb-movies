import { useState } from 'react'
import './components/Styles/App.css'
import Header from './components/Header'
import Footer from './components/Footer';
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
    <>
    <ApolloProvider client={client}>
    <Header />
    <main>
    <Outlet />
    </main>
    </ApolloProvider>
    <Footer />
    </>
  )
}

export default App
