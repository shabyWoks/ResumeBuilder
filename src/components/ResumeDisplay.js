import React from 'react';
import {connect} from 'react-redux';
import PersonalInfo from './templates/PersonalInfo';
import EducationalInfo from './templates/EducationalInfo';
import ImageInfo from './templates/ImageInfo';
import ContactInfo from './templates/ContactInfo';
import Summary from './templates/Summary';
import Skills from './templates/Skills';
import ProjectInfo from './templates/ProjectInfo';

class ResumeDisplay extends React.Component {

    setResumePanel = () => {
        return (<div className="resumebuilder__A4">
                {
                    this.props.myCustomTemplate.map((panel) => {
                        return (<div className={`flex_start flex_down ${panel.actualClass}`}>
                                    {this.setResumeComponents(panel.components)}
                                </div>)
                    })
                }
                </div>)
    }

    setResumeComponents = (components) => {
        if(!components) return;
        return components.map((component) => {
            if(component.id === 1) return <PersonalInfo info={component} />
            else if(component.id === 2) return <EducationalInfo info={component} />
            else if(component.id === 3) return <ImageInfo info={component} />;
            else if(component.id === 4) return <ContactInfo info={component} />;
            else if(component.id === 5) return <Summary info={component} />;
            else if(component.id === 6) return <Skills info={component} />;
            else if(component.id === 7) return <ProjectInfo info={component} />;
        })
    }
    render() {
        return (
            <div className="resumebuilder__o_body flex_start">
                <div className="resumebuilder__left_panel" >
                    
                </div>
                <div className="resumebuilder__right_panel" style={{ position: 'absolute', left: '23%' }} >
                    {this.setResumePanel()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        myCustomTemplate: state.resume.myCustomTemplate
    }
}

const ConnectedResumeDisplay = connect(mapStateToProps)(ResumeDisplay);
export default ConnectedResumeDisplay;