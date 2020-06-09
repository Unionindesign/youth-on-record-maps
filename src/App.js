

import React from 'react';
import './App.css';
// import { BrowserRouter, Route, } from "react-router-dom"; 


//pages

import YORWorkshopMap from "./pages/workshopMap/map"

function App() {
  return (
    // <BrowserRouter basename="/">
    <div className="App">
      {/* <Route path="/" > */}
      <YORWorkshopMap />
      {/* </Route> */}

    </div>
    // </BrowserRouter>
  );
}

export default App;