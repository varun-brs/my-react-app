import React from "react";

function PersonList({ person }) {
  return (
    <div>
      <h1>
        {person.name} age is {person.age}
      </h1>
    </div>
  );
}

export default PersonList;
