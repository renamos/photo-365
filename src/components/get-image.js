import React from 'react'
import {getImage} from '../actions/get-image'
import {connect} from 'react-redux'

class GetImage extends React.Component {

    componentDidMount() {
        this.props.getImage();
    }

    render() {
        if (this.props.imageResponse.constructor === Object && this.props.imageResponse.isFetched) {
            var image = <img id="last-image" src={this.props.imageResponse.data.imageURL}/>
            var imageTitle = <h1>{this.props.imageResponse.data.title}</h1>
            var imageDescription = <p className="description">{this.props.imageResponse.data.description}</p>
            var cameraSettings = <p className="cameraSettings">*{this.props.imageResponse.data.camera_settings}</p>

            return (
                <div id="last-image-container-container">
                    <div id="last-image-container">
                        {image}
                        {imageTitle}
                        {imageDescription}
                        {cameraSettings}
                    </div>
                </div>
            )
        }
        return <p>loading...</p>
    }
}
function mapStatetoProps(state) {
    return {imageResponse: state.imageReducer}
}

export default connect(mapStatetoProps, {getImage})(GetImage)