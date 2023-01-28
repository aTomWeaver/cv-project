import { Component } from "react";

class Education extends Component {
  constructor() {
    super();
  }
  render() {
    return (
    <div>
        <h3>{this.props.institution}h1</h3>
        <p>{this.props.degree}first p</p>
        <p>{this.props.startYear}-{this.props.endYear}second p</p>
    </div>
    );
  }
}

export default Education