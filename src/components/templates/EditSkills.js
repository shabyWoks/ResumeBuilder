import React from 'react';
import {connect} from 'react-redux';
import { addSkill } from '../../actions/resumeBuilder';

class EditSkills extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            skillList: this.props.editskillinfo.skillList,
            editSkill: {
                name: '',
                score: 1,
                outOf: 10
            }
        }
    }

    generateSkillList = () => {
        return (<div>
                    {this.state.skillList.map((listitem) => <div>{listitem.name} || {listitem.score}/{listitem.outOf}</div>)}
                </div>);
    }

    onNameChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({editSkill: { ...prevState.editSkill, name: data }}));
    }

    onScoreChange = (e) => {
        const data = parseInt(e.target.value);
        this.setState((prevState) => ({ editSkill: { ...prevState.editSkill, score: data }}));
    }

    onOutOfChange = (e) => {
        const data = parseInt(e.target.value);
        this.setState((prevState) => ({ editSkill: { ...prevState.editSkill, outOf: data }}));
    }

    updateEditSkill = () => {
        this.props.dispatch(addSkill(this.state.editSkill, this.props.match.params.pid, parseInt(this.props.match.params.id)));
        this.props.history.push("/resume-builder");
    }

    getSkillEditor = () => {
        return (<div>
                    <div>
                        Name: <input type="text" placeholder="Skill Name" onChange={this.onNameChange} value={this.state.editSkill.name} />
                    </div>
                    <div>
                        Score: <input type="number" placeholder="score" onChange={this.onScoreChange} value={this.state.editSkill.score} /> 
                        outof: <input type="number" placeholder="outOf" onChange={this.onOutOfChange} value={this.state.editSkill.outOf} /> 
                    </div>
                    <div>
                        <button onClick={this.updateEditSkill} >Update</button>
                    </div>
                </div>)
    }
    render() {
        return (
            <div>
                {this.generateSkillList()}
                {this.getSkillEditor()}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        editskillinfo: state.resume.myCustomTemplate
                        .filter((templ) => templ.name === props.match.params.pid)[0].components
                        .filter((component) => component.id === parseInt(props.match.params.id))[0] || {}

    }
}

const ConnectedEditSkills = connect(mapStateToProps)(EditSkills);

export default ConnectedEditSkills;