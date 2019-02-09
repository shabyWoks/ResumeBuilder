import React from 'react';
import {connect} from 'react-redux';
import { addCertificate } from '../../actions/resumeBuilder';

class EditCertificateInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            certificationList: this.props.editCertificateinfo.certificationList,
            certificate: {
                name: '',
                certifiedBy: '',
                yoc: 0
            }
        }
    }

    onNameChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ certificate: { ...prevState.certificate, name: data } }));
    }

    onCBNameChange = (e) => {
        const data = e.target.value;
        this.setState((prevState) => ({ certificate: { ...prevState.certificate, certifiedBy: data } }));
    }

    onYearChange = (e) => {
        const data =parseInt( e.target.value);
        this.setState((prevState) => ({ certificate: { ...prevState.certificate, yoc: data } }));
    }

    onAddCertificate = () => {
        this.props.dispatch(addCertificate(this.state.certificate, this.props.match.params.pid, parseInt(this.props.match.params.id)));
    }

    getCertificateEditor = () => {
        return (<div>
                    <div>
                        Certification Name: <input type="text" placeholder="Certification Name" onChange={this.onNameChange} value={this.state.certificate.name} />
                    </div>
                    <div>
                        Certified By: <input type="text" placeholder="Certified By" onChange={this.onCBNameChange} value={this.state.certificate.certifiedBy} /> 
                    </div>
                    <div>
                        Year Of Certification: <input type="number" placeholder="Year Of certification"  onChange={this.onYearChange} value={this.state.certificate.yoc} />
                    </div>
                    <div>
                        <button onClick={this.onAddCertificate} >Update</button>
                    </div>
                </div>)
    }

    getCertificateList = () => {
        return (
            <div>
                {this.state.certificationList.map((certificate) => <div>{certificate.name} || {certificate.certifiedBy}</div>)}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.getCertificateList()}
                {this.getCertificateEditor()}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        editCertificateinfo: state.resume.myCustomTemplate
                        .filter((templ) => templ.name === props.match.params.pid)[0].components
                        .filter((component) => component.id === parseInt(props.match.params.id))[0] || []
    }
}

const ConnectedEditCertificateInfo = connect(mapStateToProps)(EditCertificateInfo);
export default ConnectedEditCertificateInfo;