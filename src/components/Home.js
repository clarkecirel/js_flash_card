import React from 'react';
import Cards from './Cards';
import CardForm from './CardForm';
import { Container, Icon, Segment } from "semantic-ui-react";



const Home = (props) => (
  
  <div key={props.id} className="App" 
  style={{ 
    backgroundImage: 'url(' + 'http://blogs.adelaide.edu.au/cser/files/2012/10/sigcse2013-wordle.jpg' + ')',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat'
  }}>
    
  <br />

  <Container as='h1' textAlign='center'>
    <Icon.Group size='huge' className='center'>
      <Icon loading size='huge' name='circle notch' style={{ opacity: 0.6}}/>
      <br />
      Flash Cards
      <Icon name='lightning' size='big' color='yellow' style={{ margin: '-55px 0px 0px 10px'}}/>
    </Icon.Group>
  </Container>

  <br />

  <Container style={{textAlign: 'center',}}>
    <Segment>
      <Container as='h2'style={{textAlign: 'center'}}>
        New Cards
        <hr />
        <CardForm key={props.id} add={props.addCard} />
      </Container>
    </Segment>
  </Container>

  <Container style={{textAlign: 'center'}}>
    <Cards key={props.id} fcards={props.fcards} />
  </Container>
  <br />
  <br />
  <br />
</div>
);

export default Home;