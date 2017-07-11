import React, { Component } from 'react';

import "./ListItem.css";

class ListItem extends Component {
    render() {
        return (
            <div className="list_item_container">
                <p>{this.props.task}</p>
                <div className="quick_options">
                    <button className="complete_button">Complete</button>
                    <p>X</p>
                </div>
            </div>
        );
    }
}

export default ListItem;