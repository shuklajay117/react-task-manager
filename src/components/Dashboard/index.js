import React from "react";
import { Grid } from 'semantic-ui-react';
import { compose } from 'recompose';
import TasksCompleted from "../../common/widgets/TasksCompleted";
import LatestTasks from "../../common/widgets/LatestTasks";

import "./style.scss";
import TasksChart from "../../common/widgets/TasksChart";
import TasksList from "../TasksList";
import RouteGuard from "../../common/guard";
import { connect, useDispatch } from "react-redux";
import { doLogout, doNavigate } from "../../store/auth/auth.actions";

function Dashboard() {
  RouteGuard();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(doLogout());
    dispatch(doNavigate('/'));
  };

  return (<div className="dashboard-wrapper">
    <Grid>
      <Grid.Row>
        <Grid.Column className="header">
          <Grid container>
            <Grid.Row>
              <Grid.Column width={8}>
                <div className="user"></div>
                <span className="name">Ali</span>
              </Grid.Column>

              <Grid.Column width={7} textAlign="right" className="logout">
                <span className="logout" onClick={logout}>Logout</span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid doubling={true} container
      verticalAlign="middle"
      justify="center"
      style={{ minHeight: "330px" }}>
      <Grid.Row>
        <Grid.Column largeScreen={5} stretched={true} mobile={16}>
          <TasksCompleted />
        </Grid.Column>

        <Grid.Column largeScreen={5} stretched={true} mobile={16}>
          <LatestTasks />
        </Grid.Column>

        <Grid.Column largeScreen={5} stretched={true} mobile={16}>
          <TasksChart />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column verticalAlign="top" width={15}>
          <TasksList />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div >)
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    tasks: state.tasks
  };
};

const DashboardComponent = compose(connect(mapStateToProps))(Dashboard);

export default DashboardComponent
