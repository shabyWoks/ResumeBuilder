import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import EditPersonalInfo from '../components/templates/EditPersonalInfo';
import Resumebuilder from '../components/Resumebuilder';
import EditEducationalInfo from '../components/templates/EditEducationalInfo';
import EditImageUpload from '../components/templates/EditImageUpload';
import EditContactInfo from '../components/templates/EditContactInfo';
import EditSummary from '../components/templates/EditSummary';
import EditSkills from '../components/templates/EditSkills';
import EditProjectInfo from '../components/templates/EditProjectInfo';
import EditCertificateInfo from '../components/templates/EditCertificateInfo';
import EditWorkExperience from '../components/templates/EditWorkExperience';

class CustomRoute extends React.Component { 
    
    selectRoute = () => {
        const id = parseInt(this.props.computedMatch.params.id);
        if(id && id === 1){
            return <Route path={this.props.path} component={EditPersonalInfo}/>    
        }
        else if(id && id === 2){
            return <Route path={this.props.path} component={EditEducationalInfo}/>
        } 
        else if(id && id === 3){
            return <Route path={this.props.path} component={EditImageUpload}/>
        }
        else if(id && id === 4){
            return <Route path={this.props.path} component={EditContactInfo}/>
        }
        else if(id && id === 5){
            return <Route path={this.props.path} component={EditSummary}/>
        }
        else if(id && id === 6){
            return <Route path={this.props.path} component={EditSkills}/>
        }
        else if(id && id === 7){
            return <Route path={this.props.path} component={EditProjectInfo}/>
        }
        else if(id && id === 8){
            return <Route path={this.props.path} component={EditCertificateInfo}/>
        }
        else if(id && id === 9){
            return <Route path={this.props.path} component={EditWorkExperience}/>
        }
        else {
            return <Route path={this.props.path} component={EditEducationalInfo}/>
        }
    }

    render() {   
        return ( this.selectRoute() ) 
    }
}

const ConnectedCustomRoute = connect()(CustomRoute);
export default ConnectedCustomRoute;