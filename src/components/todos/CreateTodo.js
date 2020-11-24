import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = e =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.props.addTodo(this.state)  
  }
  render() {
    return(
      <div>
        Create Todo Component
      </div>
    )
  }
}

export default CreateTodo;
