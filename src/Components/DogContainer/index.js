import React, { Component } from 'react';

// Creates the div holding an image
const Dog = ({message}) => (
  <div className="Dog">
    <img src={message} alt="logo" />
  <br />
  </div>
)

// Loops trough all the dog images
const DogList = (props) => (
  <div className="DogList">
    {props.pictures.map(item => <Dog message={item} />)}
  </div>
)

// Creating the DogContainer
class DogContainer extends Component {
  constructor() {
    super();

    // Declare our prop called pictures
    this.state = {
      pictures: ""
    }

    // Fetch the API URL, assign the image to our prop
    fetch('http://dog.ceo/api/breed/husky/images')
      .then(data => data.json())
      .then(json => this.setState({ pictures: json.message }))
  }

// componentDidMount() {
// }

// render our content, or "loading..." if nothing is found
render() {
    return (
      <div>
        {
          this.state.pictures.length ?
          <DogList pictures={this.state.pictures} />
          : <div> loading ...</div>
         }
      </div>
  )
}
}
 export default DogContainer;
