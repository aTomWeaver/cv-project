import React from "react";
import uniqid from "uniqid";
import BasicInfo from "./Components/BasicInfo";
import Education from "./Components/EducationField";
import Experience from "./Components/ExperienceField";
import { BasicInfoModal, EduModal, ExpModal } from "./Components/Modals";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      basicInfo: {
        name: "your name",
        phone: "(420) 420-6969",
        email: "jelly@bongus.com",
        address: "123 Jellybongus Ave, Bongusville 42069",
        imgUrl: null,
      },
      education: {
        cache: {
          instName: "",
          degree: "",
          startYear: "",
          endYear: "",
          id: uniqid(),
        },
        list: [],
      },
      experience: {
        cache: {
          locName: "",
          position: "",
          expStartYear: "",
          expEndYear: "",
          id: uniqid(),
        },
        list: [],
      },
    };
  }

  deleteItem = (type, item) => {
    const shallowState = this.state;
    shallowState[type].places = this.state[type].places.map(
      (place) => place.id !== item.id
    );
    this.setState(shallowState);
  };

  handleEduChange = (e) => {
    const stage = this.state;
    stage.education.cache[e.target.id] = e.target.value;
    this.setState(stage);
    console.log(this.state);
  };
  // these two functions should just be one;
  handleExpChange = (e) => {
    const stage = this.state;
    stage.experience.cache[e.target.id] = e.target.value;
    this.setState(stage);
    console.log(this.state.experience);
  };

  handleSubmit = (type) => {
    const shallowState = this.state;
    const stage = this.state[type].cache;
    if (type === "education") {
      shallowState.education.list.push(stage);
      shallowState.education.cache = {
        instName: "",
        degree: "",
        startYear: "",
        endYear: "",
        id: uniqid(),
      };
      this.toggleModal("edu");
    } else {
      shallowState.experience.list.push(stage);
      shallowState.experience.cache = {
        locName: "",
        position: "",
        expStartYear: "",
        expEndYear: "",
        id: uniqid(),
      };
      this.toggleModal("exp");
      console.log(this.state);
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
        <BasicInfoModal />
        <BasicInfo info={this.state.basicInfo}/>
        <EduModal
          toggle={() => this.toggleModal("edu")}
          handleChange={this.handleEduChange}
          handleSubmit={() => this.handleSubmit("education")}
        />
        <Education
          institutions={this.state.education.list}
          toggleModal={this.toggleModal}
        />
        <ExpModal
          toggle={() => this.toggleModal("exp")}
          handleChange={this.handleExpChange}
          handleSubmit={() => this.handleSubmit("experience")}
        />
        <Experience
          workplaces={this.state.experience.list}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
