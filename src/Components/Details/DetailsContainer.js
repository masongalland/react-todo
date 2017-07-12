import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Details from './Details';

class DetailsContainer extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Details} />
                <Route path="/:index" component={Details} />
            </div>
        );
    }
}

export default DetailsContainer;