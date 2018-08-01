import React from 'react';
import {connect} from 'react-redux';
import { updateInitialTemplate } from '../actions/resumeBuilder';

const Dashboard = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.dispatch(updateInitialTemplate());
                props.history.push("/resume-builder");
            }} >Hello</button>
        </div>
    );
}

export default connect()(Dashboard);