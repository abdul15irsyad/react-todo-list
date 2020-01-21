import React, { Component } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import FormInput from './components/FormInput/FormInput';

class App extends Component {
  state = {
    list: []
  }
  
  addList = (newList) =>{
    var lastlist = this.state.list.reverse().find((x)=> x.id > this.state.list.length)
    this.state.list.reverse()
    var lastid = lastlist ? lastlist.id : this.state.list.length
    newList.id = lastid + 1
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
          <div className="col-xl-5">
            <Header/>
            <ul>
              <TodoList list={this.state.list} removeList={(this.removeList)}/>
            </ul>
            <FormInput addList={(newList) =>this.addList(newList)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
