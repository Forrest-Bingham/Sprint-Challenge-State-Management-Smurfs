import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_START,
  ADD_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  name: "",
  age: "",
  height: "",
  id: "",
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: null
      };

    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload
      };

    // case ADD_SMURF_START: {
    //   return {
    //     ...state,
    //     smurfs: action.payload,
    //     isFetching: false,
    //     error: null
    //   };
    // }

    // case ADD_SMURF_FAILURE: {
    //   return {
    //     ...state,
    //     smurfs: [],
    //     isFetching: false,
    //     error: action.payload
    //   };
    // }
    default:
      return state;
  }
};

export default reducer;
