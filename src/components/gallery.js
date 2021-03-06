import React from 'react'
import {recentImages} from '../actions/photos'
import {connect} from 'react-redux'
import Gallery from 'react-photo-gallery';

class Photos extends React.Component {

    componentDidMount() {
        this.props.recentImages();
    }

    createGallery(photoResponse) {
        var photosArray = photoResponse.map((photo) => {
            return {
                src: photo.imageURL,
                width: photo.width,
                height: photo.height,
                aspectRatio: (photo.width / photo.height),
                lightboxImage: {
                    src: photo.imageURL,
                    caption: photo.caption
                }
            }
        })
        return photosArray
    }

    render() {
        if (this.props.photosResponse.constructor === Object && this.props.photosResponse.isFetched) {

            var gallery = this.createGallery(this.props.photosResponse.data)
            return (
                <div id="recent-all-container">
                    <Gallery photos={gallery} disableLightbox={false} lightboxShowImageCount={true}/>
                </div>
            )
        }
        return (
        <div id="gallery-loading-container">
            <h1>LOADING...</h1>
        </div>
        )
    }
}
function mapStatetoProps(state) {
    return {photosResponse: state.photosReducer}
}

export default connect(mapStatetoProps, {recentImages})(Photos)