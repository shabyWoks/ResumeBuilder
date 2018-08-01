import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import EditPersonalInfo from '../components/templates/EditPersonalInfo';
import Resumebuilder from '../components/Resumebuilder';
import EditEducationalInfo from '../components/templates/EditEducationalInfo';
import EditImageUpload from '../components/templates/EditImageUpload';
import EditContactInfo from '../components/templates/EditContactInfo';
import EditSummary from '../components/templates/EditSummary';

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