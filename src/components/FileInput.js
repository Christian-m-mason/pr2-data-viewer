import React from 'react'
import { wellDataFormatter } from '../helpers/DataFormatters'
let fileReader;

class ImportFromFileBodyComponent extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
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
    const plateRowData = wellDataFormatter(content)
    this.setState({
      rowA: plateRowData[0],
      rowB: plateRowData[1],
      rowC: plateRowData[2],
      rowD: plateRowData[3],
      rowE: plateRowData[4],
      rowF: plateRowData[5],
      rowG: plateRowData[6],
      rowH: plateRowData[7],
    })
    console.log(this.state.rowD)
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