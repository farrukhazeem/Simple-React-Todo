import React, { Component } from 'react';
import './style.scss';

class Task extends Component {

  render() {
    return (
      <li className="task" onClick={this.props.onClickHandler}>
        {this.props.taskName}
        <span className="date">
          Created on: {this.props.createdOn}
        </span>
        </li>
    );
  }
}

export default Task;
