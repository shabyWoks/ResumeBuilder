import React from 'react';
import {connect} from 'react-redux';
import { addProject } from '../../actions/resumeBuilder';

class EditProjectInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projectList: this.props.editProjectinfo.projectList,
            key: '',
            project: {
                title: '',
                description: '',
                key: []
            }
        }
    }

    onTitleChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ project: { ...prevState.project, title: data } }));
    }

    onDescriptionChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ project: { ...prevState.project, description: data } }));
    }

    onKeyChange = (e) => {
        const data = e.target.value;
        this.setState(() => ({ key: data }));
    }

    onAddKey = () => {
        this.setState((prevState) => ({ project: { ...prevState.project, key: [...prevState.project.key, prevState.key] } }), () => {
            this.setState(() => ({ key: '' }));
        })
    }

    onAddProject = () => {
        this.props.dispatch(addProject(this.state.project, this.props.match.params.pid, parseInt(this.props.match.params.id)));
    }

    getProjectEditor = () => {
        return (<div>
                    <div>
                        Title: <input type="text" placeholder="Title Name" onChange={this.onTitleChange} value={this.state.project.title} />
                    </div>
                    <div>
                        Description: <input type="text" placeholder="Description" onChange={this.onDescriptionChange} value={this.state.project.description} /> 
                    </div>
                    <div>
                        Keys: <input type="text" placeholder="Key"  onChange={this.onKeyChange} value={this.state.key} /> <button onClick={this.onAddKey}>Add</button> 
                    </div>
                    <div>
                        <button onClick={this.onAddProject} >Update</button>
                    </div>
                </div>)
    }

    getProjectList = () => {
        return (
            <div>
                {this.state.projectList.map((project) => <div>{project.title} || {project.description}</div>)}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.getProjectList()}
                {this.getProjectEditor()}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        editProjectinfo: state.resume.myCustomTemplate
                        .filter((templ) => templ.name === props.match.params.pid)[0].components
                        .filter((component) => component.id === parseInt(props.match.params.id))[0] || []
    }
}

const ConnectedEditProjectInfo = connect(mapStateToProps)(EditProjectInfo);
export default ConnectedEditProjectInfo;