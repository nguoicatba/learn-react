import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Kien",
    adress: "Hoi dan IT",
    age: 26,
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and i from {this.state.adress}
      </div>
    );
  }
}

export default MyComponent;
