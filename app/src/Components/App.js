import React from 'react';
import { Route } from "react-router-dom"
import {ApplicationViews} from "./ApplicationViews"
import './App.css';

export const App = () => (
  <>
    <Route render={props => <ApplicationViews {...props} />} />
  </>
)

export default App;
