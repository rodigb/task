import React, {useCallback} from 'react'
import './screen1.scss'
import { useState } from "react";
import {useDropzone} from 'react-dropzone'
import Dropzone from 'react-dropzone'
import resultsTable from '../components/table';

var nr = ""
var nrArray= []
var aperture = ""
var focusDistance = ""
var textDetails = ""


function Screen1() {

  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone();


  acceptedFiles.forEach((file) => {
  const reader = new FileReader();

  reader.onload = () => {
  // Do whatever you want with the file contents


    var textFile= reader.result
    var lines = textFile.split("\n");
    var result = []
    var headers=lines[0].split(",");
    var obj={}



    for(var i=1;i<lines.length;i++){

      var currentline=lines[i].split(":");


      for(var j=0;j<headers.length;j++){
        obj[currentline[j]] = currentline[1];
        var newObject= obj
      }

    }
    result.push(newObject)


      result = JSON.stringify(result)
      result = result.replace(/(?:\\[rn])+/g, "");
      result = JSON.parse(result)

      var result2 = result.map(function(o1){
        var o2 = {};
        for(var key in o1){
          o2[key.replace(/\d+/g,'')] = o1[key];
        }
        return o2;
      });
      var finalJSON = JSON.stringify(result2);

      var parsed = JSON.parse(finalJSON)

      nr = file.name
      nr = nr.split(".")
      nr = nr[1]
      aperture = parsed[0]["aperture (type float)"]
      focusDistance = parsed[0]["focus (type float)"]

      loadingData()
  }



  reader.readAsText(acceptedFiles[0])

})

 

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