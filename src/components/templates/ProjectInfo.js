import React from 'react';

const ProjectInfo = (props) => {
    return (
        <div className="_pri_body">
            <div className="_pri_body_head">Projects</div>
            <div>{props.info.projectList.map((project, i) => {
                return (<div className="_pri_pro_body">
                            <div className="_pri_pro_b_title">{i+1}. {project.title}</div>
                            <div className="_pri_pro_b_description">{project.description}</div>
                            <div className="_pri_pro_b_key">{
                                    project.key.map((k) => (<span>{k}</span>) )
                                }
                            </div>
                        </div>)
            })}</div>
        </div>
    )
}

export default ProjectInfo;