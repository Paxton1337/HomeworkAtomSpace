import React from "react";

class SuperButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    console.log("constr");
  }

  componentDidUpdate() {
    console.log("didUpdate");
  }

  componentWillMount() {
    console.log("willMount");
  }

  componentDidMount() {
    console.log("didMount");
  }
  render() {
    console.log("render");

    return (
      <button onClick={() => this.setState({ liked: true })}>
        SuperButton
      </button>
    );
  }
}

export default SuperButton;
