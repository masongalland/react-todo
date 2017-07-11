import React, { Component } from 'react';
import {connect} from 'react-redux';
import {markCompleted} from '../../reducer';

import "./List.css";
import "./ListItem.css";

class List extends Component {
    render() {

        const todos = this.props.todos.map((todo, index) => (
            <div key={index}className="list_item_container">
                <p>{todo.task}</p>
                <div className="quick_options">
                    <button className="complete_button" onClick={() => this.props.markCompleted(index)}>Complete</button>
                    <p>X</p>
                </div>
            </div>
        ))

        return (
            <div className="list_container">
                {todos}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {markCompleted})(List);