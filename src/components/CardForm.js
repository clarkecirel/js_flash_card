import React from 'react';
import { Form } from 'semantic-ui-react';

class cardForm extends React.Component {
  state = { front: '', back: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({front:'', back:''})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div style={{color: 'white', textAlign: 'center'}}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
          <Form.Input
            fluid
            label=''
            placeholder='Front of the Card'
            name='front'
            value={this.state.front}
            onChange={this.handleChange}
            />
          <br />
          <Form.Input
            front='center'
            fluid
            label=''
            placeholder='Back of the Card'
            name='back'
            value={this.state.back}
            onChange={this.handleChange}
          />
          </Form.Group>
          <button className="ui primary basic button" onClick={this.handleSubmit}>
            Submit
          </button>
        </Form>
      </div>
    )
  }
}

export default cardForm
