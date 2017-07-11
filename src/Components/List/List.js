import React, { Component } from 'react';

import ListItem from "../ListItem/ListItem";

import "./List.css";

class List extends Component {
    render() {
        return (
            <div className="list_container">
                <ListItem />
            </div>
        );
    }
}

export default List;