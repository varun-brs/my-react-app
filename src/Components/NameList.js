import React from "react";
import PersonList from "./PersonList";
function NameList() {
  const personList = [
    { id: 1, name: "varun", age: 25 },
    { id: 2, name: "kumar", age: 26 },
    { id: 3, name: "raju", age: 32 },
    { id: 4, name: "ravi", age: 28 },
  ];
  const PersonList2 = personList.map((person) => (
    <PersonList person={person} />
  ));
  return (
    <div>
      {/* <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1> */}
      {/* {names.map((name) => (
        <h1>{name}</h1>
      ))} */}
      {PersonList2}
    </div>
  );
}

export default NameList;
