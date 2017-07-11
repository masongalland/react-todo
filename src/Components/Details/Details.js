import React, { Component } from 'react';

import './Details.css';

class Details extends Component {
    render() {
        return (
            <div className='details_container'>
                <p>Task</p>
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

export default Details;