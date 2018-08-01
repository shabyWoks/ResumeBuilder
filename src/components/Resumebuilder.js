import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import ComponentTab from './ComponentTab';
import RoughPanel from './RoughPanel';
import { addPanelInMyCustomTemplate, updateInitialTemplate } from '../actions/resumeBuilder';

class ResumeBuilder extends React.Component {

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        
    }

    onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    }

    onViewResume = () => {
        this.props.history.push("/resume-builder/display");
    }

    render() {
        return (
            <div className="resumebuilder__o_body flex_start">
                <div className="resumebuilder__left_panel" >
                    { this.props.components.map((component) =>  <ComponentTab id={component.id} onDragStart={this.onDragStart} />)}
                </div>
                <div className="resumebuilder__right_panel flex_center" >
                    <RoughPanel />
                </div>
                <button className="btn_vd" onClick={this.onViewResume}>View Resume</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        components: state.resume.components
        // myCustomTemplate: state.resume.myCustomTemplate
    }
}

const ConnectedResumeBuilder = connect(mapStateToProps)(ResumeBuilder);
export default ConnectedResumeBuilder;