import React from 'react';
import {connect} from 'react-redux';
import { updateImageFile } from '../../actions/resumeBuilder';

class EditImageUpload extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      imagefile: this.props.imageInfo.imagefile
    };
  }
  
  _handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(updateImageFile(this.state, this.props.match.params.pid, parseInt(this.props.match.params.id)));
    this.props.history.push("/resume-builder");
  }
  
  _handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.readImageFile(file);
  }
  
  readImageFile(file){
    let reader = new FileReader();
    reader.onloadend = () => {
        this.setState({
            imagefile: reader.result
        });
    }
    reader.readAsDataURL(file)
  }
  
  getInfo = () => {
  if (this.state.imagefile) {
      return (<img src={this.state.imagefile} />);
  } 
  else {
      return (<div className="previewText">Please select an Image for Preview</div>);
  }
  }
  render() {
    return (
        <div className="previewComponent">
            <form onSubmit={(e)=>this._handleSubmit(e)}>
                <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
                <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Add</button>
            </form>
            <div className="imgPreview">
                {this.getInfo()}
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
        imageInfo:  state.resume.myCustomTemplate
                        .filter((templ) => templ.name === props.match.params.pid)[0].components
                        .filter((component) => component.id === parseInt(props.match.params.id))[0] || {}

    }
}


const ConnectEditImageUpload = connect(mapStateToProps)(EditImageUpload);
export default ConnectEditImageUpload;
