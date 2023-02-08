import { Component } from "react";
import "../styles/ExperienceField.css";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.workplaces = props.workplaces;
    this.toggleModal = props.toggleModal;
  }
  render() {
    return (
      <div className="section experience">
        <h2>Experience</h2>
        <button
          className="edit-btn"
          onClick={() => {
            this.toggleModal("exp");
            document.getElementById("locName").focus();
          }}
        >
          edit
        </button>
        {this.workplaces.map((loc) => {
          return (
            <div key={loc.id} className="workplace">
              <h3>{loc.locName}</h3>
              <p>{loc.position}</p>
              <p>
                {loc.expStartYear} - {loc.expEndYear}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experience;
