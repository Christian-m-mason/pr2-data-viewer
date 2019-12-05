import React from 'react'
import { wellDataFormatter } from '../helpers/DataFormatters'
let fileReader;

class ImportFromFileBodyComponent extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      plateData: 'Hello',
    }
    this.handleFileChosen = this.handleFileChosen.bind(this)
    this.handleFileRead = this.handleFileRead.bind(this)
  }
  
  handleFileRead (e) {
    const content = fileReader.result
    this.setState({
      plateData: wellDataFormatter(content)
    })
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