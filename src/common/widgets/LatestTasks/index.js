import React, { Component } from 'react'

import "./style.scss";
import { Grid } from 'semantic-ui-react'

export default class LatestTasks extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div className="task-list-wrapper">
                <h4 className="task-header">Latest Created Tasks</h4>
                <div>
                  <ul className="task-list">
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li className="completed">Task 3</li>
                  </ul>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

