import React from 'react';
import Card from './Card';

const Cards = ({fcards}) => (
    <div>
      <h3>These are your cards</h3>
      <hr />
       { fcards.map( fcard => (
      <Card id={fcard.id} front={fcard.front} back={fcard.back}/>
      ))
       }
    </div>
  )

export default Cards;
