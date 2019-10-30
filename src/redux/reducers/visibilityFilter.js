import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const initialiState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialiState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
