import React from 'react'
import './tasks.css';
import tasksdata from './tasksdata';
import { FaLink } from "react-icons/fa";


class Tasks extends React.Component {
    constructor() {
      super();
      this.state = {
        tasksdata,
        taskNo:"",
        taskLink:"",
        submitted: false
      };
    }
  
    updateTask = async (e) => {
      try {

        

        // tasksdata[this.state.taskNo - 1].taskLink = this.state.taskLink;
        this.setState(prevState => ({
          tasksdata: prevState.tasksdata.map(
          obj => (obj.taskNo === this.state.taskNo ? Object.assign(obj, { taskLink: this.state.taskLink }) : obj)
        )
      }));
      
      console.log(this.state.tasksdata);
        this.setState({taskNo: "", taskLink: "" });
      } catch (err) {
        console.log(err);
      }
    };
  
    selectTask = (task) => this.setState({ ...task });
  
    handleChange = (e) => {
      // { target: { name, value } }
      // this.setState({ [name]: value });
      this.setState({[e.target.name]: e.target.value});
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted...");
        this.updateTask();
    };
  
    render() {
      return (
        <div className='task-container' >
          <form onSubmit={this.handleSubmit}>
              <label>Task no&nbsp;</label>&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="taskno-input"
                name="taskNo"
                value={this.state.taskNo}
                disabled
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label> Task Work Link  &nbsp;</label>&nbsp;&nbsp;&nbsp;
              <input
                size="70"
                type="text"
                className="link-input"
                minlength="5"
                name="taskLink"
                value={this.state.taskLink}
                onChange={this.handleChange}
                required
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="submit-btn" type="submit">
              Submit
            </button>
            <br></br>
          </form>
          <br/>
          <br/>
          <table className="task-table">
            <thead>
              <tr>
                <th width="3%" className="text-center">S.No:</th>
                <th width="30%" className="text-center">Title</th>
                <th width="7%" className="text-center">Deadline</th>
                <th width="30%" className="text-center">Task work link</th>
                <th width="6%" className="text-center" colSpan="4">Add work</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasksdata.map((task) => {
                return (
                  <tr key={task.id}>
                    <td className="text-center">{task.taskNo}</td>
                    <td className="text-center">{task.title}</td>
                    <td className="text-center">{task.deadline}</td>
                    <td className="text-center"><a className="links" href={task.taskLink} target="_blank" rel="noreferrer">{task.taskLink}</a></td> 
                    <td>
                      <button className="addwork-btn" onClick={() => this.selectTask(task)}><FaLink /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  };
  
  
  
  export default Tasks;
