import React from 'react';
import {connect} from 'react-redux';
import { updatePersonalInfo } from '../../actions/resumeBuilder';

class EditPersonalInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: this.props.personalInfo.firstname,
            lastname: this.props.personalInfo.lastname,
            title: this.props.personalInfo.title
        }
    }

    onFirstNameChange = (e) => {
        const val = e.target.value;
        this.setState(() => ({ firstname: val }));
    }
    onLastNameChange = (e) => {
        const val = e.target.value;
        this.setState(() => ({ lastname: val }));
    }
    onTitleChange = (e) => {
        const val = e.target.value;
        this.setState(() => ({ title: val }));
    }

    updatePersonalInfo = () => {
        this.props.dispatch(updatePersonalInfo(this.state, this.props.match.params.pid, parseInt(this.props.match.params.id)));
        this.props.history.push("/resume-builder");
    }

    render() {
        return (
            <div className="flex_center flex_down w_100">
                <div>
                    Firstname: <input type="text" value= {this.state.firstname} onChange={this.onFirstNameChange} placeholder="First name"/>
                </div>
                <div>
                    Lastname: <input type="text" value= {this.state.lastname} onChange={this.onLastNameChange} placeholder="Last name"/>
                </div>
                <div>
                    Title: <input type="text" value= {this.state.title}  onChange={this.onTitleChange} placeholder="Title"/>
                </div>
                <div>
                    <button onClick={this.updatePersonalInfo}>Edit</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        personalInfo: state.resume.myCustomTemplate
                    .filter((templ) => templ.name === props.match.params.pid)[0].components
                    .filter((component) => component.id === parseInt(props.match.params.id))[0] || {}
    }
}

const ConnectedEditPersonalInfo = connect(mapStateToProps)(EditPersonalInfo);

export default ConnectedEditPersonalInfo;