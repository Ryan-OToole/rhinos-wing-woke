import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class CreateForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // send to the backend
    this.setState({ term: '' });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Title Of Your Posting"
            name="title"
            type='text'
            size="30"
            onChange={this.props.onInputChange}
            value={this.props.title} /><br/>
          <textarea
            id='note-body-input'
            name="body"
            rows="10"
            cols="50"
            onChange={this.props.onInputChange}
            value={this.props.body}></textarea><br/>
          <Button type='submit'>Create Posting</Button>
        </form>
</div>
    )
  }
}

export default CreateForm
