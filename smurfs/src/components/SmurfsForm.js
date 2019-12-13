import React from "react";
import { useInput } from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addSmurf } from "../actions/smurfsActions";

const SmurfForm = () => {
  const [smurfName, setSmurfName, handleSmurfName] = useInput("");
  const [age, setAge, handleAge] = useInput("");
  const [height, setHeight, handleHeight] = useInput("");

  const resetValues = e => {
    setSmurfName("");
    setAge("");
    setHeight("");
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSmurf({ smurfName, age, height }));
    resetValues();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          value={smurfName}
          onChange={e => handleSmurfName(e.target.value)}
        />

        <input
          id="age"
          name="age"
          placeholder="Age"
          type="text"
          value={age}
          onChange={e => handleAge(e.target.value)}
        />

        <input
          id="height"
          name="height"
          placeholder="Height in cm: "
          type="text"
          value={height}
          onChange={e => handleHeight(e.target.value)}
        />
        <button type="submit">Join the Village!</button>
      </form>
    </>
  );
};

// export default SmurfForm;

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
