import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Navigation from './components/Navigation';
// import Header from './components/Header';
import MediaObject from './components/MediaObject';
// import Details from './components/Details';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <MediaObject />
      </Provider>
    </div>
  );
}

export default App;
