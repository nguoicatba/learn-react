import React from "react";

class Userinfor extends React.Component {
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

  HandleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  HandleOnAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  HandleOnSubmit = (event) => {
    event.preventDefault();
    alert("me");
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and My age is {this.state.age}
        <form onSubmit={(event) => this.HandleOnSubmit(event)}>
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.HandleOnChange(event)}
          ></input>

          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.HandleOnAge(event)}
          ></input>
          <button>Click me</button>
        </form>
      </div>
    );
  }
}

export default Userinfor;
