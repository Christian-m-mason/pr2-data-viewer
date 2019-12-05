import React from 'react'

const ImportFromFileBodyComponent = () => {
  let fileReader;

  const handleFileRead = (e) => {
    const content = fileReader.result
    const pr2DataArray = content.toString().split('\n')
    console.log(pr2DataArray[63])
  }

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file)
  }

  return (
    <div className="upload-datafile">
      <input type='file'
             id='file'
             className="input-file"
             accept='.txt'
             onChange={e => handleFileChosen(e.target.files[0])}
          />
    </div>
  )
}

export default ImportFromFileBodyComponent