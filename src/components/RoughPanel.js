import React from 'react';
import {connect} from 'react-redux';
import { addComponentInPanel } from '../actions/resumeBuilder';
import RoughComponent from './RoughComponent';

class RoughPanel extends React.Component {
    onDrop = (e, panelName) => {
        const componentId = e.dataTransfer.getData('id');
        if((this.props.usedComponentId.filter((id) => id === parseInt(componentId))).length === 0)
            this.props.dispatch(addComponentInPanel(parseInt(componentId), panelName));
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    getPanelComponents = (i) => {
        const arr = this.props.myCustomTemplate.filter((panel) => panel.name === this.props.myCustomTemplate[i].name)
        if(arr.length !== 0){
            if(arr[0].components) return arr[0].components;
            else return [];
        }
        return [];
    }

    getPanel() {
        return this.props.myCustomTemplate.map((panel, i) => {
            return (<div 
                onDrop={(e) => this.onDrop(e, panel.name)} 
                onDragOver={(e) => this.onDragOver(e)} 
                className={`flex_start flex_down ${panel.roughClass}`}
                >
                { (this.getPanelComponents(i).map((component) => <RoughComponent componentId= {component.id} panelName={panel.name} />)) }
            </div>);
        });
    }
    render() {
        return (
            <div className="resumebuilder__structure"> {this.getPanel()} </div>
        );
    }
}

const getUsedComponentId = (myCustomTemplate) => {
    let usedComponentId = [];
    if(myCustomTemplate){
        myCustomTemplate.map((panel) => {
            if(panel.components) panel.components.map((usedComponent) => { usedComponentId.push(usedComponent.id); }) ;
        })
    }
    return usedComponentId;
}

const mapStateToProps = (state) => {
    return {
        myCustomTemplate: state.resume.myCustomTemplate,
        usedComponentId: getUsedComponentId(state.resume.myCustomTemplate)
    }
}

const ConnectedRoughPanel = connect(mapStateToProps)(RoughPanel);
export default ConnectedRoughPanel;