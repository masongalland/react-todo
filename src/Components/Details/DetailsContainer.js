import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Details from './Details';

class DetailsContainer extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div className="details_container">
                        <h1>DETAILS:</h1>
                        <p>Click on a task from the left to see more details.</p>
                    </div>
                )} />
                <Route path="/:index" component={Details} />
            </div>
        );
    }
}

export default DetailsContainer;