import React, { Component } from 'react';
import './NewToDo.css';

class NewToDo extends Component {
    render() {
        return (
            <div className='new_todo_container'>
                <h1>TO-DO:</h1>
                <div className="input_container">
                    <input />
                    <button className="add_button">Add new to-do</button>
                </div>
            </div>
        );
    }
}

export default NewToDo;