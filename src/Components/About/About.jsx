import { React, Component } from 'react'
import './About.css'

class About extends Component {
    render() {
        return <div className='container-fluid about'>
            <div className='about-div'>
                <h1>About object detection</h1>
                <p>The term object recognition describes methods for
                    identifying known objects within an object space
                    by means of optical, acoustic or other physical recognition methods.
                    For example, the presence of an object in a digital image or video stream and its position and location are determined.
                </p>
                <p>
                    Object recognition is necessary, for example, in complicated manufacturing processes.
                    It is also used for vehicle recognition or the recognition of traffic signs.
                    Often the conformity of the shape of an object with a specification is determined,
                    or the correct position of the object in the environment is checked.
                </p>
            </div>
        </div>
    }
}

export default About;