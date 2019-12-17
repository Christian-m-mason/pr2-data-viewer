import React, { Component } from "react";
import { plateDataFormatter } from "../helpers/DataFormatters";

let fileReader;

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plateData: null
    };
    this.handleFileChosen = this.handleFileChosen.bind(this);
    this.handleFileRead = this.handleFileRead.bind(this);
  }

  handleFileRead(e) {
    const content = fileReader.result;
    const plateData = plateDataFormatter(content);
    this.setState({
      plateData: plateData
    });
    console.table(plateData)
  }

  handleFileChosen(file) {
    fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file);
  }

  render() {
    return (
      <div className="upload-datafile">
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".txt"
          onChange={e => this.handleFileChosen(e.target.files[0])}
        />
       
      </div>
    );
  }
}
