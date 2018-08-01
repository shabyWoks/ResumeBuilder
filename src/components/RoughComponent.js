import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { removeComponentFromPanel } from '../actions/resumeBuilder';

class RoughComponent extends React.Component {
    removeComponent = () => {
        this.props.dispatch(removeComponentFromPanel(this.props.componentId, this.props.panelName));
    }

    editComponentInResume = () => {
        this.props.history.push(`/resume-builder/${this.props.panelName}/edit/${this.props.componentId}/component`);
    }

    render() {
        return (
            <div className= "rough_comp">
                <div>{this.props.componentId}<button onClick={this.removeComponent} >X</button></div>
                <div>
                    <button onClick={this.editComponentInResume}>Edit</button>
                </div>
            </div>
        );
    }
}

const ConnectedRoughComponent = connect()(RoughComponent);
export default withRouter(ConnectedRoughComponent);