import React, {useCallback} from 'react'
import './screen1.scss'
import { useState } from "react";
import {useDropzone} from 'react-dropzone'
import Dropzone from 'react-dropzone'
import resultsTable from '../components/table';

var nr = ""
var nrArray= []
var apeture = ""
var focusDistance = ""
var textDetails = ""


function Screen1() {

  

  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone();


  
 





  return (
    <div className="screen1">
        <div {...getRootProps({ className: "dropzone" })}>

        <input id="fileItem" type="file1" className="input-zone" {...getInputProps()} />
        {isDragActive ? (
          <p className="dropzone-content">
            Release to drop the files here
          </p>
        ) : (
          <p className="dropzone-content">
            Drag and drop the files of a sequence to extract the metadata
          </p>
        )}

        </div>


    </div>
  )
}



export default Screen1