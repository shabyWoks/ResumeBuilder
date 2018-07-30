import React from 'react';
import {connect} from 'react-redux';
import { addComponentInPanel } from '../actions/resumeBuilder';

class RoughComponent extends React.Component {
    constructor(props){
        super(props);
    }
    onDrop = (e, panelRefId) => {
        const componentId = e.dataTransfer.getData('id');
        if((this.props.usedComponentId.filter((id) => id === componentId)).length === 0)
            this.props.dispatch(addComponentInPanel(componentId, panelRefId));
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    getPanelComponents = (i) => {
        const arr = this.props.myCustomTemplate.filter((template) => template.refId === this.props.myCustomTemplate[i].refId)
        if(arr.length !== 0){
            if(arr[0].components) return arr[0].components;
            else return [];
        }
        return [];
    }

    getPanel() {
        return this.props.roughScale.map((roughS, i) => {
            if(this.props.myCustomTemplate[i])
            { 
                return (<div ref={this.props.myCustomTemplate[i].refId} onDrop={(e) => this.onDrop(e, this.props.myCustomTemplate[i].refId)} onDragOver={(e) => this.onDragOver(e)} className={`flex_start flex_down ${roughS.class}`} >
                            {
                                (this.getPanelComponents(i)).map((component) => {
                                    return <div className= "rough_comp">{component.id}</div>;
                                })
                            }
                        </div>);
            }
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
            if(panel.components){
                panel.components.map((usedComponent) => { usedComponentId.push(usedComponent.id); })
            }
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

const ConnectedRoughComponent = connect(mapStateToProps)(RoughComponent);
export default ConnectedRoughComponent;