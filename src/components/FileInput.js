import React, { Component } from "react";

import { plateDataFormatter, getAllWellData } from "../helpers/DataFormatters";

let fileReader;

export default class FileInput extends Component {
  handleFileRead = e => {
    const content = fileReader.result;
    const plateData = plateDataFormatter(content);
    const wells = getAllWellData(content);
    this.props.handleFileUpload(plateData, wells);
  };

  handleFileChosen = file => {
    fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file);
  };

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
