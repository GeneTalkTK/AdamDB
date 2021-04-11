//npm install --save react-filepond filepond filepond-plugin-image-preview filepond-plugin-image-exif-orientation filepond-plugin-file-metadata

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin( FilePondPluginFileMetadata,
                FilePondPluginImageExifOrientation, 
                FilePondPluginImagePreview )

// Our app
class Dropzone extends React.Component {
    //const [files, setFiles] = useState([])
  
    state = {
        files: []
    }

    setfiles = (files) => {
        this.setState( {
                            files: files,
                            form: {}
                       } );
    }

    handleSubmit = (formData ) => {
        Object.entries( this.state.form ).forEach( ([k,v]) => {
            formData.append(k, v);
        });
        return formData;
    }

    server = {
                    process: {
                        url: '/sandbox/img',
                        method: 'POST',
                        withCredentials: false,
                        headers: {'X-CSRF-Token': document.querySelector("meta[name='csrf-token']").getAttribute("content")},
                        timeout: 7000,
                        onload: null,
                        onerror: null,
                        ondata: this.handleSubmit
                    },
                    fetch: null
    }
  
    filepond =  <FilePond
                        ref={ref => (this.pond = ref)}
                        files={this.state.files}
                        onupdatefiles={this.setFiles}
                        allowMultiple={true}
                        maxFiles={3}
                        server={this.server}
                        name="photo[picture]"
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        allowRevert = {false}
                        instantUpload = {false}
                    />
    
    handleChange = (event) => {
        const oldform = this.state.form
        this.setState( { 
            form: { 
                    ...oldform,
                    [event.target.id]: event.target.value
                  }
        })
    }

    render() {
        return (
            <div className="App">
            <input type="text" id="photo[testfield]" onChange = {this.handleChange} />
            <input type="text" id="photo[springfield]" onChange = {this.handleChange} />

            { this.filepond }
            </div>
        )
    }
}

export default Dropzone;