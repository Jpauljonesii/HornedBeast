import React, { Component } from 'react'
import './App.css'  
import './index.css'
import Gallery from './Gallery'
import Header from './Header'
import Footer from './Footer'
export default class App extends Component {
  render() {
  
    return (
      <>
        <div>
      
          <Gallery></Gallery>
          <Header></Header>
          <Footer></Footer>
          </div>
        <h1></h1>
      </>
    );
  }
}
export default App;
