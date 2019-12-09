import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

class ShowCard extends React.Component {
  state = {}
  
  render () {
    const {id, front, back} = this.props
    return (
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS18n03ibVx98Tw2UxzwRMx616bX2z2wqLqJQ6dWBmGFqyGjpU_g&s' 
            style={{width: 50 }} />
            <br />
          <Card.Header>Flash Card</Card.Header>
          <Card.Meta>#{id}</Card.Meta>
          <Card.Description>
            {front}
             <br />
            <hr />
             <br />
            <i>(click for answer)</i>
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div className='ui three buttons'>
            <Button basic color='yellow'>
              Answer
            </Button>
            <Button basic color='blue'>
              Edit
            </Button>
            <Button basic color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
      )   
    }
    
  } 
  
  export default ShowCard;

  

