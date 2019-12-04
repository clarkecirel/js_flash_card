import React from 'react';
import { Container } from "semantic-ui-react";


const card = ({fcards}) => (
     
  fcards.map( fcards => (
      <Container key={fcards.id} > 
      <div style={{ flexWrap: 'wrap' }}>
        <div className="ui cards" style={{justifyContent: 'center'}}>
          <div className="ui card">
            <div className="content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS18n03ibVx98Tw2UxzwRMx616bX2z2wqLqJQ6dWBmGFqyGjpU_g&s" style={{width: 60 }} alt=''/>
              <div className="header">Flash Card</div>
              <div className="meta">{fcards.id}</div>
              <div className="description">
                { fcards.front }
                <br />
                <br />
                <strong>(click for answer)</strong>
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <button className="ui green basic button" onClick={'toggleShow'}>Answer</button>
                <button className="ui red basic button">Delete</button>
              </div>
            </div>
           </div>
        </div>
      </div>
      </Container>
    )
    ))
    
export default card
