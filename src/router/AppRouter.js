import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import ResumeBuilder from '../components/Resumebuilder';
import ResumeDisplay from '../components/ResumeDisplay';
import CustomRoute from './CustomRoute';

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <div className="app-router-class">
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/resume-builder" component={ResumeBuilder} exact />
                    <Route path="/resume-builder/display" component={ResumeDisplay} />
                    <CustomRoute path="/resume-builder/:pid/edit/:id/component" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;