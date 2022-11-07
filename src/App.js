import React from 'react';
import { About, Footer, Header, Sharing, Signing, Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Sharing />
    <Signing />
    <Footer />
  </div>
);

export default App;