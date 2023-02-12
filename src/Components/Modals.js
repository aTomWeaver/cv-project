import React from "react";

class BasicInfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = props.toggle;
    this.handleChange = props.handleChange;
    this.handleSubmit = props.handleSubmit;
  }

  render() {
    return (
      <form id="basic-info-add" className="basic-info-modal" style={{ display: "none" }}>
        <h3>Add Basic Info</h3>

        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={this.handleChange} />

        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="text" onChange={this.handleChange} />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="text" onChange={this.handleChange} />

        <label htmlFor="address">Address</label>
        <input id="address" type="text" onChange={this.handleChange} />

        <label htmlFor="imgUrl">Image URL</label>
        <input id="imgUrl" type="text" onChange={this.handleChange} />

        <div className="btns">
          <button
            type="button"
            onClick={() => {
              this.handleSubmit();
              document.getElementById("basic-info-add").reset();
            }}
          >
            Add Basic Info
          </button>
          <button type="button" onClick={this.toggle}>
            Close
          </button>
        </div>
      </form>
    );
  }
}

class EduModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = props.toggle;
    this.handleChange = props.handleChange;
    this.handleSubmit = props.handleSubmit;
  }

  render() {
    return (
      <form id="edu-add" className="edu-modal" style={{ display: "none" }}>
        <h3>Add Education</h3>

        <label htmlFor="instName">School</label>
        <input id="instName" type="text" onChange={this.handleChange} />

        <label htmlFor="degree">Degree</label>
        <input id="degree" type="text" onChange={this.handleChange} />

        <label htmlFor="startYear">Start Year</label>
        <input id="startYear" type="text" onChange={this.handleChange} />

        <label htmlFor="endYear">End Year</label>
        <input id="endYear" type="text" onChange={this.handleChange} />
        <div className="btns">
          <button
            type="button"
            onClick={() => {
              this.handleSubmit();
              document.getElementById("edu-add").reset();
            }}
          >
            Add Education
          </button>
          <button type="button" onClick={this.toggle}>
            Close
          </button>
        </div>
      </form>
    );
  }
}

class ExpModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = props.toggle;
    this.handleChange = props.handleChange;
    this.handleSubmit = props.handleSubmit;
  }

  render() {
    return (
      <form id="exp-add" className="exp-modal" style={{ display: "none" }}>
        <h3>Add Experience</h3>

        <label htmlFor="locName">Company</label>
        <input id="locName" type="text" onChange={this.handleChange} />

        <label htmlFor="position">Position</label>
        <input id="position" type="text" onChange={this.handleChange} />

        <label htmlFor="expStartYear">Start Year</label>
        <input id="expStartYear" type="text" onChange={this.handleChange} />

        <label htmlFor="expEndYear">End Year</label>
        <input id="expEndYear" type="text" onChange={this.handleChange} />
        <div className="btns">
          <button
            type="button"
            onClick={() => {
              this.handleSubmit();
              document.getElementById("exp-add").reset();
            }}
          >
            Add Experience
          </button>
          <button type="button" onClick={this.toggle}>
            Close
          </button>
        </div>
      </form>
    );
  }
}

export { BasicInfoModal, EduModal, ExpModal };
