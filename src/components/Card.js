import React from 'react';

class Card extends React.Component {
  state = {}
  
  
  render () {
    const {id, front, back} = this.props
    return (
      // fcards.map( fcard => (
        <div>
          <div className="ui cards" style={{justifyContent: 'center'}}>
            <div className="ui card">
              <div className="content">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS18n03ibVx98Tw2UxzwRMx616bX2z2wqLqJQ6dWBmGFqyGjpU_g&s" style={{width: 60 }} alt=''/>
                <div className="header">Flash Card</div>
                <div className="meta">{id}</div>
                <div className="description">
                  {front}
                  <br />
                  <br />
                  <strong>(click for answer)</strong>
                </div>
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <button className="ui green basic button">Answer</button>
                  <button className="ui red basic button">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      // ))
      )   
    }
    
  } 
  
  export default Card
  
  // const CardExampleGroups = () => (
  // <Card>
  //     <Card.Content>
  //       <Image
  //         floated='right'
  //         size='mini'
  //         src='/images/avatar/large/steve.jpg'
  //       />
  //       <Card.Header>Steve Sanders</Card.Header>
  //       <Card.Meta>Friends of Elliot</Card.Meta>
  //       <Card.Description>
  //         Steve wants to add you to the group <strong>best friends</strong>
  //       </Card.Description>
  //     </Card.Content>
  //     <Card.Content extra>
  //       <div className='ui two buttons'>
  //         <Button basic color='green'>
  //           Approve
  //         </Button>
  //         <Button basic color='red'>
  //           Decline
  //         </Button>
  //       </div>
  //     </Card.Content>
  //   </Card>
  // )