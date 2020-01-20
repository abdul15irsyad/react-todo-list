import React, { Component } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <div className="App container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-5 text-center">
            <Header/>
            <TodoList list={this.state.list}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
