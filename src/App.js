import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Cards from './components/Cards';
import CardForm from './components/CardForm';
import { Container, Icon, Segment } from "semantic-ui-react";


class App extends React.Component {
  state = {
    fcards: [
      { id: 1, front: 'First Front', back: 'First Back' },
      { id: 2, front: 'Second Front', back: 'Second Back' },
      { id: 3, front: 'Third Front', back: 'Third Back' },
      { id: 4, front: 'Fourth Front', back: 'Fourth Back' },
      { id: 5, front: 'Fifth Front', back: 'Fifth Back' },
      { id: 6, front: 'Sixth Front', back: 'Sixth Back' }
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
      <Route exact path="/" component={Home} />

      
    );  
  };
};

export default App;