import React, { Component } from 'react';

import ListItem from "../ListItem/ListItem";

class List extends Component {
    render() {
        return (
            <div>
                <h1>List</h1>
                <ListItem />
            </div>
        );
    }
}

export default List;