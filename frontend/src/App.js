import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
