import React from "react";

class EduModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = props.toggle;
    this.handleChange = props.handleChange;
  }
  render() {
    return (
      <form id="edu-add" className="edu-modal" style={{ display: "none" }}>
        <label htmlFor="instName">School</label>
        <input id="instName" type="text" onChange={this.handleChange} />

        <label htmlFor="degree">Degree</label>
        <input id="degree" type="text" onChange={this.handleChange} />

        <label htmlFor="startYear">Start Year</label>
        <input id="startYear" type="text" onChange={this.handleChange} />

        <label htmlFor="endYear">End Year</label>
        <input id="endYear" type="text" onChange={this.handleChange} />

        <button type="button">Add Education</button>
        <button type="button" onClick={() => this.toggle("edu")}>
          Close
        </button>
      </form>
    );
  }
}

export { EduModal };
