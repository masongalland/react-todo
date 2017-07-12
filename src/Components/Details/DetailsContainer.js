import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Details from './Details';

class DetailsContainer extends Component {
    render() {
        return (
            <div>
                <Route path="/:index" render={()=> <Details />
                }/>
            </div>
        );
    }
}

export default DetailsContainer;