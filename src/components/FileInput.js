import React from 'react'
import { plateDataFormatter } from '../helpers/DataFormatters'
let fileReader;

class ImportFromFileBodyComponent extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      fileName: null,
      barcode1: null,
      rowA: null,
      rowB: null,
      rowC: null,
      rowD: null,
      rowE: null,
      rowF: null,
      rowG: null,
      rowH: null,
    }
    this.handleFileChosen = this.handleFileChosen.bind(this)
    this.handleFileRead = this.handleFileRead.bind(this)
  }
  
  handleFileRead (e) {
    const content = fileReader.result
    const plateData = plateDataFormatter(content)
    this.setState({
      fileName: plateData.fileName,
      barcode1: plateData.barcode1,
      rowA: plateData.wellData[0],
      rowB: plateData.wellData[1],
      rowC: plateData.wellData[2],
      rowD: plateData.wellData[3],
      rowE: plateData.wellData[4],
      rowF: plateData.wellData[5],
      rowG: plateData.wellData[6],
      rowH: plateData.wellData[7],
    })

    console.log(this.state)
  }

 handleFileChosen (file) {
    fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file)
  }

  render () {
    return(
    <div className="upload-datafile">
      <input type='file'
             id='file'
             className="input-file"
             accept='.txt'
             onChange={e => this.handleFileChosen(e.target.files[0])}
          />

    </div>
  )
  }
}

export default ImportFromFileBodyComponent