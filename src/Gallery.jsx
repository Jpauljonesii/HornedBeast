import React, { Component } from 'react'
import HornedBeast from './HornedBeast';

export default class Gallery extends Component {
  render() {
    return (
      <>
        <div>Gallery</div>
        <HornedBeast
          title={'Football'}
          imageUrl={
            'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80'
          }
          description={'a football on a field'}
        />

        <HornedBeast
          title={'Basketball'}
          imageUrl={
            'https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
          }
          description={'a basketball on a court'}
        />
      </>
    );
  }
}

