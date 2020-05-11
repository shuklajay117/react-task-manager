import React, { Component } from 'react'

import "./style.scss";
import { Grid } from 'semantic-ui-react'

export default class TasksChart extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div className="task-chart-wrapper">
                <h4 className="task-completed">Chart needed</h4>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

