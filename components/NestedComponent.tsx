import React, { Fragment } from 'react';

const allNames = ["Dmitry", "Andrew", "Michael"];

export default function NestedComponent() {
  return (
    <Fragment>
      <div>That's nested component</div>
      <Greeter name={"Oleg"} />
      <Greeter2 name={"Oleg"} />
      { allNames.map((name) => (
        <Greeter name={name} />
      )) }
    </Fragment>
  );
}

type GreeterProps = {
  name: string
}

function Greeter(input : GreeterProps) {
  return (
    <div>First greeting: {input.name}</div>
  );
}

function Greeter2({name} : GreeterProps) {
  return (
    <div>Second greeting: {name}</div>
  )
}