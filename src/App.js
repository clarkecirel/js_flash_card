import React from 'react';
import './App.css';
import Cards from './components/Cards'
import cardForm from './components/CardForm'

class App extends React.Component {
  state = {
    fcards: [
      {}
    ] 
  }
  
  render() {
    return (
      <div className="App">
        <CardForm />
        <Cards />
      </div>
    );  
  };
};

export default App;
