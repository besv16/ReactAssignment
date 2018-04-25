import React, { Component } from 'react';
// import YTSearch from 'youtube-api-search';

// const API_KEY = 'AIzaSyDxBpyhVYhuYUDT8vMB6YiYo_BKkxGVv6A';

const Dog = ({message}) => (
  <div className="Dog">
    {message} <br />

  </div>
)
const DogList = (props) => (
  <div className="DogList">
    {props.pictures.map(item => <Dog message={item} />)}
  </div>
)

class DogContainer extends Component {
  constructor() {
    super();
    
    // Declare our Prop
    this.state = {
      pictures: ""
    }

    // Assign our prop the image array from API
    fetch('http://dog.ceo/api/breed/husky/images')
      .then(data => data.json())
      .then(json => this.setState({ pictures: json.message }))
  }

componentDidMount() {
  // .then(data => {
  //   return results.json();
  // }).then(json => {

    // this.setState({pictures: pictures});
    // this.setState({
    //   pictures: json,
    // })
    // console.log("state", this.state.pictures);
  //   let pictures = data.results.map((pic) => {
  //   return(
  //       <div key={pic.results}>
  //         <img src={pic.message} alt="hej" />
  //       </div>
  //     )
  // })

// })
}

render() {
    return (
      <div>
        {
          this.state.pictures.length ?
          <DogList pictures={this.state.pictures} />
          : <div> loading ...</div>
         }
      </div>
    // <div className="container2">
    //   <div className="container1">
    //     {this.state.pictures}
    //   </div>
    // </div>
  )
}
}
 export default DogContainer;
