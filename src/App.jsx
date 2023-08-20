import React, { Component } from 'react'

import './App.css'  
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import Gallery from './Gallery'
import Header from './Header'
import Footer from './Footer'
export default class App extends Component {
  render() {
  
    
    return (
      <>
        <div>
      
          <Header></Header>
          <Gallery></Gallery>
          <Footer></Footer>
          </div>
        <h1></h1>
      </>
    );
  }
}

