import React from 'react';
import ShowCard from './Card';
import {Card, Container} from 'semantic-ui-react';

const Cards = ({fcards}) => (
      <Container>
        <br />
        {/* <Card.Group itemsPerRow={3}  style={{
          backgroundColor: '#F6EEAC', 
          border: '15px solid orange',
          borderStyle: 'inset' }}>
        { fcards.map( fcard => (
        <ShowCard key={fcard.id} id={fcard.id} front={fcard.front} back={fcard.back}/>
        ))}
        </Card.Group> */}
      </Container>
);

export default Cards;
