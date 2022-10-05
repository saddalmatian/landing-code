import { React, Component } from 'react'
import './Upload.css';
import DragDropFile from './DragDrop';

class UploadPlace extends Component {
    render() {
        return <div className='upload-place'>
            <DragDropFile />
        </div>


    }
}

export default UploadPlace;