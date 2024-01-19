import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import MediaObject from './components/MediaObject';
import Details from './components/Details';
import Footer from './components/Footer';
import store from './store/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <Header />
        <MediaObject />
        <Details />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
