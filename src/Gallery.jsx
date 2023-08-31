import { Component } from 'react'
import HornedBeast from './HornedBeast';
import data from './data.json';


export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
    return (
      <>
        <div>Gallery</div>
        {data.map((value) => (
          <HornedBeast
          openModal={this.props.handleShow}
            image_url={value.image_url}
            title={value.title}
            description={value.description}
            key={value._id}
            viewBeast={this.props.viewBeast}
            handleShow={this.props.handleShow}
            
          />
        ))}

      </>
    );
  }
}

