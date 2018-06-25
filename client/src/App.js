import React, { Component } from 'react';
import './App.css';

//Components 
import Nav from "./components/Navbar";
import IndividualArticle from "./components/IndividualArticle";
import Footer from "./components/Footer";

class App extends Component {


  render() { 
    return (
    <div>
      <Nav />
      <div id="articleContainer">
        <div className="container">
          <IndividualArticle />
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default App;
