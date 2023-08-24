import React, { Component } from 'react'
import HornedBeast from './HornedBeast';
import HornedBeastArray from './data.json';


export default class Gallery extends Component {
    render() {
    return (
      <>
        <div>Gallery</div>
        <HornedBeast
          image_url={HornedBeastArray[0].image_url}
          title={HornedBeastArray[0].title}
          description={HornedBeastArray[0].description}
        />

        <HornedBeast
          image_url={HornedBeastArray[1].image_url}
          title={HornedBeastArray[1].title}
          description={HornedBeastArray[1].description}
        />

        <HornedBeast
          image_url={HornedBeastArray[2].image_url}
          title={HornedBeastArray[2].title}
          description={HornedBeastArray[2].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[3].image_url}
          title={HornedBeastArray[3].title}
          description={HornedBeastArray[3].description}
        />

        <HornedBeast
          image_url={HornedBeastArray[4].image_url}
          title={HornedBeastArray[4].title}
          description={HornedBeastArray[4].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[5].image_url}
          title={HornedBeastArray[5].title}
          description={HornedBeastArray[5].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[6].image_url}
          title={HornedBeastArray[6].title}
          description={HornedBeastArray[6].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[7].image_url}
          title={HornedBeastArray[7].title}
          description={HornedBeastArray[7].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[8].image_url}
          title={HornedBeastArray[8].title}
          description={HornedBeastArray[8].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[9].image_url}
          title={HornedBeastArray[9].title}
          description={HornedBeastArray[9].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[10].image_url}
          title={HornedBeastArray[10].title}
          description={HornedBeastArray[10].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[11].image_url}
          title={HornedBeastArray[11].title}
          description={HornedBeastArray[11].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[12].image_url}
          title={HornedBeastArray[12].title}
          description={HornedBeastArray[12].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[13].image_url}
          title={HornedBeastArray[13].title}
          description={HornedBeastArray[13].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[14].image_url}
          title={HornedBeastArray[14].title}
          description={HornedBeastArray[14].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[15].image_url}
          title={HornedBeastArray[15].title}
          description={HornedBeastArray[15].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[16].image_url}
          title={HornedBeastArray[16].title}
          description={HornedBeastArray[16].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[17].image_url}
          title={HornedBeastArray[17].title}
          description={HornedBeastArray[17].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[18].image_url}
          title={HornedBeastArray[18].title}
          description={HornedBeastArray[18].description}
        />
        <HornedBeast
          image_url={HornedBeastArray[19].image_url}
          title={HornedBeastArray[19].title}
          description={HornedBeastArray[19].description}
        />
      </>
    );
  }
}

