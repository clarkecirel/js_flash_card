import React from 'react';
import Card from './Card';

const Cards = ({fcards}) => (
    <div>
      <h3>These are your cards</h3>
      <hr /> 
      <Card key={fcards.id} fcards={fcards}/>
    </div>
  )

export default Cards;
