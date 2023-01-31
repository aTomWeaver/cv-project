import React from "react";
import Education from "./Components/EducationField";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      education: {
        cache: { name: "", degree: "", startYear: "", endYear: "" },
        institutions: [
          {
            name: "University of APP, Jelly Campus",
            degree: "B.A. in Wigging",
            startYear: "2011",
            endYear: "2015",
          },
          {
            name: "University of Michigan",
            degree: "B.A. in APP",
            startYear: "2016",
            endYear: "2019",
          },
        ],
      }
    }
  }

  getEducation() {

  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Education institutions={this.state.education.institutions}/>
      </div>
    );
  }
}

export default App;
