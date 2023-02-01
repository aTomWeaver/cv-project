import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Education from "./Components/EducationField";
import "./styles/App.css";

class EduModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = props.toggle;
  }
  render() {
    return (
      <form
        id="edu-add"
        className="edu-modal"
        style={{ display: "none" }}
      >
        <label htmlFor="institution">School</label>
        <input id="institution" type="text" />

        <label htmlFor="degree">Degree</label>
        <input id="degree" type="text" />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <label htmlFor="end-date">End Date</label>
        <input id="end-date" type="text" />

        <button type="button">Add Education</button>
        <button type="button" onClick={() => this.toggle("edu")}>
          Close
        </button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      education: {
        cache: {
          name: "",
          degree: "",
          startYear: "",
          endYear: "",
          id: uniqid(),
        },
        institutions: [
          {
            name: "University of Bongus, Jelly Campus",
            degree: "B.A. in Wigging",
            startYear: "2011",
            endYear: "2015",
          },
          {
            name: "University of Jelly, Bongus Campus",
            degree: "B.A. in Wigging",
            startYear: "2011",
            endYear: "2015",
          },
        ],
      },
    };
  }

  getEducation() {}

  toggleModal = (type) => {
    let field = document.querySelector(`.${type}-modal`);
    console.log(field.style.display);
    field.style.display === "none"
      ? (field.style.display = "block")
      : (field.style.display = "none");
    // field.style.display = "block";
  };

  render() {
    return (
      <div className="resume-ctr">
        <EduModal toggle={this.toggleModal} />
        <Education
          institutions={this.state.education.institutions}
          display={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
