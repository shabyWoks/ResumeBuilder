import React from 'react';

const SkillMeter = (props) => {
    return (
        <div className="_sm_body">
            <div className="_sm_skill_name">{props.skill.name}</div>
            <div className="_sm_skill_m_holder">
                <div className="_sm_skill_m_meter" style={{ width: `${(props.skill.score/props.skill.outOf)*100}%` }} ></div>
            </div>
        </div>
    );
}

export default SkillMeter;