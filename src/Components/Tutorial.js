import React, { Component } from 'react';

const Wizard = ({name}) => {
    <div className="Wizard">
          {name}
    </div>
}

const WizardList = (props) => {
    return (
        <div>
             props.wizards.map (item => <Wizard name={item.name} /> )
        </div>
      )}

class WizardContainer extends Component {

    state = {
         wizards: [],
         apiKey: 'AIzaSyDxBpyhVYhuYUDT8vMB6YiYo_BKkxGVv6A',
     }

componentDidMount = () => {
    const api = 'nyckeln' + this.state.apiKey;

    fetch (api + '&deathEater=true') //<- hämta alla som har propertien deathEater satt till true
    .then(data => data.json())
    .then((json) => {
         this.setState({
              wizards: json,
              })
     })
}

    render() {
console.log(this.state.wizards);
          return (
              <div>
                   <WizardList wizards={this.state.wizards} />
              </div>
         )
    }
}

export default WizardContainer;
