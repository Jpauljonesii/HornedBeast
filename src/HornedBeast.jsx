import React, { Component } from 'react'
import Gallery from './Gallery'
import Image from 'react-bootstrap/Image';


export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFavorites: 0,
    };
  }
  handleClick = ()=>{
this.setState({numberOfFavorites:this.state.numberOfFavorites + 1 })
  }

  render() {
    const hornedBeastImages = this.props.image_url;
    return (
      <>
        <div>
          <h2>{this.props.title}</h2>
          <Image
            alt=""
            onClick={this.handleClick}
            src={this.props.image_url}
            fluid
            roundedCircle
            
          ></Image>
          <p>{this.props.description}</p>
           {this.state.numberOfFavorites !==0 &&<>
           <p>❤️️</p> 
          <p>Number of Likes: {this.state.numberOfFavorites}</p>
           </>}
        </div>
      </>
    );
  }
}


