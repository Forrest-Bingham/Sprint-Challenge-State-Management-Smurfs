import React from "react";
import Smurf from "./Smurf";
// import SmurfForm from "./SmurfsForm";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfList = props => {
  return (
    <div>
      <h3>New in town? Let's get ya moved in big fella!</h3>
      {!props.smurfs && !props.isFetching && <p>No Smurfs to be found!</p>}
      {props.isFetching && <p>Calling a town meeting!</p>}
      <button onClick={props.getSmurfs}>Call a Hootenanny</button>
      {props.smurfs &&
        props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
    </div>
  );
};

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

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
