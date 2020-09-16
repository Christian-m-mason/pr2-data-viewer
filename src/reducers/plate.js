import { PLATE_UPLOADED } from "../actions";

const INITIAL_STATE = {
  plateDataObj: null
};

const plateReducer = (state, INITIAL_STATE, action) => {
  switch (action.type) {
    case PLATE_UPLOADED:
      return { ...state, plateDataObj: action.plateDataObj };
    default:
      return state;
  }
};

export default plateReducer;
