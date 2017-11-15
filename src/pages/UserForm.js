import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state = props.userData
  }

  handleChange(event){
    const target = event.target
    const attribute = target.name
    this.setState({[attribute]: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)} >
        <div className='form-group'>
          <label
            className='control-label'>
            Name
          </label>
          <input
            name='firstName'
            type='text'
            value={this.state.firstName}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label
            className='control-label'>
            Name
          </label>
          <input
            name='description'
            type='text'
            value={this.state.description}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>

       <input
          type='submit' value='Submit' />
      </form>
    );
  }
}

export default UserForm
