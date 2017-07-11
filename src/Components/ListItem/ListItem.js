import React, { Component } from 'react';

import "./ListItem.css";

class ListItem extends Component {
    render() {
        return (
            <div className="list_item_container">
                <p>Take the dog for a walk</p>
                <button className="complete_button">Complete</button>
            </div>
        );
    }
}

export default ListItem;