import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <Outlet /> {/* Renders the currently matched child route component. */}
      </div>
    </ApolloProvider>
  );
}

export default App;
