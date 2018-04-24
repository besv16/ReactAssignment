import React, { Component } from 'react';

const Wizard = ({name, bloodStatus}) => (
  <div className="Wizard">
    {name} <br />
    {bloodStatus}
  </div>
)

const WizardList = (props) => (
  <div className="WizardList">
    {props.wizards.map(item => <Wizard key={item._id} name={item.name} bloodStatus={item.bloodStatus} />)}
  </div>
)

class WizardContainer extends Component {
  state = {
    wizards: [],
    apiKey: "$2a$10$zHj9fWdQfUTLNOV7mOcQP.x2gDma9MF78wqo7KEmbFr2b07dX0zFu",
  }

  componentDidMount = () => {
    const api = 'https://www.potterapi.com/v1/characters?key='+this.state.apiKey;

    fetch(api + '&deathEater=true')
    .then(data => data.json())
    .then((json) => {
      this.setState({
        wizards: json,
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.wizards.length ?
          <WizardList wizards={this.state.wizards} />
          : <div> loading ...</div>
         }
      </div>
    )
  }
}

export default WizardContainer;
