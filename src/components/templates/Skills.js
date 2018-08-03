import React from 'react';
import SkillMeter from '../SkillMeter';

const Skills = (props) => {
    return (
        <div className="_sk_body">
             <div className="_sk_body_head">Skills</div>
             <div className="_sk_body_c_container flex_start">
                {props.info.skillList.map((skill) => <SkillMeter skill={skill} />)}
             </div>
        </div>
    );
}

export default Skills;