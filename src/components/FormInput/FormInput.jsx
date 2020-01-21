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
    let alert = document.getElementById("spanAlert")
    e.preventDefault()
    if(this.state.content !== ''){
      alert.style.display = "none"
      this.props.addList(this.state)
      this.setState({
        content: ''
      })
    }else{
      alert.style.display = "inline"
      setTimeout(()=>{
        alert.style.display = "none"
      }, 5000)
    }
  }

  render(){
    return (
      <form onSubmit={this.addTodo}>
        <div className="row input-list">
          <div className="col-8">
            <input type="text" className="form-control" placeholder="write your list here..." onChange={this.handleChange} value={this.state.content}/>
            <span id="spanAlert" className="text-danger">upsss you forget to fill this!</span>
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