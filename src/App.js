import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Education from "./Components/EducationField";
import EduModal from "./Components/Modals";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      education: {
        cache: {
          instName: "",
          degree: "testing",
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

  handleChange = (e) => {
    // there is probably a better way to just change one part of state
    this.setState(() => {
      return {
        education: {
          cache: {
            ...this.state.education.cache,
            [e.target.id]: e.target.value,
          },
          institutions: this.state.education.institutions,
        },
      };
    });
  };

  toggleModal = (type) => {
    let field = document.querySelector(`.${type}-modal`);
    console.log(field.style.display);
    field.style.display === "none"
      ? (field.style.display = "block")
      : (field.style.display = "none")
  };

  render() {
    return (
      <div className="resume-ctr">
        <EduModal toggle={this.toggleModal} handleChange={this.handleChange} />
        <Education
          institutions={this.state.education.institutions}
          display={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
