import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import ResumeBuilder from '../components/Resumebuilder';

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/resume-builder" component={ResumeBuilder} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;