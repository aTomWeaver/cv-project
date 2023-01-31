import { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      cache: { name: "", degree: "", startYear: "", endYear: "" },
      institutions: [
        {
          name: "University of Bongus, Jelly Campus",
          degree: "B.A. in Wigging",
          startYear: "2011",
          endYear: "2015",
        },
        {
          name: "University of Michigan",
          degree: "B.A. in Scientology",
          startYear: "2016",
          endYear: "2019",
        },
      ],
    };
  }
  render() {
    const institutions = this.state.institutions;

    return (
      <div>
        {institutions.map((ins) => {
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
