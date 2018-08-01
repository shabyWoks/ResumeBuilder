import React from 'react';
import {connect} from 'react-redux';
import { addEducationalInfo } from '../../actions/resumeBuilder';

class EditEducationalInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            sod: '',
            yop: 0,
            instname: '',
            degree: ''
        }
    }

    onInstNameChange = (e) => {
        const data = e.target.value;
        this.setState(() => ({ instname: data }))
    }

    onDegreeChange = (e) => {
        const data = e.target.value;
        this.setState(() => ({ degree: data }))
    }

    onYOPChange = (e) => {
        const data = e.target.value;
        this.setState(() => ({ yop: data }))
    }

    onSODChange = (e) => {
        const data = e.target.value;
        this.setState(() => ({ sod: data }))
    }

    onAddClick = () => {
        this.props.dispatch(addEducationalInfo(this.state, this.props.match.params.pid, parseInt(this.props.match.params.id)));
        this.setState(() => ({
            sod: '', yop: 0, instname: '', degree: ''
        }));
        this.props.history.push("/resume-builder");
    }

    getnerateEditor = () => {
        return (
            <div className="flex_center flex_down w_100">
                <div>
                    Institute Name: <input type="text" onChange={this.onInstNameChange} value={this.state.instname} placeholder="Your Institute name" />
                </div>
                <div>
                    Yr. Of Passing: <input type="number" onChange={this.onYOPChange} value={this.state.yop} placeholder="Year of passing" />
                </div>
                <div>
                    Stream / Department: <input type="text" onChange={this.onSODChange} value={this.state.sod} placeholder="Stream or Department name" />
                </div>
                <div>
                    Degree: <input type="text" onChange={this.onDegreeChange} value={this.state.degree} placeholder="Degree name" />
                </div>
                <div>
                    <button onClick={this.onAddClick}>ADD</button>
                </div>
            </div>
        );
    }

    generateInstituteList = () => {
        return this.props.educationalInfo.qualifications.map((qualification) => {
            return (<div>
                <div> {qualification.instname} || {qualification.degree} || {qualification.yop} || {qualification.sod} </div>
            </div>)
        })
    }

    render() {
        return(<div className="w_100">
            <div className="flex_center flex_down">
                {this.generateInstituteList()}
            </div>
            <div className="flex_center flex_down">
                {this.getnerateEditor()}
            </div>
        </div>);
    }
}

const mapStateToProps = (state, props) => {
    return {
        educationalInfo: state.resume.myCustomTemplate
                        .filter((templ) => templ.name === props.match.params.pid)[0].components
                        .filter((component) => component.id === parseInt(props.match.params.id))[0] || {}

    }
}


const ConnectEditEducationalInfo = connect(mapStateToProps)(EditEducationalInfo)

export default ConnectEditEducationalInfo;