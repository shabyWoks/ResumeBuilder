import React from 'react';
import {connect} from 'react-redux';

const EducationaInfo = (props) => {
    return (<div className="_ei_body">
                <div className="_temp1_ei_q_head">Qualifications</div>
                {
                    props.info.qualifications.map((qualification) => {
                        return (<div className="_temp1_ei_q_body">
                                    <div className="_temp1_ei_q_yop">{qualification.yop}</div>
                                    <div className="_temp1_ei_q_body_sub">
                                        <span className="_temp1_ei_q_degree">{qualification.degree}, </span>
                                        <span className="_temp1_ei_q_instname">{qualification.instname}</span>
                                        <span className="_temp1_ei_q_sod">{qualification.sod}</span>
                                        
                                    </div>
                                </div>)
                    })
                }
            </div>);
}

const ConnectedEducationaInfo = connect()(EducationaInfo);
export default ConnectedEducationaInfo;