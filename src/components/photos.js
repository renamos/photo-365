import React from 'react'
import {recentImages} from '../actions/photos'
import {connect} from 'react-redux'

class Photos extends React.Component {

    componentDidMount() {
        this.props.recentImages();
    }

    render() {
        if (this.props.photosResponse.constructor === Object && this.props.photosResponse.isFetched) {

            console.log(this.props.photosResponse.data)

            var images = this.props.photosResponse.data.map(function (image) {
                return (
                    <div className="recent-image-container">
                        <img className="recent-image" src={image.imageURL}/>
                    </div>
                );
            });
        }
        return (
            <div id="recent-all-container">
                {images}
            </div>
        )
    }
}
function mapStatetoProps(state) {
    return {photosResponse: state.photosReducer}
}

export default connect(mapStatetoProps, {recentImages})(Photos)