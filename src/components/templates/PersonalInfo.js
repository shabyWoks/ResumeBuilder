import React from 'react';

const PersonalInfo = (props) => {
    return (
        <div className="_pi_body">
            <span className="_temp1_pi_fn">{props.info.firstname.toUpperCase()}</span>
            <span className="_temp1_pi_ln">{props.info.lastname.toUpperCase()}</span>
            {/* <div className="_temp1_pi_title">{props.info.title}</div> */}
        </div>
    );
}

export default PersonalInfo;