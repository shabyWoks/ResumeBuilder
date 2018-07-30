import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import ComponentTab from './ComponentTab';
import RoughComponent from './RoughComponent';
import { addPanelInMyCustomTemplate } from '../actions/resumeBuilder';

class ResumeBuilder extends React.Component {
    constructor(props){
        super(props);
        this.updatePanelInTemplate = this.updatePanelInTemplate.bind(this);
        this.getPanels = this.getPanels.bind(this);
        this.state = {
            myCustomTemplate: this.props.myCustomTemplate
        }
    }

    componentDidMount(){
        this.getPanels();
    }

    componentWillReceiveProps(newProps){
        if(newProps.myCustomTemplate !== this.state.myCustomTemplate){
            this.setState(() => ({ myCustomTemplate: newProps.myCustomTemplate }));
        }
    }

    updatePanelInTemplate = (uid, name) => {
        this.props.dispatch(addPanelInMyCustomTemplate(uid, name));
    }

    getPanels = () => {
        return this.props.resumeTemplate.roughTemplateStructure.roughScale.map((roughS) => {
            this.updatePanelInTemplate(uuid(), roughS.name);
        });
    }

    onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    }

    render() {
        return (
            <div className="resumebuilder__o_body flex_start">
                <div className="resumebuilder__left_panel" >
                    {this.props.resumeTemplate.roughTemplateStructure.componentIds.map((componentId) => {
                        let components = this.props.components.filter((component) => component.id === componentId.id );
                        if(components)
                            return <ComponentTab id={components[0].id} onDragStart={this.onDragStart} />
                    })}
                </div>
                <div className="resumebuilder__right_panel flex_center" >
                    <RoughComponent 
                        myCustomTemplate={ this.state.myCustomTemplate } 
                        roughScale= {this.props.resumeTemplate.roughTemplateStructure.roughScale}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        resumeTemplate: state.resume.resumeTemplate,
        components: state.resume.components,
        myCustomTemplate: state.resume.myCustomTemplate
    }
}

const ConnectedResumeBuilder = connect(mapStateToProps)(ResumeBuilder);
export default ConnectedResumeBuilder;