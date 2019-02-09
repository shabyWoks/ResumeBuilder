import React from 'react';
import {connect} from 'react-redux';
import { addWorkExperience } from '../../actions/resumeBuilder';

class EditWorkExperienceInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            workExperiences: this.props.editWorkExperienceinfo.workExperiences,
            workExperience: {
                name: '',
                position: '',
                toYear: 0,
                fromYear: 0,
                toMonth: '',
                fromMonth: ''
            }
        }
    }

    onNameChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ workExperience: { ...prevState.workExperience, name: data } }));
    }

    onPositionChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ workExperience: { ...prevState.workExperience, position: data } }));
    }

    onFromMonthChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ workExperience: { ...prevState.workExperience, fromMonth: data } }));
    }

    onToMonthChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ workExperience: { ...prevState.workExperience, toMonth: data } }));
    }

    onFromYearChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ workExperience: { ...prevState.workExperience, fromYear: data } }));
    }

    onToYearChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ workExperience: { ...prevState.workExperience, toYear: data } }));
    }

    onAddWorkExperience = () => {
        this.props.dispatch(addWorkExperience(this.state.workExperience, this.props.match.params.pid, parseInt(this.props.match.params.id)));
    }

    getProjectEditor = () => {
        return (<div>
                    <div>
                        Name: <input type="text" placeholder="Company Name" onChange={this.onNameChange} value={this.state.workExperience.name} />
                    </div>
                    <div>
                        Position: <input type="text" placeholder="Position" onChange={this.onPositionChange} value={this.state.workExperience.position} /> 
                    </div>
                    <div>
                        From: <input type="text" placeholder="Month" onChange={this.onFromMonthChange} value={this.state.workExperience.fromMonth} />
                        <input type="number" placeholder="Year" onChange={this.onFromYearChange} value={this.state.workExperience.fromYear} />
                    </div>
                    <div>
                        To: <input type="text" placeholder="Month" onChange={this.onToMonthChange} value={this.state.workExperience.toMonth} />
                        <input type="number" placeholder="Year" onChange={this.onToYearChange} value={this.state.workExperience.toYear} />
                    </div>
                    <div>
                        <button onClick={this.onAddWorkExperience} >Update</button>
                    </div>
                </div>)
    }

    getProjectList = () => {
        return (
            <div>
                {this.state.workExperiences.map((workExperience) => <div>{workExperience.name} || {workExperience.position}</div>)}
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
        editWorkExperienceinfo: state.resume.myCustomTemplate
                        .filter((templ) => templ.name === props.match.params.pid)[0].components
                        .filter((component) => component.id === parseInt(props.match.params.id))[0] || []
    }
}

const ConnectedEditWorkExperienceInfo = connect(mapStateToProps)(EditWorkExperienceInfo);
export default ConnectedEditWorkExperienceInfo;