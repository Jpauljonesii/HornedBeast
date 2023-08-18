import React, { Component } from 'react'
import HornedBeast from './HornedBeast';

export default class Gallery extends Component {
  render() {
    return (
      <>
        <div>Gallery</div>
        <HornedBeast
          title={'Football'}
          imageUrl={'https://unsplash.com/photos/-nATH0CrkMU'}
          description={'a football on a field'}/>

          <HornedBeast
          title={'Basketball'}
          imageUrl={'https://unsplash.com/photos/Gl0jBJJTDWs'}
          description={'a basketball on a court'}
          />
      </>
    );
  }
}
