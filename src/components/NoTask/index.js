import React from "react";
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./style.scss";
import RouteGuard from "../../common/guard";
import { navigate } from "hookrouter";

export default function NoTask() {
  RouteGuard();

  const handleClick = () => {
    navigate('/newtask');
  }
  return (<div className="home-wrapper">
    <Grid container
      spacing={0}
      centered={true}
      verticalAlign="middle"
      justify="center"
      style={{ minHeight: "100vh" }}>
      <Grid.Row>
        <Grid.Column width={5}>
          <div className="ui form no-task-container">
            <h4 className="no-task">You have no task</h4>
            <button type="button" onClick={handleClick} className="ui button">+ New Task</button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>)
}