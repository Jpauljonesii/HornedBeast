import { Component } from 'react'

import './App.css'  
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';


import Gallery from './Gallery'
import Header from './Header'
import Footer from './Footer'
import data from './data.json';

import SelectedBeast from './SelectedBeast';
import { Form } from 'react-bootstrap';
export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    openModal: false,
    selectedBeast: { title: '', description: '' },
    horns: 'show all horns',
    filterBeasts: data,
  };
}
 handleClose = () => this.setState({openModal: false});
 handleShow = () => this.setState({openModal: true});
 viewBeast = (beast) => this.setState({ selectedBeast: beast});
 
  
  render() {
  
    
    return (
      <>
        <SelectedBeast
          show={this.state.openModal}
          handleClose={this.handleClose}
          beast={this.state.selectedBeast}
        />
        <div>
          <Header></Header>
          <Form.Select
            onChange={(e) => {
              this.setState({ horns: e.target.value }, () =>{
                let filterBeasts = [];
                switch (this.state.horns) {
                  case '1':
                    filterBeasts = data.filter((beast) => beast.horns === 1);
                    this.setState({ filterBeasts: [...filterBeasts] });
                    break;
                  case '2':
                    filterBeasts = data.filter((beast) => beast.horns === 2);
                    this.setState({ filterBeasts: [...filterBeasts] });
                    break;
                  case '3':
                    filterBeasts = data.filter((beast) => beast.horns === 3);
                    this.setState({ filterBeasts: [...filterBeasts] });
                    break;
                  case '100':
                    filterBeasts = data.filter((beast) => beast.horns === 100);
                    this.setState({ filterBeasts: [...filterBeasts] });
                    break;
                    default:
                    this.setState({ filterBeasts: data });
                }
              }
                
              );
            }}
            aria-label="Default select example"
          >
            <option value="show all horns">Show All Beast</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">100</option>
          </Form.Select>

          <Gallery data = {this.state.filterBeasts} handleShow={this.handleShow} viewBeast={this.viewBeast} />
          <Footer></Footer>
        </div>
        <h1></h1>
      </>
    );
  }
}

