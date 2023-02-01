import React from "react";

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

export default EduModal;