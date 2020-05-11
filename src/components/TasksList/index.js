import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'recompose';
import "./style.scss";
import { Grid } from 'semantic-ui-react'
import NewTaskModal from '../../common/widgets/modal';
import { getAllTasks, updateTask } from '../../store/task/task.actions';

export class TasksList extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.tasks = this.onChange.bind(this);
    this.state = {
      searchText: ''
    }
    console.log(props);
  }

  handleClick() {

  }

  onChange(e) {
    if (e && e.target) {
      const search = e.target.value;
      this.setState({
        searchText: search
      });
    }
  }

  onChangeCheckbox(task) {
    if (task && task._id) {
      // make api call for completed or not completed
      const taskLocal = Object.assign({}, task);
      taskLocal.completed = !taskLocal.completed;
      this.props._updateTask(taskLocal);
    }
  }

  render() {
    return (
      <div className="task-lists">
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} verticalAlign="middle">
              <h4 className="task-header">Tasks</h4>
            </Grid.Column>

            <Grid.Column width={8} verticalAlign="middle" textAlign="right">
              <span className="task-search ui form">
                <input type="text" placeholder="Search by task name" onChange={this.onChange.bind(this)} />

                <NewTaskModal />
              </span>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column verticalAlign="top">
              <div className="container">
                <ul className="tasks ui checkbox">
                  {
                    this.props.tasksList && this.props.tasksList.tasks && this.props.tasksList.tasks.filter(task => task.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1).map((task, index) => {
                      return (<li key={index}>
                        <input id={`id${index}`} type="checkbox" defaultChecked={task.completed} className="hidden" onChange={() => this.onChangeCheckbox(task)} />
                        <label htmlFor={`id${index}`} className={task.completed ? 'completed' : ''}>{task.name}</label>
                        <span className="actions">
                          <i className="pencil alternate icon"></i> <i className="trash icon"></i>
                        </span>
                      </li>);
                    })
                  }
                </ul>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div >
    )
  }
}
const mapStateToProps = (state) => {
  return {
    tasksList: state.tasks
  };
};

const mapDispatchToProps = (action) => {
  return {
    _getAllTasks: (param) => action(getAllTasks(param)),
    _updateTask: (param) => action(updateTask(param))
  }
};

const TasksListComponent = compose(connect(mapStateToProps, mapDispatchToProps))(TasksList);

export default TasksListComponent;