import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Kien",
    adress: "Hoi dan IT",
    age: 26,
  };

  onClick1 = (event) => {
    console.log(event);
    console.log("  My name is ", this.state.name);

    this.setState({
      name: "Eric",
    });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and i from {this.state.adress}
        <button onClick={this.onClick1}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
