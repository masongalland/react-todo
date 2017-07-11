import React, { Component } from 'react';
import './NewToDo.css';

import {changeTaskInput, addTask} from "../../reducer";
import {connect} from "react-redux";

class NewToDo extends Component {
    render() {
        return (
            <div className='new_todo_container'>
                <h1>TO-DO:</h1>
                <div className="input_container">
                    <input value={this.props.newTaskInput} onChange={(e) => this.props.changeTaskInput(e.target.value)}/>
                    <button className="add_button" onClick={() => this.props.addTask(this.props.newTaskInput)}>Add new to-do</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {newTaskInput: state.newTaskInput}
}

export default connect(mapStateToProps, {addTask, changeTaskInput})(NewToDo);