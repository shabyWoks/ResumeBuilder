import React from 'react';

const ContactInfo = (props) => {
    return (
        <div className="_ci_body">
            <div className="_ci_body_head">Contact Information</div>
            <div className="_ci_body_content">Email: <div>{props.info.email}</div></div>
            <div className="_ci_body_content">Mob: <div>{props.info.cc} {props.info.mob}</div></div>
            <div className="_ci_body_content">Website: <div>{props.info.web}</div></div>
        </div>
    );
}

export default ContactInfo;