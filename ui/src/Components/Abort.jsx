import React from 'react';
import logo from '../logo.gif';
import './App.css';
import logo1 from "../logo1.png";
import logo6 from '../logo6.png';
class Abort extends React.Component {


  render() {
    return (
      <div className="Abort">
      <img src={logo} className="App-logo" alt="logo" />
          <label for="form-search"></label>
          <input  id="form-search" placeholder="   Search Google or type URL"/>
            <div id="micro"></div>
            <div href = "micro-phone"className="mic" tite = "search for voice">
            <a href= "micro" > <img src={logo1} className="mic" alt="logo" /></a>
            <a href= "micro" > <img src={logo6} className="search" alt="logo" /></a>
            </div>
      </div>
    );
  }
}

export default Abort;