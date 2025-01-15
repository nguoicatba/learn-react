import React from "react";
import Userinfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Userinfor></Userinfor>
        <DisplayInfor name="trung" age="18"></DisplayInfor>
        <hr></hr>
        <DisplayInfor name="nam" age="18"></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
