import React, {useCallback} from 'react'
import './screen1.scss'
import { useState } from "react";
import {useDropzone} from 'react-dropzone'
import Dropzone from 'react-dropzone'
import resultsTable from '../components/table';
import { CircularProgress } from '@mui/material';

var nr = ""
var nrArray= []
var aperture = ""
var focusDistance = ""
var textDetails = ""
var finalValues;


function Screen1() {


  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback(acceptedFiles =>{
    setIsLoading(true)
    
    acceptedFiles.forEach((file) => {

      var result = []
      var obj={}
    

      const reader = new FileReader()
      
      reader.onload = () => {

        var textFile= reader.result
        var lines = textFile.split("\n");
        var headers=lines[0].split(",");

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

        var finalJSON = JSON.stringify(result);
        var parsed = JSON.parse(finalJSON)
        nr = file.name
        nr = nr.split(".")
        nr = nr[1]
        aperture = parsed[0]["aperture (type float)"]
        focusDistance = parsed[0]["focus (type float)"]

        finalValues=nr+aperture+focusDistance

        console.log(nr + aperture + focusDistance)

        setIsLoading(false)

        

      }

      reader.readAsText(file)

    })


  })

  const {getRootProps, getInputProps} = useDropzone({onDrop})

 



if(finalValues==null){
  return (
    <div className="screen1">
        <div {...getRootProps({ className: "dropzone" })}>

        <input id="fileItem" type="file1" className="input-zone" {...getInputProps()} />

        {isLoading ? <CircularProgress size={100}/> :
         (<p>Drag and drop the files of a sequence to extract the metadata</p>)}


        </div>


    </div>
  )
}
}



export default Screen1