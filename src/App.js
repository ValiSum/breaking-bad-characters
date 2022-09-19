import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './routes/Home';
import { Details } from './routes/Details';
import { NoMatch } from './routes/NoMatch';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
