import React from "react";

function ChildrenComponent(props) {
  return (
    <div>
      <button onClick={() => props.getGreet("child")}>Click</button>
    </div>
  );
}

export default ChildrenComponent;
