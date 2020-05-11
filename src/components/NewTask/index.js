import React, { useState } from "react";
import { Grid } from 'semantic-ui-react'

import "./style.scss";
import RouteGuard from "../../common/guard";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/task/task.actions";

export default function NewTask() {
  RouteGuard();

  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const saveTask = () => {
    const data = {
      completed: false,
      name: name
    };

    dispatch(addTask(data));
  };

  return (<div className="home-wrapper">
    <Grid container
      spacing={0}
      centered={true}
      verticalAlign="middle"
      justify="center"
      style={{ minHeight: "100vh" }}>
      <Grid.Row>
        <Grid.Column width={5}>
          <div className="ui form new-task-container">
            <h4 className="task-label">+ New Task</h4>
            <input type="text" onChange={handleChange} placeholder="Task Name" name="username" id="Id" />
            <button type="button" onClick={saveTask} name="submit" className="ui button">+ New Task</button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>)
}
