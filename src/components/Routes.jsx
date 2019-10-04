import React from 'react';
import { Route } from 'react-router-dom'

// Custom components
import Home from '../components/pages/Home';
import OneResult from '../components/pages/OneResult'
import AboutText from '../components/pages/AboutText';
import Results from '../components/pages/Results';
import Trail from '../components/pages/Trail';

const Routes = (props) => {

    return (
        <div>
            <Route exact path='/' render={
                () => <Home />
            } />
            <Route path='/oneresult' render={
                () => <OneResult />
            } />
            <Route path='/results' render={
                () => <Results />
            } />
            <Route path='/about' component = {AboutText} />
            <Route path='/trail/:trailId' component={Trail} />
        </div>
    )
}

export default Routes;