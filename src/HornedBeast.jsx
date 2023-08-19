import React, { Component } from 'react'
import Gallery from './Gallery'

export default class HornedBeast extends Component {
  render() {
    return (
      <>
        <div>
          <h2>{this.props.title}</h2>
          <img src={this.props.imageUrl}></img>
          <p>{this.props.description}</p>
          
        </div>
      </>
    );
  }
}
export default HornedBeast;