import React, { Component } from 'react';
import './style.scss';

import TaskCreator from '../TaskCreator/taskcreator.js';
import TaskList from '../TaskList/tasklist.js';
import Task from '../Task/task.js';
import Footer from '../footer.js';

class App extends Component {

constructor(props) {
  super(props);
  const date = new Date();
  const fullDate = date.getDate() + " - " + date.getMonth() + "- " + date.getFullYear();
  this.state = {
    tasks: [
      {
        taskName: "Reading Books",
        date: fullDate},
      {
        taskName: "Play Cricket at Noon",
        date: fullDate}
      ]
  }
}

removeTask(index) {
  const tasks = this.state.tasks;
  tasks.splice(index, 1);
  this.setState({
    tasks: tasks
  });
}

createTask(e) {

  if(e.which !== 13 || e.target.value === "")
  return;

  const tasks = this.state.tasks;
  const date = new Date();
  tasks.push({
    taskName: e.target.value,
    date: date.getDate() + " - " + date.getMonth() + "- " + date.getFullYear(),
  });
  this.setState({
    tasks: tasks
  });

  e.target.value = "";
}


  render() {
    return (
      <div className="App">
        <h2>My TodoList</h2>
        <TaskCreator onKeyUpHandler={this.createTask.bind(this)} />

        <TaskList >
          {
            this.state.tasks.map((task, i)=>
              <Task
                key={i}
                onClickHandler={this.removeTask.bind(this, i)}
                taskName={task.taskName}
                createdOn={task.date}
              />
            )
          }
        </TaskList>

        <Footer />
      </div>
    );
  }
}

export default App;
