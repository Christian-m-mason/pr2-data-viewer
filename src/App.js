import React, { Component } from "react";
import FileInput from "./components/FileInput";

import { Wells } from "./FormattedObject";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plateDataObj: null,
      wells: null
    };
  }

  handleFileUpload = (plateData, wells) => {
    this.setState({
      plateDataObj: plateData,
      wells: wells
    });

    console.log(this.state.wells);
  };

  render() {
    return (
      <div>
        <FileInput handleFileUpload={this.handleFileUpload} />
      </div>
    );
  }
}

export default App;
