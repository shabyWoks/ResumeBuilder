import React from 'react';

class ImageInfo extends React.Component {
    getImage = () => {
        const file = localStorage.getItem("image");
        return <img src={file} className="_ii_img"/>
    }
    
    render() {
        return (
            <div className="_ii_body">
                { <img src={this.props.info.imagefile} className="_ii_img"/> }
            </div>
        );
    }
}

export default ImageInfo;