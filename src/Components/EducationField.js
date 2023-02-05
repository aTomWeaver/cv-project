import { Component } from "react";
import "../styles/EducationField.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.inst = props.institutions;
    this.toggleModal = props.toggleModal;
  }
  render() {
    return (
      <div className="section education">
        <button className="edit-btn" onClick={() => this.toggleModal("edu")}>
          edit
        </button>
        {this.inst.map((ins) => {
          return (
            <div key={ins.name} className="institution">
              <h3>{ins.name}</h3>
              <p>{ins.degree}</p>
              <p>
                {ins.startYear} - {ins.endYear}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
