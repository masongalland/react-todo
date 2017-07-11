import React, { Component } from 'react';
import {connect} from 'react-redux';

import ListItem from "../ListItem/ListItem";

import "./List.css";

class List extends Component {
    render() {

        const todos = this.props.todos.map((todo) => (
            <ListItem task={todo.task} />
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

export default connect(mapStateToProps)(List);