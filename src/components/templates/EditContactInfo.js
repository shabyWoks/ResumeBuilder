import React from 'react';
import {connect} from 'react-redux';
import { updateContactInfo } from '../../actions/resumeBuilder';

class EditContactInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mob: this.props.educationalInfo.mob,
            cc : this.props.educationalInfo.cc,
            email: this.props.educationalInfo.email,
            web: this.props.educationalInfo.web
        }
    }

    onMobChange = (e) => {
        const data = e.target.value;
        this.setState(() => ({ mob: data }));
    }

    onCcChange = (e) => {
        const data = e.target.value;
        this.setState(() => ({ cc: data }));
    }

    onEmailChange = (e) => {
        const data = e.target.value;
        this.setState(() => ({ email: data }));
    }

    onWebChange = (e) => {
        const data = e.target.value;
        this.setState(() => ({ web: data }));
    }

    updateContact = () => {
        this.props.dispatch(updateContactInfo(this.state, this.props.match.params.pid, parseInt(this.props.match.params.id)));
    }
    render() {
        return (
            <div className="flex_center flex_down w_100">
                <div>
                    Mobile No: <input type="text" placeholder="Mobile No." onChange={this.onMobChange} value={this.state.mob} />
                </div>
                <div>
                    Country Code: <input type="text" placeholder="Country Code" onChange={this.onCcChange} value={this.state.cc} />
                </div>
                <div>
                    Email Id: <input type="text" placeholder="Email Id" onChange={this.onEmailChange} value={this.state.email} />
                </div>
                <div>
                    Website: <input type="text" placeholder="Website Link" onChange={this.onWebChange} value={this.state.web} />
                </div>
                <div>
                    <button onClick={this.updateContact}>Update</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        educationalInfo: state.resume.myCustomTemplate
                        .filter((templ) => templ.name === props.match.params.pid)[0].components
                        .filter((component) => component.id === parseInt(props.match.params.id))[0] || {}

    }
}

const ConnectedEditContactInfo = connect(mapStateToProps)(EditContactInfo);

export default ConnectedEditContactInfo;