import React from "react";

// function Greet() {
//     return <h1>Hello World</h1>
// }

const Greet = (props) => {
  return (
    <div>
      <h1>
        name : {props.name} role : {props.role}
      </h1>
    </div>
  );
};

export default Greet;
