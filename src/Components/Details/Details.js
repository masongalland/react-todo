import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {modify, markCompleted, deleteTask} from '../../reducer';

import './Details.css';

class Details extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            taskInput: this.props.todos[this.props.match.params.index ? this.props.match.params.index : 0].task,
            descriptionInput: this.props.todos[this.props.match.params.index ? this.props.match.params.index : 0].description
        };
    }
    componentWillReceiveProps(props) {
        this.setState({
            taskInput: props.todos[props.match.params.index ? props.match.params.index : 0].task,
            descriptionInput: props.todos[props.match.params.index ? props.match.params.index : 0].description,
            completed: false
        });
    }

    handleChange(value){
        this.setState({
            taskInput: value
        });
    }
    descriptionChange(value){
        this.setState(Object.assign({}, this.state, {descriptionInput: value}))
    }
    
    render() {
        
        
        const modified = {
            index: Number(this.props.match.params.index),
            task: this.state.taskInput,
            description: this.state.descriptionInput
        }

        return (
            <div className='details_container'>
                <p>Task</p>
                <div className="details_task">
                    <input value={this.state.taskInput} onChange={(e) => this.handleChange(e.target.value)} className="task_input" />
                    <button onClick={() => this.props.markCompleted(modified.index)} className="complete_button">Complete</button>
                </div>
                <p>Description</p>
                <textarea rows="3" onChange={(e) => {this.descriptionChange(e.target.value)}}value={this.state.descriptionInput}/>
                <div className="details_buttons_container">
                    <button onClick={() => this.props.modify(modified)}>Save</button>
                    <button >Cancel</button>
                    <Link to="/" ><button onClick={() => this.props.deleteTask(modified.index)}>Delete</button></Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {modify, markCompleted, deleteTask})(Details);