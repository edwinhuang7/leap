import React from 'react';

import { About, Footer, Header, Work, Extra } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Extra/>
    <Footer />
  </div>
);

export default App;