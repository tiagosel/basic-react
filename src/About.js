import React from "react";

class About extends React.Component {
  render() {
    return <div>About Page - {this.props.match.params.minhaVariavel}</div>;
  }
}

export default About;
