import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Education from "./Components/EducationField";
import Experience from "./Components/ExperienceField";
import { EduModal, ExpModal } from "./Components/Modals";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      education: {
        cache: {
          instName: "",
          degree: "",
          startYear: "",
          endYear: "",
          id: uniqid(),
        },
        institutions: [
          {
            instName: "University of Bongus, Jelly Campus",
            degree: "B.A. in Wigging",
            startYear: "2011",
            endYear: "2015",
            id: uniqid(),
          },
        ],
      },
      experience: {
        cache: {
          locName: "",
          position: "",
          expStartYear: "",
          expEndYear: "",
          id: uniqid(),
        },
        workplaces: [
          {
            locName: "The Jelly Store",
            position: "Senior Bongus Manager",
            expStartYear: "2015",
            expEndYear: "2019",
            id: uniqid(),
          },
        ],
      },
    };
  }

  handleEduChange = (e) => {
    const stage = this.state;
    stage.education.cache[e.target.id] = e.target.value;
    this.setState(stage);
  };
  // these two functions should just be one;
  handleExpChange = (e) => {
    const stage = this.state;
    stage.experience.cache[e.target.id] = e.target.value;
    this.setState(stage)
  }

  handleSubmit = (type) => {
    const shallowState = this.state;
    const stage = this.state[type].cache;
    if (type === "education") {
      shallowState.education.institutions.push(stage);
      shallowState.education.cache = {
        instName: "",
        degree: "",
        startYear: "",
        endYear: "",
        id: uniqid(),
      };
      this.toggleModal("edu");
    } else {
      shallowState.experience.workplaces.push(stage);
      shallowState.education.cache = {
        locName: "",
        position: "",
        expStartYear: "",
        expEndYear: "",
        id: uniqid(),
      };
      this.toggleModal("exp");
    }

    this.setState(shallowState);
  };

  toggleModal = (type) => {
    let field = document.querySelector(`.${type}-modal`);
    field.style.display === "none"
      ? (field.style.display = "flex")
      : (field.style.display = "none");
  };

  render() {
    return (
      <div className="resume-ctr">
        <EduModal
          toggle={() => this.toggleModal("edu")}
          handleChange={this.handleEduChange}
          handleSubmit={() => this.handleSubmit("education")}
        />
        <Education
          institutions={this.state.education.institutions}
          toggleModal={this.toggleModal}
        />
        <ExpModal
          toggle={() => this.toggleModal("exp")}
          handleChange={this.handleExpChange}
          handleSubmit={() => this.handleSubmit("experience")}
        />
        <Experience
          workplaces={this.state.experience.workplaces}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
