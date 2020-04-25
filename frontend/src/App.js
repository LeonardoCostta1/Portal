import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import Banner from './Components/Banner';
// import Schedule from './Components/Schedule';
import Recent from './Components/Recent';
import Footer from './Components/Footer';
// import Battle from './Components/Battle';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <Recent/>
      {/* <Battle/> */}
       {/* <Schedule/> */}
      <Footer/>
    </div>
  );
}

export default App;
