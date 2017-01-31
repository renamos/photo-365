import React from 'react'
import Dropzone from 'react-dropzone'
import {saveImage} from '../actions/index'
import {connect} from 'react-redux'
import Loading from 'react-loading'
import SweetAlert from 'sweetalert-react'

class ImageForm extends React.Component {

    state = {image: {}, image64: "", sending: false}

    shutterSpeed = [
        {option: "1/30s", val: "30"},
        {option: "1/60s", val: "60"},
        {option: "1/125s", val: "125"},
        {option: "1/250s", val: "250"},
        {option: "1/500s", val: "500"},
        {option: "1/1000s", val: "1000"},
        {option: "1/2000s", val: "2000"}
    ]

    ISO = [
        {option: "ISO 50", val: "50"},
        {option: "ISO 100", val: "100"},
        {option: "ISO 200", val: "200"},
        {option: "ISO 400", val: "400"},
        {option: "ISO 800", val: "800"},
        {option: "ISO 1600", val: "1600"},
        {option: "ISO 3200", val: "3200"}
    ]

    camera = [
        {option: "Canon T4i", val: "canon_t4i"},
        {option: "iPhone 7s+", val: "iphone7s_plus"},
        {option: "iPhone 6", val: "iphone6"},
        {option: "Fujifilm Instax Mini", val: "fujifilm_instax_mini"}
    ]

    lens = ["30mm", "24mm", "18-135mm", "other"]

    aperture = ["f/1.4", "f/1.6", "f/1.8", "f/2.0", "f/2.2", "f/2.4", "f/2.6", "f/2.8", "f/4.0", "f/5.6", "f/8.0", "f/11", "f/14"]

    onDrop(acceptedFiles, rejectedFiles) {
        this.setState({image: acceptedFiles[0]})
        console.log('Accepted files: ', acceptedFiles);
        console.log('Rejected files: ', rejectedFiles);
    }

    getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            this.setState({image64: reader.result});
        }.bind(this);
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    submit(event) {

        event.preventDefault();
        this.getBase64(this.state.image);


        setTimeout(function () {

            if(!this.refs.title.value){
                alert('Please fill all data')
                return
            }

            var data =
                {
                    title: this.refs.title.value,
                    description: this.refs.description.value,
                    caption: this.refs.caption.value,
                    image: this.state.image64,
                    camera_settings: this.refs.camera.value +", " + this.refs.lens.value +", "+ this.refs.aperture.value + ", 1/" + this.refs.shutter_speed.value + ", ISO " + this.refs.ISO.value,
                    password: this.refs.password.value
                };
            this.setState({sending: true});
            this.props.saveImage(data)
        }.bind(this), 300)

    }

    render() {

        if (this.props.imageResponse.isSending) {
            return (
                <div className="loading">
                    <Loading type='bars' color='#e3e3e3'/>
                </div>
            )
        }
        else {
            return (
                <div className="image-form-container">
                    {
                        this.props.imageResponse.error ? <h1>Someething went wrong</h1> : null
                    }
                    <form className="image-form">
                        <div>
                            <label>Title: </label>
                            <input ref="title" type="text"/>
                        </div>
                        <div>
                            <label>Description: </label>
                            <textarea ref="description"></textarea>
                        </div>
                        <div>
                            <label>Camera: </label>
                            <select ref="camera">
                                <option>Select</option>
                                {
                                    this.camera.map((option, index) => {
                                        return <option key={index} value={option.option}>{option.option}</option>
                                    })
                                }
                            </select>
                            <span>
                    <label> Lens: </label>
                            <select ref="lens">
                        <option>Select</option>
                                {
                                    this.lens.map((option, index) => {
                                        return <option key={index} value={option}>{option}</option>
                                    })
                                }
                             </select>
               </span>
                            <span>
                    <label> Aperture: </label>
                    <select ref="aperture">
                        <option>Select</option>
                        {
                            this.aperture.map((option, index) => {
                                return <option key={index} value={option}>{option}</option>
                            })
                        }
                    </select>
               </span>
                            <span>
                    <label> Shutter Speed: </label>
                    <select ref="shutter_speed">
                        <option>Select</option>
                        {
                            this.shutterSpeed.map((option, index) => {
                                return <option key={index} value={option.val}>{option.option}</option>
                            })
                        }
                    </select>
               </span>
                            <span>
                    <label> ISO: </label>
                    <select ref="ISO">
                        <option>Select</option>
                        {
                            this.ISO.map((option, index) => {
                                return <option key={index} value={option.val}>{option.option}</option>
                            })
                        }
                    </select>
               </span>

                            <div>
                                <label>Caption: </label>
                                <input ref="caption" type="text"/>
                            </div>
                            <div>
                                <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
                                    <div>Drag and drop your photo here.</div>
                                </Dropzone>
                            </div>
                            <div>
                                <label>Password: </label>
                                <input ref="password" type="password"/>
                            </div>
                            <div>
                                <button onClick={this.submit.bind(this)}>submit</button>
                            </div>
                        </div>
                    </form>
                </div>)
        }
    }
}

function mapStatetoProps(state) {
    return {imageResponse: state.imageReducer}
}

export default connect(mapStatetoProps, {saveImage})(ImageForm)