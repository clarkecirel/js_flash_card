import React from 'react';
import Cards from './components/Cards'
import CardForm from './components/CardForm'
import { Container, Header, } from "semantic-ui-react";


class App extends React.Component {
  state = {
    fcards: [
      { id: 1, front: 'First Front', back: 'First Back' },
      { id: 2, front: 'Second Front', back: 'Second Back' }
    ] 
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 100)
  }

  addCard = (fcards) => {
    let card = {id: this.getId(), ...fcards};
    this.setState({fcards: [ card, ...this.state.fcards ]})
  }

  deleteCard = () => {

  }
  
  render() {
    return (
      <div key={this.id} className="App">
        <br />
        <Header as='h1' style= {{ textAlign: 'center' }}>
          Flash Cards App
        </Header>
        <hr />
        <Container as='h3'style={{textAlign: 'center'}}>
        <CardForm key={this.id} add={this.addCard} />
        </Container>
        <br />
        <Container style={{textAlign: 'center'}}>
        <Cards key={this.id} fcards={this.state.fcards} />
        </Container>
      </div>
    );  
  };
};

export default App;
