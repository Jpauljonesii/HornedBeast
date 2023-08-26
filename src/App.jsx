import React, { Component } from 'react'

import './App.css'  
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';


import Gallery from './Gallery'
import Header from './Header'
import Footer from './Footer'
import SelectedBeast from './SelectedBeast';
export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    openModal: false, 
    selectedBeast: {},
  }
}
 handleClose = () => this.setState({openModal: false});
 handleShow = () => this.setState({openModal: true});
 viewBeast = (Beasts) => this.setState({ selectedBeast: Beasts});
  
  render() {
  
    
    return (
      <>
      <SelectedBeast show = {this.state.openModal} handleClose = {this.handleClose} Beast = {this.selectedBeast}/>
        <div>
      
          <Header></Header>
          <Gallery 
        handleShow={this.handleShow}
        viewBeast={this.viewBeast}
        />          
          <Footer></Footer>
        
          </div>
        <h1></h1>
      </>
    );
  }
}

