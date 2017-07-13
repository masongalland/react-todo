import React, { Component } from 'react';
import {connect} from 'react-redux';
import {markCompleted, deleteTask, select} from '../../reducer';
import {Link} from 'react-router-dom';

import "./List.css";
import "./ListItem.css";

class List extends Component {
    render() {
        const todos = this.props.todos.map((todo, index) => (
            <Link key={index} to={`/${index}`}>
                <div onClick={this.props.select} className={"list_item_container " + (todo.completed ? "completed_container" : "list_item_container")}>
                    <p className={todo.completed ? "completed" : "" }>{todo.task}</p>
                    <div className="quick_options">
                        <button className={"complete_button " + (todo.completed ? "completed" : "")  }onClick={() => this.props.markCompleted(index)}>Complete</button>
                        <Link to="/"><p className="quick_delete" onClick={() => this.props.deleteTask(index)}>X</p></Link>
                    </div>
                </div>
            </Link>
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

export default connect(mapStateToProps, {markCompleted, deleteTask, select})(List);