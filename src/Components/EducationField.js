import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.inst = props.institutions;
  }
  render() {
    return (
      <div className="section education">
        {this.inst.map((ins) => {
          return (
            <div key={ins.name}>
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
