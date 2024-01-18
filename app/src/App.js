import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import MediaObject from './components/MediaObject';
import Details from './components/Details';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <MediaObject />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
