import React from "react";
import Education from "./Components/EducationField";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Education institution="example U"/>
      </div>
    );
  }
}

export default App;
