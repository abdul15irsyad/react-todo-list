import React, {Component} from 'react'
import './FormInput.css'

class FormInput extends Component {
  state = {
    content: ''
  }

  handleChange = (e) =>{
    this.setState({
      content: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault()
    if(this.state.content !== ''){
      this.props.addList(this.state)
      this.setState({
        content: ''
      })
    }
  }

  render(){
    return (
      <form onSubmit={this.addTodo}>
        <div className="row input-list">
          <div className="col-8">
            <input type="text" className="form-control" placeholder="Write your list here" onChange={this.handleChange} value={this.state.content}/>
          </div>
          <div className="col-4">
            <button type="submit" className="btn">Add</button>
          </div>
        </div>
      </form>
    )
  }
}

export default FormInput