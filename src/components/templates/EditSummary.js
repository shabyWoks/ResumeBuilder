import React from 'react';
import {connect} from 'react-redux';
import { updateSummary } from '../../actions/resumeBuilder';

class EditSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: this.props.editsummary.summary
        }
    }

    onChangeSummary = (e) => {
        const data = e.target.value;
        this.setState(() => ({ summary: data }));
    }

    onUpdateSummary = () => {
        this.props.dispatch(updateSummary(this.state.summary, this.props.match.params.pid, parseInt(this.props.match.params.id)));
    }
    render() {
        return (
            <div>
                <div><textarea type="text" value={this.state.summary} onChange={this.onChangeSummary} placeholder="Summary"/></div>
                <div>
                    <button>Update</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        editsummary: state.resume.myCustomTemplate
                        .filter((templ) => templ.name === props.match.params.pid)[0].components
                        .filter((component) => component.id === parseInt(props.match.params.id))[0] || {}

    }
}


const ConnectedEditSummary = connect(mapStateToProps)(EditSummary)

export default ConnectedEditSummary;