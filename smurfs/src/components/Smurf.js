import React from "react";

const Smurf = props => {
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <h4>Age: {props.smurf.age}</h4>
      <h4>Height: {props.smurf.height}</h4>
      <h6>ID: {props.smurf.id}</h6>
    </div>
  );
};

export default Smurf;
