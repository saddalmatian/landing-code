import { React, Component } from 'react'
import './Banner.css'
import ObjectDetection from './Object detection.png';

class Banner extends Component {
    render() {
        return <div className='container-fluid home'>
            <div className='row home-page'>
                <img className='object-img' src={ObjectDetection} alt='Object Detection'></img>
            </div>
            <div className='row home-text'>
                <h1>Detect objects in image</h1>
            </div>
        </div>
    }
}

export default Banner;