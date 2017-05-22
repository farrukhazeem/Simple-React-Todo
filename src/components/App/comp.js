import React, { Component } from 'react';
import './comp.style.scss';


class App extends Component {

  async getTodos() {

    var req = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return await req.json();
  }

  async componentDidMount() {
    var data = await this.getTodos();
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>React Webpack Boilerplate</h2>
        </div>
      </div>
    );
  }
}

export default App;
