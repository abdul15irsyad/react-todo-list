import React, { Component } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import FormInput from './components/FormInput/FormInput';

class App extends Component {
  state = {
    list: []
  }
  
  addList = (newList) =>{
    newList.id = this.state.list.length + 1
    this.setState({
      ...this.state,
      list: [...this.state.list,newList]
    })
  }

  removeList = (id) =>{
    const lists = this.state.list.filter((list) => list.id !==id)
    this.setState({
      ...this.state,
      list: lists
    })
  }
  
  render(){
    return (
      <div className="App container">
        <div className="row justify-content-center">
          <div className="col-lg-5 text-center">
            <Header/>
            <TodoList list={this.state.list} removeList={(this.removeList)}/>
            <FormInput addList={(newList) =>this.addList(newList)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
