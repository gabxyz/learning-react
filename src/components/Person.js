import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        Hey, my name is {person.name}, i'm {person.age} years old and i know{" "}
        {person.skill}
      </h2>
    </div>
  );
}

export default Person;
