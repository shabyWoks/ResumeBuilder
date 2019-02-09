import React from 'react';

const CertificateInfo = (props) => {
    return (
        <div className="_cei_body">
            <div className="_cei_body_head">Certificates</div>
            <div className="_cei_body_body flex_start">
                {props.info.certificationList.map((certificate) => {
                    return (<div className="_cei_body_c">
                                <div></div>
                                <div className="_cei_body_c_name">{certificate.name} - {certificate.yoc}</div>
                                <div className="_cei_body_c_cbname">{certificate.certifiedBy}</div>
                            </div>);
                })}
            </div>
        </div>
    );
} 

export default CertificateInfo;