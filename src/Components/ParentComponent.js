import React, { Component } from "react";
import ChildrenComponent from "./ChildrenComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(child) {
    alert(`Hello ${this.state.parentName} from ${child}`);
  }
  render() {
    return (
      <div>
        <ChildrenComponent getGreet={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
