import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Details.css';

class Details extends Component {
    render() {
        console.log(this.props)
        const todo = this.props.todos[0]

        return (
            <div className='details_container'>
                <p>{todo.task}</p>
                <div className="details_task">
                    <input className="task_input" />
                    <button className="complete_button">Complete</button>
                </div>
                <p>Description</p>
                <input />
                <div className="details_buttons_container">
                    <button>Save</button>
                    <button>Cancel</button>
                    <button>Delete</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Details);